# RM App — Pending edits (all modules)

## 1. Home screen (follow-up)

### 1.1 Meeting-card intervention body
On the Home "Today" / "Coming up" cards that already show multiple intervention chips (e.g. INT-014, INT-016), also display the intervention short title/body so the card does not show only the code.

## 2. Schedule a meeting

### 2.1 Location field
- Keep the Location field as a text box.
- Placeholder text: "Enter the exact venue detail".

### 2.2 Pick on Google Maps
- "Pick on Google Maps" opens a full-page simulated Google Maps search screen.
- The RM types a location in a search bar, sees simulated results, taps one, and is returned to the schedule form with the selected venue filled into the Location field.

### 2.3 Multi-select interventions
- Replace the single intervention dropdown with a checkbox list.
- The RM can select multiple interventions.
- All selected interventions carry through to the review / created training record and appear as chips.

### 2.4 Step 3 of 4 — agent selection
- Remove the green message at the top of the agent-selection step.
- Replace the smart-list chips with one expandable multi-select filter.
- The filter uses ALL/intersection semantics: only agents matching every selected list are shown.
- Include a "Clear all" option and a match count.
- Remove "AHQ" from agent cards (e.g. "Kisumu is AHQ" becomes "Kisumu").
- Keep "Select all shown".
- Remove "Select all in <AHQ>".

### 2.5 Remove "Everyone in my region"
- Remove the "Everyone in my region" message above the agent search bar.

## 3. Start a meeting

### 3.1 Step 1 of 6 — Check in
- Remove the blue explainer line above the "Check in here" button.
- Remove the "Simulate check-in far from venue" button.
- Tapping "Check in here" always behaves like the old simulate button: it shows the distance warning and the required "Why the location changed" box.
- Remove the line "Agents check in separately on their own app once you submit."

### 3.2 Step 2 of 6 — Attendance
- Keep the Present / Absent / Walk-ins counts at the top.
- Split the two lists into two tabs below the counts: "Invited" and "Uninvited".
- Each tab shows only its own list (invited agents with present/absent checkboxes; uninvited with search box and add checkboxes).
- Remove the line "You asked for this — walk-ins can be added here and they count toward attendance and coverage."

### 3.3 Review meeting screen
- Remove the blue "↳ Rolls up into INT-014 — coverage will move from 12 to 18 of 40" message.

### 3.4 Reschedule meeting
- Remove the blue notification message from the reschedule pop-up; everything else stays.

## 4. End of day report

### 4.1 Report header
- Remove the green message at the top of the End of day report screen.
- Remove the helper text "Pre-filled with your name and date. Prompted at 6pm if you haven't submitted."

### 4.2 Submit report button
- Make the "Submit report" button active (no longer disabled).
- On tap, display a confirmation box stating that the report has been submitted.

## 5. My interventions

### 5.1 Status card on My interventions page
- Add a status card/filter on the My interventions list page for "Approval pending".
- Remove the "Planned" status label; it is no longer valid.
- Rename any existing "Planned" intervention status to "Approval pending".
- Update seeded data: INT-016 changes status from "Planned" to "Approval pending".

### 5.2 Remove blue info banner
- Remove the blue banner text box on the My interventions list page: "An intervention is the container; a training is one session inside it. Several sessions roll up into one coverage number — so a programme is only complete at full coverage, not at 40%."

### 5.3 Intervention detail screen
- Remove the "Did it work?" section completely from the intervention detail view (Baseline + 30-day read).

## Notes
- All edits stay in `public/prototype.html`; the manager portal is untouched.
- Verified in the preview afterwards.
