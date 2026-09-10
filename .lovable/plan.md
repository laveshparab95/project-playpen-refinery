# RM App — next round of edits

All changes stay in the prototype file; the manager portal is untouched.

## 1. Intervention linking
Remove the line "Linking it means this session's attendance counts toward those interventions' coverage."

## 2. Start a meeting — check-in
- Step 1 shows a "Check in here" button again (no auto check-in on opening the screen).
- After tapping it: the timestamp is recorded, the warning "You're 640 m from the scheduled location (100 m tolerance). Explain why — you won't be blocked." appears, and the required "Why the location changed" box shows below it.
- Continue stays blocked until a reason is typed.

## 3. Plan a day — new plan
- KPI block: activity categories are hidden until a KPI is picked, then only the categories that belong to that KPI are listed. Changing the KPI clears choices that no longer apply.
- Location becomes a dropdown of AHQs with multi-select (chips for the chosen ones).
- Each KPI block gains a text box labelled "What exactly will you do?"; that text also shows inside the matching KPI card on the plan detail page.

## 4. Plan a day — list page
- The rejected-day alert gets a red background.
- Saturdays are not shown by default; a Saturday appears in the list only once the RM has planned that day. Planning a Saturday is allowed (date picker no longer excludes it).
- Remove the "✈️ Nn" nights-away text from the day rows.

## 5. Plan a day — plan detail page
- Travel becomes two separate rows: "Travel route" and "Travel nights".
- For a rejected day, show a rejection block with "Reason" and "Rejected by" (sample data added for the rejected day).

## 6. Training detail
When the check-in location was rejected (too far from the venue), show the distance from the scheduled venue and the reason the RM gave, next to the location row.

## 7. Trainings list card
Replace "👥 8/10 attended" with the actual approved attendance, e.g. "👥 7 agents attended" — same number as the Approved count on the detail page.

## Notes
- Seeded data gains a rejection reason/approver for the rejected plan day and a far-location reason on the relevant past training so the new screens are visible.
- Verified in the preview after building.
