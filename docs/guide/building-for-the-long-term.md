---
title: "9. Building for the long term"
sidebar_label: "9. Building for the long term"
---

> **You are here if:** reports are becoming regular, or you would rather not handle the next one from scratch. This is everything beyond a single advisory.

**TL;DR**
- Write it down before you need it: a SECURITY.md and a threat model.
- Build relationships up, down, and sideways: early warning, impact validation, and peers who have seen it before.
- When volume grows, share the load: a triage rota, a working group, or a VMT.
- A lightweight, written incident-response process beats improvising under pressure.

Handling one advisory is a task. Handling them sustainably is a system. This is how you stop reacting from zero each time.

## Write it down before you need it

This is the how-to that [§4](/guide/triaging-the-report) pointed here for.

- **A SECURITY.md.** Turn on private vulnerability reporting and state how to report, what is in scope, and which versions you support. It routes reports to the right place and sets expectations before anyone files. ([Make it easy and safe to report](/resources#guides-and-process-frameworks).)
- **A threat model.** Write down what your project does and does not defend against. That documented scope is what makes triage fast and rejections defensible ([§4](/guide/triaging-the-report)).

A few public threat models worth studying, each interesting for a different reason:

- [Node.js](https://github.com/nodejs/node/blob/main/SECURITY.md#the-nodejs-threat-model) — draws explicit boundaries between trusted and untrusted inputs, so it is clear what the runtime does and does not defend against.
- [Express](https://github.com/expressjs/security-wg/blob/main/docs/ThreatModel.md) — names its out-of-scope exclusions (for example, unvalidated application input is the calling app's responsibility), which makes rejections easy to point at.
- [webpack](https://github.com/webpack/security-wg/blob/main/docs/threat-model.md) — a development tool, so it narrows what even counts as a vulnerability for that class of software.
- [lodash](https://github.com/lodash/lodash/blob/main/threat-model.md) — a utility library that tightly limits its scope: what it will and will not treat as a security issue.

## Build relationships, up, down, and sideways

- **Who.** Up, the maintainers of your dependencies; down, the projects and companies that depend on you; and sideways, your peers, the projects solving the same problem you are.
- **Early warning and impact.** Trusted contacts give you advance notice of incoming issues, and downstream teams, who see how your code is actually used, help you calibrate severity and blast radius far better than guessing alone.
- **Smaller fixes.** Sometimes the cleanest fix lives upstream. A good relationship there means you can ask for the change you need instead of reinventing it in your own code, which often keeps your patch smaller and more semver-compatible ([§7](/guide/coordinating-publication)).
- **Your peers share your problems.** Projects in the same category face near-identical security challenges: the vulnerability classes in HTTP libraries, test frameworks, parsers, and the like look alike no matter the language underneath. Team up with peers even in other ecosystems; chances are one of them has already handled your next report.
- **Your triage bench.** Upstream, downstream, and peer maintainers and contributors often make the best additions to a security triage team.
- Coordinated disclosure is a standing network, not a one-off. The people you treat well are the ones who loop you in next time.

## Share the load

When reports arrive regularly, one heroic maintainer is a single point of failure. Spread it out:

- A triage rota, a security working group, or a VMT (vulnerability management team), whatever fits your size. ([Treat security as a team effort](/resources#guides-and-process-frameworks).)
- Decide in advance who can do the things that need permission, like merging a private fork past branch protections ([§7](/guide/coordinating-publication)).

## Have an incident-response process

A simple written process beats improvising under pressure: who triages, how you communicate, who publishes. It does not need to be heavy. ([A lightweight incident response process](/resources#guides-and-process-frameworks).)

Not every incident is the calm, controlled process this guide describes, where you set the pace and have time to think. Sometimes you are reacting to a supply-chain attack, a compromised account, or a maintainer who lost access: situations where the clock is not yours and the stakes are higher. The same team and the same relationships that handle routine triage are what carry you through these; a solid plan and a solid network are worth far more when you cannot afford to improvise.

And for the most severe cases, especially if you maintain something widely depended on, expect attention beyond your usual community. Journalists will ask for details, downstream vendors will want briefings, and the story can move faster than your release. Decide in advance who speaks for the project, and what you will and will not say before the fix is out, so a crisis does not become two.
