Feature: User Profile Management

  Background:
    Given user navigates to Buggy Cars homepage
    And user attemps login with valid username and valid password
    And user should be logged in successfully

  @smoke @profile
  Scenario: View user profile
    Given user navigates to profile page
    Then profile information should be displayed
    And first name should be visible
    And last name should be visible

  @profile
  Scenario: Update user profile information
    Given user navigates to profile page
    When user updates first name to "UpdatedFirst"
    And user updates last name to "UpdatedLast"
    And user clicks Save button
    Then profile should be updated successfully

  @profile @negative
  Scenario: Validate mandantory fields firstName and lastName
    Given user navigates to profile page
    When user updates first name to ""
    Then error message for firstName should be displayed
    And user updates last name to ""
    Then error message for lastName should be displayed
    And save button should be disabled

  @profile @negative
  Scenario: Change password with incorrect current password
    Given user navigates to profile page
    When user enters current password "WrongPassword"
    And user enters new password "NewTest@12345"
    And user confirms new password "NewTest@12345"
    And user clicks Save button
    Then error message should be displayed

  @profile
  Scenario: Change user password
    Given user navigates to profile page
    When user enters current password "valid"
    And user enters new password "NewTest@12345"
    And user confirms new password "NewTest@12345"
    And user clicks Save button
    Then password should be updated successfully
    And user should be able to login with new password "NewTest@12345"