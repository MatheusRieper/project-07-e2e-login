describe('login', () => {

  beforeEach(() => {
    cy.openPage()
    cy.url().should('include', '/')
  })

  // ------------------ Successfull login ------------------ 
  describe('Successfull login', () => {

    it('should login successfully', () => {

      cy.login(
        Cypress.env('ADMIN_USER'),
        Cypress.env('ADMIN_PASS')
      )
      cy.url().should('include', '/logged-in-successfully')

      cy.get('h1.post-title')
        .should('be.visible')
        .and('contain.text', 'Logged In Successfully')

      cy.contains('a', 'Log out')
        .should('be.visible')
    })
  })

  // ------------------ Successfull login ------------------ 
  const INVALID_USER = 'test'
  const INVALID_PASS = 'pass'

  describe('Invalid login', () => {

    it('should show error for invalid email', () => {

      cy.login(
        INVALID_USER,
        Cypress.env('ADMIN_PASS')
      )

      cy.get('#error')
        .should('be.visible')
        .and('contain.text', 'invalid')

      cy.url().should('include', '/practice-test-login/')
    })

    it('should show error for invalid password', () => {

      cy.login(
        Cypress.env('ADMIN_USER'),
        INVALID_PASS
      )

      cy.get('#error')
        .should('be.visible')
        .and('contain.text', 'invalid')

      cy.url().should('include', '/practice-test-login/')
    })
  })

})