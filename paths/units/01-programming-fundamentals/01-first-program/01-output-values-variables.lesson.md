---
type: lesson
status: pilot-ready
---

# Output, values, and variables

Programming begins with a modest idea: write an instruction, ask the computer
to follow it, and compare what happened with what you expected.

## 1. A Python file is a sequence of instructions

Create `main.py`:

```python
print("first")
print("second")
print("third")
```

Before running it, predict the output. Then use:

```sh
python main.py
```

Python reads these instructions from top to bottom. Changing their order
changes the output.

---

## 2. Values have types

Compare:

```python
print("42")
print(42)
print(6 * 7)
print("ha" * 3)
```

`"42"` is text—a `str`. `42` is a whole number—an `int`. The `*` operator has
a sensible but different effect for each type.

Common types this week:

| Type | Example | Represents |
| --- | --- | --- |
| `str` | `"Ada"` | Text |
| `int` | `42` | Whole number |
| `float` | `3.14` | Decimal number |
| `bool` | `True` | True or false condition |

---

## 3. A variable gives a value a useful name

```python
name = "Ada"
language = "Python"
projects_completed = 1

print(name)
print(language)
print(projects_completed)
```

Read `name = "Ada"` as “store the value `"Ada"` under the name `name`.” The
single `=` assigns a value; it does not ask whether two values are equal.

Prefer names such as `border_width` and `projects_completed` over `x` or
`thing`. A good name makes the next line easier to predict.

---

## 4. Build output from smaller pieces

```python
name = "Ada"
border_width = 20
border = "+" + ("-" * border_width) + "+"

print(border)
print("| " + name)
print(border)
```

Trace the expression for `border` from the inside out:

1. `"-" * border_width` repeats the dash;
2. the first `+` joins the left corner;
3. the second `+` joins the right corner.

## Supported attempt

Without running it, write the exact output:

```python
symbol = "="
width = 5
print("<" + symbol * width + ">")
print("go! " * 2)
```

Then run the program and reconcile any difference between your prediction and
the result.

## Independent attempt

Write a small ticket or label with:

- a top and bottom border built with string multiplication;
- a title stored in a variable;
- one integer stored in a variable;
- at least three lines of output.

Change only the variables and confirm that the output changes without editing
the print layout.

## Check your understanding

You are ready for lab if you can explain:

- why `"3" * 2` and `3 * 2` differ;
- what Python does first in `"+" + "-" * 5 + "+"`;
- why storing a repeated value in a variable can make a program easier to
  revise.

Next: [Gutenberg print workshop](./02-gutenberg.lab.md).
