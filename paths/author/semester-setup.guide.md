---
type: guide
status: starter
---

# Set up the first teaching slice

Do not configure an entire semester before the Starter is useful. Begin with
one private working course and one small release.

1. Initialize from the public Starter.
2. Create a new private Git repository for the actual course when you want
   version history or collaboration.
3. Choose a Markdown editor. Obsidian Live Preview is approachable; VS Code is
   useful when code and Git become part of the work.
4. Edit the [small course brief](./course-brief.guide.md).
5. Adapt `paths/index.path.md` and either revise or replace the example week.
6. Verify the course with `pathmx build paths/index.path.md`.
7. Preview locally with `pathmx play --open`.
8. Publish only the material you have reviewed.

Keep the LMS authoritative for rosters, grades, accommodations, formal policy,
and submissions unless you deliberately choose another arrangement.

GitHub, Codespaces, and larger project repositories can be introduced later if
they serve the next learning goal. Early Python students can work entirely in
Thonny while the instructor uses PathMX as the course website.
