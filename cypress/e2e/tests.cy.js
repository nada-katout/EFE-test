/// <reference types="cypress" />



Cypress.on('uncaught:exception',(err,Runnable)=>{
  return false
})
Cypress.Commands.add("visitRandomUrl", () => {
  let website = [
    "https://global.almosafer.com/ar",
    "https://global.almosafer.com/en",
  ];

  let RandomIndex = Math.floor(Math.random() * website.length);
  cy.visit(website[RandomIndex]);

  cy.get(".cta__saudi").click();
});

describe('template specAspire test cases', () => {
  const TheDate = new Date();

  const today_date = TheDate.getDate();
  const expectedDepatureDate = today_date + 1;
  const expectedreturnDate = today_date + 2;

  console.log(TheDate);

  it.skip('Randomly choose the website language', () => {
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
  it("test the depature date + the return date ", () => {
    cy.visitRandomUrl();

    cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-eSePXt')
      .invoke("text")
      .then((elementText) => {
        expect(expectedDepatureDate).to.eql(parseInt(elementText.trim()));
      });
  });
})