# RM App — Start a meeting module edits

## 1. Step 1 of 6 — Check in
- Remove the blue explainer line above the "Check in here" button.
- Remove the "Simulate check-in far from venue" button. Tapping "Check in here" now itself captures a location away from the scheduled venue: it shows the distance warning and the required "Why the location changed" box, exactly as the old simulate button did.
- Remove the line "Agents check in separately on their own app once you submit."

## 2. Step 2 of 6 — Attendance
- Keep the Present / Absent / Walk-ins counts at the top.
- Below them, split the two lists into two tabs: "Invited" and "Uninvited". Each tab shows only its own list (invited agents with the present/absent checkboxes; uninvited with the search box and add checkboxes).
- Remove the line "You asked for this — walk-ins can be added here and they count toward attendance and coverage."

## 3. Review meeting screen
- Remove the blue "Rolls up into INT-014 — coverage will move from 12 to 18 of 40" message.

## 4. Reschedule meeting
- Remove the blue notification message from the reschedule pop-up; everything else stays.

## Notes
- All edits stay in `public/prototype.html`; the manager portal is untouched.
- Verified in the preview afterwards.
