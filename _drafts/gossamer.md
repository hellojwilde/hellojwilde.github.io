---
layout: post
title: A Project Called Gossamer
category: mozilla
summary: 
    New tooling to streamline web browser development.
---
A few summers back, I worked on the Firefox Metro project. The big challenge I ran into the first summer--back when the project was at a very early stage--was figuring out how to distribute early builds.

I wanted to quickly test work-in-progress builds across different devices on my desk without having to maintain a working copy and rebuild on every device. Later on, I also wanted to quickly distribute builds to other folks, too.

I had a [short-term hack](http://jwilde.me/mozilla/2012/11/20/app-deployment-dropbox.html) based on Dropbox, batch scripts, and hope. It was successful at getting rapid builds out, but janky and unscalable.

The underlying problem space--how you build, distribute, and test experimental prototypes rapidly?--is one that I've been wanting to revisit for a while.

## So, Gossamer

This summer, [Lyre Calliope](https://twitter.com/captaincalliope) and I have had some spare time to tinker on this for fun. 

We call this project *Gossamer*, in honor of the [Gossamer Albatross](https://en.wikipedia.org/wiki/Gossamer_Albatross), [a success story in applying rapid prototyping methodology](http://www.azarask.in/blog/post/the-wrong-problem/) to building a human-powered airplane.

We're working to enable the following development cycle:

1. Build a prototype in a few hours or maybe a couple days, and at the maximum fidelity possible--featuring user data, instead of mock information.
2. Share the prototype with testers as easily as sharing a web page. 
3. Understand how the prototype is performing in user testing relative to the status quo, qualitatively and quantitatively.
4. Polish and move ideas that work into the real world in days or possibly weeks, instead of months or years.

## A First Proof-of-Concept

We started by working to build a simple end-to-end demonstration of a lightweight prototyping workflow:

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Starting a two-week Mozilla heartbeat-style project sprint with <a href="https://twitter.com/hellojwilde">@hellojwilde</a> tomorrow involving Mozilla&#39;s browser.html experiment. Excited!</p>&mdash; Lyre Calliope (@CaptainCalliope) <a href="https://twitter.com/CaptainCalliope/status/602691901255475200">May 25, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

(Yeah, it took longer than two weeks due to personal emergencies on my end.)

We tinkered around with [a few different ways](https://jwilde.hackpad.com/Gossamer-Sprint-Notes-8XCgRZAQ37t) to do this. 

Our proof-of-concept is a simple distribution service that wraps Mozilla's [browser.html](https://github.com/mozilla/browser.html) project. It's a little bit like [TestFlight](https://developer.apple.com/testflight/update/) or [HockeyApp](http://hockeyapp.net/features/), but for web browsers.

To try an experimental build, you log in via GitHub, and pick the build that you want to test...and presto!

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/R2D74jqNEQ8?controls=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>
</div>

<small>Sequence shortened.</small>

About the login step: When you pick an experiment, you're picking it for all of your devices logged in via that account. 

This makes cross-device feature testing a bit easier. Suppose you have a feature you want to test on different form factors because the feature is responsive to screen dimensions or input methods. Or suppose you're building a task continuity feature. Having the same experiment running on all the devices of your account makes this testing much easier.

It also enables us to have a remote one-click escape hatch in case something breaks in the experiment you're running. (It happens to the best developers!)

To ensure that you can trust experiments on Gossamer, we integrated the login system with [Mozillians](https://mozillians.org/en-US/). Only vouched Mozillians can ship experimental code via Gossamer.

To ship an experimental build...you click the "Ship" button. Boom. The user gets a message asking them if they want to apply the update.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/a4VhIaWnLaw?controls=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>
</div>

And the cool thing about browser.html being a web application...is that when the user clicks the "Apply" button to accept the update...all we have to do is refresh the window.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/nzzMojhEkGk?controls=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>
</div>

We did some lightweight user testing by having Lyre (who hadn't seen any of the implementation yet) step through the full install process and receive a new updated build from me remotely. 

We learned [a few things](https://jwilde.hackpad.com/Gossamer-Sprint-Notes-8XCgRZAQ37t#:h=Tuesday) from this.

## What We're Working On Next

There's three big points we want to focus on in the [next milestone](https://waffle.io/hellojwilde/gossamer?milestone=Demo%200):

1. **Streamline every step.** The build service web app should fade away and just be hidden glue around a web browser- and GitHub-centric workflow. 
2. **Remove the refresh during updates.** Tooling for preserving application state while [making hot code changes](http://gaearon.github.io/react-hot-loader/) to web applications based on [React](http://facebook.github.io/react/) (such as browser.html!) is widely available.
3. **Make the build pipeline as fast as possible.** Let's see how short we can make the delay from pushing new code to GitHub (or editing through GitHub's web interface) to updates appearing on your machine.

We also want to shift our mode of demo from screencasts to working prototypes.

## Get Involved

This project is still at a very early stage, but if you'd like to browse the code, it's in three GitHub repositories:

- [`gossamer`](https://github.com/hellojwilde/gossamer) - Our fork of browser.html.
- [`gossamer-server`](https://github.com/hellojwilde/gossamer-server) - The build and distribution server.
- [`gossamer-larch-patches`](https://github.com/hellojwilde/gossamer-larch-patches) - Tweaks to Mozilla's larch project branch containing the graphene runtime to fix bugs and specify our packaging details.

Most importantly, we'd love your feedback:

- Tweet at us! We're [@CaptainCalliope](https://twitter.com/CaptainCalliope) and [@hellojwilde](https://twitter.com/hellojwilde).
- Come say hi in `#gossamer` on Mozilla IRC.
- File issues on GitHub. We're centralizing issues in the [`gossamer`](https://github.com/hellojwilde/gossamer) repo for now.

There's a lot of awesome in the pipeline. Stay tuned!
