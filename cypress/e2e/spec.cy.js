describe('template spec', () => {
  it('passes', () => {
    cy.visit('127.0.0.1:5500'); 

    cy.get('#nome').type('João Silva');
    cy.get('#email').type('joao.silva@email.com');
    cy.get('#telefone').type('1199999999');
    cy.get('#senha').type('Teste@123');
    cy.get('#confirmar_senha').type('Teste@123');

    cy.get('#nome').should('have.value', 'João Silva');
    cy.get('#email').should('have.value', 'joao.silva@email.com');
    cy.get('#telefone').should('have.value', '1199999999');
    cy.get('#senha').should('have.value', 'Teste@123');
    cy.get('#confirmar_senha').should('have.value', 'Teste@123');

    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.contain('O cadastro foi bem sucedido');
    });
  });
});
