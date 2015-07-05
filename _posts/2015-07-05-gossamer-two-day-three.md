---
layout: post
title: Gossamer Sprint Two, Day Three
category: mozilla
summary:
    Restartless web browser updates over WebSockets.
---

Want more context? See [the introduction to Gossamer](/mozilla/2015/07/02/gossamer.html) and [previous update](/mozilla/2015/07/04/gossamer-two-days-one-two.html).

## Another Demo

Let's say you make a code change to your browser and you want it today. After making your change, you need to restart the app, or in the case of browser.html clear caches and refresh the page.

With our experimental fork of browser.html, we can now apply a lot of different types of changes without a refresh.

Let's say we want to change the experiments icon in the upper right of our browser and make it red and larger. You just make the change and hit save. The changes appear in your running browser, without any loss of state.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/8mc5TkRdcTk?controls=0&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>
</div>

We're doing this with [Webpack](http://webpack.github.io/) [Hot Module Replacement](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack) and [React Hot Loader](https://github.com/gaearon/react-hot-loader).

In the demo, I'm running browser.html from Webpack's development server. It watches and serves the browser.html files from my working copy, performs incremental module builds, and has an open [socket.io](http://socket.io/) connection to the browser notifying it of build status. 

When the working copy changes, it performs an incremental build and notifies the browser of new code. The browser can apply the changes without a restart.

## What I Did on Saturday

- Restructured browser.html so that there is one component exported per file, which plays better with React Hot Loader at the moment.
- Moved browser.html to CommonJS, which plays better with the early builds of Webpack 2 at the moment.
- Shifted the `npm start` script from ecstatic to Webpack's development server.

## Next Steps

- Graft webpack onto the Gossamer build server.
