//valida a quantidade de registros da classe de resultados
Cypress.Commands.add('assertTenResultsPage', () => {
  cy.get('.nrn-react-div')
    .should('have.length', 10)
})
