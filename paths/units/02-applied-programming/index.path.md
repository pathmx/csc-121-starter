---
type: path
status: mapped
---

# Unit 2: Applied programming

Move from small single-file exercises to a recurring project that reads,
transforms, and preserves meaningful data. This unit also introduces the
browser-based project workflow: VS Code in GitHub Codespaces, a project
repository, and small Git checkpoints.

## Unit destination

By the end of Unit 2, you will be able to:

- model a record with a dictionary and a collection of records with a list;
- read and write text and CSV files using safe file handling;
- separate behavior into focused functions and modules;
- create a project environment and use one documented third-party package;
- test transformations with representative and edge-case data;
- commit and push a working project checkpoint; and
- explain the structure and dependencies of a multi-file program.

## Recommended project shape

Use one repository for the whole unit. Each week adds a coherent checkpoint to
the same applied program. Choose a domain that makes the data understandable
without requiring specialist knowledge—for example a small archive, event
catalog, game inventory, reading log, or campus-resource directory.

The baseline favors one shared domain for all students. Optional web, data, or
game extensions should change presentation and libraries without changing the
core outcomes.

---

## Week 6: Enter the project workspace; records and text files

**Tool transition:** open an instructor-provided GitHub repository in
Codespaces, identify the Explorer, editor, Run/terminal surface, and Source
Control view, then edit, run, commit, and push one harmless checkpoint. Teach
these actions before evaluating them.

**Programming capability:** create, access, update, and iterate over
dictionaries; read a text file using `with open(...)`.

**Worked example:** load lines from a fictional archive and turn each line into
a record with an identifier, category, and status.

**Lab:** inspect existing records, predict key lookups, and repair missing-key
assumptions.

**Evidence:** a pushed project checkpoint that reads source data and prints a
useful summary without changing the original file. The student can reopen the
Codespace or repository and identify the submitted revision.

**Immediate feedback:** a small fixture with known record counts and expected
categories.

---

## Week 7: CSV transformation

**Capability:** use Python's `csv` module, convert field types, accumulate
results, and write a derived output file.

**Worked example:** filter a fictional event catalog by capacity and write the
available events to a new CSV.

**Lab:** trace header handling, string-to-number conversion, and output rows.

**Evidence:** checkpoint that reads one CSV, applies a named rule, and writes a
new CSV whose contents can be independently checked.

**Immediate feedback:** compare output headers, row count, and two known rows
against an expected fixture.

---

## Week 8: Functions and modules

**Capability:** separate loading, transformation, reporting, and command-line
coordination into focused functions and at least two modules.

**Worked example:** move `load_records()` and `save_records()` into
`storage.py`, leaving `main.py` to coordinate user interaction.

**Lab:** read a tangled program, identify responsibilities, and refactor one
seam without changing behavior.

**Evidence:** checkpoint with a documented module boundary and a test or
repeatable check showing behavior stayed stable.

**Immediate feedback:** import each module and call one function with a tiny
fixture.

---

## Week 9: Packages and a domain extension

**Capability:** create a virtual environment, install one dependency, record it
in the project, read its documentation, and isolate library-specific code.

Choose one modest extension:

- **data:** create a simple chart from the existing records;
- **web:** display the existing report through a minimal Flask route;
- **game/simulation:** render existing state through a small Pygame view;
- **API:** fetch a small approved public dataset and normalize it into the
  project's existing record shape.

**Lab:** follow one instructor-verified library example before applying it to
the project.

**Evidence:** checkpoint that a classmate can install and run from the README.

**Immediate feedback:** clean-environment installation and one end-to-end
smoke test.

---

## Week 10: Integration and transfer

**Project evidence:** a working applied program with input data, transformations,
at least two modules, a recorded dependency when used, tests or a repeatable
verification procedure, and a clear README.

**Paper transfer exam:** a smaller unfamiliar data-processing problem using
only the shared core outcomes. Students read, trace, write, and explain code
without a computer, internet, or AI. Do not require a student's optional
domain package or tool-specific command in the exam.

## Before teaching this unit

This unit is mapped, not pilot-ready. The instructor must select one shared
domain, prepare rights-cleared fictional data, author the exact weekly starter
state and checks, pilot Codespaces access with a non-student account, and
complete the readiness checklist for each week.

Next: [Final project studio](../03-final-project/index.path.md).
