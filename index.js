const configExpress = require('./config/configExpress');

const app = configExpress();

app.listen(3000, () => {
    console.log('O servidor rodando na porta 3000')
});
