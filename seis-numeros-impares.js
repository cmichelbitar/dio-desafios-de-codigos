let lines = gets().split("\n");

let num = parseInt(lines.shift());

let init = num % 2 === 0 ? num + 1 : num;

for (       i = 0;  i < 6; i++    ) {
      
      print (init + "\n");
      init = init + 2;

}