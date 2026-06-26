# Cheatsheet: your first security advisory

> One page. What to do, in order. For the full reasoning, see the [Guide](GUIDE.md).

> [!IMPORTANT]
> Draft under review before the first release. Corrections and feedback are welcome.

## First step

- **Do:** acknowledge the report, even before you have assessed it ([§3](GUIDE.md#3-acknowledging-the-report)).
- **Don't:** take it public, go silent, or panic ([§1](GUIDE.md#1-getting-oriented)).

## Mental model

- A private workspace now, a public moment when you publish, and very little in between that the world ever sees ([§1](GUIDE.md#1-getting-oriented)).
- Keep the vulnerability private until a fix exists and ships.
- Only the reporter's first message becomes public; the rest of the thread never does ([§2](GUIDE.md#2-reading-the-advisory)).
- You do not [owe anything to anyone](https://mikemcquaid.com/open-source-maintainers-owe-you-nothing/), even while dealing with a security report.

## The checklist

1. **Acknowledge** the report → [§3](GUIDE.md#3-acknowledging-the-report)
2. **Triage:** accept, reject, or rescope → [§4](GUIDE.md#4-triaging-the-report)
3. **Prepare the fix**, privately → [§5](GUIDE.md#5-preparing-the-fix)
4. **Prepare the advisory:** title, versions, score, CVE, credit → [§6](GUIDE.md#6-preparing-the-advisory)
5. **Coordinate publication:** merge, release, publish, announce → [§7](GUIDE.md#7-coordinating-publication)
6. **Wrap up:** reconstruct the history, post-mortem → [§8](GUIDE.md#8-wrapping-up)

## Avoiding the gotchas

The mistakes that bite first-timers, all in one place:

- Pushing the fix to a public branch before you are ready ([§5](GUIDE.md#5-preparing-the-fix)).
- Deleting the private fork too early, or losing what is in it; publishing deletes the fork, so collect what you need first ([§7](GUIDE.md#7-coordinating-publication)).
- Forgetting to credit the people who helped ([§6](GUIDE.md#6-preparing-the-advisory)).
- Using `--no-verify` and skipping security hooks ([§5](GUIDE.md#5-preparing-the-fix)).
- Too much in the description, handing attackers a ready-made exploit ([§6](GUIDE.md#6-preparing-the-advisory)).
- Too little in the description, starving the tools that consume it ([§6](GUIDE.md#6-preparing-the-advisory)).
- Reserving the CVE too early (before you have accepted it) or too late (scrambling at publish) ([§6](GUIDE.md#6-preparing-the-advisory)).
- Fixing silently with no advisory: downstream stays blind, scanners get no signal, and users never learn to upgrade ([§5](GUIDE.md#5-preparing-the-fix)).
- Not watching your repository's security alerts, so the next report sits unseen ([§9](GUIDE.md#9-building-for-the-long-term)).
