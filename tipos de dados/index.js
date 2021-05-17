//strings

var string_1 = "eu sou uma string com aspas dupla"
var string_2 = 'eu sou uma string com aspas simples'
var string_3 = `eu sou uma string com crases`
var string_4 = "eu tenho uma palavra com 'apas simples' dentro da frase"
var string_5 = 'eu tenho uma palavra com "apas duplas" dentro da frase'
var string_6 = `a soma de 2 + 2 é igual a ${2+2}. Eu tenho uma expressão dentro da frase`


//numeros

var integar = 10
var float = 10.5
var nan = NaN
var infinity = Infinity

//boleans

var is_true = true
var is_false = false


//undefined e null

var is_undefined = undefined
var is_null = null

console.log(is_undefined === is_null)
//isto retorna falso


//object

var is_object = {
    name: 'Adonias Vitorio',
    Idade: 26,
    falar: function() {
        console.log('bla bla bla')
    }
}
console.log(is_object)

//array

is_array = ['Adonias', 'Vitorio']
console.log(is_array)