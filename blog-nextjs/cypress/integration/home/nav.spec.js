const sizesWithFullNavBar = ["ipad-2", "macbook-11", "macbook-15"]
const sizesWithNavMenu = ["iphone-x", "samsung-s10", "samsung-note9"]


describe("Nav Menus Responsive", () => {
    sizesWithFullNavBar.forEach(size => {
        it(`Should display full bar on ${size} screen`, () => {
            cy.viewport(size);
            cy.visit("/");
            cy.get("[data-cy=buttons-wrapper]").should("be.visible");
            cy.get("[data-cy=menu-icon]").should("not.be.visible");
            cy.get("[data-cy=dropdown-wrapper]").should("not.be.visible");
        })
    });

    sizesWithNavMenu.forEach(size => {
        it(`Should display full bar on ${size} screen`, () => {
            cy.viewport(size);
            cy.visit("/");
            cy.get("[data-cy=buttons-wrapper]").should("not.be.visible");
            cy.get("[data-cy=menu-icon]").should("be.visible");
            cy.get("[data-cy=dropdown-wrapper]").should("not.be.visible");
            cy.get("[data-cy=menu-icon]").click()
            cy.get("[data-cy=dropdown-wrapper]").should("be.visible");
            cy.get("[data-cy=menu-icon]").click()
            cy.get("[data-cy=dropdown-wrapper]").should("not.be.visible");
        })
    })
})