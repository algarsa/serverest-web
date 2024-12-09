@test @sucesso
Feature: Sucesso - Pesquisar Produto

  Scenario Outline: Pesquisar Produto
    Given que acesso o site da Severest e realizo o Login <email> <senha>
    When preencho o campo pesquisar produto <produto> e clico no botao Pesquisar 
    Then o site deve retornar lista de produtos
    
    Examples:
      | email                     | senha | produto |
      | alice.santos.st@gmail.com | 1234  | caneca  |