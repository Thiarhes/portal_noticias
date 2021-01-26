const app = require('./config/server');

const routeNoticias = require('./app/routes/noticias')(app);

const routeHome = require('./app/routes/home')(app);

const routeFormIncNotic = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, () => console.log('Server listening on port 3000'));