@test @sucesso
Feature: Sucesso - Fazer login

  Scenario Outline: Fazer login
    Given que acesso o site da Severest e realizo o Login <email> <senha>
    Then o site deve permitir a entrada do usuario

    Examples:
      | email                     | senha |
      | alice.santos.st@gmail.com | 1234  |