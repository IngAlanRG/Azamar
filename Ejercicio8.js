//Crear un callback 

//Un callback no es un a palabra clave sino un estructura pre definida 
//esta estructura es una función que tiene como parámetro otra función 
//A hora bien en este ejemplo utilizare Arrow Function para que se vea mas pro😎

/*Declaramos nuestra función que contiene 3 parámetro o bueno los que requiera 
solo que recuerda que un parámetro va ser utilizado para el callback
*/
/*
Recuerda que un callback recibe los parámetros que deseas y agrégale el que va estar destinado para
la función, un callback se sigue implementando principal mente cuando queremos 
crear el método listen en express bueno aunque tiene muchos beneficios un callback no lo 
es todo y tiene sus limites ya que si lo implementamos para peticiones como la confección a una base de datos 
esto puede ser un martirio si utilizamos callbacks a esto se le conoce cmo
callback Hell o el infierno del callback para eses peticiones que se requiere de una exigencia
mayor es mejor usar ASYNC AWAIT 
*/
const holaSoyCallback = (num1,num2,callback) => {
    let result = num1 +num2
    callback(result);
}


/*invocamos al callback le pasamos los parámetros de los números que deseamos sumar y 
una función como parámetro que muestra el resultado 
*/
holaSoyCallback( 1505552222368133, 6895, (callback) => {console.log(callback)})
