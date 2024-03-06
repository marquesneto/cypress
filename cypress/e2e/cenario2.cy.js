// Cenário 2
// Dado que o usuário acesse o Blog do Agi
// E queria realizar a busca por uma notícia
// Quando o usuário clicar no ícone da Lupa
// E digitar o termo buscado
// Mas o termo digitado está escrito errado
// Então é exibida uma mensagem na tela: "Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras."
// Quando o usuário clicar na caixa de busca
// E digitar o termo corretamente
// E clicar em pesquisar
// Então será redirecionado para uma página na qual será exibida uma lista com todos os artigos do blog, ordenados do mais para o menos recente.

describe('cenario2.cy.js', () => {
    it('Cenario 2', () => {
        cy.visit('https://blogdoagi.com.br/')

        cy.get('.ast-search-menu-icon').click()
        cy.get('#search-field').click().type('{insert}Inscriçao').type('{enter}')
        
        cy.contains('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')

        cy.get('#main > section > div > div > form').type('Inscrição')
        cy.get('#main > section > div > div > form > input').click()
        
        cy.contains('Resultados encontrados para: Inscrição')
    })
})