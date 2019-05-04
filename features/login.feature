Feature: Modakrakyat P2P Login
  As Lender I Want To Login To Modalrakyat P2P

  Scenario: Login With Valid Username
    Given lender is at p2p login page
    Then lender will see p2p login page
    When lender login as "ACTIVE_LENDER"
    Then lender will see lender dashboard page
    When lender click sidebar menu
      And lender click logout
    Then lender will see p2p login page

  Scenario: Login With Invalid Username
    Given lender is at p2p login page
    Then lender will see p2p login page
    When lender login as "INVALID_LENDER"
    Then lender will see alert invalid lender
