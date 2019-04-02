describe('Checkout', function() {
	it('can successfully check out', function() {
		cy.visit('/')
		cy.get('#site-search')
		.type('mug')
		.should('have.value', 'mug')
		
		cy.get('.header-search_submit ').click()
		cy.get('#quickshop_open-1').click({force: true})
		cy.contains('Add to Bag').click();
		cy.get('#mini-bag_checkout', {timeout: 20000}).click();
		
		cy.get('#EmailAddress')
		.type('rubenqa1@gmail.com')
		cy.get('#Password')
		.type('Password123')
		cy.contains('Sign in to Quick Checkout').click()
		
		cy.contains('Add new card').click()
		cy.get('#paymentViewModel_PaymentCardViewModel_CardNumber')
			.type('4111111111111111')
		
		
		cy.get('#paymentViewModel_PaymentCardViewModel_SelectedExpiryMonth')
		.select('5')
		
		cy.get('#paymentViewModel_PaymentCardViewModel_SelectedExpiryYear')
		.select('2020')
		
		cy.get('#paymentViewModel_PaymentCardViewModel_NameOnCard')
		.type('Ruben Testing')
		
		cy.get('#paymentViewModel_PaymentCardViewModel_SecurityCode')
		.type('451')
		
		cy.get('#PaymentViewModel_SaveCard').click()
		cy.get('#pay-securely-now-button').click()
		cy.wait(20000);
		
		cy.url().should('include', '/confirmation')
		cy.get('.secure_header-title--tick')
		.should('have.value', 'Order Placed')
	})
})