const express = require('express');
const { PORT } = require('./config/serverConfig');
const routes = require('./routes/index');

const startServer = () => {
    
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use('/api', routes);

    app.listen(PORT, () => {
        console.log(`server is running at ${PORT}`);
    });

}

startServer();
