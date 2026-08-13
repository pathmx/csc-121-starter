---
type: lab
status: pilot-ready
---

# Lab: Gutenberg print workshop

Gutenberg's movable type made it possible to arrange small reusable pieces
into many pages. In this lab, you will arrange small Python expressions into a
readable output artifact.

## Setup

Use your assigned practice repository. Open `week-01/lab.py` or create it if
your instructor directs you to do so.

Run the empty or starter program before editing:

```sh
python week-01/lab.py
```

If that command fails because the path is different, stop and reconcile the
repository instructions before writing code.

---

## Part 1: Establish the printing press

Write three print statements:

```python
print("This is line 1")
print("This is line 2")
print("This is line 3")
```

Run the file. Reorder the statements and run it again. Restore the intended
order and make a commit:

```sh
git add week-01/lab.py
git commit -m "Print the first three lines"
```

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

Commit the working checkpoint with a message that names what became reusable.

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
- [ ] Make a final descriptive commit.
- [ ] Push and verify the commit on GitHub.
- [ ] Be ready to show one variable and every place it affects output.

Next: [Project `me.py`](./03-me.project.md).
