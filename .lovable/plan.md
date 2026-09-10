# RM App fixes — location dropdown + field insight dropdowns

Scope: `public/prototype.html` only. Items 2 (plan message) and 3 (check-in failed on training details) are dropped per your answers.

## 1. Plan a day — Location field
- Replace the always-open AHQ checkbox list with a collapsed dropdown field.
- The closed field shows the selected AHQs as chips (or placeholder text when empty).
- Tapping the field expands an inline checkbox list of all AHQs; tapping again (or a Done affordance) collapses it.
- Selection behaviour, validation (at least one AHQ required) and submitted data stay exactly as today — only the presentation changes.

## 2. Field insights — dropdown fields
- Convert the four list fields — AHQ, Department responsible, Feedback type (L2), Teams impacted — from always-open checkbox lists into collapsed dropdowns, same pattern as above:
  - Closed state shows selected values as chips.
  - Tap to expand the checkbox list, tap again to collapse.
- Existing behaviour preserved: multi-select on all four; L2 options still depend on the selected departments and invalid L2 choices are still cleared when departments change; validation (all four required) unchanged.
- Actual feedback, Recommendation and Attachments sections are untouched.

## Technical notes
- One shared expandable multi-select helper in the prototype, reused by both screens; each dropdown keeps its own open/closed state so re-renders don't collapse other fields.
- Verified in the preview after building (Plan a day + Field insight screens, including validation and submission).
