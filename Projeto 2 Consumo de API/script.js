document.addEventListener('DOMContentLoaded', () => {

    //  elementos
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const feedbackMessage = document.getElementById('feedback-message');
    const weatherDisplay = document.getElementById('weather-display');

    // chave api
    const apiKey = '167d79a191b32e6558a9e105e5da713c'; 

    // eventos
    searchButton.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            getWeather(city);
        } else {
            showFeedback('Por favor, digite o nome de uma cidade.', 'error');
        }
    });

    // evento de click no enter
    cityInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });


  async function getWeather(city) {
    // constrói a URL da API com os parâmetros necessários.
    // units=metric para temperatura em Celsius.
    // lang=pt_br para descrições em português.
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    // limpa a tela e mostra a mensagem de carregamento
    clearDisplay();
    showFeedback('Carregando...', 'loading');

    try {
        // faz a requisição à API usando fetch
        const response = await fetch(apiUrl);
        
        // verifica se a resposta da API foi bem-sucedida (ex: 200 OK)
        // se não for, a cidade não foi encontrada ou houve outro erro.
        if (!response.ok) {
            throw new Error('Cidade não encontrada. Verifique o nome e tente novamente.');
        }

        const data = await response.json(); // converte a resposta para o formato JSON
        
        clearFeedback();  // limpa a mensagem de "Carregando" e renderiza os dados
        renderWeatherData(data);

    } catch (error) {
        showFeedback(error.message, 'error'); // em caso de erro (rede, cidade não encontrada, etc.), exibe a mensagem de erro.
    }
}

    function renderWeatherData(data) {  // extrai as informações relevantes do objeto de dados
        const cityName = data.name;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;


        const weatherCard = document.createElement('div'); // cria o elemento do cartão de clima
        weatherCard.className = 'weather-card'; // adiciona a classe CSS

        weatherCard.innerHTML = ` 
            <h2>Clima em: ${cityName}</h2>
            <img src="${iconUrl}" alt="Ícone do tempo para ${description}">
            <p class="weather-description">${description}</p>
            <p>Temperatura: ${temperature.toFixed(1)}°C</p>
            <p>Umidade: ${humidity}%</p>
            <p>Vento: ${windSpeed.toFixed(1)} km/h</p> 
        `; // preenche o cartão com o HTML e os dados da API

        weatherDisplay.appendChild(weatherCard); // adiciona o cartão pronto à área de exibição
    }
    
    function showFeedback(message, type) {
        feedbackMessage.textContent = message;
        feedbackMessage.className = `feedback ${type}`; // aplica a classe de estilo
    }

    function clearFeedback() { // limpa a mensagem de feedback
        feedbackMessage.textContent = '';
        feedbackMessage.className = 'feedback';
    }

    function clearDisplay() { // limpa a área de exibição de resultados e o feedback.
        weatherDisplay.innerHTML = '';
        clearFeedback();
    }
}); 