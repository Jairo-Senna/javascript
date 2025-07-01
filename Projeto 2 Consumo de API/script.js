document.addEventListener('DOMContentLoaded', () => {

    // --- SELETORES DE ELEMENTOS ---
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const feedbackMessage = document.getElementById('feedback-message');
    const weatherDisplay = document.getElementById('weather-display');

    // --- CHAVE DA API ---
    // ⚠️ SUBSTITUA 'SUA_CHAVE_API_AQUI' PELA SUA CHAVE REAL DA OPENWEATHERMAP
    const apiKey = '167d79a191b32e6558a9e105e5da713c'; 

    // --- EVENT LISTENERS ---
    searchButton.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            getWeather(city);
        } else {
            showFeedback('Por favor, digite o nome de uma cidade.', 'error');
        }
    });

    // Permite buscar pressionando a tecla Enter no campo de input
    cityInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });

    // --- FUNÇÕES ---

    /**
     * @description Função principal para buscar os dados do clima. É uma função assíncrona.
     * @param {string} city - O nome da cidade para a qual buscar o clima.
     */
    async function getWeather(city) {
        // Constrói a URL da API com os parâmetros necessários.
        // `units=metric` para temperatura em Celsius.
        // `lang=pt_br` para descrições em português.
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

        // Limpa a tela e mostra a mensagem de carregamento
        clearDisplay();
        showFeedback('Carregando...', 'loading');

        try {
            // Faz a requisição à API usando fetch
            const response = await fetch(apiUrl);
            
            // Verifica se a resposta da API foi bem-sucedida (ex: 200 OK)
            // Se não for, a cidade não foi encontrada ou houve outro erro.
            if (!response.ok) {
                throw new Error('Cidade não encontrada. Verifique o nome e tente novamente.');
            }

            // Converte a resposta para o formato JSON
            const data = await response.json();
            
            // Limpa a mensagem de "Carregando" e renderiza os dados
            clearFeedback();
            renderWeatherData(data);

        } catch (error) {
            // Em caso de erro (rede, cidade não encontrada, etc.), exibe a mensagem de erro.
            showFeedback(error.message, 'error');
        }
    }

    /**
     * @description Renderiza os dados do clima em um cartão na tela.
     * @param {object} data - O objeto JSON retornado pela API.
     */
    function renderWeatherData(data) {
        // Extrai as informações relevantes do objeto de dados
        const cityName = data.name;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Cria o elemento do cartão de clima
        const weatherCard = document.createElement('div');
        weatherCard.className = 'weather-card'; // Adiciona a classe CSS

        // Preenche o cartão com o HTML e os dados da API
        weatherCard.innerHTML = `
            <h2>Clima em: ${cityName}</h2>
            <img src="${iconUrl}" alt="Ícone do tempo para ${description}">
            <p class="weather-description">${description}</p>
            <p>Temperatura: ${temperature.toFixed(1)}°C</p>
            <p>Umidade: ${humidity}%</p>
            <p>Vento: ${windSpeed.toFixed(1)} km/h</p>
        `;

        // Adiciona o cartão pronto à área de exibição
        weatherDisplay.appendChild(weatherCard);
    }
    
    /**
     * @description Mostra uma mensagem de feedback para o usuário.
     * @param {string} message - A mensagem a ser exibida.
     * @param {string} type - O tipo de mensagem ('loading' ou 'error').
     */
    function showFeedback(message, type) {
        feedbackMessage.textContent = message;
        feedbackMessage.className = `feedback ${type}`; // Aplica a classe de estilo
    }

    /**
     * @description Limpa a mensagem de feedback.
     */
    function clearFeedback() {
        feedbackMessage.textContent = '';
        feedbackMessage.className = 'feedback';
    }

    /**
     * @description Limpa a área de exibição de resultados e o feedback.
     */
    function clearDisplay() {
        weatherDisplay.innerHTML = '';
        clearFeedback();
    }
});