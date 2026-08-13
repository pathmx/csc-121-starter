---
type: lab
status: pilot-ready
---

# Lab: Gutenberg print workshop

Gutenberg's movable type made it possible to arrange small reusable pieces
into many pages. In this lab, you will arrange small Python expressions into a
readable output artifact.

## Setup

Open the assigned `lab.py` file in Thonny, or create and save it if your
instructor directs you to do so. Confirm the file is inside your CSC-121 work
folder before you begin.

Press **F5** to run the empty or starter program before editing. If Thonny runs
another file, stop and reconcile the active tab and filename before writing
code.

---

## Part 1: Establish the printing press

Write three print statements:

```python
print("This is line 1")
print("This is line 2")
print("This is line 3")
```

Run the file. Reorder the statements and run it again. Restore the intended
order, save, and run it once more.

---

## Part 2: Reusable pieces

Add variables for:

- a short publication name;
- an issue number;
- a border width.

Print a heading similar to:

```text
+------------------------+
| THE DAILY PYTHON
| Issue 1
+------------------------+
```

Build both borders with the same `border_width` variable. Use `str()` when you
join the integer issue number to text.

### Checkpoint

Change `border_width` once. Both borders should change. Change `issue_number`
once. The printed issue should change.

Save this working checkpoint before continuing. Be ready to name what became
reusable.

---

## Part 3: Independent print artifact

Create one of these:

- a tiny newspaper front page;
- a museum label;
- a game status screen;
- a concert ticket;
- another instructor-approved text artifact.

Requirements:

- at least four meaningfully named variables;
- at least one `str`, one `int`, and one calculated or repeated value;
- a border or divider built with string multiplication;
- at least six readable output lines;
- no repeated personal or content value that should be a variable.

## Test

Run the program after changing the longest text value. Note what remains
aligned and what does not. You do not need to solve every alignment problem
yet; record one limitation as a comment at the bottom of the file.

## Finish

- [ ] Run the complete program.
- [ ] Remove abandoned experiments that are not part of the artifact.
- [ ] Save and reopen `lab.py` to confirm its location and final contents.
- [ ] Submit it through the channel named by your instructor.
- [ ] Be ready to show one variable and every place it affects output.

Next: [Application `me.py`](./03-me.project.md).
