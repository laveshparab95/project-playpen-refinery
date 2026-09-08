# RM App — Home screen edits

Changes to the RM App home screen in the prototype. Noted now; build when you say so.

## 1. Unplanned-days alert
Replace the long warning with a compact one-liner, no link:
"3 days unplanned — plan them within 2 days" (count fills in automatically; hidden when nothing is unplanned).

## 2. Approval message
Remove the "plan days awaiting approval from Lilian Wambui (ZTM)" banner entirely.

## 3. Manager priorities
Remove the priorities card and heading from Home, and remove the priorities page from the RM App altogether (including the link to it).

## 4. Meeting cards (Today / Coming up)
- Remove the "Today" / "Scheduled" status pill.
- Remove the course line (Product knowledge, SEO/certification, etc.); keep location and invited-agent count.
- Show multiple interventions per card as a wrapping row of chips (e.g. INT-014, INT-007) — a compact row reads best on a phone and keeps card height down. Sample data gets a second intervention so this is visible.

## 5. Quick actions → floating button
Remove the Quick actions grid. Add a floating "+" button above the bottom tab bar that expands into a menu with the same four actions:
- Schedule a training
- My interventions
- Log a field insight (R7)
- End-of-day report

Tapping the button opens/closes the menu; tapping outside or picking an action closes it.

## Notes
- All edits stay inside `public/prototype.html`; no other screens change except removing the priorities page and its entry points.
- Verified visually in the preview after building.
