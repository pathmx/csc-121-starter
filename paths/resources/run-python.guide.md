# Run a Python program

## In Thonny during the foundations unit

1. Install Thonny from the [official Thonny website](https://thonny.org/) using
   the instructions for your operating system.
2. Open Thonny.
3. Choose **File → Open** and open the assigned `.py` file, or choose
   **File → New** and immediately save it with the required filename.
4. Press the green **Run current script** button or press **F5**.
5. Read the program's output in the **Shell** pane below the editor.

If Thonny asks where to save an untitled file, stop and use the exact folder
and filename in the assignment. Saving the file is part of making the work
reliable.

## Later, in Codespaces

The applied-project unit introduces VS Code and GitHub Codespaces. At that
point, open the whole project folder and use its built-in terminal:

```sh
python main.py
```

The course will teach that workflow before requiring it. You do not need the
terminal for the foundations unit.

## Read the result

- In Thonny, normal printed output appears in the Shell.
- A Python error shows the file, line, error type, and message.
- If Thonny runs the wrong file, check the active editor tab and filename
  before changing code.
- If the program appears stuck, check whether it is waiting for `input()`.

## Before editing

Run the starter once. That tells you whether the environment works and gives
you a baseline to compare after each change. During manual-practice exercises,
type the example rather than pasting or generating it.
