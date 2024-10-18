
const brest = 'Brest'

describe('template spec', () => {
  it('reaches our amazing app', () => {

    // Open app
    cy.visit('http://127.0.0.1:4200')
   
    // Type 'brest' in the search bar
    let searchInput = cy.get('[data-cy=search-input]').last()
    searchInput.should('be.visible')
    searchInput.type(brest)
    searchInput.type('{enter}')

    // Make sure the current search is 'brest'
    let currentSearchDisplay = cy.get('[data-cy=current-search]')
    currentSearchDisplay.should('be.visible')
    currentSearchDisplay.contains(brest)
 
    // Click the first result link
    let links = cy.get('[data-cy=result-link]')
    links.should('have.length.at.least', 2)
    links.first().click()

    // Make sure we land on the correct view 
    let detailsTitle = cy.get('[data-cy=details-title]')
    detailsTitle.should('contain.text', brest, {matchCase: false})

    // Make sure the forecast is displayed for 7 days
    let forecast = cy.get('[data-cy=forecast-entry]')
    forecast.should('have.length', 7)

  })
})
