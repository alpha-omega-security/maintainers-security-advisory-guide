# The Maintainer's Guide to GitHub Security Advisories

> So you got your first GHSA. Don't panic.

A practical, consult-as-you-go guide for open source maintainers handling GitHub security advisories: triage, private forks, CVEs, publication, and the gotchas nobody warns you about.

> [!IMPORTANT]
> Draft under review before the first release. Corrections and feedback are welcome.

## Read the guide

The full guide currently lives as Markdown in **[`the_guide/`](the_guide/)**, which renders directly on GitHub:

- [Guide](the_guide/GUIDE.md) · [Cheatsheet](the_guide/CHEATSHEET.md) · [FAQ](the_guide/FAQ.md) · [Limitations](the_guide/LIMITATIONS.md) · [Resources](the_guide/RESOURCES.md)

It is being migrated, gradually, into a [Docusaurus](https://docusaurus.io/) site at this repository root.

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
