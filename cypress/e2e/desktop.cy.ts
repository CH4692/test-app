describe("Desktop Testing", () => {
  before(() => {
    cy.visit("localhost:3000");
  });

  it("Creating Todos, check todo as done, test filter and delete todos", () => {
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    cy.viewport("macbook-13");

    // Check title
    cy.contains("Todo App").should("be.visible");

    // Create Todos
    cy.get("a > .flex").click();
    cy.get("#todo").type(`Example Todo ${randomNumber}`);
    cy.get(".bg-accent2").click();
    cy.contains(`Example Todo ${randomNumber}`).should("be.visible");

    // checking filter
    cy.get("#search").click().type("Example Todo");
    cy.get(".lg\\:min-w-\\[1100px\\]")
      .children()
      .first()
      .invoke("text")
      .should("contain", "Example Todo");

    // negativ filter check
    cy.get("#search").clear().type("Something");
    cy.get(".lg\\:min-w-\\[1100px\\]")
      .invoke("text")
      .should("contain", "No Todos found");
    cy.get("#search").clear();

    // check as marked
    cy.get(".ease-in > div").click({ multiple: true });
    cy.contains("Example Todo")
      .parent()
      .invoke("css", "text-decoration")
      .should("contain", "line-through");

    // Delete Todos
    cy.get(".justify-between > .ease-linear").click();
    cy.contains("No Todos").should("be.visible");
  });
});
