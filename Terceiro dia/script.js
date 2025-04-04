document.getElementById("jogar").addEventListener("click", function () {
    let continuarJogo;
  
    do {
      let round = 1;
  
      while (round <= 3) {
        console.log("Rodada: " + round);
  
        let escolhaplayer;
        do {
          escolhaplayer = prompt(
            "Nível: " + round + ", Escolha entre os 3 caminhos (1,2 ou 3): "
          );
          if (![1, 2, 3].includes(parseInt(escolhaplayer))) {
            alert("⚠️ Escolha inválida! Digite 1, 2 ou 3.");
          }
        } while (![1, 2, 3].includes(parseInt(escolhaplayer)));
  
        let pisoquebrado = Math.floor(Math.random() * 3) + 1;
  
        if (parseInt(escolhaplayer) === pisoquebrado) {
          alert("DERROTA, VOCÊ PISOU EM UMA MINA");
          break;
        } else {
          alert("Você Passou! A mina estava no piso " + pisoquebrado);
        }
  
        round++;
      }
  
      if (round === 4) {
        alert("Você venceu e Sobreviveu! Parabéns!");
      }
  
      do {
        continuarJogo = prompt("Deseja jogar novamente? (s/n)").toLowerCase();
      } while (continuarJogo !== "s" && continuarJogo !== "n");
    } while (continuarJogo === "s");
  
    alert("Obrigado por jogar!");
  });
  