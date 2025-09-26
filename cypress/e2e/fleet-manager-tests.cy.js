describe("fleet manager", () => {
  beforeEach(() => {
    cy.visit("https://qe-test.recrutamento.avantsoft.com.br/login");
    cy.get("input#email").should("be.visible").type("admin@teste.com");
    cy.get("input#password").should("be.visible").type("123456");
    cy.contains("button", "Entrar").click();
  });

  it("deve realizar login com sucesso (validando o dashboard)", () => {
    cy.url().should("include", "/dashboard");
    cy.contains("div", "Bem-vindo ao sistema de gestão de frotas.")
      .eq(1)
      .should("be.visible");
    cy.contains("h1", "Fleet Manager").should("be.visible");
  });

  it("deve buscar um carro pelo modelo", () => {
    cy.get('input[placeholder="Buscar por placa ou modelo..."]').type("uno");
    cy.contains("h3", "Fiat Uno").should("be.visible");
  });

  it("deve buscar um carro pela placa", () => {
    cy.get('input[placeholder="Buscar por placa ou modelo..."]').type(
      "ABC1234"
    );
    cy.contains("h3", "Fiat Uno").should("be.visible");
  });

  it("Alugar um carro e conferir o valor", () => {
    cy.contains("button", "Alugar").first().click();
    cy.get("input#days").type("1");
    cy.contains("button", "Confirmar Aluguel").click();
    cy.get("input.uppercase").type("DESCONTO50");
    cy.contains("button", "Aplicar").click();
    cy.contains("p", "Cartão de Crédito");
    cy.contains("R$ 100").should("be.visible");
    cy.get("div.backdrop-blur-sm").click({ force: true });
    cy.contains("span", "Alugado").eq(2).should("be.visible");
    // bug conhecido:
    // "Botão 'Pagar' não exibido no modal de confirmação"
  });

  it('não deve permitir alugar veículo com status "Alugado"', () => {
    cy.contains(".vehicle-card", "Alugado").within(() => {
      cy.contains("button", "Alugar").should("be.disabled");
    });
  });

  it('não deve permitir alugar veículo com status "Manutenção"', () => {
    cy.contains(".vehicle-card", "Manutenção").within(() => {
      cy.contains("button", "Alugar").should("be.disabled");
    });
  });
});
