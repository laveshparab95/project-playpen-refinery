# Field insight — new 7-step form

The "Log a field insight" screen is rebuilt around a new workflow. All changes stay in the prototype file; the manager portal is untouched.

## What the screen becomes

The current Area / Problem statement / Evidence fields are removed, along with the blue explainer at the top. In their place, in order:

1. **AHQ** — dropdown, multi-select, chosen ones shown as chips.
2. **Department responsible** — dropdown, multi-select (IT, Operations, Kazi Plan, Data, CC), chips.
3. **Feedback type (L2)** — dropdown whose options depend on the departments picked in step 2; only shows once at least one department is chosen, and clears choices that no longer apply if the departments change.
4. **Feedback** — text box, required.
5. **Teams impacted** — dropdown, multi-select, chips.
6. **Recommendation** — text box, required.
7. **Attachments** — one field that accepts photos and files, one or many; each added item is listed with a remove option.

Submit stays disabled until AHQ, department, feedback type, feedback and recommendation are filled. On submit the existing confirmation box appears.

## Sample lists (placeholders until real config arrives)

- Departments: IT, Operations, Kazi Plan, Data, CC.
- L2 feedback per department, e.g. IT — App issue, Device issue, Login/access, System downtime; Operations — Stock & supply, Logistics, Field process, Retailer onboarding; Kazi Plan — Commission, Incentive scheme, Payout delay; Data — Report accuracy, Missing data, Dashboard access; CC — Customer complaint, Escalation handling, Response time.
- Teams impacted: Agents, Retailers, Customers, RM team, Cluster team, Support/CC, Finance.

## Notes

- AHQ options come from the AHQ list already used elsewhere in the prototype.
- Attachments are simulated (file picker records names/thumbnails); no upload backend.
- Verified in the preview after building.
