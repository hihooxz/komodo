describe('Login', () => {
    it('Open Login Page', () => {
        cy.visit('https://buyer-demo.komodo.digital/login')
    })

    it('Set Email', () => {
        cy.get('.mb-4 > label').should('have.text', 'Email')
        cy.get('[data-cy=email-login]').type('rikyachmad@gmail.com')
    })
    it('Set Password', () => {
        cy.get('[style="margin-bottom: 36px;"] > label').should('have.text', 'Kata Sandi')
        cy.get('[data-cy=password-login]').type('asdasdasdasd')
    })
    it('show password',() => {
        cy.get('svg').click()
    })
    
    it('click button',() => {
        cy.get('[data-cy=submit-login]').should('have.text', 'Masuk')
        cy.get('[data-cy=submit-login]').click()
    })

    it('scroll to top', () => {
        cy.get('.login-wrapper').scrollTo('top')
    })

   
})