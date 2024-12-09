@test @sucesso
Feature: Sucesso - Acessar Lista de Compras

  Scenario Outline: Acessar Lista de Compras
    Given que acesso o site da Severest e realizo o Login <email> <senha>
    When clico no link Lista de Compras
    Then o site deve retornar a lista de compras
    
    Examples:
      | email                     | senha |
      | alice.santos.st@gmail.com | 1234  |