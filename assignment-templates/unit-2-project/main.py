"""Entry point for the Unit 2 recurring project."""

from storage import load_records


def main() -> None:
    records = load_records("data/sample-records.csv")
    print(f"Loaded {len(records)} fictional records.")


if __name__ == "__main__":
    main()
