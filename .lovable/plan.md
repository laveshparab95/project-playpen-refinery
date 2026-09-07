# RM App v2 Prototype — Set Up for Module-wise Edits

## Goal
Bring the uploaded single-file prototype (`RM-App-v2-Prototype_1.html`, ~1,700 lines) into the project so the user can review it in the live preview and send edit requests module by module.

## What's in the prototype
- **Mode switcher**: RM App (phone mockup) vs Manager Dashboard (CTM/ZTM desktop)
- **RM App screens**: Home (manager priorities, today/coming up, quick actions), PJP planning, training scheduling wizard (4 steps), run/report flow (check-in, attendance, evidence, submission), agents list, past trainings, directives
- **Manager Dashboard (CTM/ZTM portal)**: sidebar + main panel with its own screen registry
- Shared modal/toast system, feedback sidebar, seeded sample data

## Plan
1. **Import the prototype into the project as-is.** Serve the original HTML at a dedicated route (e.g. `/prototype`) so it behaves exactly like the uploaded file, and make it the home page or link it from home.
2. **Structure for editing.** Keep the prototype as the source of truth in one place; apply each round of edits (content/screens, look & feel, behavior fixes — across both the RM App and Manager Dashboard surfaces) as the user sends them module by module.
3. **Per-edit rounds**: for each module the user describes, update the prototype, verify in the live preview, and confirm before moving to the next module.

## Notes
- No rebuild into React routes for now — the user asked for edits to the existing prototype, not a conversion.
- Each edit round will be verified visually in the preview.
