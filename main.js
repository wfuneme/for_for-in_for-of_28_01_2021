// debugger;
// for(let i = 0; i< 10; i++){
//     console.log(i);
// }

// console.time("Tiempo en ejecución del ciclo for");
// debugger;
// for(let i = 1; i< 10; i+=2){
//     console.log("a");
// }
// console.timeEnd("Tiempo en ejecución del ciclo for");


let lista = ["miguel", "andrea", "diana", "adrian", "diego", "julian"];
let edad = [23,16,37,50,37,27];
let info = [];

for (let i = 0; i < lista.length; i++) {
    info[i] = {name : lista[i], edad : edad[i]};
}
console.log(info);

for(let id in lista){
    console.log(`La posicion de la lista es ${id}`);
}
for(let valor of lista){
    console.log(`y su valor es ${valor}`);  
}

