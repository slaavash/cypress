describe('Test', () => {
    it('Test wiki search', () => {
      cy.visit('https://en.wikipedia.org/wiki/Main_Page');
      cy.get("#searchInput").type("Schwarznegger");
      cy.get('.cdx-search-input > .cdx-button').click();
      cy.url().should('include', '/wiki/Arnold_Schwarzenegger');
    })
  })
