//Cenário 1
// Dado que o usuário acesse o Blog do Agi
// E queria realizar a busca por uma notícia
// Quando o usuário clicar no ícone da Lupa
// E não digitar nada
// E clicar no Enter
// Então será redirecionado para uma página na qual será exibida uma lista com todos os artigos do blog, ordenados do mais para o menos recente.

describe('cenario1.cy.js', () => {
    it('Cenário 1', () => {
        cy.visit('https://blogdoagi.com.br/')

        cy.get('.ast-search-menu-icon').click()
        cy.get('#search-field').click().type('{enter}')
        
        cy.url().should('include', '/?s=')
                
    })
})