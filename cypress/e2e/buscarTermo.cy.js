describe('Realizar uma busca no DuckDuckGo', () => {
  //Variável criada para armazenar o termo a ser buscado
  const buscaTermo = 'Bitcoin'

  //obter data atual do teste (criado para usar no screenshot)
  let dataAtual;

  beforeEach(() => {
      //chamar o metodo para obter a data atual 
    cy.obterDataAtual().then((valor) => (dataAtual = valor));

    //Intercept na url com o termo buscado para validar o result depois
    cy.intercept(
      'GET',
      `**?q=${buscaTermo}**`
    ).as('getSearchResults')

    cy.visit('https://duckduckgo.com/')

    //Validar se o elemento de busca está visivel 
    cy.get('#search_form_input_homepage')
      .as('searchField')
      .should('be.visible')
  })

    //Teste 01 - Buscando o termo utilizando o camando enter
  it('digitando o termo "Bitcoin" utilizando ENTER para buscar', () => {
    cy.get('@searchField')
      .type(`${buscaTermo}{enter}`)

    cy.wait('@getSearchResults')
       //Metódo para validar o resultado da página
    cy.assertTenResultsPage()
           //Print do teste
    cy.screenshot(`01_TelaBuscaComEnter_${dataAtual}`)
  })
   //Teste 02 - Buscando o termo utilizando a lupa de busca
  it('digitando o termo "Bitcoin" e o clique na lupa para buscar', () => {
    cy.get('@searchField')
      .type(buscaTermo)
       //Identificando e Clicando na lupa
    cy.get('#search_button_homepage')
      .should('be.visible')
      .click()

       //Esperando o resultado
    cy.wait('@getSearchResults')
       //Metódo para validar o resultado da página
    cy.assertTenResultsPage()
           //Print do teste
    cy.screenshot(`02_TelaBuscaComLupa_${dataAtual}`)

  })

})
