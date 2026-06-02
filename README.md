# 🚀 Agent-Driven E2E Testing Platform

<div align="center">

![Playwright](https://img.shields.io/badge/Playwright-E2E_Testing-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![AI Agents](https://img.shields.io/badge/AI-Agent_Driven-purple)
![Harness Engineering](https://img.shields.io/badge/Harness-Engineering-orange)
![CI/CD](https://img.shields.io/badge/GitHub-Actions-success)

### 🧠 Reliable AI-Powered Test Automation Through Harness Engineering

**A production-grade Playwright platform where autonomous agents generate, execute, validate, and repair tests using evidence—not assumptions.**

---

### 🎯 Core Principle

> Reliability over Autonomy

This platform prevents AI agents from hallucinating selectors, URLs, APIs, assertions, test data, or business flows by enforcing a strict evidence-based workflow.

Instead of allowing agents to "guess" how an application behaves, the system requires proof gathered directly from the browser before any test can be generated.

</div>

---

# 🏗 Why This Project Exists

Traditional AI-generated test automation often suffers from:

❌ Hallucinated selectors

❌ Fragile XPath locators

❌ Invented user flows

❌ Flaky test execution

❌ Missing traceability

❌ Uncontrolled retries

❌ No accountability between agent actions

This platform solves those problems through **Harness Engineering**, where agents operate within strict architectural constraints.

Every action must be supported by evidence.

Every decision must be traceable.

Every failure must be classified.

Every fix must be validated.

---

# 🧠 What is Harness Engineering?

Think of a harness as the operating system around the AI.

Instead of:

```text
AI Model
```

We use:

```text
AI Model
+
Policies
+
Validation Rules
+
Artifact Memory
+
Feedback Loops
+
Human Escalation
=
Reliable System
```

The AI is only one component.

The harness ensures reliability.

---

# ⚡ Key Capabilities

### 🔍 Evidence-Based Exploration

Agents inspect the live application and collect:

* DOM structure
* Accessibility tree
* URLs
* Screenshots
* Network requests
* Valid selectors

No assumptions allowed.

---

### 🏗 Autonomous Test Generation

Builder Agents generate:

* Playwright tests
* Page Objects
* Fixtures
* Assertions

Every generated step can be traced back to evidence.

---

### ▶️ Deterministic Test Execution

Runner Agents:

* Execute tests
* Capture traces
* Capture videos
* Capture screenshots
* Generate execution reports

Runner agents never modify code.

---

### 🩺 Intelligent Failure Analysis

Debugger Agents classify failures:

* SELECTOR_FAILURE
* ASSERTION_FAILURE
* NETWORK_FAILURE
* AUTH_FAILURE
* DATA_FAILURE
* APPLICATION_BUG
* ENVIRONMENT_FAILURE

If evidence is insufficient:

```text
REQUIRES_REEXPLORATION
```

instead of guessing.

---

# 🔄 Agent Workflow

```text
┌────────────────────┐
│ Explorer Agent     │
│ Collect Evidence   │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Builder Agent      │
│ Generate Tests     │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Runner Agent       │
│ Execute Tests      │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Debugger Agent     │
│ Analyze Failures   │
└─────────┬──────────┘
          │
          ▼
   Re-run or
 Re-exploration
```

### 🔍 Explorer Agent
* Navigates the application.
* Captures DOM evidence, URLs, selectors, and network activity.
* Produces structured exploration reports.

### 🏗 Builder Agent
* Generates Playwright tests and Page Objects.
* Uses only validated exploration evidence.
* Eliminates selector guessing.

### ▶️ Runner Agent
* Executes tests.
* Captures screenshots, videos, traces, and logs.
* Produces execution reports.

### 🩺 Debugger Agent
* Classifies failures.
* Detects selector, network, assertion, auth, and environment issues.
* Triggers re-exploration when evidence becomes stale.

---

# 🛡 Anti-Hallucination Guardrails

The platform refuses to continue when evidence is missing.

Before any test is generated, agents must verify:

✅ Selector exists

✅ URL verified

✅ Flow explored

✅ Network calls observed

✅ Assertions backed by requirements

If not:

```text
INSUFFICIENT_EVIDENCE
```

The workflow stops.

---

# 📊 Agent Responsibilities

| Agent       | Responsibility      | Input              | Output             |
| ----------- | ------------------- | ------------------ | ------------------ |
| 🔍 Explorer | Discover evidence   | URL / User Flow    | Exploration Report |
| 🏗 Builder  | Generate automation | Exploration Report | Playwright Tests   |
| ▶️ Runner   | Execute tests       | Specs              | Execution Report   |
| 🩺 Debugger | Diagnose failures   | Logs & Traces      | Debug Report       |

---

# 🏆 What Makes This Different?

| Traditional Framework       | Agent-Driven Harness              |
| --------------------------- | --------------------------------- |
| Tests created manually      | Tests generated from evidence     |
| Selectors often guessed     | Selectors must be discovered      |
| Failures fixed manually     | Debugger agent analyzes failures  |
| Knowledge lost between runs | Artifact-based memory             |
| No escalation model         | Human escalation after 3 failures |
| Weak traceability           | Full evidence chain               |

---

# 📁 Artifact-Based Memory

Agents do not depend on chat history.

Instead they communicate through structured artifacts:

```text
Explorer
   ↓
exploration-report.json

Builder
   ↓
build-report.json

Runner
   ↓
execution-report.json

Debugger
   ↓
debug-report.json
```

Artifacts become the source of truth.

This eliminates context loss between agent sessions.

---

# 🎯 Success Criteria

A feature is considered successfully automated only when:

✅ Explored using live browser evidence

✅ Converted into Playwright automation

✅ Executed successfully

✅ Validated through structured reports

✅ Traceable to original evidence

✅ No hallucinated selectors or assumptions exist anywhere in the workflow

---

### ⭐ Reliability Is a Feature

This project is intentionally designed to constrain AI agents.

Because in test automation:

> A reliable agent with constraints is more valuable than a powerful agent that guesses.

---

# 🚀 What Happens When You Run `npx playwright test`?

When a human or the Orchestrator executes `npx playwright test`, the **Runner Agent Phase** takes control. Here is exactly what happens under the hood:

### 1. Configuration & Discovery
Playwright reads the rules in `playwright.config.ts` (e.g., timeouts, browser configurations, output directories) and discovers the test specs generated by the **Builder Agent** in `playwright/tests/`.

### 2. The `BasePage` Gatekeeper
As the tests run, they interact with Page Objects. Every Page Object in this architecture extends `playwright/utils/base-page.ts`.
- `BasePage` acts as a strict runtime interceptor.
- Before executing any locator (e.g., `this.getLocator('.btn')`), `BasePage` checks it against the `docs/selector-policy.md`.
- If an illegal selector (like an XPath or generic CSS class) is detected, `BasePage` immediately throws an error and fails the test. This completely blocks hallucinated locators from executing.

### 3. Artifact Collection
If a test fails, Playwright is configured to automatically capture hard evidence:
- **Screenshots** at the exact moment of failure.
- **Video Recordings** of the entire test flow.
- **Trace Viewer Archives** containing full DOM snapshots and network logs.

### 4. Output & Handoff
Playwright compiles the results into:
- A human-readable **HTML Report** (`artifacts/execution-reports/html-report`).
- A highly structured **JSON Execution Report** (`artifacts/execution-reports/playwright-report.json`).
- The **Runner Agent's** job is now done. The Orchestrator picks up the JSON execution report and hands it to the **Debugger Agent** for analysis.

---

# 🏗️ Implementing This Architecture in New Projects

If you want to apply this Agent-Driven Test Harness architecture to a completely new project from scratch, follow these exact steps:

1. **Establish the Policy Foundation:** 
   Create a `docs/` folder. Write and store your `selector-policy.md` and `escalation-policy.md`. Both human engineers and AI Agents must use these as their absolute source of truth.
   
2. **Implement the Gatekeeper (`BasePage`):** 
   Create your test automation framework (e.g., Playwright). Immediately build a Base Class (`base-page.ts`) that overrides the standard locator methods. Add regex checks inside this class to instantly throw errors if forbidden selectors are used.

3. **Set Up the Artifacts Directory:** 
   Create an `artifacts/` directory with subfolders for `exploration-reports`, `build-reports`, `execution-reports`, and `debug-reports`. Your agents must be strictly prompted to read and write from these directories rather than relying on LLM chat history.

4. **Deploy the Agent System Prompts:** 
   Create an `agents/` directory containing the markdown instruction sets for your Explorer, Builder, Runner, and Debugger agents. Ensure their instructions explicitly forbid guessing or hallucinating.

5. **Build the Orchestrator Script:** 
   Create a Python or Node.js orchestrator (using frameworks like AutoGen, LangChain, or simple API calls) that sequentially triggers your LLMs, passing the JSON artifacts between them, and looping back to the Explorer Agent whenever the Debugger returns `REQUIRES_REEXPLORATION`.


# 🏛️ Architecture Overview

The platform follows a **Harness Engineering** model where AI agents operate inside a controlled environment rather than acting independently.

```text
                    ┌──────────────────┐
                    │ Human Request    │
                    └─────────┬────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ Orchestrator     │
                    │ Workflow Engine  │
                    └─────────┬────────┘
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
 ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
 │ Explorer    │ --> │ Builder     │ --> │ Runner      │
 │ Agent       │     │ Agent       │     │ Agent       │
 └─────────────┘     └─────────────┘     └──────┬──────┘
                                                 │
                                                 ▼
                                        ┌─────────────┐
                                        │ Debugger    │
                                        │ Agent       │
                                        └──────┬──────┘
                                               │
                             ┌─────────────────┴──────────────┐
                             ▼                                ▼
                   Re-run Fixed Test              Re-Explore Application
```

---

# 🎯 Design Principles

This platform is built around five core engineering principles:

### 1️⃣ Evidence Over Assumptions

Every generated locator, URL, assertion, and test step must originate from verified browser evidence.

### 2️⃣ Reliability Over Autonomy

Agents are intentionally constrained to prevent incorrect automation generation.

### 3️⃣ Structured Communication

Agents communicate exclusively through JSON artifacts.

### 4️⃣ Explainable Decisions

Every generated test step can be traced back to its originating evidence.

### 5️⃣ Human Escalation

After repeated failures, the workflow escalates to engineers instead of continuing blindly.

---

# 🚀 Quick Start

## Prerequisites

* Node.js 20+
* npm 10+
* Playwright
* Git

## Installation

```bash
git clone <repository-url>

cd HarnessDrivenAutomation

npm install

npx playwright install --with-deps
```

## Execute All Tests

```bash
npx playwright test
```

## Execute Single Test

```bash
npx playwright test playwright/tests/ecommerce.spec.ts
```

## Open HTML Report

```bash
npx playwright show-report
```

---

# 🔧 Technology Stack

| Category          | Technology                   |
| ----------------- | ---------------------------- |
| UI Automation     | Playwright                   |
| Language          | TypeScript                   |
| Architecture      | Agent-Based                  |
| Validation        | JSON Schema                  |
| CI/CD             | GitHub Actions               |
| Reporting         | Playwright HTML Reports      |
| Debugging         | Trace Viewer                 |
| Design Pattern    | Page Object Model            |
| Orchestration     | LangChain / AutoGen / Custom |
| Reliability Model | Harness Engineering          |

---

# 📋 End-to-End Lifecycle

A complete automation request passes through multiple controlled stages.

### Step 1 — Exploration

```text
URL
 ↓
DOM Discovery
 ↓
Selector Validation
 ↓
Exploration Report
```

Output:

```json
{
  "scope": "Add product to cart",
  "urls": [],
  "selectors": [],
  "networkCalls": []
}
```

---

### Step 2 — Build

```text
Exploration Report
 ↓
Page Objects
 ↓
Playwright Tests
 ↓
Build Report
```

---

### Step 3 — Execution

```text
Playwright Tests
 ↓
Execution
 ↓
Screenshots
 ↓
Videos
 ↓
Traces
 ↓
Execution Report
```

---

### Step 4 — Debugging

```text
Execution Report
 ↓
Failure Analysis
 ↓
Classification
 ↓
Patch or Re-Explore
```

---

# 🔐 Selector Validation Strategy

The framework enforces strict locator quality standards.

### Allowed Order

```text
1. data-testid
2. data-test
3. data-cy
4. data-*
5. role selectors
6. aria-label
7. labels
8. visible text
```

### Forbidden Selectors

```text
❌ XPath

❌ nth-child

❌ Positional Selectors

❌ Generated IDs

❌ CSS Classes

❌ Dynamic Styling Hooks
```

Any violation immediately fails execution.

---

# 📊 Sample Failure Classification

| Failure Type        | Action                 |
| ------------------- | ---------------------- |
| SELECTOR_FAILURE    | Re-explore DOM         |
| ASSERTION_FAILURE   | Review requirements    |
| NETWORK_FAILURE     | Validate API response  |
| AUTH_FAILURE        | Re-authenticate        |
| DATA_FAILURE        | Verify test data       |
| ENVIRONMENT_FAILURE | Retry environment      |
| APPLICATION_BUG     | Escalate to developers |

---

# 📈 Benefits for QA Teams

### Faster Test Creation

Generate Playwright tests directly from discovered evidence.

### Reduced Flakiness

Strict selector policies eliminate fragile locators.

### Improved Traceability

Every automation step has a source of truth.

### Better Debugging

Failure classification accelerates root-cause analysis.

### Consistent Standards

All agents follow the same engineering policies.

### Scalable Automation

Supports large-scale automation generation through orchestration.

---

# 🔄 CI/CD Integration

The platform integrates seamlessly with GitHub Actions.

```text
Push
 ↓
Build
 ↓
Playwright Execution
 ↓
Artifacts Upload
 ↓
HTML Reports
 ↓
Trace Files
 ↓
Failure Analysis
```

Artifacts collected:

✅ Screenshots

✅ Videos

✅ Traces

✅ Execution Reports

✅ Debug Reports

---

# 🗺️ Future Roadmap

### Phase 1 (Current)

* Explorer Agent
* Builder Agent
* Runner Agent
* Debugger Agent

### Phase 2

* API Contract Validation Agent
* OpenAPI Validation
* AJV Schema Validation

### Phase 3

* Self-Healing Recommendations
* Risk-Based Test Prioritization
* Coverage Analysis Agent

### Phase 4

* Multi-Agent Parallel Execution
* Cross-Browser Optimization
* AI-Powered Test Impact Analysis

---

# 🤝 Contributing

Contributions are welcome.

Before submitting changes:

1. Follow the selector policy.
2. Preserve artifact-based communication.
3. Do not introduce hallucinated locator generation.
4. Update schemas when introducing new artifacts.
5. Ensure all Playwright tests pass.

---

# 📜 License

This project is intended as a reference implementation of Harness Engineering principles applied to modern AI-assisted test automation using Playwright.

