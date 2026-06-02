# Escalation Policy

## Debugger Retry Loop

The platform features an automated retry loop governed by the Debugger Agent.

1. **Failure Occurs:** The Runner Agent outputs a failure in the `execution-report.json`.
2. **Analysis:** The Debugger Agent categorizes the failure.
3. **Patch or Re-explore:**
   - If a known fix exists (e.g. data cleanup), it proposes a patch.
   - If a DOM change is detected, it flags `REQUIRES_REEXPLORATION` and hands back to the Explorer Agent.

## Escalation Triggers

- **Maximum Retries Reached:** If an individual test or flow fails 3 consecutive times despite debugger intervention, the system triggers `ESCALATE_TO_HUMAN`.
- **Confidence Drop:** If an agent evaluates its confidence as < 95% and cannot acquire the necessary evidence.
- **Unclassified Failure:** If the Debugger cannot identify the root cause among the strict categories.

When `ESCALATE_TO_HUMAN` occurs, the current `debug-report.json` and all relevant trace files are immediately uploaded and sent via notifications (e.g., Slack/Email via CI) to the engineering team.
