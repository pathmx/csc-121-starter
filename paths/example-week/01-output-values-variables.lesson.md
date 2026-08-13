---
type: lesson
status: example
---

# Output, values, and variables

A program is a precise set of instructions. In Python, `print()` is one way to
make a result visible.

```python
print("Hello, world!")
```

Before running the example, predict exactly what will appear. Then type it into
Thonny yourself and run it.

---

## Values

Programs work with values. Quotation marks make a text value, while a number
can be written without quotation marks.

```python
print("CSC-121")
print(121)
```

Try changing one value at a time. What changes in the output? What happens if
you remove only one quotation mark?

---

## Variables

A variable gives a value a name so the program can use it later.

```python
course = "CSC-121"
meeting_count = 2

print(course)
print(meeting_count)
```

Read the first line as “store the text `CSC-121` under the name `course`.” The
name is not the value; it points to the value.

---

## Try it

Type and run this program. Replace the example values with fictional or
non-sensitive information.

```python
name = "Ada"
favorite_number = 7

print("Name:")
print(name)
print("Favorite number:")
print(favorite_number)
```

Check your understanding before moving on:

- Which lines store values?
- Which lines display values?
- If `favorite_number` changes, which output changes?

Next: [Lab: a tiny printing workshop](./02-gutenberg.lab.md).
