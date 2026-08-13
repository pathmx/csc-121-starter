# Debug without guessing

## Reproduce

Write down the exact input and Run action that produces the problem. Run it
again before changing anything.

## Read the evidence

For an error, read the complete traceback and begin with its last line. For
incorrect output, write the expected result beside the actual result.

## Narrow the program

- use one small input;
- print the values entering the suspicious step;
- run one branch or function at a time; and
- remove unrelated experiments only when you understand what they do.

## Change one thing

Make one hypothesis, one edit, and one run. Test the repair with a normal case
and an edge case, remove temporary output, then save a working checkpoint.
