---
type: project
status: pilot-ready
---

# Project: `you.py`

Turn the static Week 1 card into an interactive profile builder. Use fictional
or non-sensitive input while demonstrating the program.

## Phase 1: Collect and render

Ask the user for:

- display name;
- short bio;
- current learning goal.

Print the answers in a bordered card. Use `max()` and `len()` to calculate the
longest content length, then build a border that fits:

```python
content_width = max(len(name), len(bio), len(goal))
border = "+" + "-" * (content_width + 2) + "+"
```

Use an f-string and `.ljust(content_width)` to align each content row.

Commit the working card.

## Phase 2: Add ratings

Ask for three integer ratings from 1–5. Choose traits relevant to learning,
such as curiosity, persistence, and collaboration. Turn each rating into five
characters:

```python
filled = "★" * rating
empty = "☆" * (5 - rating)
stars = filled + empty
```

Display the trait name and stars below the profile.

Commit the working rating display.

## Phase 3: Validate the range

For each rating, detect values below 1 or above 5. Print a warning and use the
nearest allowed value:

- below 1 becomes 1;
- above 5 becomes 5.

Test `0`, `1`, `5`, and `6`. This phase does not need to recover from text
entered where a number is expected.

## Evidence checklist

- [ ] `you.py` runs from the documented command.
- [ ] It collects and stores every required input.
- [ ] Numeric text is converted deliberately.
- [ ] The dynamic border fits the content used in your demonstration.
- [ ] Ratings display with exactly five star characters.
- [ ] Out-of-range numeric ratings produce a clear result.
- [ ] At least three descriptive commits are pushed.
- [ ] You can explain `=`, `==`, the branch order, and one boundary test.

## Stretch

Let the user choose whether to display ratings. This is optional and should not
make the required behavior harder to read.
