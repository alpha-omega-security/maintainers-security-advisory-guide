---
title: "6. Preparing the advisory"
sidebar_label: "6. Preparing the advisory"
---

> **You are here if:** the fix is ready or identified, and you are completing the advisory record before publishing.

**TL;DR**
- The advisory is a machine-readable record, not a blog post. Scanners and Dependabot read it; write for them.
- Get the affected and patched versions exactly right; that is what tools match against.
- Score it (CWE and CVSS) as a decision, not a form field. A defensible severity is enough; GitHub's curation team can refine it.
- A CVE is optional; if you want one, reserve it early so it does not sit on the critical path.
- Write a precise title and credit the effort; split into multiple advisories if one report covers several issues.

When you publish, this record does not just appear on your repository. It flows into the global [GitHub Advisory Database](https://github.com/advisories) a few days later, where vulnerability scanners, SBOM (software bill of materials) tools, and Dependabot pick it up and alert everyone downstream of you. The point is not to describe the bug for a human reader, but to give automated tooling something precise to act on.

And precision matters more than it used to, because fewer hands touch the record after you. GitHub's curation team reviews only a portion of advisories; many entries are [published unreviewed straight from the NVD feed](https://docs.github.com/en/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database). And the NVD itself, after building a backlog of tens of thousands of CVEs through 2024, [formally moved in April 2026 to enriching only the highest-risk CVEs](https://www.nist.gov/news-events/news/2026/04/nist-updates-nvd-operations-address-record-cve-growth). In other words, what you write here is very likely the final version of the record. Get it right.

## The title

The title is the one line that travels everywhere: the advisory list, the [GitHub Advisory Database](https://github.com/advisories), the CVE record, and the Dependabot alert your users actually see. Often it is the only part they read, so make it specific and plain.

- **Name the package, the weakness, and ideally the condition.** "Express is vulnerable to open redirect via malformed URLs" tells a reader far more than "Security fix" or a bare CWE name.
- **Do not sensationalize.** Skip the all-caps and exclamation marks; an accurate title earns more trust than a scary one.
- **Refine, do not inherit.** If the report arrived with its own summary, sharpen it rather than shipping it as-is. A common shape is `[package] [allows / is vulnerable to] [impact] [via / in component]`.

## Writing the description

GitHub pre-fills the description with a template. Keep its structure; it is what readers and downstream tools expect to find:

```
### Impact
What kind of vulnerability is it? Who is impacted?

### Patches
Has the problem been patched? What versions should users upgrade to?

### Workarounds
Is there a way for users to fix or remediate the vulnerability without upgrading?

### References
Are there any links users can visit to find out more?
```

How to fill each:

- **Impact.** What an attacker can actually do, and who is affected, including the preconditions they need first (a specific configuration, input, or privilege). Many "criticals" shrink once the preconditions are spelled out.
- **Patches.** Whether it is fixed and which versions to upgrade to. This restates, in prose, the structured version fields above.
- **Workarounds.** Anything users can do to remediate without upgrading, such as a config change or disabling a feature. Say so explicitly if there are none.
- **References.** Links that help a reader answer "am I affected?", which is the whole point. Include the exact commit where the patch landed (so anyone can review it or derive a proof of concept), any write-up that explains the vulnerability in depth (yours, or sometimes the reporter's), the CVE, and any upstream advisories.

Write all of it for the person scanning a hundred advisories, not reading yours for pleasure. You do not need to ship a working exploit; enough detail to judge whether they are affected is the goal, a copy-paste attack script is not. And remember from [§2](/guide/reading-the-advisory): the reporter's original message becomes public when you publish, so check it for raw proof-of-concept material before you go live.

## Affected and patched versions

This is the part tools match against, so it is the part most worth getting exactly right.

- **Affected range.** The versions you validated in [§5](/guide/preparing-the-fix). An overstated range cries wolf; an understated one leaves people exposed.
- **Patched versions.** The releases that actually contain the fix, on every line you backported to.
- **Ecosystem and package name.** The registry coordinates (for example, the npm package name) have to be exact, or scanners will not connect your advisory to the thing people installed.

Add the patched version before you publish. If you publish without one, Dependabot alerts your users without a safe version to upgrade to. And while you can edit an advisory after publishing, the change takes time to propagate out to the downstream databases and tools, so these version fields are the metadata most worth getting right the first time.

## Scoring and classifying (CWE and CVSS)

Treat these as decisions, not form fields. The score is how downstream users and tools prioritize: a high-severity advisory jumps the queue, a low one waits. Getting it roughly right matters more than getting it perfect.

- **CWE.** The class of weakness (injection, path traversal, prototype pollution, and so on). It is how downstream tooling categorizes the issue, and you can select more than one if it genuinely spans classes. Browse the [CWE list](/resources#scoring-and-classification) to find the closest match.
- **CVSS.** GitHub lets you score in either CVSS 3.1 or 4.0; use whichever your project standardizes on. Work through the [CVSS calculator](/resources#scoring-and-classification) for a defensible severity; you do not have to agonize, GitHub's curation team reviews and can adjust it after publication.
- **Severity is not CVSS.** The qualitative label (low, moderate, high, critical) and the numeric vector are related but separate; do not let a tidy number override your read of real-world impact.

## Getting a CVE

A CVE is the identifier the rest of the world uses to refer to this issue. GitHub is a CVE Numbering Authority, so for most repositories you can request one straight from the draft advisory and GitHub assigns it. Some projects route through their foundation's CNA instead (for example, the OpenJS CNA), and GitHub Staff or MITRE handle cases that fall outside those.

![A GitHub security advisory timeline: a maintainer requests a CVE, github-staff assigns CVE-2024-29041, and a github-staff comment explains that once the advisory is published GitHub will publish the CVE to the CVE List, broadcast the advisory via the GitHub Advisory Database, and send security alerts to dependent repositories that have opted in.](/img/cve_assigned.png)

That same advisory then lives in more than one place, at more than one level of detail. Express's [GHSA-rv95-896h-c2vc](https://github.com/expressjs/express/security/advisories/GHSA-rv95-896h-c2vc) carries the full write-up, its [CVE record](https://www.cve.org/CVERecord?id=CVE-2024-29041) is a leaner description, and the [GitHub Advisory Database copy](https://github.com/advisories/GHSA-rv95-896h-c2vc) mirrors the GHSA. Write the GHSA as the rich source; the other records derive from it.

- **Reserve, then publish.** You reserve the CVE while the advisory is still private; it becomes public when you publish. Reserve as soon as you have accepted the report as a real, in-scope issue, which can be as early as triage ([§4](/guide/triaging-the-report)); assignment can take time, so doing it early keeps it off the critical path. Just do not reserve for something you have not accepted; a reserved-then-abandoned CVE is noise.
- **You can publish without one.** A CVE is optional. The GHSA itself drives the GitHub Advisory Database and Dependabot, so downstream is still alerted with no CVE attached. Skip it, or defer it with the "request CVE later" option, when you want to alert people fast, or when cross-ecosystem CVE List recognition is not worth the wait.
- **Anyone can get one.** A third party can request a CVE for your project without you, through a CNA of last resort. This is the escalation that makes silence expensive, and why [§3](/guide/acknowledging-the-report) pushes you to acknowledge early: better the CVE comes from you, with your description, than from someone guessing.
- **Split when you need to.** If one report turns out to cover several distinct issues, or you fix several at once, give each its own advisory and CVE and cross-link them in the descriptions. One advisory per issue keeps the records clean for the tools consuming them.

## Credit the effort

Advisory work is often a team effort: a reporter, the people who wrote and reviewed the fix, whoever analyzed the impact. In an issue, a pull request, or a commit, that credit is implicit, the public metadata already records who did what. An advisory has none of that by default: credit is explicit and invisible unless you add it. So add it deliberately, for everyone involved.

- **Everyone who contributed**, not just the reporter. Recognition is fair, and it is what makes the next person bring you a report privately instead of going public.
- **One role each.** A person is credited under a single role (reporter, finder, analyst, and so on). Pick the most relevant one, or ask them which they prefer.
- **It is an offer.** You propose the credit; the person has to accept it. They can decline, or ask to appear under a handle or anonymously. Ask rather than assume.

## Get inspired

The fastest way to learn what a good advisory looks like is to read good ones. A few worth studying:

- [GHSA-f23m-r3pf-42rh](https://github.com/advisories/GHSA-f23m-r3pf-42rh) — one advisory covering multiple affected packages; a clean example of grouping related impact in a single record.
- [GHSA-3p4h-7m6x-2hcm](https://github.com/expressjs/multer/security/advisories/GHSA-3p4h-7m6x-2hcm) — when several people report the same issue, you can consolidate into one canonical advisory and credit all of them together.
- [GHSA-mx8g-39q3-5c79](https://github.com/webpack/webpack-dev-server/security/advisories/GHSA-mx8g-39q3-5c79) — clear Workarounds and References sections that help a reader answer "am I affected, and what do I do?"
