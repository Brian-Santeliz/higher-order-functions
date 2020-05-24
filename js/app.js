const autos = [
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2012,
    precio: 30000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2015,
    precio: 20000,
    puertas: 2,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A6",
    year: 2010,
    precio: 35000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2016,
    precio: 70000,
    puertas: 4,
    color: "Rojo",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2015,
    precio: 25000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Chevrolet",
    modelo: "Camaro",
    year: 2018,
    precio: 60000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2019,
    precio: 80000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2017,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A3",
    year: 2017,
    precio: 55000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2012,
    precio: 25000,
    puertas: 2,
    color: "Rojo",
    transmision: "manual",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 45000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2019,
    precio: 1210,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Ford",
    modelo: "Mustang",
    year: 2017,
    precio: 60000,
    puertas: 2,
    color: "Negro",
    transmision: "manual",
  },
  {
    marca: "Dodge",
    modelo: "Challenger",
    year: 2015,
    precio: 35000,
    puertas: 2,
    color: "Azul",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 3",
    year: 2018,
    precio: 50000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "BMW",
    modelo: "Serie 5",
    year: 2017,
    precio: 80000,
    puertas: 4,
    color: "Negro",
    transmision: "automatico",
  },
  {
    marca: "Mercedes Benz",
    modelo: "Clase C",
    year: 2018,
    precio: 40000,
    puertas: 4,
    color: "Blanco",
    transmision: "automatico",
  },
  {
    marca: "Audi",
    modelo: "A4",
    year: 2016,
    precio: 30000,
    puertas: 4,
    color: "Azul",
    transmision: "automatico",
  },
];

// forEach
// autos.forEach(elementos => {
// 	if(elementos.color === 'Rojo'){
// 		resultado.push(elementos)
// 	}
// });

// const ejemplo = autos.forEach(e=>{{
// 	return e
// }})
// console.log(ejemplo)

// map
// const ejemplo2 = autos.map(auto=>auto.marca)
// console.log(ejemplo2)

// filter
// const nuevoArreglo = autos.filter(auto=>auto.color.indexOf('Azul')!== -1);
// const precioAutos = autos.filter(auto=>auto.transmision.indexOf('automatico')!== -1)
// console.table(precioAutos)
//  const precioAutos = autos.filter(auto=>auto.marca.indexOf('BMW')!== -1)
// const precioAutos = autos.filter(auto=>auto.marca !=='BMW')
// let precioAutos = autos.filter(auto=>auto.color ==='Rojo')
// let añoIngresado =  prompt('selecciona una año mayor')
// let añoIngresado =  prompt('selecciona una puertas')
// añoIngresado = Number(añoIngresado)
// let marcaAuto = prompt('ingresa la marca')
// let precioAutos = autos.filter(autos=>autos.marca.indexOf(añoIngresado)!== -1)
//  let precioAutos = autos.filter(autos=>autos.year > añoIngresado)
//  let precioAutos = autos.filter(autos=>autos.puertas > añoIngresado)
//  let precioAutos = autos.filter(autos=>autos.year > añoIngresado && autos.year <= 2019)
//  let precioAutos = autos.filter(autos=>autos.year === añoIngresado && autos.marca === marcaAuto)

// if(precioAutos.length > 0){
// 	console.table(precioAutos)
// }else{
// 	console.table('no tenemes coches con esa especificaciones')
// }

// find
/**
 la diferencia entre FIND y FILTER es que find solo encuentra el PRIMER
 elemento con la condición. 
 */

//  let colorAuto = autos.find(auto=>auto.color === 'Rojo')
// console.table(colorAuto)

// reduce
// let suma = autos.reduce((total,auto)=>total + auto.precio, 0);
// const numero =[1,2,3,4]
// const suma = numero.reduce((total, numero)=>total + numero,0)
// console.log(suma)

// some
// const verificar = autos.some((auto)=>auto.color === 'azul')

console.log(verificar)