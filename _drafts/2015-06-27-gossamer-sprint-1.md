---
published: false
layout: post
title: Gossamer, Sprint 1
summary: Streamlining web browser development workflows
---
One of the challenges during the first summer I was worked on Firefox Metro was distributing early builds. 

I wanted to quickly test work-in-progress builds across different devices on my desk without having to maintain a working copy and rebuild on every device. Later on, I also wanted to quickly distribute builds to other folks, too.

I had a [short-term hack](http://jwilde.me/mozilla/2012/11/20/app-deployment-dropbox.html) based on Dropbox, batch scripts, and hope. It was successful at getting rapid builds out, but janky and unscalable.

## An Experiment Called Gossamer

The underlying problem space--how do you build, distribute, and test experimental prototypes rapidly--is one that I've been wanting to revisit for a while, and with a lot of room for innovation.

For the past couple weeks, [Lyre Calliope](https://twitter.com/captaincalliope) and I have been working on a web browser development workflow project. We're code-naming this project *Gossamer*, in honor of the [Gossamer Albatross](https://en.wikipedia.org/wiki/Gossamer_Albatross), [a success story in applying rapid prototyping methodology](the Gossamer Albatross) to the challenge of building a human-powered airplane.

We want to enable the following kind of development cycle:

1. Build prototypes rapidly, and at the maximum fidelity possible.
2. Instantly share prototypes with testers of all levels of technical ability. 
3. Understand how the prototype is performing in user testing relative to the status quo, qualitatively and quantitatively.
4. Rapidly move ideas that work into the real world.

For clarity, "rapidly" is defined as a day, maybe two and "instantly" is defined as under a second.

## A first sprint
