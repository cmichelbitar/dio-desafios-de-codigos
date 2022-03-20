let lines = gets().split('\n');


let nota = parseInt(lines.shift());

if (nota === 0 || nota == 0)
    print("E");
if (nota <= 35 && nota >= 1)
    print("D");
if (nota <= 60 && nota >= 36)
    print("C");
if (nota <= 85 && nota >= 61)
    print("B");
if (nota <= 100 && nota >= 86)
    print("A");

//if( nota === 0 )
//  print("E");
//
//Continue o seu código aqui