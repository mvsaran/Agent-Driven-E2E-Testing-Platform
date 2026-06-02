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
