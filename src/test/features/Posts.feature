Feature: Posts feature

  Scenario Outline: Create a new post
    Given I am on the conduit login page
    When I login with valid credentials
    And I click on new post button
    And I fill up the title as "<title>" about as "<about>" article as "<articleText>" and tags as "<tags>" required details
    Then I publish the article

    Examples:
      | title            | about            | articleText      | tags       |
      | Playwright Title | About playwright | Hello Playwright | Playwright |
      | Selenium Title   | About Selenium   | Hello Selenium!  | Selenium   |
