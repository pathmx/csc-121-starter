# Debug without guessing

## 1. Make the problem reproducible

Write down the exact input and Run action or command that causes the problem.
Run it again. If the result changes, identify what else changes with it.

## 2. Read the evidence

For an error, copy the complete traceback and start with the last line. Then
inspect the first line in your own file named by the traceback.

For incorrect output, state:

- expected result;
- actual result;
- smallest input that shows the difference.

## 3. Narrow the program

- print the values entering the suspicious step;
- temporarily use one small hard-coded input;
- run one function or branch at a time;
- comment out unrelated experimental code only when you understand what you
  are isolating.

## 4. Change one thing

Make one hypothesis, one edit, and one run. If you change five things at once,
you lose the evidence that identifies the cause.

## 5. Preserve the repair

Test a normal case and an edge case. Remove temporary debug output, then save a
working checkpoint. In a later repository project, make a descriptive commit.
