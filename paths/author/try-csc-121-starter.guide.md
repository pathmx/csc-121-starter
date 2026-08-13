---
type: guide
status: pilot-ready
---

# Try the CSC-121 PathMX Starter

Hi Haorui—this is a reusable starting point for a project-based introduction
to programming with Python. The full 15-week course is mapped, and the first
two weeks are prepared closely enough to run and critique.

This trial should take about 15–20 minutes. You do not need to publish a
course, create a GitHub organization, or commit to the curriculum.

By the end, you will have:

- your own local copy of the course;
- a verified PathMX build;
- the learner course open in PathMX Player; and
- an agent-guided tour of what is ready and what still needs an instructor's
  decisions.

---

## 1. Check the prerequisites

You will need:

- [Git](https://git-scm.com/downloads);
- [Bun](https://bun.sh/docs/installation); and
- either [Codex](https://help.openai.com/en/articles/11096431) or
  [Claude Code](https://docs.anthropic.com/en/docs/claude-code/getting-started),
  installed and signed in.

Open a terminal and confirm the basics:

```sh
git --version
bun --version
```

If either command is missing, use its linked installation guide before
continuing. You do not need to install PathMX globally.

---

## 2. Create a local trial from the public template

Choose a folder where you keep projects, then run:

```sh
bunx @fellowhumans/pathmx@latest init csc-121-trial \
  --template csc-121-starter
cd csc-121-trial
```

This downloads the public
[CSC-121 Starter](https://github.com/pathmx/csc-121-starter), composes its
current PathMX skills, and creates an independent local course workspace. It
does not create a GitHub repository or deploy anything.

Give the trial a local recovery point:

```sh
git init -b main
git add .
git commit -m "Initialize CSC-121 trial"
```

If Git asks for your name or email, follow its message to configure them and
then repeat the commit. The course will still run without this commit, but the
checkpoint makes later experimentation easy to review or undo.

---

## 3. Ask the course agent to lead the setup

From inside `csc-121-trial`, start one agent:

```sh
codex "Onboard me as the CSC-121 instructor."
```

or:

```sh
claude "Onboard me as the CSC-121 instructor."
```

The repository includes a dedicated instructor-onboarding skill. The agent
should:

1. inspect the course without changing it;
2. install the locked local dependencies;
3. run the course and assignment checks;
4. start PathMX Player and open the course home;
5. explain the course structure and readiness boundary; and
6. ask whether you want a read-only tour or a specific-term setup.

For this first pass, choose the **tour**. The agent should leave the Player
running while you explore.

If you prefer to try the course without an agent, use:

```sh
bun install --frozen-lockfile
bun run onboard
bun run play:open
```

---

## 4. Take the short instructor tour

In Player, inspect these parts:

1. **Course home:** Does the promise and 15-week journey make sense at first
   glance?
2. **Week 1:** Follow the lesson, Gutenberg lab, `me.py` project, and
   self-check. Do they form a coherent first week?
3. **Week 2:** Look for a clear progression from input to conversion,
   validation, and decisions.
4. **Units 2 and 3:** These are maps rather than finished lessons. Are the
   capabilities and expected evidence specific enough for you to adapt?
5. **Instructor guidance:** Ask the agent to show you the course brief,
   semester checklist, weekly workflow, and assignment templates.

The intended boundary is important:

- **Pilot-ready:** Weeks 1 and 2.
- **Mapped for preparation:** Weeks 3–15.
- **Instructor-owned:** term dates, institutional policy, grading details,
  later lessons and assessments, assignment distribution, and deployment.

The Starter should make those decisions visible without pretending to make
them for you.

---

## 5. Try one small agent request

While the Player is running, ask the agent:

> Compare Week 1 with the course brief. Tell me what students practice, what
> evidence they produce, and the three most important questions I should
> resolve before teaching it. Do not edit files.

This is the kind of bounded course-maintenance work the repository is designed
to support. The agent may prepare evidence and recommendations; the instructor
still owns curriculum, policy, feedback, and grades.

---

## What feedback would be most useful?

After the trial, please send brief reactions to these questions:

1. Where did setup feel uncertain or more technical than it needed to be?
2. Did the agent give you a useful tour, or too much repository detail?
3. Could you tell what was ready to teach versus still only mapped?
4. Would the Week 1 rhythm fit how you prefer to teach an introductory course?
5. What would you need before feeling comfortable adapting this for a term?

You can stop the Player with `Ctrl-C` in the terminal where it is running. The
entire trial lives in the `csc-121-trial` folder; no remote course or student
data was created.
