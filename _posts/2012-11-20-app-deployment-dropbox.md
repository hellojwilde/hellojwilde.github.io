---
layout: article
title: Real-Time App Deployment with Dropbox
category: mozilla
summary:
    How I kept early-stage Metro Firefox builds synced between devices last summer at Mozilla.
---

<div class="warning">
This is a *very* belated post about my 2012 summer internship at Mozilla. It represents the state of affairs of Firefox Metro as of August 2012; things have changed since then.
</div>

Windows 8 is ambitious. Most operating systems support an imprecise input method (touch) or a precise input method (mouse or pen). Windows 8 supports both, across tablets, laptops, and desktops.

Firefox Metro supports the same spread as Windows 8 itself. So, as a Mozilla summer intern developing its front-end code, I needed to regularly test my work on a tablet in addition to my development desktop.

I wanted Metro Firefox on the tablet to run untethered from the desktop. That way I'd be able to bring it up and demo it easily for people.

This meant maintaining separate [Mercurial](http://mercurial.selenic.com/) working copies and running builds on each device. Other team members depend on [Elm](http://hg.mozilla.org/projects/elm), Metro Firefox's project repository, not breaking. My code changes weren't polished or stable initially. Pushing them directly to Elm wasn't an option.

Mercurial [Queues](http://mercurial.selenic.com/wiki/MqExtension) is a popular way to deal with this. It encapsulates in-progress changes as portable patch files, which you can synchronize between working copies with another Mercurial repository.

But, it's not a simple solution. Pushing a patch from desktop to tablet involves updating the patch file, committing and pushing it to hg.mozilla.org, pulling Elm changes to the tablet, pulling my patch changes, reapplying the patch, building on the tablet, and restarting Firefox.

This is cumbersome. What if I all I had to do was build on the desktop, wait a bit, and restart Firefox on the tablet?

# Enter, Dropbox

I figured I could accomplish this by using Dropbox to synchronize my working copy.

However, a typical Firefox working copy weighs in at several gigabytes, most of which is unnecessary for testing out a pre-built copy of Firefox. To save time and space in my Dropbox, it made more sense to only sync `obj/dist`, the core files needed to run Firefox.

Windows doesn't seem to provide file change events about what's happening behind a symlink, so I couldn't just symlink `obj/dist` from Dropbox to my working copy. Instead, I had to copy `obj/dist` into Dropbox, and then link `obj/dist` symlink from my working copy to `obj/dist` in Dropbox.

After getting sync working, I needed to sort out some remaining Windows Registry and permissions issues.

To be a Metro style enabled desktop browser and have a proper tile on the Start Screen, there need to be Windows Registry entries pointing to the Firefox executable. There already was a makefile in Elm to generate registry entries pointing to a Firefox executable in `obj/dist` for the current working copy. Since the path of my Dropbox folder on the tablet differed from the location of my working copy, I had to tweak the paths in the generated registration scripts.

But, event after getting registered, Metro Firefox wouldn't launch. The Windows Event Log contained to permissions errors.

To keep file paths short on the command line, I put Dropbox folder in the root of the tablet's `C:\` drive. Since Windows doesn't automatically give files in the drive root the required execution permissions, Metro Firefox wouldn't launch.

Firefox started working after I moved the Dropbox folder to my user directory on the tablet.

# Sharing

A few weeks later, Yuan from UX asked:

> 15:23:55 - yuan: is there any other way for you to share your front-end work? jwilde

We couldn't yet generate an installer for Metro Firefox because some key build system changes hadn't landed.

<div class="footnote">
These have since landed and power the [Firefox Metro Preview](https://blog.mozilla.org/futurereleases/2012/10/04/firefox-metro-preview/).
</div>

So, I decided turn my Dropbox builds into a shared folder for Yuan to use. I automated the setup process with some Python scripts that generated the appropriate Windows Registry files based the user's Dropbox folder location and documented [the installation process](https://etherpad.mozilla.org/jwilde-awesomesauce-metro-builds) publicly on Etherpad. It was janky, but usable as a temporary solution for bleeding-edge testers.

A bit later, she had a working copy of Metro Firefox that would receive updates in real-time.

Yuan posted a link to the Etherpad on the Mozilla Wiki so that other people could try out the build. Given the roughness and instability of the builds in the Dropbox, I chose to keep the Dropbox private but give out access to anybody who asked.  By the end of the summer, 13 people were actively testing the Dropbox build and providing incredibly useful feedback.

As more people joined the folder, I felt a responsibility to do a better job at keeping builds working than I did when it was just me and my tablet.

Directly real-time syncing `obj/dist` meant that shared folder members could see all changes, both good and ugly. To reduce the chance users would see ugly changes, I got rid of the symlinks to the Dropbox folder. I started compiling into a staging folder and using a Bash script to copy `obj/dist` into Dropbox once I'd checked that everything looked good.

This cleaned things up some, but with ~13 people in the folder, there was a decent chance that at least one person would have Firefox open, putting file locks across their copy of Firefox. When Dropbox receives changes a locked file, it tags the file "in conflict" and uploads the alternate version. Because all members of private shared folders have write access, there were duplicate files strewn across the Dropbox folder, leading to clutter.

Despite the issues that I ran into, I think that Dropbox is a workable development deployment solution for small number of devices when products like Adobe Shadow or Visual Studio Remote Debugging aren't workable. A public, read-only shared folder might have handled the scaling issues I encountered better, but I'd stick to proper updater systems for when apps grow beyond one or two testers.