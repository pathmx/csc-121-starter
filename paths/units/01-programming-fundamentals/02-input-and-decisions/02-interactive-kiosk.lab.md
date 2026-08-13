---
type: lab
status: pilot-ready
---

# Lab: Interactive kiosk

Build a small museum kiosk that asks a visitor what kind of fictional exhibit
they want to see and prints one recommendation.

## Part 1: Collect a visit profile

Ask for:

- visitor display name;
- available minutes;
- interest: `art`, `science`, or `history`.

Convert the minutes to an integer. Echo the collected values so you can inspect
them during development.

Save and run the working input step before continuing.

---

## Part 2: Validate one value

If minutes are less than 5 or greater than 240, print a clear range warning.
Otherwise, print `Visit length accepted.`

Test `4`, `5`, `240`, and `241`. Record the results in a comment while you
work, then remove the temporary comment when the behavior is clear.

---

## Part 3: Recommend an exhibit

When the visit length is valid, choose a message from the interest:

- `art` → studio gallery;
- `science` → experiment hall;
- `history` → archive room;
- any other text → information desk.

Print only one recommendation. Use fictional names and content so the program
can be shared safely.

## Part 4: Time-aware variation

If the visitor has fewer than 30 minutes, add a `quick route` label. Otherwise,
add a `full route` label.

This requires two separate decisions: one for the interest and one for the
length. Keep them legible rather than forcing every possibility into one large
conditional.

## Independent challenge

Add one useful decision of your own. Before coding, write:

- the input it uses;
- every expected output category;
- one test value for each category;
- one boundary or unexpected value.

## Finish

- [ ] Run every planned test.
- [ ] Remove temporary debug prints that no longer help the user.
- [ ] Save and reopen the exact assigned `.py` file.
- [ ] Submit it through the channel named by your instructor.
- [ ] Be ready to explain why only one exhibit branch runs.

Next: [Application `you.py`](./03-you.project.md).
