# Run a Python program

## In VS Code

1. Open the repository folder—not only the individual Python file.
2. Open **Terminal → New Terminal**.
3. Confirm the terminal is in the repository folder.
4. Run:

   ```sh
   python main.py
   ```

On some systems the command is `python3 main.py`. Use the command established
during course setup consistently.

## Read the result

- Normal printed output appears below the command.
- A Python error shows the file, line, error type, and message.
- If Python cannot find `main.py`, inspect the terminal's current folder and
  the filename before changing code.
- If the program appears stuck, check whether it is waiting for `input()`.

## Before editing

Run the starter once. That tells you whether the environment works and gives
you a baseline to compare after each change.
