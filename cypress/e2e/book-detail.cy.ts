// cypress/e2e/book-detail.cy.ts

describe('Book Detail Page', () => {
  it('navigates to Book Detail page when clicking a book', () => {
    cy.visit('/');

    cy.contains('Atomic Habits').click();

    cy.url().should('include', '/books/2');
    cy.contains('Book Details').should('be.visible');
    cy.contains('Book ID: 2').should('be.visible');
  });
});
