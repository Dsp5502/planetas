console.warn('Delcarar variables');
let nombrePlanetas = ['Tierra', 'marte'],
  distancia = [5, 3, '67'];

const tamaño = [10, 20, 30];

console.log({ nombrePlanetas });
console.log({ distancia });
console.log({ tamaño });

console.warn('Ciclo while');
let i = 0;
while (i <= nombrePlanetas.length - 1) {
  console.log({ i });
  console.log(nombrePlanetas[i]);
  i += 1;
}

console.warn('Ciclo for');
for (let i = 0; i < nombrePlanetas.length; i++) {
  console.log(nombrePlanetas[i]);
}

console.warn('Ciclo for In');
for (const key in nombrePlanetas) {
  console.log(nombrePlanetas[key]);
}
console.warn('Ciclo for of');
for (const planeta of nombrePlanetas) {
  console.log(planeta);
}

console.warn('Ciclo for in Distancias ==');
for (const key in distancia) {
  distancia[key] == '5'
    ? console.log('Se encontró la Distancia')
    : console.log('No se encontró la distancia');
}

console.warn('Ciclo for in Distancias ===');
for (const key in distancia) {
  distancia[key] === '5'
    ? console.log('Se encontró la Distancia')
    : console.log('No se encontró la distancia');
}

console.warn('forEach');
nombrePlanetas.push('Jupiter');
nombrePlanetas.forEach((value, index) => {
  console.log(`planeta ${index}, ${value} `);
});

console.warn('Map');
let resultadoMap = nombrePlanetas.map((planetas, index) => {
  return `El planeta ${planetas} tiene el tamaño de :${tamaño[index]}`;
});
console.log(resultadoMap);
