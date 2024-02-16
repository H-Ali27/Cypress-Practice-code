/// <reference types="cypress" />


describe('10 Pearls Course Certification',() => 
{   
    beforeEach(()=>{
    cy.visit('/')
    })
    
    it.only('should login to the website', () => 
    {
        cy.fixture('example').then(function(data){
       
            this.data = data
            cy.login(this.data.username, this.data.password)
    
            cy.contains("Invalid credentials").should("not.exist")
            cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            // cy.logout()
        })
    
    })
        
    it('should not login the website',() => 
    {
        cy.fixture('example').then(function(data)
        {
            this.data = data
            cy.login(this.data.username1, this.data.wrongpassword)
            cy.contains("Invalid credentials").should("exist")
            cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            
        })
       
    })

    // afterEach(() => {
    //     cy.logout()
    // })
})