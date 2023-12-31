/// <reference types="cypress" />
const { faker, PersonModule } = require('@faker-js/faker');

context('Funcionalidade pré-cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve completar o pré-cadastro com sucesso', () => {
        let emailFaker = faker.internet.email()
        let passwordFaker = faker.internet.password()
        let nomeFaker = faker.person.firstName()
        let sobrenomeFaker = faker.person.lastName()


        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(passwordFaker)
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });
});