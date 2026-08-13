---
type: lesson
status: pilot-ready
---

# Ask, convert, decide

Week 1 programs used values chosen by the programmer. An interactive program
can ask its user for a value and choose what to do next.

## 1. `input()` returns text

```python
name = input("What is your name? ")
print("Hello, " + name)
```

Even when the user types digits, `input()` returns a string:

```python
age_text = input("How old are you? ")
print(type(age_text))
```

Convert only when the program needs a number:

```python
age = int(age_text)
next_age = age + 1
print("Next year you will be " + str(next_age))
```

---

## 2. Comparisons produce booleans

```python
rating = 4
print(rating >= 3)  # True
print(rating == 5)  # False
```

Use `==` to compare. A single `=` assigns.

Common comparisons:

- `==` equal;
- `!=` not equal;
- `<` and `>` less or greater;
- `<=` and `>=` inclusive bounds.

---

## 3. A conditional chooses a branch

```python
rating = int(input("Rate today from 1 to 5: "))

if rating >= 4:
    print("Today is going well.")
elif rating >= 2:
    print("There is room to improve.")
else:
    print("Let's choose one small next step.")
```

Python tests branches from top to bottom and runs the first matching branch.
Indentation shows which statements belong to a branch.

---

## 4. Validate a range

```python
rating = int(input("Choose a rating from 1 to 5: "))

if rating < 1 or rating > 5:
    print("That rating is outside the allowed range.")
else:
    print("Rating accepted.")
```

This detects an out-of-range number. It does not yet recover from letters or
ask again; those are later capabilities.

## Supported attempt

Predict the result for `temperature = 70`, `55`, and `40`:

```python
if temperature >= 65:
    message = "warm"
elif temperature >= 50:
    message = "cool"
else:
    message = "cold"

print(message)
```

Then run all three cases.

## Independent attempt

Ask for a fictional game character's name and energy from 0–100. Print the
name and exactly one status:

- `ready` for energy 70 or above;
- `recovering` for energy 30–69;
- `resting` below 30;
- `invalid` if the value is outside 0–100.

Test at least `-1`, `0`, `29`, `30`, `69`, `70`, `100`, and `101`. Explain why
boundary values deserve tests.

Next: [Interactive kiosk lab](./02-interactive-kiosk.lab.md).
