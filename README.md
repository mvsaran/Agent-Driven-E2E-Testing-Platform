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
