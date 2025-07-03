document.addEventListener('DOMContentLoaded', () => {
    // seleciona os elementos do HTML
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

    let expenses = getExpensesFromLocalStorage(); // busca as despesas salvas ou retorna um array vazio

    function getExpensesFromLocalStorage() {
        const expensesJSON = localStorage.getItem('expenses');
        return expensesJSON ? JSON.parse(expensesJSON) : []; // se houver dados, converte de string JSON para objeto. senão, retorna um array vazio.
    }

    function saveExpensesToLocalStorage(expensesArray) {
        localStorage.setItem('expenses', JSON.stringify(expensesArray)); // converte o array de objetos para uma string no formato JSON
    }

    function formatCurrency(amount) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(amount);
    }

    function formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

    function renderExpenses() {
        expensesList.innerHTML = ''; // limpa a lista atual para evitar duplicatas

        const category = filterCategory.value; // aplica os filtros antes de renderizar
        const month = filterMonth.value; // formato 'AAAA-MM'

        let filteredExpenses = expenses;

        if (category !== 'todos') {
            filteredExpenses = filteredExpenses.filter(expense => expense.category === category);
        }

        if (month) {
            filteredExpenses = filteredExpenses.filter(expense => expense.date.startsWith(month));
        }

        if (filteredExpenses.length === 0) { // se não houver despesas após filtrar, exibe uma mensagem
            expensesList.innerHTML = '<p>Nenhuma despesa encontrada para os filtros selecionados.</p>';
        } else {
            filteredExpenses.forEach(expense => { // itera sobre as despesas filtradas e cria os cartões
                const card = document.createElement('div');
                card.className = `expense-card ${expense.category}`; // adiciona a classe da categoria para a cor
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

    function updateTotal() {
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0); // soma os valores de todas as despesas no array expenses original
        totalAmountSpan.textContent = formatCurrency(total);
    }

    function resetForm() {
        expenseForm.reset(); // limpa todos os campos
        expenseIdInput.value = ''; // garante que o ID oculto está vazio
        submitButton.textContent = 'Adicionar Despesa'; // texto do botão volta ao original
        submitButton.classList.remove('editing'); // remove a classe de estilo de edição
    }

    function handleFormSubmit(event) {
        event.preventDefault(); // impede o comportamento padrão do formulário, que é recarregar a página

        if (!descriptionInput.value || !amountInput.value || !dateInput.value || !categoryInput.value) { // validação simples
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const id = expenseIdInput.value;    // pega o ID do campo oculto

        const newExpense = {
            id: id ? id : new Date().getTime().toString(), // se não houver ID, cria um novo com base no tempo atual. Senão, usa o ID existente.
            description: descriptionInput.value,
            amount: parseFloat(amountInput.value), // converte o valor para número
            date: dateInput.value,
            category: categoryInput.value
        };

        if (id) {
            const index = expenses.findIndex(expense => expense.id === id); // edição, encontra o índice da despesa e a substitui
            if (index !== -1) {
                expenses[index] = newExpense;
            }
        } else {
            expenses.unshift(newExpense); // adição, adiciona a nova despesa ao início do array
        }

        saveExpensesToLocalStorage(expenses);
        renderExpenses();
        resetForm();
    }

    // funções no escopo global para serem chamadas pelo onclick nos botões
    window.editExpense = function(id) {
        const expenseToEdit = expenses.find(expense => expense.id === id);
        if (expenseToEdit) {
            expenseIdInput.value = expenseToEdit.id;  // preenche os campos do formulário com os dados da despesa
            descriptionInput.value = expenseToEdit.description;
            amountInput.value = expenseToEdit.amount;
            dateInput.value = expenseToEdit.date;
            categoryInput.value = expenseToEdit.category;

            submitButton.textContent = 'Atualizar Despesa'; // altera o botão para o modo de edição
            submitButton.classList.add('editing');

            window.scrollTo(0, 0); // rola a página para o topo, para o formulário ficar visível
        }
    }

    window.deleteExpense = function(id) {
        if (confirm('Tem certeza de que deseja excluir esta despesa?')) {
            expenses = expenses.filter(expense => expense.id !== id);   // filtra o array, mantendo apenas as despesas com ID diferente do que foi passado
            saveExpensesToLocalStorage(expenses);
            renderExpenses(); // renderiza a lista e o total novamente
        }
    }

    // adiciona escutadores de eventos aos elementos para responder às ações do usuário
    expenseForm.addEventListener('submit', handleFormSubmit);  // escutador para o envio do formulário
    filterCategory.addEventListener('change', renderExpenses);  // escutadores para os filtros, que re-renderizam a lista quando seus valores mudam
    filterMonth.addEventListener('change', renderExpenses);

    // Chama a função de renderização pela primeira vez para exibir as despesas salvas
    renderExpenses();
});
