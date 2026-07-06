---
title: The Maintainer's Guide to GitHub Security Advisories
slug: /
sidebar_label: Start here
---

# The Maintainer's Guide to GitHub Security Advisories

> So you got your first GHSA. Don't panic.

:::note
Last verified against GitHub's behavior: July 2026. This guide tracks a moving platform. If something here no longer matches what you see, please open an issue.
:::

:::info
Draft under review before the first release. Corrections and feedback are welcome.
:::

## Which document do I need?

| If you are… | Read |
|---|---|
| A report just landed and you want the first step | **[Cheatsheet](./cheatsheet.md)** |
| Working through an advisory and want the full process | **[The Guide](./guide/getting-oriented.md)** |
| Looking for the answer to one specific question | **[FAQ](./faq.md)** |
| Hitting a platform limitation and want the workaround | **[Limitations](./limitations.md)** |
| Looking for external guides, posts and references | **[Resources](./resources.md)** |

## How to use this guide

- Do not read it zero-to-hero. Jump to the stage you are at.
- Expect to come back over several days. Most advisories take that long to close.
- Each section stands on its own, with a "You are here if" signpost and a short checklist at the top.

## A word on your authority

You are not a service desk. You decide what is in scope, when things happen, and whether a report is even yours to act on.

- Stay in control of the situation as much as you can, and set the pace yourself.
- If the vulnerability is real, keep it out of public view until a fix exists. The world should not learn of it before users can protect themselves. That is the core principle of coordinated disclosure (the reasoning is in [§1](./guide/getting-oriented.md); the references are in [Resources](./resources.md#disclosure-principles-and-philosophy)).
- You do not owe anyone anything, even while handling a security report. See [Open Source Maintainers Owe You Nothing](https://mikemcquaid.com/open-source-maintainers-owe-you-nothing/).
