# ejercicio6
bootcamp (trabajando con listas)

const compra = ["Leche", "Huevos", "Cafe", "Azucar", "Galletitas"]

compra.push("Aceite de Girasol")
compra.pop()

const peliculas = [
    {
        titulo: "Titanic",
        director: " James Cameron",
        fecha: new Date(1998, 2, 05)
    },
    {
        titulo: "Matilda",
        director: "Danny DeVito",
        fecha: new Date(1997, 1, 09)
    },
    {
        titulo: "Charlie y la fábrica de chocolate",
        director: "Tim Burton",
        fecha: new Date(2005, 6, 04)
    }
]

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

const directores = peliculas.map(pelicula => {
    return pelicula.director
})
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
const directores_titulos = directores.concat(titulos)
const directores_titulos_prop = [...directores, ...titulos]
