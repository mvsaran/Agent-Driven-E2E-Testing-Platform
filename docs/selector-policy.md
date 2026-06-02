# Selector Policy

## Priority List

Selectors must be chosen strictly in the following order:

1. `data-testid`
2. `data-test`
3. `data-cy`
4. `data-*`
5. `role` (Accessible Roles)
6. `aria-*` selectors
7. `label`
8. `visible text`

## Forbidden Selectors

The following selector types are strictly forbidden and will cause the framework to reject the test definition:

- `XPath` (e.g., `//div/span[1]`)
- `nth-child`
- Positional selectors
- CSS classes (e.g., `.btn-primary`)
- Generated/dynamic IDs (e.g., `#id-23948`)

## Validation

The Base Page object in the Playwright framework includes runtime checks to catch violations of this policy.
