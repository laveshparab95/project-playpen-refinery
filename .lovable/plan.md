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
- Add a filter bar above the list with Zone and Region dropdowns (multi-select) plus Clear all; the list shows only matching RMs.
- Sample data gains multi-KPI / multi-activity / multi-intervention days so the new layout is visible, and each RM gets a zone and region.

## 4. Capacity
- Remove the blue banner, the AHQ column, the Load column, and the "Try it: can we fit a new programme?" card.
- Rename "Total days" to "Days planned".
- Week columns (Wk 1–4) show percentage occupancy instead of day counts, colour-coded (green room, amber tight, red over).
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
- Scope drives the geography fields: choosing National disables the Zone field; Zone, Region, AHQ or Cluster scope reveals the matching dropdown(s) (Zone → Zone; Region → Zone + Region; AHQ → Zone + Region + AHQ; Cluster → Zone + Region + AHQ + Cluster).
- Remove the Budget field.
- Remove the Target headcount field from the main form. After "Create & cascade", a second step asks the ZTM to enter headcount per geography:
  - National scope → one headcount row per zone
  - Zone scope → one row per region
  - AHQ or Cluster scope → still one row per region
  - The total is used as the intervention's target headcount.
- Remove the "Baseline (metric now)" field from this form, and remove the baseline field from the RM app's raise-intervention form as well.

## Technical notes
- Sample Region and Cluster lists are added alongside the existing AHQ and Zone lists, and each RM in the team data gains a region.
- Capacity week percentages are derived from the existing planned-days data.
- Verified in the preview after building.
