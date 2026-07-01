---
title: "7. Coordinating publication"
sidebar_label: "7. Coordinating publication"
---

> **You are here if:** the fix is ready and you are deciding when and how to go public.

**TL;DR**
- Get everything staged first, the advisory drafted, the CVE reserved, the fix ready, so going public is one quick, deliberate sequence.
- The order: merge the fix, ship the release, publish the advisory, announce. Keep the gap between them small.
- Publish when people are around to patch: not late on a Friday, not over a holiday.
- Ship the smallest, most semver-compatible release you can.
- Give known downstreams a heads-up, and hit the embargo date if you agreed one.

The riskiest moment in the whole process is this one. The fix becomes public the instant you ship the release, but the advisory that explains it (and the alert that reaches your users) lands a beat later. Coordinating publication is mostly about keeping that beat short, and choosing when to take it.

## The order of operations

Have everything staged before you start: the advisory drafted ([§6](/guide/preparing-the-advisory)), the CVE reserved, the fix ready in the fork or your private clone ([§5](/guide/preparing-the-fix)). Then go in order:

1. **Merge the fix** into your release branches.
2. **Tag and publish the release** (one per backported line).
3. **Publish the advisory** immediately after.
4. **Announce** it where your users will see it. A plain-language security-release post, like [Express's](https://expressjs.com/en/blog/2026-05-31-security-releases/) or [Node.js's](https://nodejs.org/en/blog/vulnerability/june-2026-security-releases), helps people understand and adopt the fix beyond the machine-readable advisory.

The gap that matters is between steps 2 and 3. Once the release is out, the fix is public and an attacker can diff it, so publish the advisory right away rather than the next morning.

One thing that can stall step 1 is your own repository rules. Branch protections (block force pushes, required status checks, required pull requests) can refuse the merge from a temporary private fork, and only someone who can bypass them gets it through. Sort that out before publication day, not in the middle of it.

![The GitHub security advisory view near publication: a temporary private fork with an approved pull request, a warning that the advisory may be blocked by repository rules (restrict deletions, block force pushes, require a pull request, require status checks) so the changes can only be merged by someone who can bypass branch protections, and a "Publish advisory" action noting that outstanding pull requests must first be merged or closed.](/img/advisory_blocked_by_rules.png)

You can reference the CVE and the advisory in your commit messages and release notes as you go. Neither is publicly accessible until you publish, so the links simply resolve once you do.

:::danger
Step 3 is destructive. Publishing the advisory deletes the temporary private fork, the dialog says so plainly ("Delete fork and publish"), and it can only be undone by contacting support. Before you publish, collect anything in the fork you want to keep (pull request comments, review discussion, branches), because it all goes when the fork does.
:::

![The "Publish advisory" confirmation dialog warning that publishing this advisory will delete the temporary private fork, with "Cancel" and "Delete fork and publish" buttons and a note that the action can only be undone by contacting support.](/img/publish_deletes_fork.png)

## When to publish

Pick a moment when people are around to react. A patch that ships late on a Friday or over a holiday sits unapplied while attackers read the diff; the downstream maintainers and security teams who pull it through need to be awake.

If there is an embargo, the clock is the reporter's disclosure norm, not a GitHub rule, and it is negotiable (see [§3](/guide/acknowledging-the-report)). If you agreed a date, hit it. If you genuinely need more time, ask before it passes, not after.

## Shape the release

Make the security release the easiest possible thing to adopt.

- **Minimal.** Ideally just the security patch, with nothing else riding along. Every unrelated change is another reason for a user to hesitate.
- **Semver-compatible.** Aim for a patch release that needs no migration. Semver has a carve-out for security, and sometimes a fix genuinely has to break compatibility, but a breaking security release slows adoption, which defeats the point of shipping fast.

## Notify downstream

If you have known major consumers, or downstream packages that repackage yours, give them a heads-up, especially if they will need to ship their own patch on top of yours. Coordinated disclosure is a courtesy that gets repaid: next time the vulnerability is in their code, you want to be on their list too.

## Give advance notice (optional)

Some widely-depended-on projects send a public signal that a security release is coming, before it ships and without any identifiable detail. Node.js is the canonical example: a few days ahead it posts only the number of fixes and the highest severity, on its blog and security mailing list, so downstream teams can clear time to upgrade the moment the patch lands.

This is the "alert your community" step in the lifecycle diagram. It is powerful, but not for everyone: it commits you to a date and puts your team on a deadline, and it only pays off when enough people depend on you to need the runway. For most projects, a clean release and a clear announcement are plenty.

## After it is public

Your advisory now lives in the public [github/advisory-database](https://github.com/github/advisory-database), and it is not entirely frozen. People open pull requests to improve it, correcting an affected range, adding an ecosystem, sharpening the description, and GitHub pings you, as the original publisher, to approve or reject them ([example](https://github.com/github/advisory-database/pull/7320)). If your advisory landed in the global database with an error, you can open a pull request yourself to fix it ([example](https://github.com/github/advisory-database/pull/6470)).

## Then celebrate

Take a moment when it is done. Security work is mostly invisible: no feature demo, no launch thread, just a quiet release and an advisory most people will never read. But you found a real risk, closed it without tipping off attackers, and shipped a fix that protects everyone downstream of you. That is the whole job, and you did it.

Congratulations. You made the world a little safer than it was this morning.
