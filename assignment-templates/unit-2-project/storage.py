"""Small standard-library storage boundary for the Unit 2 starter."""

import csv


def load_records(path: str) -> list[dict[str, str]]:
    with open(path, newline="", encoding="utf-8") as source:
        return list(csv.DictReader(source))
