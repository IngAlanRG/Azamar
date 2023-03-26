
/**
 * En este practica es muy simple lo que se tiene que realizar es indicar que tipo de 
 * dato es el el que se encuentra en la variable y pues bueno eso es lo que estamos religando 
 * generamos un arreglo que indique con el typeof que es lo que se encuentra en esa variable 
 * esto lo guardamos en un arreglo por una sencilla razón para que no estemos imprimiendo en consola
 * cada dato en consoló a si nos evitamos muchos console log  
 */
recorrido = [
typeof( instance = undefined),
typeof( instance = true),
typeof( instance = 15),
typeof( instance = "Hola"),
typeof( instance = BigInt(5)),
typeof( instance = require("./instanciajs.js"))
];
/**
 * Este es el método que utilizamos para recorrer el arreglo 
 * ademas estamos y así poder imprimir en consola el método se llama map
 * y es un callback que tiene como parámetro una function 
 * nosotros colocamos una función arrow function o función de tipo flecha para que se vea más pro 
 * dentro de esa función tenemos un parámetro que es donde se aloja los valores del arreglo y posterior 
 * mente los imprimimos en consola
 */
recorrido.map((hola) => {
    console.log(hola)
})