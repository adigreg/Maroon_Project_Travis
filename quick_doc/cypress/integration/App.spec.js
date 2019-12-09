describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
  
    it ('renders with search box that says search', () => {
      cy.visit ('/');
      cy.get('[data-cy=location]').should('contain', 'Search');
    });

    it('shows doctors when search is selected', () => {
        cy.visit ('/');
        cy.get('[data-cy=location]').click();
        cy.get('[data-cy=doctorTerryAnderson]').should('contain' ,'Terry Anderson');
      });
  });