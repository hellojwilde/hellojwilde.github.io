---
layout: post
title: Gossamer Sprint Two, Days One and Two
category: mozilla
summary:
    You can tinker with your web browser from the GitHub web interface, if you want.
---

I'm currently working with [Lyre Calliope](https://twitter.com/CaptainCalliope) on [a project to improve tooling](/mozilla/2015/07/02/gossamer.html) for developing and sharing web browser features. 

I'll be documenting my progress on this [Mediapublic-style](http://melodykramer.github.io/2015/05/04/mediapublic-day-one/).

## First, a Little Demo

In order to tinker with your web browser's source today, you need to download a working copy of the source, set up a [build environment](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions), and have your text editor selected and configured. It can take hours, even for people who've done it before.

Why can't we just edit and share web browser UI changes from a web application, like we can with documents and other things?

**Well, now we can.** As an example, let's say we want to change the color of the flask icon in upper right corner of the browser.

We open up the GitHub web interface (even from the browser you're trying to edit), make edit the color, and when the update popup appears in the web browser, click "Apply". Boom, there's the update.

And other people testing the same Gossamer branch receive that update, too.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/j-jnd1sXsEE?controls=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>
</div>

In case you're curious, here's [the commit](https://github.com/hellojwilde/gossamer/commit/3b7f8dfaff13773e670b718b771e4c10da8e7721) I made in the demo.

## What I Did Thursday and Friday

- Removed analytics and news feed for now. Remove as much UI as possible.
- Restructured the build process. Our one cheap build transform is performed as late as possible, and not muddled in with our cache of repo data.
- Remove the need to explicitly register branches as experiments.
- Add "base" branch that is used when you don't have a branch explicitly selected. Drop requirement to be logged in to access builds.
- Add Webhook support for receiving push notifications.

## Next

- Add a way to log in from the browser and select an experimental branch.
- Build UI for registering webhooks and enqueuing initial builds on a new branch.

Stay tuned for more!

