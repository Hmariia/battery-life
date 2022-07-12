describe('Search bar', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('onclick should open side bar', function () {
    cy.get('#open-sidebar').click()
    cy.get('#sidebar').should('exist')
  })

  it('should search by battery id', function () {
    cy.get('#open-sidebar').click()
    cy.get('#searchbar').type('A-')
    cy.get('#battery-id').first().contains('A-')
  })

  it('onclick should open certain battery details page', function () {
    cy.get('#open-sidebar').click()
    cy.get('#battery-id')
    .invoke('text')
    .then((text1) => {
      cy.get('#battery-id').click()
      cy.get('#details-battery-id')
        .invoke('text')
        .should((text2) => {
          expect(text1).to.eq(text2)
        })
    })
  })

  it('onclick should be back to home page', function () {
    cy.get('#home-page').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('onclick should reset all filters', function () {
    cy.get('#card-list')
    .invoke('text')
    .then((text1) => {
      cy.get('#reset-filter').click()
      cy.get('#card-list')
        .invoke('text')
        .should((text2) => {
          expect(text1).to.eq(text2)
        })
    })
  })
})