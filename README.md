# The Maintainer's Guide to GitHub Security Advisories

> So you got your first GHSA. Don't panic.

A practical, consult-as-you-go guide for open source maintainers handling GitHub security advisories: triage, private forks, CVEs, publication, and the gotchas nobody warns you about.

> [!IMPORTANT]
> Draft under review before the first release. Corrections and feedback are welcome.

## Read the guide

The guide is published as a [Docusaurus](https://docusaurus.io/) site at **<https://alpha-omega-security.github.io/maintainers-security-advisory-guide/>**.

The Markdown source lives in **[`docs/`](docs/)**, which also renders directly on GitHub:

- [Start here](docs/intro.md) · [Cheatsheet](docs/cheatsheet.md) · [FAQ](docs/faq.md) · [Limitations](docs/limitations.md) · [Resources](docs/resources.md)

## The website

```bash
npm install
npm start        # local dev server with hot reload
npm run build    # static build in ./build
```

Deploys to GitHub Pages via [`.github/workflows/deploy-docs.yml`](.github/workflows/deploy-docs.yml) (manual trigger for now).

## Contributing

This begins as an opinionated guide by [Ulises Gascón](https://github.com/UlisesGascon), based on personal experience, and opens to community consensus over time. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[CC BY 4.0](LICENSE). Code snippets are free to use without attribution.
