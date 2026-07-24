//console.log(Math.random());
//console.log (Math.floor(Math.random() *10 ))
const prompt = require("prompt-sync")()
const alvo = Math.floor(Math.random() * 10)
let palpite = 0

function dica(palpite, alvo){
if (palpite == alvo) {
return "acertou"
}
 else if (palpite > alvo) {
  return "o numero é menor que o palpite"
 }

}
while (palpite != alvo){
    palpite = prompt("digite seu palpite! ")
    console.log (dica(palpite, alvo));


}


