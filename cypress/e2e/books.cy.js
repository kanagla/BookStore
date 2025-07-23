"use strict";
describe('Books Page', () => {
    it('displays header and books list', () => {
        cy.visit('/');
        cy.contains('Bookstore App').should('be.visible');
        cy.contains('Available Books').should('be.visible');
        cy.contains('Javascript').should('exist');
        cy.contains('Atomic Habits').should('exist');
    });
});
