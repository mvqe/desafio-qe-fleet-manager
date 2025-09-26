# Cenários de Teste

## 📌 Fluxo: Login

### ✅ Cenário 1: Login com sucesso

- **Pré-condição:** O usuário deve utilizar as credenciais válidas (Email: admin@teste.com / Senha: 123456)
- **Passos:**
  1. Preencha o campo "Email" com a credencial válida
  2. Preencha o campo "Senha" com a credencial válida
  3. Clique no botão "Entrar"
- **Resultado esperado:** O usuário deve ser redirecionado para a página de dashboard e a mensagem **'Login realizado com sucesso!: Bem-vindo ao sistema de gestão de frotas.'**

---

### ❌ Cenário 2: Login com email inválido

- **Pré-condição:** O usuário deve utilizar as credenciais inválidas (Email: admin@invalido.com)
- **Passos:**
  1. Preencha o campo "Email" com a credencial inválida
  2. Preencha o campo "Senha" com a credencial válida
  3. Clique no botão "Entrar"
- **Resultado esperado:** Um pop-up com a mensagem **"Erro no login: Credenciais inválidas"** deve aparecer

---

### ❌ Cenário 3: Login com senha inválida

- **Pré-condição:** O usuário deve utilizar as credenciais inválidas (Senha: 100000)
- **Passos:**
  1. Preencha o campo "Email" com a credencial válida
  2. Preencha o campo "Senha" com a credencial inválida
  3. Clique no botão "Entrar"
- **Resultado esperado:** Um pop-up com a mensagem **"Erro no login: Credenciais inválidas"** deve aparecer

## 📌 Fluxo: Dashboard

### ✅ Cenário 1: Visualização de veículos disponíveis

- **Pré-condição:** Usuário logado.
- **Passos:**
  1. Acessar a página inicial após login.
  2. Visualizar a lista de veículos.
- **Resultado esperado:** Todos os veículos devem exibir modelo, placa, ano, preço/dia e status (Disponível, Alugado ou Manutenção).

### ❌ Cenário 2: Tentativa de alugar veículo com status “Alugado”

- **Pré-condição:** Usuário logado.
- **Passos:**
  1. Identificar veículo com status "Alugado".
  2. Verificar se botão de “Alugar” está desabilitado.
- **Resultado esperado:** O usuário não deve conseguir iniciar aluguel de veículo já alugado.

### ❌ Cenário 3: Tentativa de alugar veículo com status “Manutenção”

- **Pré-condição:** Usuário logado.
- **Passos:**
  1. Identificar veículo com status "Manutenção".
  2. Verificar se botão de “Alugar” está desabilitado.
- **Resultado esperado:** O usuário não deve conseguir iniciar aluguel de veículo em manutenção.

## ✅ Cenário 4: Busca de veículo por placa

- **Pré-condição:** Usuário logado.
- **Passos:**
  1. Acessar a página de dashboard.
  2. Digitar a placa do veículo no campo de busca.
  3. Clicar no botão de buscar.
- **Resultado esperado:** Apenas o veículo correspondente à placa informada deve ser exibido na lista.

### ✅ Cenário 5: Busca de veículo por modelo

- **Pré-condição:** Usuário logado.
- **Passos:**
  1. Acessar a página de dashboard.
  2. Digitar o modelo do veículo no campo de busca.
  3. Clicar no botão de buscar.
- **Resultado esperado:** Devem ser exibidos todos os veículos que correspondem ao modelo informado.

---

## 📌 Fluxo: Alugar Veículo

### ✅ Cenário 1: Aluguel de veículo por 1 dia

- **Pré-condição:** Usuário logado, veículo disponível.
- **Passos:**
  1. Clicar em “Alugar” em um veículo disponível.
  2. Selecionar “1” no campo “Número de dias”.
  3. Confirmar aluguel.
- **Resultado esperado:** A mensagem "Veiculo alugado com sucesso! {nome do carro} foi reservado para você" e o valor total deve ser calculado corretamente (1 × valor da diária).

### ✅ Cenário 2: Aluguel de veículo por múltiplos dias

- **Pré-condição:** Usuário logado, veículo disponível.
- **Passos:**
  1. Clicar em “Alugar”.
  2. Selecionar “5” no campo “Número de dias”.
  3. Confirmar aluguel.
- **Resultado esperado:** A mensagem "Veiculo alugado com sucesso! {nome do carro} foi reservado para você" e o valor total deve ser atualizado (5 × valor da diária).

## ✅ Cenário 3: Aluguel de veículo por múltiplos dias

- **Pré-condição:** Usuário logado, veículo disponível em duas abas diferentes do navegador.
- **Passos:**
  1. Clicar em “Alugar” em uma das abas.
  2. Na outra aba, clique em “Confirmar Aluguel” no mesmo carro
- **Resultado esperado:** A mensagem "Erro ao alugar veículo: Veículo indisponível" deve aparecer e o veículo não deve ser alugado.

---

## 📌 Fluxo: Pagamento

### ✅ Cenário 1: Pagamento com cartão de crédito (Não foi possivel de realizar devido ao bug "Botão "Pagar" não exibido no modal de confirmação")

- **Pré-condição:** Usuário logado, aluguel iniciado.
- **Passos:**
  1. Selecionar método de pagamento “Cartão de Crédito”.
  2. Clicar em “Pagar”.
- **Resultado esperado:** Aluguel deve ser confirmado e mensagem de sucesso exibida.

### ✅ Cenário 2: Pagamento com PIX (Não foi possivel de realizar devido ao bug "Botão "Pagar" não exibido no modal de confirmação")

- **Pré-condição:** Usuário logado, aluguel iniciado.
- **Passos:**
  1. Selecionar método de pagamento “PIX”.
  2. Clicar em “Pagar”.
- **Resultado esperado:** Aluguel deve ser confirmado e mensagem de sucesso exibida.

### ❌ Cenário 3: Aplicação de cupom válido (DESCONTO50)

- **Pré-condição:** Usuário logado, aluguel iniciado.
- **Passos:**
  1. Digitar “DESCONTO50” no campo cupom.
  2. Clicar em “Aplicar”.
- **Resultado esperado:** Valor final deve ser atualizado com desconto de R$ 50.

### ❌ Cenário 4: Aplicação de cupom inválido

- **Pré-condição:** Usuário logado, aluguel iniciado.
- **Passos:**
  1. Digitar “CUPOMERRADO” no campo cupom.
  2. Clicar em “Aplicar”.
- **Resultado esperado:** Deve ser exibida mensagem de erro “Cupom inválido”.
