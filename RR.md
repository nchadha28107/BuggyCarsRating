# Test Plan - Buggy Cars Rating Application

## Document Information

| Field | Details |
|-------|---------|
| **Application Under Test** | Buggy Cars Rating |
| **URL** | https://buggy.justtestit.org/ |
| **Version** | Current Production |
| **Test Environment** | Web Application |
| **Prepared By** | QA Engineer |
| **Date** | December 2025 |
| **Test Type** | Manual & Automated Testing |

---

## 1. Test Objectives

The primary objectives of this test plan are to:
- Verify the functionality of user registration and authentication features
- Validate car browsing via Overall Rating page with pagination
- Test brand selection and model listing functionality
- Ensure proper car voting and rating features
- Verify user profile management capabilities
- Identify UI/UX inconsistencies and usability issues
- Verify cross-browser compatibility
- Assess responsive design implementation
- Document bugs and provide actionable recommendations

---

## 2. Scope of Testing

### In Scope
- User Registration and Login
- Car browsing functionality
- Car rating and voting features
- User profile management
- Navigation and UI elements
- Cross-browser testing (Chrome, Firefox)
- Responsive design testing
- Basic performance testing

### Out of Scope
- Backend database testing
- API security penetration testing
- Third-party integrations

---

## 3. Test Environment

| Component | Details |
|-----------|---------|
| **Browsers** | Google Chrome (Latest), Mozilla Firefox (Latest), Safari (if available) |
| **Operating Systems** | Windows 10/11, macOS, Mobile devices (iOS/Android) |
| **Desktop Resolutions** | 1920x1080, 1366x768 |
| **Tablet Resolutions** | 768x1024 |
| **Mobile Resolutions** | 375x667, 414x896 |

---

## 4. Test Cases Overview

| Test ID | Test Scenario | Category | Priority | Status |
|---------|--------------|----------|----------|--------|
| TC-001 | User Registration - Valid Data | Authentication | High | Pass |
| TC-002 | User Registration - Password Mismatch | Validation | High | Pass |
| TC-003 | User Login - Valid Credentials | Authentication | Critical | Pass |
| TC-004 | User Login - Invalid Credentials | Security | High | Pass |
| TC-005 | Car Browsing via Overall Rating | Navigation/Browsing | High | Pass |
| TC-006 | Pagination Functionality | Navigation | Medium | Pass |
| TC-007 | Car Model Details Page Navigation | Navigation | Medium | Pass |
| TC-008 | Vote for Car (Authenticated User) | Voting | High | Pass |
| TC-009 | Vote for Car (Unauthenticated User) | Authorization | Medium | Pass |
| TC-010 | User Profile Update | Profile Management | Medium | Pass |
| TC-011 | User Profile - Invalid Password | Security | Medium | Pass |
| TC-012 | Comment on Car Model | User Interaction | Medium | Pass |
| TC-013 | Brand-specific Model Listing | Navigation | Medium | Pass |
| TC-014 | Responsive Design - Mobile View | Responsive Design | High | Fail |
| TC-015 | Cross-Browser Compatibility | Compatibility | High | Pass |
| TC-016 | Performance - Page Load Time | Performance | Medium | Pass |

---

## 5. Detailed Test Cases

### TC-001: User Registration - Valid Data

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-001 |
| **Test Scenario** | Verify that a new user can successfully register with valid credentials |
| **Priority** | High |
| **Category** | Functional - Authentication |
| **Preconditions** | Application is accessible, User is on the registration page |

**Test Steps:**
1. Navigate to https://buggy.justtestit.org/
2. Click on "Register" button
3. Enter valid login username (unique)
4. Enter first name
5. Enter last name
6. Enter valid password (meeting requirements)
7. Confirm password (matching the password)
8. Click "Register" button

**Test Data:**

| Field | Value |
|-------|-------|
| Login | testuser_[timestamp] |
| First Name | Test |
| Last Name | User |
| Password | Test@123 |
| Confirm Password | Test@123 |

**Expected Results:**
- Registration successful message displayed
- User is redirected to login page or homepage
- User can login with created credentials

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="1920" height="1480" alt="image" src="https://github.com/user-attachments/assets/a6f03e5d-ba5c-45b9-8471-2b40db942d2a" /> <img width="1920" height="1609" alt="image" src="https://github.com/user-attachments/assets/32ce9559-fe71-4818-adb6-a9a76a3ed811" /> |
| **Status** | Pass |

---

### TC-002: User Registration - Password Mismatch

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-002 |
| **Test Scenario** | Verify proper validation when password and confirm password do not match |
| **Priority** | High |
| **Category** | Functional - Validation |
| **Preconditions** | Application is accessible, User is on the registration page |

**Test Steps:**
1. Navigate to https://buggy.justtestit.org/
2. Click on "Register" button
3. Enter valid login username
4. Enter first and last name
5. Enter password: Test@123
6. Enter confirm password: Test@456
7. Click "Register" button

**Test Data:**

| Field | Value |
|-------|-------|
| Login | testuser_mismatch |
| Password | Test@123 |
| Confirm Password | Test@456 |

**Expected Results:**
- Error message displayed: "Passwords do not match"
- Registration should not proceed
- User remains on registration page

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="1920" height="1563" alt="image" src="https://github.com/user-attachments/assets/45e5f209-158a-4f7c-8036-8b64c3edd511" /> |
| **Status** | Pass |

---

### TC-003: User Login - Valid Credentials

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-003 |
| **Test Scenario** | Verify that registered user can login with valid credentials |
| **Priority** | Critical |
| **Category** | Functional - Authentication |
| **Preconditions** | User has already registered, User is on the homepage |

**Test Steps:**
1. Navigate to https://buggy.justtestit.org/
2. Enter registered username in login field
3. Enter correct password
4. Click "Login" button

**Test Data:**

| Field | Value |
|-------|-------|
| Username | [Previously registered user] |
| Password | [Correct password] |

**Expected Results:**
- User successfully logged in
- Welcome message with username displayed
- Profile link visible in navigation
- Logout option available

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="1920" height="1278" alt="image" src="https://github.com/user-attachments/assets/246e863d-eede-4537-93e0-95f48f92017e" /> |
| **Status** | Pass |

---

### TC-004: User Login - Invalid Credentials

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-004 |
| **Test Scenario** | Verify proper error handling for invalid login credentials |
| **Priority** | High |
| **Category** | Functional - Security |
| **Preconditions** | User is on the homepage |

**Test Steps:**
1. Navigate to https://buggy.justtestit.org/
2. Enter invalid username
3. Enter any password
4. Click "Login" button

**Test Data:**

| Field | Value |
|-------|-------|
| Username | invaliduser123 |
| Password | WrongPass@123 |

**Expected Results:**
- Error message displayed: "Invalid username or password"
- User remains on the login page
- No access to authenticated features

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="1920" height="1278" alt="image" src="https://github.com/user-attachments/assets/787b426d-938d-49f3-af55-80f5d1a2ea64" /> |
| **Status** | Pass |

---

### TC-005: Car Browsing via Overall Rating - Brand Selection

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-005 |
| **Test Scenario** | Verify that users can browse and select car brands from Overall Rating page |
| **Priority** | High |
| **Category** | Functional - Navigation/Browsing |
| **Preconditions** | Application is accessible, Cars are available in the database |

**Test Steps:**
1. Navigate to https://buggy.justtestit.org/
2. Click on "Overall Rating" link in navigation menu
3. Verify list of all car brands/makes displays with pagination
4. Browse through the paginated list
5. Click on any car brand/make (e.g., Lamborghini)
6. Verify list of models for selected brand displays

**Test Data:**

| Field | Value |
|-------|-------|
| Brand Selected | Lamborghini |
| Expected Models | Multiple Lamborghini models should be listed |

**Expected Results:**
- Overall Rating page displays all registered car brands
- Pagination controls visible and functional
- Clicking on a brand navigates to brand-specific model list
- All models for selected brand are displayed
- Car images and basic details visible

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="1920" height="2787" alt="image" src="https://github.com/user-attachments/assets/283a90c0-36a4-40d2-acca-148d1c1a55f3" /> |
| **Status** | Pass |

---

### TC-006: Pagination Functionality on Overall Rating Page

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-006 |
| **Test Scenario** | Verify that pagination works correctly on Overall Rating page |
| **Priority** | Medium |
| **Category** | Functional - Navigation |
| **Preconditions** | Application is accessible, Multiple pages of car brands exist |

**Test Steps:**
1. Navigate to https://buggy.justtestit.org/
2. Click on "Overall Rating" link
3. Verify pagination controls are visible at bottom of page
4. Note the car brands visible on page 1
5. Click "Next" or page number "2"
6. Verify different set of car brands displays
7. Click "Previous" or page "1" to go back
8. Verify original brands are displayed again

**Expected Results:**
- Pagination controls (Previous, Next, page numbers) are visible
- Different car brands display on different pages
- No duplicate entries across pages
- Navigation between pages works smoothly
- Page numbers update correctly

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="1920" height="2787" alt="image" src="https://github.com/user-attachments/assets/f0fc9379-3b49-453b-a163-d20c571b7c6b" /> <img width="1920" height="2554" alt="image" src="https://github.com/user-attachments/assets/83407839-5966-4470-a553-5495b4f2e913" /> |
| **Status** | Pass |


### TC-007: Car Model Details Page Navigation

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-007 |
| **Test Scenario** | Verify navigation to individual car model details page |
| **Priority** | Medium |
| **Category** | Functional - Navigation |
| **Preconditions** | User has accessed a brand's model list |

**Test Steps:**
1. Navigate to https://buggy.justtestit.org/
2. Click on "Overall Rating" link
3. Select any car brand (e.g., Ferrari)
4. From the list of models, click on a specific model
5. Verify car model details page loads

**Expected Results:**
- Car model details page opens successfully
- Car model name, make, and description visible
- Car image displayed properly
- Voting/rating section with current vote count visible
- Comment section available
- All page elements render correctly

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="3228" height="7744" alt="image" src="https://github.com/user-attachments/assets/f51142f4-adad-455e-9cc5-0e646a596c3e" /> |
| **Status** | Pass |

---

### TC-008: Vote for Car (Authenticated User)

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-008 |
| **Test Scenario** | Verify that logged-in users can vote for a car |
| **Priority** | High |
| **Category** | Functional - Voting |
| **Preconditions** | User is logged in, User is on a car details page, User has not previously voted for this car |

**Test Steps:**
1. Login to the application
2. Navigate to any car details page
3. Locate the voting section
4. Click "Vote" button
5. Verify vote is registered

**Expected Results:**
- Vote count increases by 1
- Success message displayed
- User cannot vote again for the same car
- Vote button becomes unavailable

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="2733" height="9147" alt="image" src="https://github.com/user-attachments/assets/3e605422-72bb-4d3a-8ae8-c6a12e205b9b" /> |
| **Status** | Pass |

---

### TC-009: Vote for Car (Unauthenticated User)

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-009 |
| **Test Scenario** | Verify that non-logged-in users cannot vote for cars |
| **Priority** | Medium |
| **Category** | Functional - Authorization |
| **Preconditions** | User is NOT logged in, User is on a car details page |

**Test Steps:**
1. Navigate to https://buggy.justtestit.org/ (without logging in)
2. Click on any car to open details page
3. Attempt to vote for the car
4. Observe the behavior

**Expected Results:**
- Vote button is disabled or hidden
- And message prompts user to login

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="2733" height="9147" alt="image" src="https://github.com/user-attachments/assets/7847bb10-63a1-467d-b644-d7ea45687da2" /> |
| **Status** | Pass |

---

### TC-010: User Profile Update

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-010 |
| **Test Scenario** | Verify that logged-in users can update their profile information |
| **Priority** | Medium |
| **Category** | Functional - Profile Management |
| **Preconditions** | User is logged in, User has access to profile page |

**Test Steps:**
1. Login to the application
2. Click on "Profile" link in navigation
3. Modify first name, last name, or other editable fields
4. Click "Save" button
5. Verify changes are saved

**Test Data:**

| Field | Value |
|-------|-------|
| Updated First Name | UpdatedFirstNameTest |
| Updated Last Name | UpdatedLastNameTest |

**Expected Results:**
- Success message displayed
- Profile information updated successfully
- Updated information visible on profile page
- Changes persist after logout and re-login

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="1920" height="1671" alt="image" src="https://github.com/user-attachments/assets/d1645855-1bc8-42fa-979c-51bcb7302316" /> <img width="1920" height="1671" alt="image" src="https://github.com/user-attachments/assets/6443913a-c842-4b8d-be24-3fecfeba4e7d" /> |
| **Status** | Pass |
| **Comments** | Welcome Message - _Hi, firstName_ doesn't update immediately unless user re-logins  |

---

### TC-011: User Profile - Invalid Password Verification

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-011 |
| **Test Scenario** | Verify validation when updating profile with incorrect current password |
| **Priority** | Medium |
| **Category** | Functional - Security |
| **Preconditions** | User is logged in, User is on profile edit page |

**Test Steps:**
1. Login to the application
2. Navigate to Profile page
3. Attempt to update any profile field
4. Enter incorrect current password
5. Click "Save" button

**Test Data:**

| Field | Value |
|-------|-------|
| Current Password | WrongPassword123 |
| New Password | Password@123 |
| Confirm Password | Password@123 |

**Expected Results:**
- Error message displayed: "Incorrect username or password"
- Profile changes NOT saved
- User remains on profile page
- Form retains entered data

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="768" height="848" alt="image" src="https://github.com/user-attachments/assets/8a8894c4-d1df-4701-9494-50f482d0e79b" /> |
| **Status** | Pass |

---

### TC-012: Comment on Car Model

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-012 |
| **Test Scenario** | Verify that logged-in users can post comments on car models |
| **Priority** | Medium |
| **Category** | Functional - User Interaction |
| **Preconditions** | User is logged in, User is on a car details page |

**Test Steps:**
1. Login to the application
2. Navigate to any car details page
3. Scroll to comments section
4. Enter a comment in the text field
5. Click "Vote" button
6. Verify comment appears

**Test Data:**

| Field | Value |
|-------|-------|
| Comment | "This is a great car with excellent performance!" |

**Expected Results:**
- Comment successfully posted
- Comment visible in the comments section
- Username and timestamp displayed with comment
- Vote count updated

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="5813" height="4299" alt="image" src="https://github.com/user-attachments/assets/72fd01e2-baf6-4cfe-bdca-89a0650cdb05" /> <img width="5857" height="4267" alt="image" src="https://github.com/user-attachments/assets/83bea035-28e0-46f7-ab81-43f02c3090ff" /> |
| **Status** | Pass |

---

### TC-013: Navigation - Overall Ranking Page

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-013 |
| **Test Scenario** | Verify that users can access the overall car ranking page |
| **Priority** | Medium |
| **Category** | Functional - Navigation |
| **Preconditions** | Application is accessible |

**Test Steps:**
1. Navigate to https://buggy.justtestit.org/
2. Click on "Overall" link in navigation menu
3. Verify overall ranking page loads

**Expected Results:**
- Overall ranking page displays
- List of all cars with vote counts shown
- Cars sorted by votes (highest to lowest)
- Car images and details visible
- Page loads without errors

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="1920" height="2007" alt="image" src="https://github.com/user-attachments/assets/a13fec3b-4cbb-41c9-a446-69c42139d9d6" /> |
| **Status** | Pass |

---

### TC-014: Responsive Design - Mobile View

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-014 |
| **Test Scenario** | Verify that the application is responsive on mobile devices |
| **Priority** | High |
| **Category** | Non-Functional - Responsive Design |
| **Preconditions** | Mobile device or browser dev tools available |

**Test Steps:**
1. Open browser developer tools
2. Switch to mobile device emulation (e.g., iPhone 12)
3. Navigate to https://buggy.justtestit.org/
4. Test navigation menu (hamburger menu if applicable)
5. Test login functionality
6. Browse car listings
7. Access car details page
8. Verify all interactive elements

**Test Data:**

| Field | Value |
|-------|-------|
| Device 1 | iPhone 12 Pro (390x844) |
| Device 2 | Samsung Galaxy S21 (360x800) |

**Expected Results:**
- Layout adjusts properly to mobile screen
- All text is readable without horizontal scrolling
- Images scale appropriately
- Navigation menu accessible and functional
- Forms and buttons are tap-friendly
- No overlapping elements

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="293" height="634" alt="image" src="https://github.com/user-attachments/assets/1763103d-7637-4ab8-9bad-76c479a55d09" /> <img width="293" height="634" alt="image" src="https://github.com/user-attachments/assets/f7b3b2e6-59d4-4a74-b764-0a5c158dbf26" /> <img width="150" height="320" alt="image" src="https://github.com/user-attachments/assets/1fbb1b58-a79f-4643-86b4-ef158246b97f" /> |
| **Status** | Fail |
| **Comments** | Model page layout is not appropriate, Comments section is comparatively Big |

---

### TC-015: Cross-Browser Compatibility - Firefox

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-015 |
| **Test Scenario** | Verify that application functions properly in Firefox browser |
| **Priority** | High |
| **Category** | Non-Functional - Compatibility |
| **Preconditions** | Firefox browser installed (latest version) |

**Test Steps:**
1. Open Firefox browser
2. Navigate to https://buggy.justtestit.org/
3. Test user registration
4. Test user login
5. Test voting feature
6. Verify UI elements render correctly
7. Check for console errors

**Expected Results:**
- All functionality works as in Chrome
- UI renders correctly without layout issues
- No JavaScript errors in console
- Images load properly
- Forms submit successfully
- Navigation works smoothly

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="959" height="502" alt="image" src="https://github.com/user-attachments/assets/aea9e6e9-042f-41e3-8e18-5c7d2cc7e557" /> |
| **Status** | Pass |

---

### TC-016: Performance - Page Load Time

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-016 |
| **Test Scenario** | Verify that homepage loads within acceptable time |
| **Priority** | Medium |
| **Category** | Non-Functional - Performance |
| **Preconditions** | Stable internet connection, Browser dev tools available |

**Test Steps:**
1. Open browser developer tools
2. Navigate to Network tab
3. Clear cache and hard reload
4. Navigate to https://buggy.justtestit.org/
5. Note the page load time
6. Repeat 3 times and calculate average

**Expected Results:**
- Homepage loads within 3 seconds
- All images load within 5 seconds
- No failed network requests
- Acceptable Time to Interactive (TTI) < 5 seconds

| Field | Value |
|-------|-------|
| **Actual Results** | <img width="959" height="380" alt="image" src="https://github.com/user-attachments/assets/259951d3-8b54-429e-9ec8-872ff1a846e3" /> |
| **Status** | Pass |

---

## 6. Test Execution Summary

| Priority | Total Test Cases | Passed | Failed | Blocked | Not Executed |
|----------|------------------|--------|--------|---------|--------------|
| Critical | 1 | 1 | - | - | - |
| High | 7 | 6 | 1| - | - |
| Medium | 8 | 8 | - | - | - |
| **Total** | **16** | **15** | **1** | **-** | **-** |

---

## 7. Entry and Exit Criteria

### Entry Criteria
- Application is accessible and deployed
- Test environment is set up
- Test data is prepared
- Testing tools are configured

### Exit Criteria
- All test cases executed
- Critical and high-severity bugs documented
- Test execution report completed
- 80% test cases passed
- No critical bugs remaining open

---

## 8. Risks and Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Application downtime during testing | High | Low | Schedule testing during off-peak hours |
| Incomplete test data | Medium | Medium | Prepare comprehensive test data beforehand |
| Browser compatibility issues | Medium | Medium | Test on multiple browsers early |
| Time constraints | High | Medium | Prioritize critical test cases first |

---

## 9. Approvals

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Test Lead | | | |
| QA Manager | | | |
| Project Manager | | | |

---

**Document Version**: 1.0  
**Last Updated**: December 2025
