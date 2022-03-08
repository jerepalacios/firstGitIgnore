let express = require(`express`); // requiero express.
let app = express(); // Guardo en app las propiedades y metodos de la ejecucion express.
const path = require(`path`);
const PORT = 3000


app.use(express.static(`images`))


/* routing */
app.get(`/`, function(req, res,) {
    res.sendFile(path.join(__dirname, `/views/home.html`))
}) //HOMEPAGE

app.get(`/contact`, function(req, res,) {
    res.sendFile(path.join(__dirname, `/views/contact.html`))
}) //CONTACT

app.get(`/about`, function(req, res,) {
    res.sendFile(path.join(__dirname, `/views/about.html`))
}) //ABOUT


app.listen(PORT, function() {
    console.log(`
    Servidor escuchando en el puerto ${PORT}
    http://localhost:${PORT}
`)
})


