# Batch Hub Source Notes

## What changed in this repair pass

- Restored removed titles instead of deleting them for filename problems.
- Renamed the old Cave Blast engine folder to `html5`.
- Renamed Cave Blast analytics filenames to `analytics-core.js` and `analytics-extra.js`.
- Renamed Ultimate Brainrot Battle archive pieces from `game*.arcd` and related names to `pack*.arcd` and related names, then patched the archive manifest.
- Renamed the supplied Unity page to Meccha Chameleon because the requested Yandex app is `meccha-chameleon-547145`.

## Coolmath, Hooda Math, and Yandex practicality

- Coolmath says it licenses HTML5 thinking/logic titles and asks developers to remove ads, external links, stats counters, and name entry before publishing. Source: https://www.coolmathgames.com/submit-a-game
- Coolmath developer outreach says they curate games, provide QA support, and work with developers on licensing. Source: https://developers.coolmathgames.com/
- Hooda Math says its catalog has hundreds of free browser games, plus math categories by grade/topic and school-friendly unblocked play. Source: https://www.hoodamath.com/games/allgames.html
- Hooda Math teacher info says it was founded by a middle school math teacher and offers classroom pages for teacher-approved selections. Source: https://www.hoodamath.com/teachers.html
- Yandex support says Yandex Games are browser-only and cannot be downloaded for offline play through the normal user flow. Source: https://yandex.com/support/games/en/troubleshooting

## Specific requested titles

- Shell Shockers, Venge/Veck-style multiplayer, Worldguessr, and Copter Royale are not clean local repo ports without permission or their live services.
- Meccha Chameleon was prioritized because the user supplied a Yandex app URL and a related downloadable Unity build was already available locally.
