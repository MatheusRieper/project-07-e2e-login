describe('login', function () {

  beforeEach(() => {
    cy.openPage()
    cy.url().should('include', '/')
  })

  // ------------------ Successfull login ------------------ 
  describe('Successfull login', function () {

    it('should login successfully', function () {

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
  describe('Invalid login', function () {

    beforeEach(() => {
      cy.fixture('login').as('login')
    })

    it('should not with login unregistered', function () {

      this.login.invalid.forEach((data) => {

        cy.login(data.email, data.password)

        cy.contains(data.message)

        cy.reload()

      })
    })
  })

})