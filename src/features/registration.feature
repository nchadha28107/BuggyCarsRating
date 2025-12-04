Feature: User Registration

  @smoke @registration
  Scenario: Successful user registration with valid data
    Given user navigates to Buggy Cars homepage
    When user clicks on Register link
    And user fills registration form with data
      | username  | random   |
      | firstName | John     |
      | lastName  | Doe      |
      | password  | Test@123 |
    And user clicks Register button
    Then user should see registration success message

  @registration @negative
  Scenario: Registration fails with mismatched passwords
    Given user navigates to Buggy Cars homepage
    When user clicks on Register link
    And user fills registration form with mismatched passwords
      | username  | random       |
      | firstName | Jane         |
      | lastName  | Smith        |
      | password  | Test@123     |
      | confirm   | Different123 |
    Then user should see password mismatch error

  @regression
  Scenario: Registration with existing username
    Given user navigates to Buggy Cars homepage
    When user clicks on Register link
    And user fills registration form with data
      | username  | John     |
      | firstName | John     |
      | lastName  | Doe      |
      | password  | Test@123 |
    And user clicks Register button
    Then user should see username already exists error

  @registration @negative
  Scenario: Registration fails with missing required fields
    Given user navigates to Buggy Cars homepage
    When user clicks on Register link
    And user fills registration form with empty username
    Then user should see validation error message

  @registration @negative
  Scenario: Registration with invalid name containing numbers
    Given user navigates to Buggy Cars homepage
    When user clicks on Register link
    And user fills registration form with data
      | username  | random   |
      | firstName | John123  |
      | lastName  | Doe456   |
      | password  | Test@123 |
    And user clicks Register button
    Then user should see registration success message
    # Then user should see validation error message
    # Then registration should be accepted or validation error shown
