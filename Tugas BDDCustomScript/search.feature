Feature:Text on searcbox Application

    As a guest
    I want to search text

    Scenario: Valid search
        Given I open home page
        When I text on searchbox
        Then I should see result