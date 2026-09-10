# Manager Dashboard (CTM / ZTM) edits

All changes stay in the prototype file, manager portal side only. The RM app is untouched except for the one item noted in section 8.

## 1. Overview
- Remove the "Needs attention" card entirely. The capacity card beside it widens to fill the row.

## 2. Priorities
- Remove the Priorities module: sidebar entry, screen, and the "New priority" popup.

## 3. Plan Approvals
- Rename the module to "Plan Approvals" (sidebar and page title).
- Remove the ID column.
- Each pending day becomes a two-row block inside the same date section: first row shows date, location, travel and the decision buttons; second row lists all KPIs, all activity categories and all linked interventions for that day as chips.
- Add a filter bar above the list with Zone and Region dropdowns (multi-select) plus Clear all; the list filters by the submitting RM's assigned zone and region.
- Sample data gains multi-KPI / multi-activity / multi-intervention days so the new layout is visible, and each RM gets a zone and region.

## 4. Capacity
- Remove the blue banner, the AHQ column, the Load column, and the "Try it: can we fit a new programme?" card.
- Rename "Total days" to "Days planned".
- Week columns (Wk 1–4) show percentage occupancy instead of day counts, colour-coded (green room, amber tight, red over). The exact target denominator will come from the BI dashboard; for the prototype the percentage is derived from a fixed 5-day working week with a note that the real denominator is BI-provided.
- Add a Score column, same score value used in the current My team table.
- Clicking a week percentage opens a new full page for that RM/week (see below).

### 4d — Day / week detail page
- Opens as its own screen with a back link to Capacity.
- Header: RM name, the week and its occupancy.
- Body: the planned days for that RM, laid out like the RM app's plan-day detail — date, status, locations, travel, and a stacked card per KPI block with its activity chips and linked intervention.
- Below each day, a "Meetings scheduled" list with venue, time and intervention chips.

## 5. My team
- Remove the My team module (sidebar entry and screen).

## 6. Team calendar
- Each day cell shows all KPIs planned for that RM/day (small stacked chips) rather than one activity label.
- The grid covers the 1st to the 31st of the month with horizontal scrolling, RM names frozen on the left.

## 7. Daily reports
- Remove the blue message at the bottom of the page.

## 8. Interventions — New intervention
- Scope drives the geography fields: choosing National hides the Zone field; Zone scope shows only the Zone dropdown; Region scope shows Zone then Region; AHQ scope shows Zone, Region and AHQ; Cluster scope shows Zone, Region, AHQ and Cluster. Each dropdown cascades from the previous.
- Remove the Budget field.
- Remove the Target headcount field from the main form. After "Create & cascade", a second step asks the ZTM to enter headcount per geography:
  - National scope → one headcount row per zone
  - Zone scope → one row per region
  - AHQ or Cluster scope → still one row per region
  - The total is used as the intervention's target headcount.
- Remove the "Baseline (metric now)" field from this form, and remove the baseline field from the RM app's raise-intervention form as well.

## 9. Interventions — review queue
- Interventions listed as "Planned" now read **Approval pending** (list, detail and seeded data).
- Each Approval pending row gets a **Review** button opening a detail view of everything the RM entered (title, audience, KPI, scope/geography, mode, root cause, raised by, date).
- The review view offers three decisions:
  - **Approve** — a follow-up form for the manager-only fields not captured by the RM (scope + cascading geography, target headcount per geography as in section 8, dates, owner). On save the intervention becomes Active.
  - **Reject** — a required rejection reason; the intervention becomes Rejected and the reason shows on its card.
  - **Merge with another intervention** — the manager picks an existing intervention from a list; the merged record's details are pre-filled and fully editable using the same form as "New intervention". On save the RM's intervention is marked Merged into the chosen ID.

## 10. New module — View trainings
- New sidebar entry showing every training conducted across the zone, one row per meeting.
- Columns: RM name, AHQ, date & time, agents attended, interventions covered, and a **View more** button.
- View more opens a full detail page mirroring the RM app's training detail: venue and GPS check-in, attendance submitted / approved (with the per-agent popup), intervention chips, training photo and video.
- Filter bar above the table: Zone, Region and Area (multi-select) plus Clear all.

## 11. New module — Field insights
- New sidebar entry listing every insight raised by RMs, one row each.
- Row shows: RM who raised it, AHQ, Department, L2 feedback type, the feedback text (truncated with full text on the detail), teams impacted, recommendation, and attachment links.
- Layout: a table with the short fields plus an expandable detail panel for the long feedback/recommendation text, so rows stay readable.
- Each open insight has a **Close** button; it opens a small form where the manager writes a final comment (required) and confirms. The insight then shows as Closed with the closing comment and who closed it.
- Sample insights are seeded, including ones raised from the RM app's new field-insight form so the fields line up.

## Technical notes
- Sample Region, Area and Cluster lists are added alongside the existing AHQ and Zone lists, and each RM in the team data gains a zone and region.
- Capacity week percentages are derived from the existing planned-days data.
- Intervention records gain status values Approval pending / Active / Rejected / Merged plus reason, merge target and manager fields; insights gain status, closing comment and closer.
- Verified in the preview after building.
