/// <reference types="cypress" />

context('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').eq(0).click()
     });

     it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('.product-block').eq(0).click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
     });
    
     it('Deve remover um produto do carrinho', () => {
        var quantidade = 3

        cy.get('.product-block').eq(0).click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.remove > .fa').click()

        cy.get('.cart-empty').should('contain' , 'Seu carrinho está vazio.')
        cy.get('.woocommerce-message').should('contain' , '“Abominable Hoodie” removido. Desfazer?')
     });

     it('Deve avisar que um produto esta fora de estoque', () => {

        cy.get('.product-block').eq(4).click()
        cy.get('.button-variable-item-36').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.stock').should('contain' , 'Fora de estoque')
        cy.get('#tmpl-unavailable-variation-template').should('contain' , 'Desculpe, este produto não está disponível. Escolha uma combinação diferente.')
        
     });

    it('Deve adicionar um produto à lista de desejos', () => {
        cy.get('.product-block').eq(4).click()
        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist').click()

        cy.get('#yith-wcwl-popup-message').should('contain' , 'Produto adicionado!')
        cy.get('.yith-wcwl-wishlistaddedbrowse > a').should('contain' , 'Browse wishlist')
        
    });

     
});