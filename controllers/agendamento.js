module.export = app => {

app.get('/agendamento', (req, resp) => {
    resp.send('Servidor Ok')
});
};