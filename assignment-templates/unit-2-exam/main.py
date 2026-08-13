"""Instructor: replace with the private term's controlled transfer prompt."""

import csv

with open("data/records.csv", newline="", encoding="utf-8") as source:
    records = list(csv.DictReader(source))

print(f"Unit 2 exam environment loaded {len(records)} records.")
