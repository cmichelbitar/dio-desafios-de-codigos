// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados

// Complete os espaços em branco para a possível solução dos problemas

let num = parseInt(gets());
let index = 0;

let listas = Array(num);
let listaSet = Array(num);

while (index < num ) {
    listas[index] = gets().split(" ");
    index++;
}

listas.map((i,d) => listaSet[d] = new Set(i));
listaSet.map((i,d) => listas[d] = [...i]);

let newIndex = 0;
while(newIndex < num){
    let listaString = listas[newIndex].sort().join();
    console.log(listaString.replace(/[,]/g, " "));
    newIndex++;
}