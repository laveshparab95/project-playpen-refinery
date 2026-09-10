# Export prototype content for Claude PRD writing

## Goal
Make the RM App v2 prototype content readable by Claude so it can help write a Product Requirements Document (PRD). The raw HTML file is difficult to upload/consume, so we will extract the prototype into a clean, structured text document.

## Deliverable
A single markdown file exported from `public/prototype.html` containing:
- High-level product overview and scope (RM App + Manager Dashboard)
- RM App modules and flows: Home, Plan (PJP), Interventions, Schedule training, Start training, Agents, Trainings, KPIs, Field insights, End-of-day report
- Manager Dashboard modules and flows: Overview, Plan Approvals, Capacity, Interventions, View trainings, Team calendar, Daily reports, Field insights, Team KPIs
- Key data models and sample seed data (agents, KPIs, interventions, trainings, approvals, field insights)
- UI/UX notes: navigation patterns, forms, filters, status labels, modals, toasts
- Feedback rail and export notes feature (kept for context)

## Approach
1. Read `public/prototype.html` and parse its structure.
2. Extract the reference data, screen registry, and render functions into prose + tables.
3. Preserve exact field labels, statuses, KPI codes, and intervention IDs where relevant for the PRD.
4. Write the output to `/mnt/documents/RM-App-v2-Prototype-PRD-Source.md`.
5. Attach the markdown file so the user can upload it to Claude.

## Out of scope
- No changes to the prototype itself.
- No new features or code changes in the project.
- The output is a one-time reference document, not a living spec.
