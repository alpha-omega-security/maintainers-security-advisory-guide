# The Maintainer's Guide to GitHub Security Advisories

> So you got your first GHSA. Don't panic.

A practical, consult-as-you-go guide for open source maintainers handling GitHub security advisories. Triage, private forks, CVEs, publication, and the gotchas nobody warns you about.

> [!NOTE]
> Last verified against GitHub's behavior: July 2026. This guide tracks a moving platform. If something here no longer matches what you see, please open an issue.

> [!IMPORTANT]
> Draft under review before the first release. Corrections and feedback are welcome.

## Which document do I need?

| If you are… | Read |
|---|---|
| A report just landed and you want the first step | **[Cheatsheet](CHEATSHEET.md)** |
| Working through an advisory and want the full process | **[Guide](GUIDE.md)** |
| Looking for the answer to one specific question | **[FAQ](FAQ.md)** |
| Hitting a platform limitation and want the workaround | **[Limitations & workarounds](LIMITATIONS.md)** |
| Looking for external guides, posts and references | **[Resources](RESOURCES.md)** |

The **[Guide](GUIDE.md)** is the canonical reference. The cheatsheet, FAQ, and limitations tracker all distil from it and link back into it.

## How to use this

This is not a read-it-once tutorial. Most advisories take days to close, so the guide is built to be opened at whatever stage you are in and returned to as you progress. Jump to your current step; each section stands on its own.

## Releases

The community has lacked a structured, guided version of this process for maintainers for a long time. This guide begins as an opinionated one, written by [Ulises Gascón](https://github.com/UlisesGascon) based on his personal experience, and opens to community consensus over time.

It ships dated releases (for example `2026-07`), consolidated roughly monthly when there is something worth cutting. See [CONTRIBUTING.md](../CONTRIBUTING.md).

## License

[CC BY 4.0](../LICENSE). Code snippets are free to use without attribution.
