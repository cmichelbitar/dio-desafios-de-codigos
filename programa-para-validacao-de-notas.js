function isValid(value){
    return Boolean(value <= 10 && value >= 0);
}

let getout = false;
let values = [];
let x = 0;

while (!getout) {

  let num = parseFloat(gets());

  if (!isValid(num)) {
    console.log("nota invalida");
    continue;
  }else{
    values.push(num);
  }

  if(values.length >= 2){
    x = (values[0] + values[1]) / 2;
    console.log("media = " + x.toFixed(2));
  }else{
    continue;
  }

  let response = null;
  do {
    console.log("novo calculo (1-sim 2-nao)");
    response = gets();
    switch (response) {
      case "1":
        values = [];
        continue;
      case "2":
        getout = true;
        break;
    }
  } while (response === null || response != 1 && response != 2);
}