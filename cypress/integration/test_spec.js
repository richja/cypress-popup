describe('testing popup function', () => {
    it('navigates to index and stubs window.open', () => {
        cy.visit('index.html', {
            onBeforeLoad: (win) => {
                cy.stub(win, 'open');
            }
        });

        cy.window().then(function (win) {
            cy.get('button').click()
            cy.contains('This is the last page').then(() => {
                expect(win.open).to.be.called
            })
        })

    })
})