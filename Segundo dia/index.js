// Verificando idade do jogador
const idade = parseInt(prompt("Qual a sua idade?"));

// Definindo as opções
const opcoes = ["pedra", "papel", "tesoura"];


if (idade >= 18) {
    alert("Você poderá jogar Pedra, Papel, Tesoura");
  
    // Escolhas para o jogo do jogador vs computador
    let escolhaJogador = prompt("Digite: Pedra, Papel, Tesoura").toLowerCase();
    
    // Validação da escolha do jogador
    if (!opcoes.includes(escolhaJogador)) {
        alert("Escolha inválida! Por favor, digite uma opção válida.");
    } else {
        let escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
      
        // Exibindo a escolha do computador
        alert("O computador escolheu: " + escolhaComputador);
      
        // Comparando as escolhas
        if (escolhaJogador === escolhaComputador) {
            alert("O jogo terminou empatado, Bazinga!");
        } else if (
            (escolhaJogador === "tesoura" && (escolhaComputador === "papel" || escolhaComputador === "lagarto")) ||
            (escolhaJogador === "papel" && (escolhaComputador === "pedra" || escolhaComputador === "spock")) ||
            (escolhaJogador === "pedra" && (escolhaComputador === "lagarto" || escolhaComputador === "tesoura"))
        ) {
            alert("Você venceu, Bazinga!");
        } else {
            alert("O computador venceu, Bazinga!");
        }
    }
} else {
    alert("Você não pode jogar Pedra, Papel, Tesoura");
}