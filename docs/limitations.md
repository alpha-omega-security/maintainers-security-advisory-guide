---
title: "Limitations & workarounds"
sidebar_label: "Limitations"
---

> The GitHub platform limitations that actually affect the process in this [Guide](/guide/getting-oriented), and the workarounds we use.

:::note
Last verified against GitHub's behavior: July 2026 (firsthand experience, public docs, and screenshots).
:::

:::info
Draft under review before the first release. Corrections and feedback are welcome.
:::

## What goes here

Only limitations that affect the advisory-handling process described in this guide, and for which we use or recommend a workaround. This is **not** a feature wishlist and not a mirror of everything the community wants changed. If it does not touch our process, it does not belong here. Sources are firsthand experience and public material only (public docs, public community discussions, public changelog).

## Want to change any of this?

These are GitHub's limitations, not ours, and the right place to push on them is GitHub itself.

- Share feedback with GitHub: https://docs.github.com/en/support/sharing-feedback-with-github
- If you are part of the GitHub maintainers community, there is a broader discussion on advisories here: https://github.com/community/maintainers/discussions/732

## Limitations

### No CI or Actions in the temporary private fork

- **Affects:** [Guide §5](/guide/preparing-the-fix)
- **The problem:** status checks and Actions do not run on pull requests in a temporary private fork, and integrations cannot reach it. You are testing without your usual automation.
- **Workaround:** run your test suite and linters locally against the fork's branch. If you need real CI, push the fix to a separate private repository that has Actions enabled and run the pipeline there, or use a local runner. At a minimum, follow a manual test checklist that covers the vulnerable path, the fix, and the oldest runtime you support.

### Organization and repository secrets are unavailable in the private fork

- **Affects:** [Guide §5](/guide/preparing-the-fix)
- **The problem:** org and repo secrets are not exposed in the fork, so anything that depends on them (integration tests, signing, deploy steps) will not run.
- **Workaround:** exercise the code paths that do not need secrets, and mock or stub the ones that do. For a check that genuinely requires secrets, run it in a separate private repo where your secrets exist, or locally with the values supplied from your own environment.

### The merged security commit lands on main with no advisory context

- **Affects:** [Guide §8](/guide/wrapping-up)
- **The problem:** after publication the fix is a single squashed commit on main, with little of the original context around it.
- **Workaround:** reference the advisory and CVE in the commit body (safe, the links resolve once you publish), and record the fix in your changelog or release notes with a link to the advisory. If the history matters, add a follow-up commit or a tracking issue that connects the public commit back to the advisory.

### Publishing deletes the temporary private fork

- **Affects:** [Guide §7](/guide/coordinating-publication)
- **The problem:** publishing the advisory deletes the temporary private fork, and the action can only be undone by contacting GitHub support. Everything in the fork (pull request comments, review discussion, branches) goes with it.
- **Workaround:** treat publish as a point of no return for the fork. Before you click it, copy out the review discussion and pull request comments, push any branches you want to keep to a place you control, and note any decisions worth remembering.

### No reporting template for privately reported vulnerabilities

- **Affects:** [Guide §4](/guide/triaging-the-report)
- **The problem:** unlike issues and pull requests, you cannot define a submission template for privately reported vulnerabilities, so reports arrive in wildly varying shape and completeness.
- **Workaround:** publish the format you expect in your `SECURITY.md` and threat model, spelling out what a good report includes (affected version, reproduction steps, impact). Then use your acknowledgment to ask the reporter for anything missing before you triage.

### Advisories do not cross-reference like issues and pull requests

- **Affects:** [Guide §4](/guide/triaging-the-report)
- **The problem:** mentioning an advisory in an issue or pull request, or the reverse, does not create the automatic linked reference that issues and PRs get between each other. There is no backlink inside the advisory pointing to where you discussed it.
- **Workaround:** keep the connections yourself. Maintain a private tracking note (or a private issue) that links the advisory to its related pull requests, commits, and discussions, and paste those links into the advisory thread so the context lives in one place.

### Fork access is tied to advisory collaborators

- **Affects:** [Guide §5](/guide/preparing-the-fix)
- **The problem:** anyone you add as a collaborator on the advisory can reach the temporary private fork. There is no separate, finer-grained access control for the fork itself.
- **Workaround:** treat "advisory collaborator" and "fork access" as the same decision. Add only the people who genuinely need to work on the fix, and remove collaborators once they no longer need access.

### Merging the private fork squashes to a single commit

- **Affects:** [Guide §5](/guide/preparing-the-fix), [Guide §8](/guide/wrapping-up)
- **The problem:** you cannot merge fork pull requests individually. GitHub merges them all at once, and each one lands on its own target branch as a single squashed commit titled "Merge commit from fork," with the original messages kept only as bullets in the body. This breaks commit-format automation and flattens the history. See the [example commit](https://github.com/webpack/webpack-dev-server/commit/df073c53a8cefb54210b43813fa6ee60364a554e).
- **Workaround:** if you rely on conventional commits, release tooling, or changelog generators, amend the squashed commit on each branch to match your format (and re-sign it if you require signed commits) before you tag the release. Force-pushing that corrected commit is expected here, not a mistake.

### Repository rules can block merging a private fork

- **Affects:** [Guide §7](/guide/coordinating-publication)
- **The problem:** branch protection and repository rules (block force pushes, require status checks, require a pull request before merging) can prevent merging the temporary private fork. The changes may only be merged by someone who can bypass branch protections. GitHub's own docs claim protection rules are not enforced here; firsthand experience and the advisory UI show otherwise.
- **Workaround:** line this up before publication day, not in the middle of it. Either have an admin who can bypass branch protections perform the merge, or temporarily relax the specific blocking rules and restore them immediately afterward.
