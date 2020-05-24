// crear los años
const years = document.createElement("option");
const max = new Date().getFullYear();
let min = max - 10;

//recorre el selected con los años
for (let i = max; i > min; i--) {
  let option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  document.querySelector("#year").appendChild(option);
}
//retorna el arreglo de autos
function obtenerAutos() {
  return [
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
}

//datos para la busqueda
let datosBusqueda = {
  marca: "",
  año: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//obteniedo el array de autos en un const
const autos = obtenerAutos();
//Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);
});

//selecionando los elementos del form
const marca = document.getElementById("marca");
marca.addEventListener("input", (e) => {
  //Selecionando el valor del options
  const marcaSel = marca.options[marca.selectedIndex].value;
  datosBusqueda.marca = marcaSel;

  //mandar a llamar filtrar auto
  filtrarAuto();
});

const año = document.getElementById("year");
año.addEventListener("input", (e) => {
  //Selecionando el valor del options
  const añoSel = Number(año.options[año.selectedIndex].value);
  datosBusqueda.año = añoSel;

  //mandar a llamar filtrar auto
  filtrarAuto();
});

const minimo = document.getElementById("minimo");
minimo.addEventListener("input", (e) => {
  //Selecionando el valor del options
  const minimoSel = Number(minimo.options[minimo.selectedIndex].value);
  datosBusqueda.minimo = minimoSel;

  //mandar a llamar filtrar auto
  filtrarAuto();
});
const maximo = document.getElementById("maximo");
maximo.addEventListener("input", (e) => {
  //Selecionando el valor del options
  const maxSel = Number(maximo.options[maximo.selectedIndex].value);
  datosBusqueda.maximo = maxSel;

  //mandar a llamar filtrar auto
  filtrarAuto();
});
const puertas = document.getElementById("puertas");
puertas.addEventListener("input", (e) => {
  //Selecionando el valor del options
  const puerSel = Number(puertas.options[puertas.selectedIndex].value);
  datosBusqueda.puertas = puerSel;

  //mandar a llamar filtrar auto
  filtrarAuto();
});
const transmision = document.getElementById("transmision");
transmision.addEventListener("input", (e) => {
  //Selecionando el valor del options
  const transmisionSel = transmision.options[transmision.selectedIndex].value;
  datosBusqueda.transmision = transmisionSel;

  //mandar a llamar filtrar auto
  filtrarAuto();
});
const color = document.getElementById("color");
color.addEventListener("input", (e) => {
  //Selecionando el valor del options
  const colorSel = color.options[color.selectedIndex].value;
  datosBusqueda.color = colorSel;

  //mandar a llamar filtrar auto
  filtrarAuto();
});

function limpiarHtml() {
  const resultado = document.getElementById("resultado");

  // while(resultado.firstChild){
  //     resultado.removeChild(resultado.firstChild)
  // }
  resultado.innerHTML = "";
}

//pinta el array de autos en el DOM
function mostrarAutos(datos) {
  //donde se imprimira
  const resultado = document.getElementById("resultado");

  //limpiar los resultados anteriores
  limpiarHtml();

  //recorriendo el array
  datos.forEach((element) => {
    const p = document.createElement("p");
    p.innerHTML = `
    ${element.marca} - ${element.year} - ${element.modelo} - Precio: ${element.precio} -  ${element.puertas} Puertas - Color: ${element.color} - Transmision: ${element.transmision}
    `;
    resultado.appendChild(p);
  });
}
//en caso no hay resultado
function noResultado() {
  limpiarHtml();
  const div = document.createElement("div");
  div.classList.add("alerta", "error");
  div.appendChild(document.createTextNode("No hay resultados"));
  const resultado = document.getElementById("resultado");
  resultado.appendChild(div);
}
function filtrarAuto() {
  //Higher Order Function
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarAño)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuerta)
    .filter(filtrarColor);

  if (resultado.length > 0) {
    mostrarAutos(resultado);
  } else {
    //mensaje en caso no exista
    noResultado();
  }
}
function filtrarMarca(auto) {
  //comprobando si existe una marca
  if (datosBusqueda.marca) {
    //comprobar si la marca seleccionanda existe y se retorna el valor
    return auto.marca === datosBusqueda.marca;
  } else {
    //retorna el auto para que no devuelva un arreglo vacio
    return auto;
  }
}
function filtrarAño(auto) {
  if (datosBusqueda.año) {
    return auto.year === datosBusqueda.año;
  } else {
    return auto;
  }
}
function filtrarMinimo(auto) {
  if (datosBusqueda.minimo) {
    return auto.precio >= datosBusqueda.minimo;
  } else {
    return auto;
  }
}
function filtrarMaximo(auto) {
  if (datosBusqueda.maximo) {
    return auto.precio <= datosBusqueda.maximo;
  } else {
    return auto;
  }
}
function filtrarPuerta(auto) {
  if (datosBusqueda.puertas) {
    return auto.puertas === datosBusqueda.puertas;
  } else {
    return auto;
  }
}

function filtrarPuerta(auto) {
  if (datosBusqueda.transmision) {
    return auto.transmision === datosBusqueda.transmision;
  } else {
    return auto;
  }
}
function filtrarColor(auto) {
  if (datosBusqueda.color) {
    return auto.color === datosBusqueda.color;
  } else {
    return auto;
  }
}
