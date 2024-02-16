///<reference types='cypress'/>
describe('Revision Practice', () => 
{
    it('CSS Locator', () => 
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get("[type='search']").type('cu')
    })
})