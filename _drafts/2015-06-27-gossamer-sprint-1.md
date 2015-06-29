---
published: false
layout: post
title: A First Sprint on an Experiment Called Gossamer
---

When designing a mainstream web browser, you're attemping to design a universal window to the digital world. 

It has to be simple so that new users can pick it up and understand how to use it. It also has to fit the widely varying needs of hundreds of millions of people around the world. And, on top of that, in order to gain and retain users, it has to somehow differentiate itself from every other browser on the market.

**In short--they're extremely challenging to design.**

There's a couple of things that we can do to expedite success on these sorts of projects.

As former Mozilla designer Aza Raskin [pointed out years ago](http://www.azarask.in/blog/post/the-wrong-problem/), calling on the old story of the [Gossamer Condor](https://en.wikipedia.org/wiki/Gossamer_Condor)--about how the challenge of building a human powered aircraft to fly for a mile became solvable once it was possible to build and learn from full-scale aircraft rapidly: 

When you are solving a difficult problem re-ask the problem so that your solution helps you learn faster. Find a faster way to fail, recover, and try again. If the problem you are trying to solve involves creating a magnum opus, you are solving the wrong problem.

You need tools and infrastructure to enable you to rapidly and cheaply build, test, and learn from a fully-built version of a product. As Matt Thompson [noted a couple years back](http://openmatt.org/2013/10/02/open_mozilla/)--a key value in releasing code early and often in this sort of workflow is part of what's helped an organization like Mozilla punch above its weight:

Feedback is sometimes useful. Testing always is. Testing a new design, draft or prototype, for example, tells you where it’s working, where it’s surprising, and where it’s broken. And while you may not agree with all the feedback you get, you will always learning something from releasing early and often in public.

## In a Perfect World

1. We'd have a browser platform lacking legacy constraints, making prototyping fast.
2. We could make changes to anything in the browser, and distribute that experiment as easily as a web page.
3. Those experiments would be able to show user data, but we'd need to make sure experiments are things you can trust.

## Today

There's still a lot of room for improvement on this key ability in modern web browsers.

The landscape of rapid prototyping options that are easy to distribute are the following:

- **Build a website.** Super easy to distribute--just send a link. It's unclear how high the fidelity will be--for some features like home pages, this will represent the full experience. However, for other things, you won't be able to easily integrate user data into it, which limits fidelity. 
- **Build an addon.** Relatively easy to distribute. The fidelity here can be pretty high and show user data. However, it may require significant engineering time to build a version that can be included with the browser.

In terms of being able to test work-in-progress features on the actual codebase, we have a few options:

- **Distribute builds via project branches.** Requires the user to install another browser on their machine. Depending on whether we create a new profile folder for them, this might require them to shut down their current browser instance.
- **Send patches.** Requires testers to have significant technical experience, and a working copy, and all of the relevant compile infrastructure set up.
- **Put your current working copy in Dropbox.** I did this to onboard a few people in the office on Firefox Metro back in the day. It was okay for small numbers of users.

In short, we're only getting a maximum of 1 of the things we'd want.

## Sprinting Toward the Perfect World

Lyre Calliope and I have been tinkering with ways to enable the perfect world in the context of browser development.

We're calling the project Gossamer. We had a first sprint to start tinkering with some of the ideas.

We build a build flow on top of browser.html 