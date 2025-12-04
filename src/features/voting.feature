Feature: Car Voting Functionality

  Background:
    Given user navigates to Buggy Cars homepage
    And user attemps login with valid username and valid password
    And user should be logged in successfully

  @smoke @voting
  Scenario: Vote for a car model
    Given user navigates to "Reventón" car model page
    And current vote count should be displayed
    When user clicks on Vote button
    Then vote is registered and count should increase

  @voting @negative
  Scenario: Guest user cannot vote
    Given user navigates to Buggy Cars homepage
    And user is not logged in
    When user navigates to "Reventón" car model page
    Then login required message shown
    And comment section should not be visible

  @voting
  Scenario: Comment on car model
    Given user navigates to "Veneno" car model page
    And current vote count should be displayed
    When user posts a comment "Great car!"
    Then Voting button is not visible to avoid duplicate vote 
    And comment section should not be visible
    And comment "Great car!" should be visible in comments section