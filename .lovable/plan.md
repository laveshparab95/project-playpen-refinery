# RM app — Field insight multi-select dropdowns

Scope: `public/prototype.html` only.

## Problem
In "Log a field insight" (RM app), the four multi-select fields — AHQ, Department responsible, Feedback type (L2), Team impacted — render as permanently open checkbox lists, taking up a lot of vertical space.

## Change
1. Build one reusable collapsed multi-select dropdown:
   - Tap the field to expand/collapse the option list.
   - Options keep checkboxes and multi-select behavior.
   - Selected values appear as removable chips on the closed field, with a small count.
2. Apply it to all four fields in the insight form:
   - AHQ
   - Department responsible
   - Feedback type (L2) — options still depend on the selected departments; removing a department still clears its L2 picks.
   - Team impacted
3. Everything else on the form stays as-is: Actual feedback and Recommendation text areas, attachments (multiple photos/files), and the submit button staying disabled until all required fields are filled.

## Note
The same dropdown treatment for the "Plan a day" Location field was approved earlier and can be built in the same pass using the shared component.

## Technical notes
- New `ddBox(label, key, options, required)` helper with an open/closed state map; `insTog` logic (including dependent L2 filtering) is reused unchanged.
- Verified in the preview after building.
