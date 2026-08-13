# Classroom 50 setup

Use this only when repository-based project work begins, not for the Thonny
foundations unit and not as a hidden curriculum dependency.

GitHub Classroom stops operating on August 28, 2026. Classroom 50 is the free,
open-source successor supported by the Fifty Foundation and identified by
GitHub Education as its official open-source partner. Its web interface can
create individual or group assignments, attach starter code, run GitHub
Actions-based autograding, collect submissions, and support inline feedback.

Current documentation:

- <https://github.blog/changelog/2026-05-26-github-classroom-sign-ups-are-no-longer-available/>
- <https://github.com/foundation50/classroom50/wiki>
- <https://classroom50.org/>

These external instructions can change. Read the current teacher guide before
configuring a term.

## Prerequisites

- A GitHub account for the instructor.
- A course GitHub organization on Team or Enterprise. Verified educators can
  request the education benefit described in Classroom 50's current guide.
- Organization-owner access for the instructor and a second responsible
  course administrator.
- Student GitHub accounts.

## Pilot one later project assignment

1. Open the Classroom 50 web teacher interface.
2. Connect the course organization using the permissions shown by the current
   guide.
3. Create a test class with a fictional or instructor-controlled learner.
4. Copy `assignment-templates/unit-2-project` into a standalone GitHub starter
   repository.
5. Create one individual assignment from that starter.
6. Accept it using the test learner.
7. Open it in Codespaces, run `python main.py`, commit a change, and push.
8. As the instructor, locate the submission and leave one inline comment.
9. Record the result and any permission friction in the private term repo.

Only after this loop works should you create the live class or later
assignments.

## Recommended repository set

Keep repository administration modest:

1. one recurring Unit 2 applied-project repository; and
2. one final-project repository.

Optionally create one ungraded Git/Codespaces sandbox before the Unit 2
project. Unit 1 files remain in the LMS workflow, and exams remain on paper.
This preserves useful project histories without making repository management
part of every assignment.

## What stays outside the curriculum

Keep class IDs, roster data, assignment URLs, submission exports, and scores in
the private term repository or approved institutional system. Learner-facing
PathMX Sources may link to the current assignment from the private term copy,
but this reusable Starter must remain provider-neutral.

## Operational caution

Classroom 50 stores course state through GitHub organizations, teams,
repositories, permissions, configuration files, Actions, and Pages rather than
a separate always-on classroom database. Some administrative operations happen
only while an organization owner is actively using the tool. Keep the plain
GitHub fallback documented and do not make an automated score the sole grade
authority.
