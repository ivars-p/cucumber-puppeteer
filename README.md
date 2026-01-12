# Cucumber + Puppeteer E2E Testing Framework

A lightweight end-to-end (E2E) test automation framework combining [Cucumber.js](https://github.com/cucumber/cucumber-js) for Behavior-Driven Development (BDD) and [Puppeteer](https://pptr.dev/) for browser automation.

---

## Quick Start Guide

### 1. Clone the Project

```bash
git clone https://github.com/ivars-p/cucumber-puppeteer.git
cd cucumber-puppeteer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npm test
```

This runs all `.feature` files using Cucumber and Puppeteer.

### 4. Add a New Test

Create a new feature in `features/`:

```gherkin
Feature: Example

  Scenario: Open Google
    Given I go to "https://google.com"
    Then I should see the title contains "Google"
```

Define corresponding step definitions in `features/step_definitions/`.

---

## Project Structure

```bash
.
├── features/
│   ├── step_definitions/   # Step definitions for Gherkin steps
│   ├── support/            # Hooks and world definitions
│   └── *.feature           # Gherkin feature files
├── pages/                  # Page Object Models (Planned)
├── reports/                # Test reports and screenshots (Planned)
├── cucumber.js             # Cucumber configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## TODO

- [ ] **Create Page Objects**
    - Add `pages/` folder and define reusable classes for common page interactions.
    - Use POM (Page Object Model) structure to encapsulate selectors and actions.

- [ ] **Add HTML Reporting**
    - Integrate `cucumber-html-reporter` or `multiple-cucumber-html-reporter`.
    - Generate readable reports with step results and metadata.

- [ ] **Enable Screenshot Capture**
    - Save screenshots on failure in `reports/screenshots/`.
    - Attach screenshots to HTML report.

- [ ] **Improve Tag-Based Test Execution**
    - Allow running tests with `@smoke`, `@regression`, etc.

- [ ] **CI/CD Integration**
    - Add GitHub Actions or other CI tools to run tests automatically on PRs.

---

## Screenshot on Failure (Planned)

In `features/support/hooks.ts`:

```ts
import { After, Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot();
    const screenshotPath = path.join('reports', 'screenshots', `${scenario.pickle.name}.png`);
    fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
    fs.writeFileSync(screenshotPath, screenshot);
    this.attach(screenshot, 'image/png');
  }
});
```


