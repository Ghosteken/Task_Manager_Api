const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Manager API',
            version: '1.0.0',
            description: 'API documentation for the Task Manager application',
        },
        servers: [
            {
                url: 'http://localhost:8000', // Change this to your server URL
                description: 'Development server',
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to the files containing your route definitions
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};
