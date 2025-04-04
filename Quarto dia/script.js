// Lista de Personagens
name = prompt("Qual o seu nickname?")
ola = alert("Satisfação em te conhecer, " + name)
start = alert("Clique no botão para começar o jogo...")

personagem = ["", " ", " "];
viloes = ["", " ", " "];

forcaPersonagem = 0;
forcaViloes = 0;

function iniciar() {
  name + ola + start
  alert(name + "o seu trio será composto por quem?")
for(let i = 0; i < 3; i++) {
  escolhaPersonagem = prompt("Digite o nome do seu personagem - " + (i + 1));
  
  personagem[i] = escolhaPersonagem;
  // Calcular a força de cada jogador, e depois somar pra saber a força do time.
  forcaPersonagem = Math.floor(Math.random() * 7) + 5;
  // forcaPersonagem += Math.floor(Math.random() * 10) + 1 //Maneira mais avançada de fazer a mesma coisa.
}
alert("Agora, presentes no seu time, temos: " + personagem);

alert("O time dos vilões será formado por: ")
for(let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 2) + 3;
  
  viloesPossiveis = ["Lich", "Samambaia", "Rei Vampiro", "Entidades Cósmicas", "Lorde das Portas", "Conde de Limãograb", "GOLB", "Martin", "Hunson Abadeer", "A Lua", "Rei Gelado"];
  alert(viloes[i] = viloesPossiveis[indiceAleatorio]);
  // Calcular a força de cada jogador do time do computador.
  forcaViloes = Math.floor(Math.random() * 7) + 5;
}
console.log("Final vilões: " + viloes);

// Comparar os dois times para saber quem venceu.
if(forcaPersonagem > forcaViloes) {
// Mensagem de Vitória;
  alert("Uau, " + name + "!!! Seu time é bom mesmo hein, ganharam dos vilões, na disputa de cabo de guerra! \n\nSua força foi " + forcaPersonagem)
} else {
  if(forcaPersonagem < forcaViloes) {
      // Mensagem de Derrota.
  alert("Você foi puxado pelo time adversário, parece que sua hora de aventura acabou!!! Tente novamente.")
  } else {
    alert("OS DOIS TIMES EMPATARAAAMMM!!!")
  }
}


}
