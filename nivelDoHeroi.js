let xp = -10
let nivel
let nomeHeroi = "Nyou"

if (xp > 0 && xp < 1000) {
    nivel = "Bronze"
}
else if(xp >= 1000 && xp < 2000){
    nivel = "Ferro"
}
else if(xp >= 2000 && xp < 4000){
    nivel = "Prata"
}
else if(xp >= 4000 && xp < 5000){
    nivel = "Ouro"
}
else if(xp >= 5000 && xp < 6000){
    nivel = "Platina"
}
else if(xp >= 6000 && xp < 8000){
    nivel = "Rubi"
}
else if(xp >= 8000 && xp < 9000){
    nivel = "Esmeralda"
}
else if(xp >= 9000 && xp < 1000){
    nivel = "Diamante"
}
else{
    console.log(`Seu Herói: ${nomeHeroi} não tem nível nenhum`)
}

console.log(`O seu Herói: ${nomeHeroi} tem [${xp}]xp e está no nível ${nivel}`)