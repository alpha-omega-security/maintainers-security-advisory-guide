---
title: "3. Acknowledging the report"
sidebar_label: "3. Acknowledging the report"
---

> **You are here if:** you are about to reply to the reporter for the first time.

**TL;DR**
- Acknowledging is optional, but unless you are starting the evaluation right now, it is the most important early move.
- Reply within a couple of days. The acknowledgment matters more than having a verdict.
- Thank them, confirm you received it and are treating it as a security issue, and say what happens next.
- You decide whether the report is valid later, in [triage](./triaging-the-report.md), not here.

The first thing to do is the easiest thing to get wrong: reply. Not fix, not triage, just acknowledge. You do not need to have assessed anything yet. You just need to show up.

## Why this matters

Until you reply, the reporter has no way to know the report even reached you. A private report is silent by design: there is no "delivered" receipt, no public trace, nothing. If you are not starting the evaluation right away, this acknowledgment is the only signal they get.

Most reporters expect to hear back within a few days. If they do not, they have a few ways to keep things moving on their own, and each one means the process continues without you steering it:

- **Reaching you another way:** through your foundation, if you have one, or by email, social, or your co-maintainers.
- **Disclosing early:** a public issue, a pull request against the public repo, or a blog post. This is the risk explained in [§1](./getting-oriented.md).
- **Getting a CVE elsewhere:** depending on your CNA, a last-resort CNA can assign one without you in the loop (see [§6](./preparing-the-advisory.md)).

## What are my goals?

A first reply has three jobs:

- **Reassure.** Let them know you are aware and taking it seriously.
- **Establish a channel.** Make the advisory thread the single place this conversation happens.
- **Win time, control expectations.** A reporter who feels heard, knows what happens next, and has a rough timeline is usually willing to wait. Setting those expectations early is the cheapest insurance you have against a premature disclosure.

## What to send

Keep it short, warm, and specific. A good acknowledgment has four parts:

- **Thanks.** They reported privately instead of dropping an exploit in public. That is a favor, even if the report turns out to be wrong.
- **Receipt.** Confirm you have it and are treating it as a security issue, even if you have not evaluated it yet.
- **Next step and timing.** Tell them what you will do next (assess whether it is in scope) and when you will next be in touch. Promise a window you can keep: an initial assessment in a few days, not a fix by Friday.
- **Their timeline.** Ask whether they already have a planned disclosure date or are coordinating with anyone else. This surfaces the embargo clock early, while you can still shape it (see [§7](./coordinating-publication.md)).

Stay polite even if the report looks thin; you decide whether it holds up in [triage](./triaging-the-report.md), not in this reply.

Here is a real acknowledgment, linking the project's security policy and threat model so the reporter can see how triage works:

![A maintainer's comment on a security advisory acknowledging the report: it thanks the reporter, confirms the submission was received and will be reviewed promptly, links to the project's Security Policy and Threat Model for the triage process, and promises progress updates.](../../static/img/ack_message.png)

<details>
<summary>Acknowledgment template (copy and adapt)</summary>

```
Hi [reporter],

Thank you for reporting this vulnerability. We have received your submission and will review it promptly.

You can find more about how we triage in our [Security Policy](LINK) and [Threat Model](LINK).

We will keep you updated on our progress.
```

Link "Security Policy" and "Threat Model" to your own `SECURITY.md` and threat model (see [§4](./triaging-the-report.md)). Use "I" instead of "we" if you maintain the project alone.

</details>

Whether and how to credit them can wait; you do not need to settle it now (see [§8](./wrapping-up.md)).

:::note
If the report arrived somewhere public (a normal issue, a discussion, social media), your first move is different: get it out of public view fast, then acknowledge privately. See the [cheatsheet gotchas](../cheatsheet.md#avoiding-the-gotchas).
:::
