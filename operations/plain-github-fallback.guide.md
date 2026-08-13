# Plain GitHub assignment fallback

The later project units can operate without a classroom product. This route is
more manual but uses ordinary GitHub repositories and keeps the curriculum
independent of one service. The Thonny foundations unit should continue using
the simpler LMS file workflow.

## Create starter repositories

For each later project directory under `assignment-templates/` that you plan
to use:

1. copy it into a clean temporary folder;
2. initialize Git;
3. commit the baseline;
4. create a private repository in the course organization;
5. optionally mark it as a template repository in GitHub settings.

Example after copying the Unit 2 project template:

```sh
git init
git add .
git commit -m "Create CSC-121 applied project starter"
gh repo create COURSE_ORG/csc-121-applied-starter --private --source=. --push
```

Replace `COURSE_ORG` explicitly. Do not paste a command containing a real
student name into shared documentation.

## Create a student repository

The lowest-complexity manual options are:

- create a private repository from the template in the course organization,
  then add the student as a collaborator; or
- let the student create a private repository from a provided starter and add
  the instructor as collaborator, if institutional policy permits student
  ownership.

Use a documented naming convention such as:

```text
csc-121-applied-GITHUB_USERNAME
csc-121-final-GITHUB_USERNAME
```

Never put a student number, grade, disability information, or other sensitive
identifier in the repository name.

## Collect and review

Maintain a private term-only table with:

- learner's official roster identifier;
- GitHub username;
- repository URL for each role;
- last review date;
- official grade location.

Review code and history through GitHub or a local clone. Leave feedback in a
pull request, issue, or approved LMS. The LMS remains the grade authority.

## Optional automation

A small `gh` script may create or clone repositories after the manual loop is
proven. Keep it in the private term repository, require an explicit
organization and repository role, print a dry-run plan, and never store tokens
in the script. Do not recreate a bespoke classroom platform inside this
Starter.
