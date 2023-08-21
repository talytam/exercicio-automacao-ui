/// <reference types="cypress" />

context('Funcionalidade Login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('alunoblabla@ebac.com')
        cy.get('#password').type('blabla123')
        cy.get('.woocommerce-form > .button').click()
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário ou senha inválidas', () => {
        
    });
});