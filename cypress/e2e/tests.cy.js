/// <reference types="cypress" />



Cypress.on('uncaught:exception',(err,Runnable)=>{
  return false
})


describe('template specAspire test cases', () => {
  it('Randomly choose the website language', () => {
    let website=["https://global.almosafer.com/ar","https://global.almosafer.com/en"]
    let randomIndex=Math.floor(Math.random()*website.length)
    cy.visit(website[randomIndex])
    cy.get('.cta__saudi').click()

    cy.get('#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm').click()
    let arabicCities=["القاهرة","مراكش","العقبة"]
    let englishCities=["Amman","beirut","alexandria"]
    let randomArabicIndex=Math.floor(Math.random()*arabicCities.length)
    let randomEnglishIndex=Math.floor(Math.random()*englishCities.length)
    if(randomIndex==0){
      cy.get('[data-testid="AutoCompleteInput"]').type(arabicCities[randomArabicIndex])
    }
else{
  cy.get('[data-testid="AutoCompleteInput"]').type(englishCities[randomEnglishIndex])
}
  })
})