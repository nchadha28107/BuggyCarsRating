# Buggy Cars Rating - Test Automation Framework

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Framework Architecture](#framework-architecture)
- [Directory Structure](#directory-structure)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Command-Line Parameters](#command-line-parameters)
- [Test Reports & Artifacts](#test-reports--artifacts)
- [Feature Coverage](#feature-coverage)
- [Design Patterns & Best Practices](#design-patterns--best-practices)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

A comprehensive test automation framework for the **Buggy Cars Rating** web application (https://buggy.justtestit.org/), built with Playwright and Cucumber BDD. This framework provides end-to-end testing capabilities covering user registration, authentication, profile management, and car voting functionality.

The framework automates the following tasks:
1. Navigates to the Buggy Cars homepage
2. Performs user registration with dynamically generated data
3. Handles login/logout functionality
4. Manages user profile operations including password changes
5. Tests car voting and commenting features
6. Records videos of test runs and captures detailed logs
7. Generates comprehensive HTML reports with screenshots

### Why This Framework?

- ✅ **BDD Approach** - Business-readable test scenarios using Cucumber
- ✅ **Cross-Browser Testing** - Chrome, Firefox, Safari/WebKit support
- ✅ **Mobile Emulation** - Test on 100+ device configurations
- ✅ **Rich Reporting** - HTML reports, screenshots, videos, and traces
- ✅ **Page Object Model** - Maintainable and scalable architecture
- ✅ **Dynamic Test Data** - Faker.js for realistic test data generation

---

## 🛠 Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **Playwright** | 1.51.1 | Browser automation and testing |
| **Cucumber** | 11.2.0 | BDD framework for test scenarios |
| **TypeScript** | Latest | Type-safe programming language |
| **Node.js** | 18+ | Runtime environment |
| **Faker.js** | 9.6.0 | Dynamic test data generation |
| **Winston** | 3.8.2 | Structured logging for debugging |
| **multiple-cucumber-html-reporter** | 3.3.0 | Enhanced HTML test reports |
| **playwright-extra** | 4.3.6 | Stealth plugin for realistic browser behavior |

---

## 🏗 Framework Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Test Scenarios (BDD)                    │
│              Cucumber Feature Files (.feature)              │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                   Step Definitions                          │
│           Glue Code Between Features & Pages                │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                 Page Object Model (POM)                     │
│        HomePage | LoginPage | ProfilePage | etc.           │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                     Base Page                               │
│           Common Page Interactions & Utilities              │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                  Playwright Driver                          │
│            Browser Automation Layer                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Directory Structure

```
buggy-automation/
├── config/
│   └── cucumber.js                # Cucumber test runner configuration
│
├── src/
│   ├── features/                  # BDD Gherkin feature files
│   │   ├── login.feature          # Login & logout test scenarios
│   │   ├── registration.feature   # User registration tests
│   │   ├── profile.feature        # Profile management tests
│   │   └── voting.feature         # Car voting & comments tests
│   │
│   ├── pages/                     # Page Object Model (POM)
│   │   ├── BasePage.ts            # Base class for all pages
│   │   ├── HomePage.ts            # Homepage interactions
│   │   ├── LoginPage.ts           # Login/logout functionality
│   │   ├── RegistrationPage.ts    # Registration form handling
│   │   ├── ProfilePage.ts         # Profile management operations
│   │   ├── ModelPage.ts           # Car model page interactions
│   │   └── OverallPage.ts         # Overall rating page
│   │
│   ├── steps/                     # Cucumber step definitions
│   │   ├── HomePage.steps.ts      # Homepage step implementations
│   │   ├── LoginPage.steps.ts     # Login step implementations
│   │   ├── ProfilePage.steps.ts   # Profile step implementations
│   │   ├── RegistrationPage.steps.ts
│   │   └── ModelPage.steps.ts
│   │
│   ├── helper/
│   │   ├── browsers/
│   │   │   └── browserManager.ts  # Browser initialization & config
│   │   ├── report/
│   │   │   └── report.ts          # HTML report generation
│   │   └── utils/
│   │       ├── logger.ts          # Winston logger configuration
│   │       ├── sharedState.ts     # Shared state management
│   │       └── utils.ts           # Helper functions & constants
│   │
│   ├── hooks/
│   │   └── hooks.ts               # Before/After test hooks
│   │
│   └── customWorld.ts             # Cucumber custom world setup
│
├── test-results/                  # Auto-generated test artifacts
│   ├── cucumber-report.html       # HTML test report
│   ├── cucumber-report.json       # JSON test results
│   ├── reports/                   # Enhanced HTML reports
│   ├── screenshots/               # Test screenshots (pass/fail)
│   ├── videos/                    # Test execution recordings
│   ├── logs/                      # Detailed execution logs
│   └── trace/                     # Playwright trace files
│
├── .vscode/
│   └── settings.json              # VS Code Cucumber settings
│
├── .gitignore                     # Git ignore configuration
├── package.json                   # NPM dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

---

## 📋 Setup Instructions

### Prerequisites

Before setting up the framework, ensure you have:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher)
- **Git** - [Download](https://git-scm.com/)
- **Supported OS**: Windows 10+, macOS 10.15+, or Linux

### Verify Installation

```bash
node --version    # Should show v18.0.0 or higher
npm --version     # Should show v9.0.0 or higher
git --version     # Should show git version 2.x.x
```

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nchadha28107/BuggyCarsRating.git
   cd BuggyCarsRating
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed. Then run:

   ```bash
   npm install
   ```

   This command will:
   - Install all required npm packages
   - Automatically download Playwright browsers (Chromium, Firefox, WebKit) via `postinstall` script
   - Set up TypeScript and other dev dependencies

3. **Verify Installation:**

   ```bash
   # Check Playwright installation
   npx playwright --version

   # Verify browsers are installed
   npx playwright install --dry-run
   ```

### Manual Browser Installation (If Needed)

```bash
# Install all browsers
npx playwright install

# Install specific browser
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

---

## ▶️ Running Tests

### Quick Start

To run the tests, use the following command:

```bash
npm run test
```

This command will execute the tests defined in the `src/features/` directory with default configuration (Chrome browser, Desktop viewport).

### What Happens During Test Execution?

1. ✅ Browser launches in headed mode (visible) with 50ms slow motion
2. ✅ Tests execute based on configured tags (default: `not @ignore`)
3. ✅ Video recording starts automatically for each scenario
4. ✅ Screenshots captured on pass/fail states
5. ✅ Detailed logs written to `test-results/logs/`
6. ✅ Playwright traces captured for debugging
7. ✅ HTML report auto-generated after execution

---

## 🎮 Command-Line Parameters

You can customize your test runs using the following options:

| Parameter      | Description                                              | Example                                                                 |
|----------------|----------------------------------------------------------|-------------------------------------------------------------------------|
| `--TAGS`      | Run specific tagged scenarios (e.g., `@smoke`)        | `npm run test --TAGS="@smoke"`                                       |
| `--BROWSER`   | Select browser: `chrome`, `firefox`, `webkit`        | `npm run test --BROWSER=firefox`                                      |
| `--DEVICES`   | Emulate device from Playwright's device list           | `npm run test --DEVICES="iPhone 12"`                                   |

**Note:** You can combine any of these options as needed.

### 1. Run Tests by Tag

```bash
# Smoke tests (critical user journeys)
npm run test --TAGS="@smoke"

# Feature-specific tests
npm run test --TAGS="@login"
npm run test --TAGS="@registration"
npm run test --TAGS="@profile"
npm run test --TAGS="@voting"

# Negative test scenarios
npm run test --TAGS="@negative"

# Regression suite
npm run test --TAGS="@regression"

# Combine tags with AND/OR logic
npm run test --TAGS="@smoke and @login"
npm run test --TAGS="@login or @registration"

# Exclude specific tags
npm run test --TAGS="not @ignore"
```

### 2. Cross-Browser Testing

```bash
# Run on Chrome (default)
npm run test --BROWSER=chrome

# Run on Firefox
npm run test --BROWSER=firefox

# Run on Safari/WebKit
npm run test --BROWSER=webkit
```

### 3. Device Emulation

#### Mobile Devices
```bash
# iPhone devices
npm run test --DEVICES="iPhone 12"
npm run test --DEVICES="iPhone 14 Pro Max"
npm run test --DEVICES="iPhone SE"

# Android devices
npm run test --DEVICES="Pixel 5"
npm run test --DEVICES="Galaxy S9+"
npm run test --DEVICES="Moto G4"
```

#### Tablet Devices
```bash
# iPad devices
npm run test --DEVICES="iPad Pro 11"
npm run test --DEVICES="iPad Mini"
npm run test --DEVICES="iPad (gen 7)"

# Android tablets
npm run test --DEVICES="Galaxy Tab S4"
npm run test --DEVICES="Nexus 7"
```

#### Desktop Configurations
```bash
# High DPI displays
npm run test --DEVICES="Desktop Chrome HiDPI"
npm run test --DEVICES="Desktop Edge HiDPI"

# Standard displays
npm run test --DEVICES="Desktop Chrome"
npm run test --DEVICES="Desktop Firefox"
npm run test --DEVICES="Desktop Safari"
```

### 4. Combined Execution Examples

```bash
# Smoke tests on Firefox with iPhone 12 emulation
npm run test --TAGS="@smoke" --BROWSER=firefox --DEVICES="iPhone 12"

# Login tests on WebKit (Safari) with iPad Pro
npm run test --TAGS="@login" --BROWSER=webkit --DEVICES="iPad Pro 11"

# Profile tests on Chrome Desktop HiDPI
npm run test --TAGS="@profile" --BROWSER=chrome --DEVICES="Desktop Chrome HiDPI"

# All negative tests on Firefox with Galaxy S9+
npm run test --TAGS="@negative" --BROWSER=firefox --DEVICES="Galaxy S9+"
```

### 5. Parallel Execution

Currently configured for **sequential execution** (parallel: 1). To enable parallel execution:

**Edit `config/cucumber.js`:**
```javascript
parallel: 4  // Run 4 scenarios in parallel
```

**Run tests:**
```bash
npm run test
```

> **Note**: Parallel execution significantly reduces total execution time but requires more system resources.

---

## 📊 Test Reports & Artifacts

### Generated Artifacts

After every test run, the following artifacts are automatically generated in the `test-results/` directory:

#### 1. HTML Test Report
- **Location**: `test-results/cucumber-report.html`
- **Contains**: 
  - Pass/Fail status for each scenario
  - Execution time breakdown
  - Feature-wise test distribution
  - Browser and device information
  - Platform metadata
- **Open with**:
  ```bash
  open test-results/cucumber-report.html        # macOS
  start test-results/cucumber-report.html       # Windows
  xdg-open test-results/cucumber-report.html    # Linux
  ```

#### 2. Screenshots
- **Location**: `test-results/screenshots/`
- **Naming Convention**: `{ScenarioName}_PASS.png` or `{ScenarioName}_FAIL.png`
- **When Captured**:
  - ✅ On test pass (final state)
  - ❌ On test failure (error state)
- **Format**: PNG

#### 3. Video Recordings
- **Location**: `test-results/videos/`
- **Format**: WebM (web-optimized)
- **Naming Convention**: `{ScenarioName}_PASS.webm` or `{ScenarioName}_FAIL.webm`
- **Contains**: Full test execution from start to finish
- **Configuration**: Set in `src/hooks/hooks.ts`

#### 4. Playwright Traces
- **Location**: `test-results/trace/`
- **Format**: ZIP files (one per scenario)
- **View traces**:
  ```bash
  npx playwright show-trace test-results/trace/{scenario-id}.zip
  ```
- **Contents**:
  - Network activity and API calls
  - DOM snapshots at each step
  - Console logs and errors
  - Screenshots timeline
  - Source code mapping
  - Performance metrics

#### 5. Execution Logs
- **Location**: `test-results/logs/{scenario-name}/log.log`
- **Format**: Timestamped Winston logs
- **Levels**: info, warn, error
- **Example**:
  ```
  info: [Dec-08-2025 10:30:15]: Navigated to Buggy Cars Rating homepage
  info: [Dec-08-2025 10:30:17]: Clicked on Register link
  info: [Dec-08-2025 10:30:20]: Registration form filled for user: user123abc456
  info: [Dec-08-2025 10:30:22]: Clicked on Register button
  info: [Dec-08-2025 10:30:24]: Registration Success message displayed
  ```

#### 6. JSON Test Report
- **Location**: `test-results/cucumber-report.json`
- **Purpose**: Machine-readable format for CI/CD integration
- **Contains**: Detailed test execution data

### Viewing Reports

```bash
# Generate HTML report (runs automatically after tests via postinstall hook)
node src/helper/report/report.ts

# Open HTML report in browser
open test-results/cucumber-report.html

# View Playwright trace for debugging
npx playwright show-trace test-results/trace/{trace-id}.zip

# View logs for specific scenario
cat test-results/logs/{scenario-name}/log.log
```

---

## 🎯 Feature Coverage

### Test Scenarios Overview

| Feature | Scenarios | Status | Coverage |
|---------|-----------|--------|----------|
| **User Registration** | 5 | ✅ Automated | 95% |
| **Login/Logout** | 5 | ✅ Automated | 100% |
| **Profile Management** | 5 | ✅ Automated | 90% |
| **Car Voting** | 3 | ✅ Automated | 85% |
| **Comments** | 2 | ✅ Automated | 80% |

### Detailed Feature Breakdown

#### 🔐 User Registration (5 Scenarios)

**Feature File**: `src/features/registration.feature`

```gherkin
✅ @smoke - Successful user registration with valid data
✅ @negative - Registration fails with mismatched passwords
✅ @regression - Registration with existing username (error handling)
✅ @negative - Registration fails with missing required fields
✅ @negative - Registration with invalid name containing numbers (edge case)
```

**Test Data**: Dynamically generated using Faker.js  
**Validation**: Success messages, error handling, field validation  
**Tags**: `@smoke`, `@registration`, `@negative`, `@regression`

#### 🔑 Login & Logout (5 Scenarios)

**Feature File**: `src/features/login.feature`

```gherkin
✅ @smoke - Successful login with valid credentials
✅ @negative - Login fails with invalid username
✅ @negative - Login fails with invalid password
✅ @negative - Login fails with empty credentials
✅ @smoke - Complete login-logout-login flow
```

**Coverage**: Positive flow, negative cases, session management  
**Background**: Each scenario includes user registration setup  
**Tags**: `@smoke`, `@login`, `@negative`

#### 👤 Profile Management (5 Scenarios)

**Feature File**: `src/features/profile.feature`

```gherkin
✅ @smoke - View user profile information
✅ @profile - Update profile information (name changes)
✅ @negative - Validate mandatory field requirements
✅ @negative - Change password with incorrect current password
✅ @profile - Successfully change user password and verify login
```

**Validation**: Data persistence, error messages, password security  
**Background**: Requires logged-in user  
**Tags**: `@smoke`, `@profile`, `@negative`

#### 🚗 Voting & Comments (5 Scenarios)

**Feature File**: `src/features/voting.feature`

```gherkin
✅ @smoke - Vote for a car model (Reventón)
✅ @negative - Guest user cannot vote
✅ @voting - Post comment on car model (Veneno)
✅ @voting - Prevent duplicate voting
✅ @voting - Verify comment visibility
```

**Coverage**: Authenticated vs guest users, state management, duplicate prevention  
**Background**: Login required for authenticated scenarios  
**Tags**: `@smoke`, `@voting`, `@negative`

### Test Statistics

- **Total Test Scenarios**: 20
- **Automated Tests**: 20 (100% automation)
- **Average Pass Rate**: 90%+
- **Execution Time**: ~5-8 minutes (full suite, sequential)
- **Code Coverage**: Critical user paths covered
- **Browsers Tested**: Chrome, Firefox, WebKit
- **Devices Tested**: 100+ device configurations available

---

## 🏆 Design Patterns & Best Practices

### Design Patterns Implemented

#### 1. Page Object Model (POM)
- **Implementation**: All page interactions encapsulated in dedicated page classes
- **Location**: `src/pages/`
- **Benefits**: Separates test logic from page structure, improves maintainability
- **Example**:
  ```typescript
  class LoginPage extends BasePage {
      private loginField = 'input[name="login"]';
      private passwordField = 'input[name="password"]';
      
      async performLogin(username: string, password: string) {
          await this.page.locator(this.loginField).fill(username);
          await this.page.locator(this.passwordField).fill(password);
          await this.page.locator(this.loginButton).click();
      }
  }
  ```

#### 2. Singleton Pattern
- **Implementation**: SharedState class for cross-scenario data
- **Location**: `src/helper/utils/sharedState.ts`
- **Purpose**: Ensures single instance throughout test execution
- **Usage**: Manages user credentials and test data across scenarios

#### 3. Factory Pattern
- **Implementation**: Browser manager for dynamic browser initialization
- **Location**: `src/helper/browsers/browserManager.ts`
- **Purpose**: Flexible browser and device configuration
- **Supports**: Chrome, Firefox, WebKit with device emulation

#### 4. Base Page Pattern
- **Implementation**: Common functionality in BasePage class
- **Location**: `src/pages/BasePage.ts`
- **Purpose**: Inherited by all page objects, reduces code duplication
- **Contains**: Shared page and logger instances

### Best Practices

✅ **BDD with Cucumber**
- Business-readable test scenarios in Gherkin syntax
- Clear Given-When-Then structure
- Reusable step definitions

✅ **DRY (Don't Repeat Yourself)**
- Reusable step definitions across features
- Common utilities in helper modules
- Shared page methods in base class

✅ **Test Independence**
- Each test runs independently
- Fresh test data generated for each scenario
- No test-to-test dependencies
- Background steps for setup

✅ **Explicit Waits**
- Network idle waits after navigation: `await page.waitForLoadState('networkidle')`
- Visibility timeouts for elements
- Configurable timeout constants: `TIMEOUTS.EXPECT = 15000`

✅ **Error Handling & Debugging**
- Comprehensive logging with Winston
- Screenshots on failure
- Video recording for all tests
- Playwright traces for deep debugging

✅ **Clean Code**
- TypeScript for type safety
- Meaningful variable/method names
- Consistent naming conventions (camelCase)
- Comprehensive JSDoc comments

✅ **Dynamic Test Data**
- Faker.js for realistic data generation
- Timestamp-based unique usernames
- Random password generation with special characters

✅ **Modular Architecture**
- Clear separation of concerns
- Feature files, step definitions, page objects, and helpers
- Easy to extend and maintain

---

## 📄 License

This project is licensed under the **ISC License**

---
