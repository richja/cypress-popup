describe('testing popup function', () => {
    it('navigates to index and stubs window.open', () => {
        cy.on('window:before:load', (win) => {
            cy.stub(win, 'open')
            console.log('page transition')
        })

        cy.visit('index.html');

        cy.window().then(function (win) {
            cy.get('button').click()
            cy.contains('This is the last page').then(() => {
                expect(win.open).to.be.called
            })
        })

    })
})