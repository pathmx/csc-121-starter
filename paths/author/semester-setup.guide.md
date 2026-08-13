# Semester setup checklist

Complete this checklist in order. The goal is one proven teaching loop before
the whole term begins—not a large stack of untested automation.

## 1. Make a private term copy

- [ ] Create a new private repository from this Starter.
- [ ] Name it for the course and term, such as `csc-121-fall-2027`.
- [ ] Give the co-instructor or department administrator owner access.
- [ ] Confirm that the Starter's Git history contains no student data.

## 2. Update course facts

- [ ] Replace bracketed syllabus values: instructor, term, rooms, office hours,
      email, meeting pattern, and institution-specific policies.
- [ ] Put actual dates in `paths/course/schedule.path.md`.
- [ ] Decide whether the suggested grading weights fit the department.
- [ ] Publish accessibility, accommodation, integrity, and late-work policies
      through the institution's approved language.

## 3. Prove PathMX locally

```sh
bun install --frozen-lockfile
bun run check
bun run play:open
```

- [ ] Open the exact course home in Player.
- [ ] Follow every Week 1 and Week 2 link.
- [ ] Read the course on a narrow window as well as a laptop-sized window.
- [ ] Run the sample code in a clean assignment-template copy.

## 4. Choose and prove assignment distribution

- [ ] Install Thonny on the same type of computer students will use.
- [ ] Distribute only the Week 1 `lab.py` file through the LMS or approved
      download channel.
- [ ] Download it as a fictional learner, open it in Thonny, make a change,
      run it, save it, and submit it.
- [ ] Confirm the instructor can find the submitted `.py` file and leave
      feedback without requiring GitHub.
- [ ] Record the exact learner instructions in the private term repository—not
      this Starter.

Do not configure a GitHub organization or create the semester's repository set
until this first learning loop works.

## 5. Prepare Weeks 1 and 2

- [ ] Adapt examples so they sound like you.
- [ ] Check that Thonny's editor, Run button, Shell, and file locations match
      the learner instructions.
- [ ] Package the Unit 1 practice and project files for the chosen LMS method.
- [ ] Decide what counts as completion for each lab.
- [ ] Test the `me.py` and `you.py` prompts with the actual starter files.
- [ ] Decide how learners request help and how quickly they can expect a reply.

## 6. Plan the later project-tool transition

Before Unit 2:

- [ ] Read `operations/classroom50.guide.md` and
      `operations/plain-github-fallback.guide.md`.
- [ ] Confirm institutional GitHub and Codespaces access.
- [ ] Create one fictional learner account or test collaborator.
- [ ] Distribute only the Unit 2 project template.
- [ ] Open it in Codespaces, run it, make one commit, push, and reopen the
      submitted revision as the instructor.
- [ ] Prepare a short Week 6 tool orientation and recovery route.
- [ ] Record repository URLs and account mappings only in the private term
      repository or approved institutional system.

## 7. Map the next release slice

Weeks 3–5 are mapped but not release-ready. Before teaching them:

- [ ] select or adapt the loops, lists, functions, review, and paper exam
      material;
- [ ] write the exact supported lab attempt;
- [ ] write the exact independent project evidence;
- [ ] provide a self-check or rubric;
- [ ] run `bun run check` and review the affected Player routes.

Prepare one or two weeks ahead. Avoid polishing Unit 3 while Week 3 still lacks
a coherent learner path.

## 8. Configure deployment last

- [ ] Complete one local verification.
- [ ] Create the Cloudflare Worker and scoped token.
- [ ] Add protected GitHub environment secrets.
- [ ] run the manual deploy workflow;
- [ ] verify the external URL identifies this course;
- [ ] put the verified URL in the LMS or course communication channel.
