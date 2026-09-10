# Make the latest prototype actually load (cache fix)

All five items you listed are already built in the prototype file:

- Plan Approvals shows a table per day with headers KPI / Activities planned / Intervention / What exactly will you do.
- Capacity week drill-down uses the same headed table, skips Saturday and Sunday unless the RM planned them (tagged "Weekend"), and shows the "Plan changed" date and reason.
- Manager training detail shows a map pin link to Google Maps instead of raw latitude/longitude.
- Field insights is a card list with a "View more" detail page.

What you are seeing is an older copy of the prototype page kept by the browser. The prototype opens as a standalone page, and the browser reuses its saved version instead of fetching the new one.

## Fix

1. Add no-cache instructions to the prototype page itself so the browser always fetches the newest version.
2. Add a version marker to the "Open prototype" link on the landing page, updated whenever the prototype changes, so the link points at a fresh address.
3. Show a small build stamp (date and time) at the bottom of the prototype so it is obvious which version is on screen.

## Verification

Open the prototype in a clean browser session and confirm: approval headers visible, capacity drill-down headers plus weekend handling plus plan-changed details, map pin in training detail, and the insights card list with its detail page.
