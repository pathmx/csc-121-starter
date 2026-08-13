---
type: assessment
status: pilot-ready
---

# Week 2 self-check

## Predict

For each value `1`, `2`, `4`, `5`, and `8`, predict the output:

```python
if value < 1 or value > 5:
    print("invalid")
elif value >= 4:
    print("high")
else:
    print("standard")
```

Run the cases and reconcile your prediction.

## Diagnose

Why does this program fail when a user types `five`?

```python
rating = int(input("Rating: "))
```

You do not need to implement recovery yet. Identify the assumption the program
makes and the error type Python reports.

## Explain from your project

Point to:

- one raw string returned by `input()`;
- one intentional integer conversion;
- one boolean expression;
- one mutually exclusive branch;
- one boundary test;
- one commit made before the project was finished.

## Transfer

Add a new `experience` input with choices `new`, `some`, or `experienced` and
print one matching welcome message. An unexpected answer should receive a
neutral default message.

You are ready for Week 3 when the change works and you can explain which branch
runs for every test value.
