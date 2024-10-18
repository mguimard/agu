describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('studio', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:4200');
    cy.get('#mat-mdc-form-field-label-2 > mat-label').click();
    cy.get('app-home > app-search > form.ng-untouched > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix > [data-cy="search-input"]').clear();
    cy.get('app-home > app-search > form.ng-untouched > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix > [data-cy="search-input"]').type('hopital');
    cy.get('.mat-icon').click();
    cy.get('.mat-icon').click();
    cy.get('.ng-submitted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix > [data-cy="search-input"]').clear();
    cy.get('.ng-submitted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix > [data-cy="search-input"]').type('hopital{enter}');
    cy.get('.mdc-icon-button').click();
    cy.get(':nth-child(2) > .cdk-column-name > [data-cy="result-link"]').click();
    cy.get('.mdc-button.ng-star-inserted > .mdc-button__label').click();
    cy.get('div[_ngcontent-ng-c1548667657=""] > .mdc-button > .mdc-button__label').click();
    cy.get('.ng-star-inserted > a').click();
    cy.get('[data-cy="details-title"]').click();
    cy.get('[data-cy="details-title"]').click();
    cy.get('[data-cy="details-title"]').click();
    /* ==== End Cypress Studio ==== */
  });
})