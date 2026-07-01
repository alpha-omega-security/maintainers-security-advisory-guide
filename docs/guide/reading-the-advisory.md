---
title: "2. Reading the advisory"
sidebar_label: "2. Reading the advisory"
---

> **You are here if:** you opened the advisory and want to understand what you are looking at, and who can see it.

**TL;DR**
- A private report shows up as a draft advisory in your repository's Security tab, not in Issues.
- While it is a draft, everything is private to the repo admins, the reporter, and collaborators you add.
- On publish, the advisory record and the reporter's original report become public; the rest of the conversation never does.

The advisory is not a normal issue, and the thing that trips up first-timers most is visibility: what is private now, what becomes public later, and what never does. Get that straight before you type anything.

## Where it lives

A privately reported vulnerability arrives as a draft advisory, a **GitHub Security Advisory** (GHSA), in your repository's **Security** tab under Advisories, not in Issues. It is created the moment the reporter submits, and it is private from the start. From it you run the whole process: talk with the reporter, open the temporary private fork ([§5](/guide/preparing-the-fix)), fill in the record ([§6](/guide/preparing-the-advisory)), and eventually publish.

## Who can see what

This is the part worth getting exactly right:

- **While it is a draft:** the advisory, its fields, and its entire conversation are visible only to the repository admins, the reporter, and any collaborators you add. Not the public, and not your other contributors.
- **When you publish:** the advisory record (description, affected versions, severity, CWE, CVE, credits) becomes public and flows to the [GitHub Advisory Database](https://github.com/advisories) and Dependabot ([§6](/guide/preparing-the-advisory)).
- **What crosses over from the conversation:** only the reporter's original report. Everything after it (your questions, the team's discussion) stays private forever, visible only to the advisory's collaborators.

Two consequences to internalize now:

- **The reporter's first message will be public.** They wrote it, but you publish it. Before going live, check it for raw proof-of-concept detail you would rather not broadcast, and coordinate with them if needed ([§6](/guide/preparing-the-advisory)).
- **The thread is a safe space, with one caveat.** Because the rest of the conversation stays private, it is where you and your team work. But the reporter is in that thread too, so for team-only discussion, like a borderline scope call, step off the advisory ([§4](/guide/triaging-the-report)).
