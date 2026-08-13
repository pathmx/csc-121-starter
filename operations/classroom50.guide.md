# Classroom 50 setup

Use this as the first assignment-distribution pilot, not as a hidden curriculum
dependency.

GitHub Classroom stops operating on August 28, 2026. Classroom 50 is the free,
open-source successor supported by the Fifty Foundation and identified by
GitHub Education as its official open-source partner. Its web interface can
create individual or group assignments, attach starter code, run GitHub
Actions-based autograding, collect submissions, and support inline feedback.

Current documentation:

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

## Pilot one assignment

1. Open the Classroom 50 web teacher interface.
2. Connect the course organization using the permissions shown by the current
   guide.
3. Create a test class with a fictional or instructor-controlled learner.
4. Copy `assignment-templates/practice` into a standalone GitHub starter
   repository.
5. Create one individual assignment from that starter.
6. Accept it using the test learner.
7. Run `python week-01/lab.py`, commit a change, and push.
8. As the instructor, locate the submission and leave one inline comment.
9. Record the result and any permission friction in the private term repo.

Only after this loop works should you create the live class or later
assignments.

## Recommended repository set

Keep repository administration modest:

1. one recurring practice/lab repository;
2. one Unit 1 projects repository;
3. one isolated Unit 1 exam repository;
4. one recurring Unit 2 applied-project repository;
5. one isolated Unit 2 exam repository;
6. one final-project repository.

This preserves controlled exams and useful commit histories without asking
students to accept a new repository every week.

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
