+++
title = 'Super Software: Web Browser'
date = 2024-07-13
tags = ["software"]
+++

In the modern era, there's no application more used on the personal computer than the web browser.
Websites have long been applications themselves, not just documents, but now more than was ever expected exists as a website, even IDEs, video editors, and 3D CAD programs.
This has been a boon for users of less supported operating systems, such as myself.
With how much time we spend using them, it's important that our browsers are tuned to our needs, so here's what I've determined is best for mine.

# Browser of Choice

A browser must be supported, configurable, performant, private, and secure.
It also must support Windows, Mac, and Linux.
This leaves very few options, with Mozilla Firefox surpassing the competition due to [userChrome.css](https://support.mozilla.org/en-US/kb/contributors-guide-firefox-advanced-customization) customization and generally superior privacy.

# Settings

All of what I will detail here will be visible in my [dotfiles](https://github.com/travisdula/dotfiles/tree/master/home-manager/programs), where I'm currently managing Firefox configuration via home-manager.
I'll leave out specifics from this article so that I don't have to change it for little every change.

## about:config

The [Configuration Editor](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) in Firefox (the `about:config` page) contains an incredible amount of options, but it unfortunately has no official documentation.
I suggest you see if a relevant option exists whenever you encounter a pain point, as that's how I found several of my current settings.

Since I'm a NixOS user, I was researching how to configure Firefox's settings via home-manager, and I found a [post](https://shen.hong.io/nixos-for-philosophy-installing-firefox-latex-vscodium/) by Shen Hong, which gave me some very useful settings for privacy and disabling Pocket, on top of the answer I was initially seeking.

The remainder of my options are UI changes (hiding elements and scaling), `Ctrl+Tab` preferences, making home/new tabs blank, and disabling various anti-features.

## `userChrome.css`

My [`userChrome.css`](https://support.mozilla.org/en-US/kb/contributors-guide-firefox-advanced-customization) is compiled from various sources with the goal of hiding most of the UI.
If I can do it by an easy keyboard shortcut, then I don't need a visible element for it.
The end result is that I don't see any Firefox UI elements unless I open them via the keyboard.
I recognize that this is not for most people, but I enjoy having maximal space for pages and minimal distraction from UI.
In a typical post about one's UI configuration, you'd share the end result in a screenshot, but that would just be screenshot of whatever webpage I chose, so I'll pass.

# Extensions

In writing this article, I thought through how I currently used my browser, and I did some research on overlapping functions of my set of extensions.
This led me to disable a few vestigial extensions, leaving only the following:

- Bitwarden - Password management is a necessity.
- ClearURLs - Why be tracked?
- Dark Reader - I don't know that dark themes are better objectively, but I sure am used to them.
- uBlock Origin - Even the [FBI](https://www.ic3.gov/Media/Y2022/PSA221221) recommends that you use an ad blocker, and I agree with them, as it benefits privacy, security, performance, and focus.
- Unhook - YouTube is a very cluttered site, and Unhook allows me to disable every unwanted section (including Shorts).
- Vimium - If you like keyboard-based navigation just the way it is in Vim, this is for you.

# Keyboard Use

Since I don't have it visible all the time, I use a [keyboard shortcut](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly) to focus on the address bar so I can search, edit the URL, or access my extensions.
Whatever browser you use, familiarize yourself with the keyboard shortcuts - they're a huge time-saver.
I'm currently using the `Ctrl+Tab` popup as my only tab viewer.
If that sounds inadequate, you probably keep too many tabs open at once.
I don't use the one in Vimium at the moment, as I have had to disable Vimium on some of my most used sites due to shortcut conflicts.
