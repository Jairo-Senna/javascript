// Aguarda o DOM (a estrutura da página) ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- SELETORES DE ELEMENTOS DO DOM ---
    // Seleciona os elementos do HTML com os quais vamos interagir
    const expenseForm = document.getElementById('expense-form');
    const expenseIdInput = document.getElementById('expense-id');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const dateInput = document.getElementById('date');
    const categoryInput = document.getElementById('category');
    const submitButton = document.getElementById('submit-button');
    const expensesList = document.getElementById('expenses-list');
    const totalAmountSpan = document.getElementById('total-amount');
    const filterCategory = document.getElementById('filter-category');
    const filterMonth = document.getElementById('filter-month');

    // --- ESTADO DA APLICAÇÃO ---
    // A função 'getExpensesFromLocalStorage' busca as despesas salvas ou retorna um array vazio
    let expenses = getExpensesFromLocalStorage();

    // --- FUNÇÕES PRINCIPAIS ---

    /**
     * @description Busca as despesas do LocalStorage.
     * @returns {Array} Um array de objetos de despesa.
     */
    function getExpensesFromLocalStorage() {
        const expensesJSON = localStorage.getItem('expenses');
        // Se houver dados, converte de string JSON para objeto. Senão, retorna um array vazio.
        return expensesJSON ? JSON.parse(expensesJSON) : [];
    }

    /**
     * @description Salva o array de despesas no LocalStorage.
     * @param {Array} expensesArray - O array de despesas a ser salvo.
     */
    function saveExpensesToLocalStorage(expensesArray) {
        // Converte o array de objetos para uma string no formato JSON
        localStorage.setItem('expenses', JSON.stringify(expensesArray));
    }

    /**
     * @description Formata um número para o padrão de moeda brasileira (BRL).
     * @param {number} amount - O valor numérico a ser formatado.
     * @returns {string} O valor formatado como moeda.
     */
    function formatCurrency(amount) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(amount);
    }

    /**
     * @description Formata uma data no formato 'AAAA-MM-DD' para 'DD/MM/AAAA'.
     * @param {string} dateString - A data no formato de input.
     * @returns {string} A data formatada.
     */
    function formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

    /**
     * @description Renderiza (exibe) a lista de despesas na página.
     */
    function renderExpenses() {
        // Limpa a lista atual para evitar duplicatas
        expensesList.innerHTML = '';

        // Aplica os filtros antes de renderizar
        const category = filterCategory.value;
        const month = filterMonth.value; // Formato 'AAAA-MM'

        let filteredExpenses = expenses;

        if (category !== 'todos') {
            filteredExpenses = filteredExpenses.filter(expense => expense.category === category);
        }

        if (month) {
            filteredExpenses = filteredExpenses.filter(expense => expense.date.startsWith(month));
        }

        // Se não houver despesas após filtrar, exibe uma mensagem
        if (filteredExpenses.length === 0) {
            expensesList.innerHTML = '<p>Nenhuma despesa encontrada para os filtros selecionados.</p>';
        } else {
             // Itera sobre as despesas filtradas e cria os cartões
            filteredExpenses.forEach(expense => {
                const card = document.createElement('div');
                card.className = `expense-card ${expense.category}`; // Adiciona a classe da categoria para a cor
                card.innerHTML = `
                    <h3>${expense.description}</h3>
                    <p>${formatCurrency(expense.amount)}</p>
                    <p>Data: ${formatDate(expense.date)}</p>
                    <p>Categoria: ${expense.category}</p>
                    <div class="card-actions">
                        <button class="btn-edit" onclick="editExpense('${expense.id}')">Editar</button>
                        <button class="btn-delete" onclick="deleteExpense('${expense.id}')">Excluir</button>
                    </div>
                `;
                expensesList.appendChild(card);
            });
        }
       
        updateTotal();
    }
    
    /**
     * @description Calcula e atualiza o valor total das despesas exibidas.
     */
    function updateTotal() {
        // Soma os valores de todas as despesas no array 'expenses' original (não o filtrado)
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        totalAmountSpan.textContent = formatCurrency(total);
    }

    /**
     * @description Limpa os campos do formulário e o redefine para o modo de adição.
     */
    function resetForm() {
        expenseForm.reset(); // Limpa todos os campos
        expenseIdInput.value = ''; // Garante que o ID oculto está vazio
        submitButton.textContent = 'Adicionar Despesa'; // Texto do botão volta ao original
        submitButton.classList.remove('editing'); // Remove a classe de estilo de edição
    }

    /**
     * @description Manipula o envio do formulário para adicionar ou atualizar uma despesa.
     * @param {Event} event - O objeto de evento do formulário.
     */
    function handleFormSubmit(event) {
        // Impede o comportamento padrão do formulário, que é recarregar a página
        event.preventDefault();

        // Validação simples
        if (!descriptionInput.value || !amountInput.value || !dateInput.value || !categoryInput.value) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Pega o ID do campo oculto
        const id = expenseIdInput.value;
        
        const newExpense = {
            // Se não houver ID, cria um novo com base no tempo atual. Senão, usa o ID existente.
            id: id ? id : new Date().getTime().toString(),
            description: descriptionInput.value,
            amount: parseFloat(amountInput.value), // Converte o valor para número
            date: dateInput.value,
            category: categoryInput.value
        };

        if (id) {
            // MODO DE EDIÇÃO: Encontra o índice da despesa e a substitui
            const index = expenses.findIndex(expense => expense.id === id);
            if (index !== -1) {
                expenses[index] = newExpense;
            }
        } else {
            // MODO DE ADIÇÃO: Adiciona a nova despesa ao início do array
            expenses.unshift(newExpense);
        }

        saveExpensesToLocalStorage(expenses);
        renderExpenses();
        resetForm();
    }

    // --- FUNÇÕES GLOBAIS (acessíveis pelo HTML via onclick) ---
    // Essas funções precisam estar no escopo global para serem chamadas pelo 'onclick' nos botões

    /**
     * @description Prepara o formulário para editar uma despesa existente.
     * @param {string} id - O ID da despesa a ser editada.
     */
    window.editExpense = function(id) {
        const expenseToEdit = expenses.find(expense => expense.id === id);
        if (expenseToEdit) {
            // Preenche os campos do formulário com os dados da despesa
            expenseIdInput.value = expenseToEdit.id;
            descriptionInput.value = expenseToEdit.description;
            amountInput.value = expenseToEdit.amount;
            dateInput.value = expenseToEdit.date;
            categoryInput.value = expenseToEdit.category;

            // Altera o botão para o modo de edição
            submitButton.textContent = 'Atualizar Despesa';
            submitButton.classList.add('editing');

            // Rola a página para o topo, para o formulário ficar visível
            window.scrollTo(0, 0);
        }
    }

    /**
     * @description Exclui uma despesa.
     * @param {string} id - O ID da despesa a ser excluída.
     */
    window.deleteExpense = function(id) {
        if (confirm('Tem certeza de que deseja excluir esta despesa?')) {
            // Filtra o array, mantendo apenas as despesas com ID diferente do que foi passado
            expenses = expenses.filter(expense => expense.id !== id);
            saveExpensesToLocalStorage(expenses);
            renderExpenses(); // Re-renderiza a lista e o total
        }
    }

    // --- EVENT LISTENERS ---
    // Adiciona "escutadores" de eventos aos elementos para responder às ações do usuário

    // "Escutador" para o envio do formulário
    expenseForm.addEventListener('submit', handleFormSubmit);
    // "Escutadores" para os filtros, que re-renderizam a lista quando seus valores mudam
    filterCategory.addEventListener('change', renderExpenses);
    filterMonth.addEventListener('change', renderExpenses);
    
    // --- INICIALIZAÇÃO ---
    // Chama a função de renderização pela primeira vez para exibir as despesas salvas
    renderExpenses();
});