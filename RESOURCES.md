# Resources

> Curated external references. These live here so the rest of the guide can link to them instead of repeating them (one source, many links).

> [!NOTE]
> Last verified: July 2026.

> [!IMPORTANT]
> Draft under review before the first release. Corrections and feedback are welcome.

## Disclosure principles and philosophy

- **Coordinated vulnerability disclosure (CVD), the principles.** Why a vulnerability is kept private until a fix exists; the practical playbook is the [OpenSSF OSS vulnerability guide](https://github.com/ossf/oss-vulnerability-guide/blob/main/maintainer-guide.md).
- **Mike McQuaid, "Open Source Maintainers Owe You Nothing."** https://mikemcquaid.com/open-source-maintainers-owe-you-nothing/

## GitHub: official documentation

- **Creating a repository security advisory.** https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory
- **Collaborating in a temporary private fork.** https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability
- **Publishing a repository security advisory.** https://docs.github.com/en/code-security/security-advisories/working-with-repository-security-advisories/publishing-a-repository-security-advisory
- **Using CWE and CVSS scores.** https://github.blog/security/application-security/using-cwe-and-cvss-scores-to-get-more-context-on-a-security-advisory/
- **Why you shouldn't fear requesting a CVE.** https://github.blog/security/vulnerability-research/removing-the-stigma-of-a-cve/
- **A maintainer's guide to vulnerability disclosure (GitHub).** https://github.blog/security/vulnerability-research/a-maintainers-guide-to-vulnerability-disclosure-github-tools-to-make-it-simple/

## Guides and process frameworks

- **OpenSSF OSS vulnerability guide (maintainer guide).** https://github.com/ossf/oss-vulnerability-guide/blob/main/maintainer-guide.md
- **opensource.guide, security best practices for your project.** https://opensource.guide/security-best-practices-for-your-project/
  - Treat security as a team effort: https://opensource.guide/security-best-practices-for-your-project/#treat-security-as-a-team-effort
  - Prepare a lightweight incident response process: https://opensource.guide/security-best-practices-for-your-project/#prepare-a-lightweight-incident-response-process
  - Make it easy and safe to report security issues: https://opensource.guide/security-best-practices-for-your-project/#make-it-easy-and-safe-to-report-security-issues

## Scoring and classification

- **CVSS (FIRST): specification and calculators (3.1 and 4.0).** Build a severity vector, and the reasoning behind it. GitHub advisories accept either version. https://www.first.org/cvss/
- **CWE list (MITRE).** The catalog of weakness classes to choose from. https://cwe.mitre.org/

## Databases and enrichment

- **GitHub Advisory Database** (reviewed vs. unreviewed advisories). https://github.com/advisories — [about](https://docs.github.com/en/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database)
- **github/advisory-database** (the public repo; propose changes via pull request). https://github.com/github/advisory-database
- **NIST, NVD operations update** (April 2026: risk-based enrichment of only the highest-risk CVEs). https://www.nist.gov/news-events/news/2026/04/nist-updates-nvd-operations-address-record-cve-growth

## Maintainer perspectives

- **Marcelo Trylesinski, "CVE-2026-48710: A Maintainer's Perspective."** https://marcelotryle.com/blog/2026/05/28/cve-2026-48710-a-maintainers-perspective/

## Security communities

- **OpenSSF (Open Source Security Foundation).** https://openssf.org/
- **OpenJS Foundation.** https://openjsf.org/

## Sharing feedback with GitHub

- **How to share feedback with GitHub.** https://docs.github.com/en/support/sharing-feedback-with-github
- **GitHub maintainers community, advisories discussion.** If you are part of the GitHub maintainers community, there is a broader discussion here: https://github.com/community/maintainers/discussions/732
