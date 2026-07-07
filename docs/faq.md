---
title: "FAQ"
sidebar_label: "FAQ"
---

> Short answers. Click through to the guide for the full reasoning.

:::info
Draft under review before the first release. Corrections and feedback are welcome.
:::

## General

- **Why can't I just fix it quietly?** A silent fix leaves everyone downstream blind, no alert and no safe version to upgrade to, while attackers can still diff your commits. The advisory is what tells users to act. ([§1](./guide/getting-oriented.md))
- **Do I have to issue an advisory?** Not strictly, but you should: it is how Dependabot and scanners learn there is a problem and which version fixes it. ([§1](./guide/getting-oriented.md))
- **It is already fixed in a newer release, do I still need an advisory?** Yes, so downstream learns which version to upgrade to. Already fixed does not mean no advisory. ([§5](./guide/preparing-the-fix.md))
- **Do I have to assign a CVE?** No. A CVE is optional; the GHSA itself drives the Advisory Database and Dependabot. Skip or defer it if you do not need cross-ecosystem recognition. ([§6](./guide/preparing-the-advisory.md))
- **Can someone get a CVE for my project without me?** Yes, through a CNA of last resort, with no input from you. One more reason not to go silent. ([§6](./guide/preparing-the-advisory.md))
- **Who can see the report?** While it is a draft: repo admins, the reporter, and collaborators you add. On publish: the advisory record and the reporter's first message go public; the rest of the thread never does. ([§2](./guide/reading-the-advisory.md))

## Intake

- **What do I put in the first comment?** Thanks, confirmation you received it and are treating it as a security issue, your next step and a realistic timeline, and a question about their disclosure date. Not a verdict, not fix details. ([§3](./guide/acknowledging-the-report.md))
- **How fast must I respond?** Within a couple of days. The acknowledgment matters more than having an answer; silence is what makes reporters escalate. ([§3](./guide/acknowledging-the-report.md))

## Triage

- **What if I don't think it's a real vulnerability?** Verify rather than assume: reproduce it, and check it against your threat model. "Not a vulnerability" and "out of scope" are legitimate outcomes; close it with your reasoning. ([§4](./guide/triaging-the-report.md))
- **Can I reject a report?** Yes. You decide what is in scope. Decline with reasoning, point at your threat model, thank them, and leave the door open. ([§4](./guide/triaging-the-report.md))
- **What if I disagree with the reporter's severity?** You set the score. CVSS and severity are your call; GitHub's curation team can adjust later. Pick a defensible value. ([§6](./guide/preparing-the-advisory.md))

## Preparing the fix

- **Why doesn't my CI run?** The temporary private fork is sealed off: status checks and Actions do not run, and org secrets are unavailable. ([§5](./guide/preparing-the-fix.md), [Limitations](./limitations.md))
- **How do I test without it?** Run checks locally, write a manual test plan, or mirror to a private repo that does have Actions. Test against your oldest supported runtime, since nothing else will. ([§5](./guide/preparing-the-fix.md), [Limitations](./limitations.md))
- **Who can I add?** Any collaborators you need, but adding them to the advisory gives them the fork too (access is all-or-nothing). The reporter can also open their own private fork. ([§5](./guide/preparing-the-fix.md), [Limitations](./limitations.md))

## CVE

- **When does GitHub assign one automatically?** GitHub is a CNA: you request a CVE from the draft advisory and GitHub assigns it. Some projects route through a foundation CNA (for example OpenJS) instead. ([§6](./guide/preparing-the-advisory.md))
- **Reserve now or at publish?** Reserve as soon as you have accepted the report; assignment can take time, so doing it early keeps it off the critical path. It becomes public when you publish. ([§6](./guide/preparing-the-advisory.md))

## Publication

- **How long is the embargo?** As long as you and any coordinated parties agree. It is a negotiable norm, not a GitHub rule, often anchored to the reporter's disclosure deadline. ([§7](./guide/coordinating-publication.md))
- **Who do I have to notify?** No one is required, but give known downstreams and major consumers a heads-up, especially if they need to ship their own patch. ([§7](./guide/coordinating-publication.md))
- **What if the reporter goes public before the fix is out?** It usually happens when they feel ignored. Acknowledge early and agree a timeline to prevent it; if it happens anyway, ship and publish as fast as you safely can. ([§3](./guide/acknowledging-the-report.md), [§7](./guide/coordinating-publication.md))

## After

- **Why did my fix commit land on main with no context?** Merging the private fork squashes everything into one "Merge commit from fork" per branch, flattening the history. Link the commit back to the advisory to restore context. ([§8](./guide/wrapping-up.md), [Limitations](./limitations.md))
- **Can I still edit the advisory after publishing?** Yes, but changes propagate slowly to downstream databases, so get the affected and patched versions right the first time. ([§6](./guide/preparing-the-advisory.md), [§8](./guide/wrapping-up.md))
- **Do I have to credit the reporter?** It is an offer, not an obligation, but you should: it is fair and keeps people reporting privately. They can accept, decline, or ask to stay anonymous. ([§6](./guide/preparing-the-advisory.md))
- **When do I delete the private fork?** You do not have to; publishing the advisory deletes it for you. Save anything you want to keep before you publish. ([§7](./guide/coordinating-publication.md))
