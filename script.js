function calcularGanho() {
  // Pega os valores dos inputs
  const horaInicio = document.getElementById("inicio").value;
  const horaFim = document.getElementById("fim").value;
  const salarioMensal = parseFloat(document.getElementById("salario").value);

  // Verifica se os valores são válidos
  if (!horaInicio || !horaFim || isNaN(salarioMensal)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // Converte as horas para objetos Date
  const [horaInicioH, horaInicioM] = horaInicio.split(":").map(Number);
  const [horaFimH, horaFimM] = horaFim.split(":").map(Number);

  const dataInicio = new Date();
  dataInicio.setHours(horaInicioH, horaInicioM);

  const dataFim = new Date();
  dataFim.setHours(horaFimH, horaFimM);

  // Calcula a diferença em horas
  const diferencaEmMilissegundos = dataFim - dataInicio;
  const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);

  if (diferencaEmHoras <= 0) {
    alert("O horário de término deve ser depois do horário de início.");
    return;
  }

  // Calcula o ganho por hora com base no salário mensal (considerando 160 horas mensais)
  const ganhoPorHora = salarioMensal / 160;
  const ganhoNoPeriodo = ganhoPorHora * diferencaEmHoras;

  // Mostra o resultado
  document.getElementById("resultado").innerText = `Você ganhou R$ ${ganhoNoPeriodo.toFixed(2)} enquanto cagava.`;
}
