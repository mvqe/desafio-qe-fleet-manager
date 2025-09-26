# Relatório de Bugs

## Bug 1: Desalinhamento no modal ao inserir valor inválido de dias

- **Severidade:** Média
- **Ambiente:** Microsoft Edge (Versão 140.0.3485.81), WIndows 11
- **Passos para reproduzir:**
  1. Faça login na aplicação
  2. Selecione o carro para alugar
  3. insira 21 ou mais caracteres no campo "Número de dias"
- **Resultado obtido:** O modal e os campos ficam desalinhados
- **Resultado esperado:** O modal deveria continuar em seu estado normal
- **Evidência:** ![Print mostrando desalinhamento do modal](./evidencias/bug-1-desalinhamento-modal.png)

---

## Bug 2: Botão "Pagar" não exibido no modal de confirmação

- **Severidade:** Alta
- **Ambiente:** Microsoft Edge (Versão 140.0.3485.81), WIndows 11
- **Passos para reproduzir:**
  1. Faça login na aplicação
  2. Selecione o carro para alugar
  3. insira o número de dias que quer alugar
  4. Clique no botão "Confirmar Aluguel"
- **Resultado obtido:** O botão "Pagar" não fica visivel
- **Resultado esperado:** O botão "Pagar" deveria estar visivel
- **Evidência:** ![Print mostrando ausência do botão Pagar](./evidencias/bug-2-botao-pagar-nao-exibido.png)

---

## Bug 3: Redirecinamento para a tela de login após logoff não funciona

- **Severidade:** Alta
- **Ambiente:** Microsoft Edge (Versão 140.0.3485.81), WIndows 11
- **Passos para reproduzir:**
  1. Faça login na aplicação
  2. Clique no botào sair
- **Resultado obtido:** O redirecimaneto para a tela de login fica em looping
- **Resultado esperado:** O logoff deveria ser feito de forma rápida e o usuário deveria ser redirecionado para a tela de login
- **Evidência:** ![Print mostrando ausência do botão Pagar](.evidencias\evidenciasbug-3-redirecinamento-para-tela-de login-funciona.png)

---

## Bug 4: Número de veículos alugados não reflete o total de real veículos alugados

- **Severidade:** Média
- **Ambiente:** Microsoft Edge (Versão 140.0.3485.81), WIndows 11
- **Passos para reproduzir:**
  1. Faça login na aplicação
  2. Alugue mais de um carro
  3. Verifique o número no dashboard de carros alugados
- **Resultado obtido:** O número no dashboard não reflete o número real de carros alugados
- **Resultado esperado:** O número no dashboard deveria refletir o número real de carros alugados
- **Evidência:** ![Print mostrando ausência do botão Pagar](.evidencias\evidenciasbug-4-número-de-veículos-lugados-não-reflete-o-total-real-de-veículos-alugados.png)
