//valida a quantidade de registros da classe de resultados
Cypress.Commands.add('assertTenResultsPage', () => {
  cy.get('.nrn-react-div')
    .should('have.length', 10)
})


//OBTER DATA ATUAL (DATA INICIO DO TESTE OU DATA DE SAÍDA DO ESTACIONAMENTO)
Cypress.Commands.add("obterDataAtual", () => {
  var data = new Date();
  var ano = data.getFullYear()
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var dia = String(data.getDate()).padStart(2, '0');
  var hora = String(data.getHours()).padStart(2, '0');
  var min = String(data.getMinutes()).padStart(2, '0');
  var seg = String(data.getSeconds()).padStart(2, '0');
  var dataAtual = dia+"-"+mes+"-"+ano+"_"+hora+"h"+min+"min";
  return dataAtual;
});