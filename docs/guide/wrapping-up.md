---
title: "8. Wrapping up"
sidebar_label: "8. Wrapping up"
---

> **You are here if:** the advisory is public and you want to close the book properly.

**TL;DR**
- Reconstruct the context the squash-merge flattened, while it is still fresh.
- Read your published advisory as the world now sees it, and confirm the credits stuck.
- The advisory keeps living in the public database; it is not frozen (see [§7](/guide/coordinating-publication)).
- A short, private, blameless post-mortem turns one incident into a better process.

The fix is out and the advisory is public. Two kinds of work remain: making the record make sense to the next person who finds it, and learning something from the round you just finished.

## Reconstruct the history

The merge from the private fork landed as a single squashed commit on each branch ([§5](/guide/preparing-the-fix)), with the real story compressed into a few bullet points. Months from now, that commit is all anyone, including you, will have to go on. While it is fresh:

- Make sure the commit body, or a follow-up, references the advisory and CVE, so there is a path from the code back to the explanation. GitHub will not create that backlink for you ([§4](/guide/triaging-the-report) covers why).
- Record the fix in your changelog or release notes, with the advisory link.
- If the private fork held context you care about (review discussion, alternative approaches), confirm you saved it; publishing deleted the fork ([§7](/guide/coordinating-publication)).

## Check the published record

Read the advisory as a stranger now sees it:

- Are the affected and patched versions right, and the description clear? You can still edit, but the change is slow to propagate ([§6](/guide/preparing-the-advisory)).
- Did the credits render as intended, and did the people accept them ([§6](/guide/preparing-the-advisory))?

## Run a short post-mortem

Optional, private, and blameless. The point is not who slipped up, it is what the system can do better. A few questions worth asking:

- How did this class of bug get in, and would you catch it now (a test, a lint rule, a type)?
- Did the process hold up? Did you have a SECURITY.md, a threat model, and the right people on hand ([§9](/guide/building-for-the-long-term))?
- What slowed you down (the missing CI in the fork, scrambling for a CVE, an unclear scope), and can you fix that before the next one?

One advisory handled well is a good day. A process that handles the next one better is the real win ([§9](/guide/building-for-the-long-term)).
