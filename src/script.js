function conversor() {
  const valor = Number(
    prompt("Insira o valor de berries que deseja converter:")
  );
  const berrie = 0.04;
  const conversao = (valor * berrie).toLocaleString("pt-br", {
    minimumFractionDigits: 2
  });

  alert(`O valor de ฿${valor} convertido para real é: R$${conversao}`);
}