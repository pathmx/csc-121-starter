---
type: guide
status: starter
---

# Agent-assisted authoring

The repository teaches Codex and Claude Code two local workflows:

- `onboard-csc-121-instructor` leads the first tour and authoring lab.
- `prototype-course-material` drafts and reviews lessons, labs, assignments,
  assessments, and teaching weeks.

Start with:

> Onboard me and lead the short PathMX authoring lab.

Then try a focused authoring request:

> Prototype a 40-minute lab where beginners use `if` statements to make a
> simple decision. Put it in `paths/drafts/`, state assumptions, and leave it
> unlinked.

Or ask for a complete teaching slice:

> Prototype one week with a lesson, supported lab, small assignment, and
> self-check. The learners know variables and input. Do not publish it.

---

## Instructor boundaries

The agent can reduce blank-page work, check links, run the Player, and notice
missing instructions. The instructor remains responsible for disciplinary
accuracy, pacing, policy, accessibility, student context, and final approval.

Do not put grades, accommodations, private student work, credentials, or other
protected data into prompts or repository files. Do not use an agent as the
final grader. Ask before linking a draft into the learner course and before
running `pathmx share`.
