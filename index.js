let personagem = "LuanSantana"
let experiencia = "8000"
let nível = ""

if(experiencia <= 1000){
    nível = "Cobre"
}
else if(experiencia >= 1001 && experiencia <= 2000){
    nível = "Ferro"
}
else if(experiencia >= 2001 && experiencia <= 5000){
    nível = "Bronze"
}
else if(experiencia >= 5001 && experiencia <= 6000){
    nível = "Prata"
}
else if(experiencia >= 6001 && experiencia <= 7000){
    nível = "Ouro"
}
else if(experiencia >= 7001 && experiencia <= 8000){
    nível = "Platina"
}
else if(experiencia >= 8001 && experiencia <= 9000){
    nível = "Ascendente"
}
else if(experiencia >= 9001 && experiencia <= 10000){
    nível = "Imortal"
}
else if(experiencia >= 10001){
    nível = "Radiante"
}
console.log(" O Herói de nome " + personagem + " está no nível " + nível)
