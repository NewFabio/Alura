function Galeao (){
    const valorGal= prompt("Digite o valor em Galeão");
  
    const convGal = 38.00;

    const resultadoGal = valorGal * convGal;
  
    document.getElementById("resposta").innerText = `R$: ${resultadoGal}`;
}
