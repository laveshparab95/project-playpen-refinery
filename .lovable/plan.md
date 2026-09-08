# RM App — Home fix + Schedule a meeting edits

## 0. Home screen fix
Meeting cards show each intervention as code plus its short title (e.g. "INT-014 · Kisumu inactive agents") instead of the bare code.

## 1. Step 1 — Location
- Keep the plain text box; placeholder becomes "Enter the exact venue detail".
- "Pick on Google Maps" becomes a full page (not a pop-up): a search bar at the top, a simulated map, matching-place results, and a "Use this location" action that fills the venue field and returns to step 1.

## 2. Step 1 — Interventions
Replace the single dropdown with a checkbox list of open interventions so several can be linked to one training. The review step and the created training record both carry all chosen interventions, and home cards show them as chips.

## 3. Step 3 — Who's coming
- Remove the green "No minimum enforced" banner.
- Remove the "Everyone in my region" line above the search bar.
- Replace the smart-list chip row with one multi-select filter: a compact expandable filter control listing the same lists; picking several narrows to agents matching all of them, with a clear-all option and a count of matches.
- Agent rows no longer show the AHQ name.
- Keep "Select all shown"; remove "Select all in <AHQ>".

## Notes
- All edits stay in `public/prototype.html`.
- Verified in the preview afterwards, including that the manager portal is unaffected.
