describe('Realizar uma busca no DuckDuckGo sobre Bitcoin', () => {
  //Variável criada com o termo a ser buscado
  const buscaTermo = 'Bitcoin'

  beforeEach(() => {
    cy.intercept(
      'GET',
      `**?q=${buscaTermo}**`
    ).as('getSearchResults')

    cy.visit('https://duckduckgo.com/')

    cy.get('#search_form_input_homepage')
      .as('searchField')
      .should('be.visible')
  })

  it('busca termo "Bitcoin" e clicar no primeiro site da lista de resultados', () => {
    cy.get('@searchField')
      .type(`${buscaTermo}{enter}`)

    cy.wait('@getSearchResults')

    cy.get('#r1-0')
      .should('be.visible')
      .click()

    cy.screenshot('primeiroSite')
  })

})
