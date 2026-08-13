---
type: path
status: starter
---

# A 20-minute PathMX authoring lab

This lab gives an instructor the smallest complete experience: inspect a
Source, see it in Player, make one local revision, and prototype one unlinked
teaching artifact with an agent.

Use Codex or Claude Code from the repository root and say:

> Onboard me and lead the short PathMX authoring lab.

The agent should guide one step at a time. The manual sequence below is a
fallback and a reference.

---

## 1. Start the course website

```sh
bun install --frozen-lockfile
bun run onboard
bun run play:open
```

Leave the last command running. It prints and opens a local URL. Confirm that
the Player shows **CSC-121 Course Site** and an example week.

---

## 2. Connect one Source to one page

Open `paths/index.path.md` in your editor. Find the `# CSC-121 Course Site`
heading and the link to the example week, then find both on the rendered home
page.

This is the central PathMX idea: the readable Markdown Source remains the thing
you author, and the Player presents it as guided curriculum.

---

## 3. Make one harmless local edit

Change one sentence on the course home—for example, describe who the course is
for. Save the file and reload the Player if needed. Confirm that the page now
shows your words.

If you are only touring the canonical Starter, ask the agent before editing.
In your own course repository, keep the sentence if it is useful.

---

## 4. Prototype without publishing

Ask the agent:

> Prototype a 25-minute lab in `paths/drafts/` where beginners practice one
> Python idea. Ask only for information you truly need, state your assumptions,
> and leave the draft unlinked.

Review the draft as an instructor. Check the learner's starting point, the
capability being practiced, the time required, and the evidence you would
observe. Revise it in Markdown or ask the agent for a focused change.

---

## 5. Decide what becomes part of the course

An unlinked file is a private draft. It enters the learner journey only when a
ready Source links to it. Ask the agent to connect it only after you approve the
content.

Local Player changes stay on your computer. A public `pathmx share` link is a
separate, explicit publishing step. Read `operations/sharing.guide.md` before
doing that.

---

## Stop here

You have now exercised the complete core loop:

**Markdown Source → linked journey → Player preview → instructor review**

Next time, say: `Continue CSC-121 authoring from my current repository.`
