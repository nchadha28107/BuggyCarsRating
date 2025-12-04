# Playwright Test Automation for Bonify

This project is an automated functional testing framework for the Bonify website using Playwright and Cucumber. The framework is designed to perform smoke tests on the Bonify key user journeys, especially those related to user registration, email verification, login, and dashboard ensuring that the application behaves as expected.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Directory Structure](#directory-structure)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Command-Line Parameters](#command-line-parameters)

## Project Overview

The framework automates the following tasks:
1. Navigates to the Bonify homepage.
2. Initiates user registration via the "Neu Bei Bonify" button.
3. Fills out the registration form with dynamically generated data.
4. Verifies email and completes the onboarding process.
5. Fills in personal and address data, and proceeds through MFA setup.
6. Validates landing on the Dashboard.
7. Logs out and verifies redirection.
8. Logs back in and confirms access to the Dashboard.
5. Recording videos of test runs and capturing logs.

## Technologies Used

- [Playwright](https://playwright.dev/) - A Node.js library for browser automation.
- [Cucumber](https://cucumber.io/) - A tool for running automated tests written in plain language.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
- [Faker.js](https://fakerjs.dev/) - A library for generating fake data.

## Directory Structure

```
bonify-automation/
├── config/
│   ├── cucumber.js             # Cucumber configuration file
├── src/
│   ├── features/               # Cucumber feature files
│   ├── helper/                 # Helper functions and utilities
│   ├── hooks/                  # Cucumber hooks for setup and teardown
│   ├── pages/                  # Page Object Model classes
│   ├── steps/                  # Step definitions for Cucumber
│   └── customWorld.ts          # Custom world for Cucumber
├── test-results/               # Directory for test results, logs, and videos
├── cucumber.js                 # Cucumber configuration file
├── package.json                # Project metadata and dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nchadha28107/Automation_Bonify.git

   cd Automation_Bonify
   ```

2. **Install dependencies:**

    Make sure you have Node.js installed. Then run:

    ```bash
    npm install
    ```

## Running Tests

To run the tests, use the following command:

```bash
npm run test
```

This command will execute the tests defined in the src/features directory.

## Command-Line Parameters

You can customize your test runs using the following options:

| Parameter      | Description                                              | Example                                                                 |
|----------------|----------------------------------------------------------|-------------------------------------------------------------------------|
| `--TAGS`      | Run specific tagged scenarios (e.g., `@smoke`)        | `npm run test --TAGS="@smoke"`                                       |
| `--BROWSER`   | Select browser: `chromium`, `firefox`, `webkit`        | `npm run test --BROWSER=firefox`                                      |
| `--DEVICES`   | Emulate device from Playwright's device list           | `npm run test --DEVICES="iPhone 12"`                                   |

**Note:** You can combine any of these options as needed.

---

Example Command

Run smoke tests on WebKit emulating iPhone 12:

```bash
npm run test --TAGS="@smoke" --BROWSER=webkit --DEVICES="iPhone 12"
```


### Device Dimensions

| Device Name                          | Width (px) | Height (px) |
|--------------------------------------|------------|-------------|
| Blackberry PlayBook                  | 600        | 1024        |
| Blackberry PlayBook (landscape)      | 1024       | 600         |
| BlackBerry Z30                       | 360        | 640         |
| BlackBerry Z30 (landscape)           | 640        | 360         |
| Galaxy Note 3                        | 360        | 640         |
| Galaxy Note 3 (landscape)            | 640        | 360         |
| Galaxy Note II                       | 360        | 640         |
| Galaxy Note II (landscape)           | 640        | 360         |
| Galaxy S III                         | 360        | 640         |
| Galaxy S III (landscape)             | 640        | 360         |
| Galaxy S5                            | 360        | 640         |
| Galaxy S5 (landscape)                | 640        | 360         |
| Galaxy S8                            | 360        | 740         |
| Galaxy S8 (landscape)                | 740        | 360         |
| Galaxy S9+                           | 320        | 658         |
| Galaxy S9+ (landscape)               | 658        | 320         |
| Galaxy Tab S4                        | 712        | 1138        |
| Galaxy Tab S4 (landscape)            | 1138       | 712         |
| iPad (gen 5)                        | 768        | 1024        |
| iPad (gen 5) (landscape)             | 1024       | 768         |
| iPad (gen 6)                        | 768        | 1024        |
| iPad (gen 6) (landscape)             | 1024       | 768         |
| iPad (gen 7)                        | 810        | 1080        |
| iPad (gen 7) (landscape)             | 1080       | 810         |
| iPad Mini                            | 768        | 1024        |
| iPad Mini (landscape)                | 1024       | 768         |
| iPad Pro 11                         | 834        | 1194        |
| iPad Pro 11 (landscape)              | 1194       | 834         |
| iPhone 6                             | 375        | 667         |
| iPhone 6 (landscape)                 | 667        | 375         |
| iPhone 6 Plus                        | 414        | 736         |
| iPhone 6 Plus (landscape)            | 736        | 414         |
| iPhone 7                             | 375        | 667         |
| iPhone 7 (landscape)                 | 667        | 375         |
| iPhone 7 Plus                        | 414        | 736         |
| iPhone 7 Plus (landscape)            | 736        | 414         |
| iPhone 8                             | 375        | 667         |
| iPhone 8 (landscape)                 | 667        | 375         |
| iPhone 8 Plus                        | 414        | 736         |
| iPhone 8 Plus (landscape)            | 736        | 414         |
| iPhone SE                            | 320        | 568         |
| iPhone SE (landscape)                | 568        | 320         |
| iPhone X                             | 375        | 812         |
| iPhone X (landscape)                 | 812        | 375         |
| iPhone XR                            | 414        | 896         |
| iPhone XR (landscape)                | 896        | 414         |
| iPhone 11                            | 414        | 896         |
| iPhone 11 (landscape)                | 800        | 364         |
| iPhone 11 Pro                        | 375        | 812         |
| iPhone 11 Pro (landscape)            | 724        | 325         |
| iPhone 11 Pro Max                    | 414        | 896         |
| iPhone 11 Pro Max (landscape)        | 808        | 364         |
| iPhone 12                            | 390        | 844         |
| iPhone 12 (landscape)                | 750        | 340         |
| iPhone 12 Pro                        | 390        | 844         |
| iPhone 12 Pro (landscape)            | 750        | 340         |
| iPhone 12 Pro Max                    | 428        | 926         |
| iPhone 12 Pro Max (landscape)        | 832        | 378         |
| iPhone 12 Mini                       | 375        | 812         |
| iPhone 12 Mini (landscape)           | 712        | 325         |
| iPhone 13                            | 390        | 844         |
| iPhone 13 (landscape)                | 750        | 342         |
| iPhone 13 Pro                        | 390        | 844         |
| iPhone 13 Pro (landscape)            | 750        | 342         |
| iPhone 13 Pro Max                    | 428        | 926         |
| iPhone 13 Pro Max (landscape)        | 832        | 380         |
| iPhone 13 Mini                       | 375        | 812         |
| iPhone 13 Mini (landscape)           | 712        | 327         |
| iPhone 14                            | 390        | 844         |
| iPhone 14 (landscape)                | 750        | 340         |
| iPhone 14 Plus                       | 428        | 926         |
| iPhone 14 Plus (landscape)           | 832        | 378         |
| iPhone 14 Pro                        | 393        | 852         |
| iPhone 14 Pro (landscape)            | 734        | 343         |
| iPhone 14 Pro Max                    | 430        | 932         |
| iPhone 14 Pro Max (landscape)        | 814        | 380         |
| iPhone 15                            | 393        | 852         |
| iPhone 15 (landscape)                | 734        | 343         |
| iPhone 15 Plus                       | 430        | 932         |
| iPhone 15 Plus (landscape)           | 814        | 380         |
| iPhone 15 Pro                        | 393        | 852         |
| iPhone 15 Pro (landscape)            | 734        | 343         |
| iPhone 15 Pro Max                    | 430        | 932         |
| iPhone 15 Pro Max (landscape)        | 814        | 380         |
| Kindle Fire HDX                     | 800        | 1280        |
| Kindle Fire HDX (landscape)          | 1280       | 800         |
| LG Optimus L70                       | 384        | 640         |
| LG Optimus L70 (landscape)           | 640        | 384         |
| Microsoft Lumia 550                  | 360        | 640         |
| Microsoft Lumia 550 (landscape)      | 640        | 360         |
| Microsoft Lumia 950                  | 360        | 640         |
| Microsoft Lumia 950 (landscape)      | 640        | 360         |
| Nexus 10                             | 800        | 1280        |
| Nexus 10 (landscape)                 | 1280       | 800         |
| Nexus 4                              | 384        | 640         |
| Nexus 4 (landscape)                  | 640        | 384         |
| Nexus 5                              | 360        | 640         |
| Nexus 5 (landscape)                  | 640        | 360         |
| Nexus 5X                             | 412        | 732         |
| Nexus 5X (landscape)                 | 732        | 412         |
| Nexus 6                              | 412        | 732         |
| Nexus 6 (landscape)                  | 732        | 412         |
| Nexus 6P                             | 412        | 732         |
| Nexus 6P (landscape)                 | 732        | 412         |
| Nexus 7                              | 600        | 960         |
| Nexus 7 (landscape)                  | 960        | 600         |
| Nokia Lumia 520                      | 320        | 533         |
| Nokia Lumia 520 (landscape)          | 533        | 320         |
| Nokia N9                             | 480        | 854         |
| Nokia N9 (landscape)                 | 854        | 480         |
| Pixel 2                              | 411        | 731         |
| Pixel 2 (landscape)                  | 731        | 411         |
| Pixel 2 XL                           | 411        | 823         |
| Pixel 2 XL (landscape)               | 823        | 411         |
| Pixel 3                              | 393        | 786         |
| Pixel 3 (landscape)                  | 786        | 393         |
| Pixel 4                              | 353        | 745         |
| Pixel 4 (landscape)                  | 745        | 353         |
| Pixel 4a (5G)                       | 412        | 892         |
| Pixel 4a (5G) (landscape)            | 840        | 312         |
| Pixel 5                              | 393        | 851         |
| Pixel 5 (landscape)                  | 851        | 393         |
| Pixel 7                              | 412        | 915         |
| Pixel 7 (landscape)                  | 915        | 412         |
| Moto G4                              | 360        | 640         |
| Moto G4 (landscape)                  | 640        | 360         |
| Desktop Chrome HiDPI                | 1280       | 720         |
| Desktop Edge HiDPI                  | 1280       | 720         |
| Desktop Firefox HiDPI                | 1280       | 720         |
| Desktop Safari                       | 1280       | 720         |
| Desktop Chrome                       | 1280       | 720         |
| Desktop Edge                         | 1280       | 720         |
| Desktop Firefox                       | 1280       | 720         |

