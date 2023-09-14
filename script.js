let resetEl = document.getElementById("reset");

let stopEl = document.getElementById("stop");


let startEl = document.getElementById("start");



resetEl.addEventListener("click", reset);

stopEl.addEventListener("click", stop);

startEl.addEventListener("click", start);


let hor = 0;
console.log("🚀 ~ file: script.js:18 ~ hor:", hor)
let min = 0;
console.log("🚀 ~ file: script.js:20 ~ min:", min)
let sec = 0;

console.log("🚀 ~ file: script.js:19 ~ sec:", sec)
console.log("🚀 ~ file: script.js:19 ~ min:", min)
console.log("🚀 ~ file: script.js:19 ~ hor:", hor)



function reset() {
   console.log("ici REST")
}

function stop() {
   console.log("ici STOP")
   
   return
}

function topChrono() {
   console.log("ici START")
   sec++;
   console.log("🚀 ~ file: script.js:18 ~ hor:", hor)
   console.log("🚀 ~ file: script.js:20 ~ min:", min)
   console.log("🚀 ~ file: script.js:37 ~ start ~ sec:", sec)
   if (sec == 60) {
      min++;
      sec=0;
   }

   if (min == 60) {
      console.log("🚀 ~ file: script.js:44 ~ start ~ min:", min)
      hor++;
      min=0;
      sec=0;
   }

   if (hor == 24 && min==59 && sec==59) {
      hor=0;
      min=0;
      sec=0;
   }

   setTimeout(start,1000)
}




//
//switch (expression) {
//   case valeur1:
//     // Instructions à exécuter lorsque le résultat
//     // de l'expression correspond à valeur1
//     instructions1;
//     [break;]
//   case valeur2:
//     // Instructions à exécuter lorsque le résultat
//     // de l'expression correspond à valeur2
//     instructions 2;
//     [break;]
//   …
//   case valeurN:
//     // Instructions à exécuter lorsque le résultat
//     // de l'expression à valeurN
//     instructionsN;
//     [break;]
//   [default:
//     // Instructions à exécuter lorsqu'aucune des valeurs
//     // ne correspond
//     instructions_def;
//     [break;]]
// }
// 


function topChrono(params) {

}
