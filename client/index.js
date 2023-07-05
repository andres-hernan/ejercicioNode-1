const axios = require('axios');

axios.interceptors.request.use((config) => {
    console.log('Enviando request a URL: ', config.url);
    return config;
});

axios.interceptors.response.use(
    (response) => {
        console.log('Llamada con éxito ', response.data);
        return response;
    },
    (error) => {
        console.error('Error al hacer la llamada ', error);
    }
);

async function makeRequest() {
    let payload = {name: "John", email: "john@sarasa.com"};

    const response = await axios.get('http://localhost:8080/user/12345');

    console.log('Datos del server: ', response.data);
}

makeRequest();