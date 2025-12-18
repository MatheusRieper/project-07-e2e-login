describe('login', () => {

  beforeEach(() => {
    // Initing Page
    cy.start()
    // Home Page Login Verifiction
    cy.url().should('include', '/')
  })

  // Valid login
  describe('Valid login', () => {

    it('should login successfully', () => {
      cy.login('student', 'Password123')
      // home page login verifiction
      cy.url().should('include', '/logged-in-successfully')

      // verifiction login
      cy.get('h1.post-title')
        .should('be.visible')
        .and('contain.text', 'Logged In Successfully')
    })
  })
  // Invalid login
  describe('Invalid login', () => {

    // invalid e-mail
    it('should show error for invalid email', () => {

      cy.login('estudante', 'Password123')

      // Error Message
      cy.get('#error')
        .should('be.visible')
        .and('contain.text', 'invalid')

      // login page verifiction
      cy.url().should('include', '/practice-test-login/')

    })

    // invalid password
    it('should show error for invalid password', () => {

      cy.login('student', '123456')

      // Error Message
      cy.get('#error')
        .should('be.visible')
        .and('contain.text', 'invalid')

      // login page verifiction
      cy.url().should('include', '/practice-test-login/')

    })
  })

})