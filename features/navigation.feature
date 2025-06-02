Feature: Test feature - Navigation

  @t1
  Scenario: Open website - Validate navigate to Page
    Given I navigate to website - "https://angular.io/"
    And I click the - "Tutorials" - button
    Then The - "Tutorials" - page is displayed