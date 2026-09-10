# Manager dashboard + plan-change follow-ups

Scope: `public/prototype.html` only.

## 1. Plan Approvals — per-KPI blocks
- Each pending day still shows date, location, travel and the Approve/Reject buttons on the top row.
- Below it, one block per KPI instead of a flat chip strip, with clear headers:
  - KPI (the KPI code and name)
  - Activities planned for that KPI
  - Intervention linked (or "None")
  - "What exactly will you do" — the RM's plan note for that KPI
- Approval sample data gains per-KPI activity/intervention/note groupings so the block layout reads correctly.

## 2. Capacity — week drill-down
- Same per-KPI block layout and headers as Plan Approvals, including the RM's plan note per KPI.
- Saturday and Sunday no longer appear in the week list unless the RM actually planned that day; when planned, the day shows normally with a "Weekend" tag.
- New day status **Plan changed**, shown alongside Approved / Pending / Not planned. A changed day additionally shows:
  - the date the plan was changed
  - the RM's reason for the change

## 3. RM app — change an approved plan
- On an approved day's detail, the RM can edit the plan (same planning screens as today).
- On saving a change to an approved day, a required "Reason for change" box appears; the change date is set to the day it was saved.
- The day's status becomes **Plan changed** and it carries the reason and change date through to the manager's capacity drill-down.

## 4. Manager training detail — maps link
- Remove the raw GPS latitude/longitude text.
- Replace it with a map pin icon next to the location that opens Google Maps at those coordinates in a new tab.

## 5. Manager Field insights — new layout
- Replace the wide table with a card list: one card per insight showing RM, AHQ(s), date, department chips, L2 feedback type, teams impacted, status, a short preview of the feedback, and a "View details" button (plus Close for open insights).
- "View details" opens a full page for that insight with generous space for the long text:
  - Header: insight ID, status, who raised it, AHQ, date
  - Sections: Departments, Feedback type (L2), Teams impacted, Actual feedback (full text), Recommendation (full text), Attachments as links
  - Close action on the page for open insights; closed insights show the closing comment and who closed it.
- A back link returns to the insights list.

## Technical notes
- Approval and plan records gain per-KPI block arrays (kpi, cats, int, note) so approvals, capacity detail and the RM view share one shape.
- Plan records gain `changedOn` and `changeReason`; status value `changed` added to the plan status handling.
- Weekend days in the capacity week list are only rendered when a plan exists for them.
- Verified in the preview after building.
