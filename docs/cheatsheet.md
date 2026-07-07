---
title: "Cheatsheet"
sidebar_label: "Cheatsheet"
---

> One page. What to do, in order. For the full reasoning, see the [Guide](./guide/getting-oriented.md).

:::info
Draft under review before the first release. Corrections and feedback are welcome.
:::

## First step

- **Do:** acknowledge the report, even before you have assessed it ([§3](./guide/acknowledging-the-report.md)).
- **Don't:** take it public, go silent, or panic ([§1](./guide/getting-oriented.md)).

## Mental model

- A private workspace now, a public moment when you publish, and very little in between that the world ever sees ([§1](./guide/getting-oriented.md)).
- Keep the vulnerability private until a fix exists and ships.
- Only the reporter's first message becomes public; the rest of the thread never does ([§2](./guide/reading-the-advisory.md)).
- You do not [owe anything to anyone](https://mikemcquaid.com/open-source-maintainers-owe-you-nothing/), even while dealing with a security report.

## The checklist

1. **Acknowledge** the report → [§3](./guide/acknowledging-the-report.md)
2. **Triage:** accept, reject, or rescope → [§4](./guide/triaging-the-report.md)
3. **Prepare the fix**, privately → [§5](./guide/preparing-the-fix.md)
4. **Prepare the advisory:** title, versions, score, CVE, credit → [§6](./guide/preparing-the-advisory.md)
5. **Coordinate publication:** merge, release, publish, announce → [§7](./guide/coordinating-publication.md)
6. **Wrap up:** reconstruct the history, post-mortem → [§8](./guide/wrapping-up.md)

## Avoiding the gotchas

The mistakes that bite first-timers, all in one place:

- Pushing the fix to a public branch before you are ready ([§5](./guide/preparing-the-fix.md)).
- Deleting the private fork too early, or losing what is in it; publishing deletes the fork, so collect what you need first ([§7](./guide/coordinating-publication.md)).
- Forgetting to credit the people who helped ([§6](./guide/preparing-the-advisory.md)).
- Using `--no-verify` and skipping security hooks ([§5](./guide/preparing-the-fix.md)).
- Too much in the description, handing attackers a ready-made exploit ([§6](./guide/preparing-the-advisory.md)).
- Too little in the description, starving the tools that consume it ([§6](./guide/preparing-the-advisory.md)).
- Reserving the CVE too early (before you have accepted it) or too late (scrambling at publish) ([§6](./guide/preparing-the-advisory.md)).
- Fixing silently with no advisory: downstream stays blind, scanners get no signal, and users never learn to upgrade ([§5](./guide/preparing-the-fix.md)).
- Not watching your repository's security alerts, so the next report sits unseen ([§9](./guide/building-for-the-long-term.md)).
