Feature: User Login and Logout

  Background:
    Given user navigates to Buggy Cars homepage
    And user clicks on Register link
    And user completes registration flow

  @smoke @login
  Scenario: Successful login with valid credentials
    Given user navigates to Buggy Cars homepage
    When user attemps login with valid username and valid password
    Then user should be logged in successfully

  @login @negative
  Scenario: Login fails with invalid username
    Given user navigates to Buggy Cars homepage
    When user attemps login with invalid username and valid password
    Then user should see invalid credentials error
    And user should remain on login page

  @login @negative
  Scenario: Login fails with invalid password
    Given user navigates to Buggy Cars homepage
    When user attemps login with valid username and invalid password
    Then user should see invalid credentials error
    And user should remain on login page

  @login @negative
  Scenario: Login fails with empty credentials
    Given user navigates to Buggy Cars homepage
    When user attemps login with empty username and empty password
    Then user should see login field validation error

  @smoke @login
  Scenario: Login and logout flow
    Given user navigates to Buggy Cars homepage
    When user attemps login with valid username and valid password
    Then user should be logged in successfully
    When user clicks on Logout link
    Then user should be logged out successfully
    When user logs in again with same credentials
    Then user should be logged in successfully