---
layout: article
title: Solving the "No traversable adapter found." Error
---
I was recently troubleshooting an installation of Plone and tried to
install one of the hundreds of Plone products.  Immediately after
restarting Zope, four ominous words (and a long trace) appeared on the
screen: No traversable adapter found.  After an hour-or-two of
troubleshooting, I found out how to solve the problem.

As it turns out, this tends to happen (assuming the error appeared
after installing a few Products into Zope/Plone) because either:

1. one of the installed Products is corrupted, or
2. one or more dependencies for the products is missing.

To fix this, we first have to uninstall all the add-on Products
one-by-one until we isolate the one that is causing Zope/Plone to show
that error message.  Keeping the error-causing plugin installed, we can
then stop Zope, then restart it in foreground mode by typing the
following commands (remember to replace `/path/to/zope/instance` with
the real path to your Zope instance):

	sudo /path/to/zope/instance/bin/zopectl stop
	sudo /path/to/zope/instance/bin/zopectl fg

Note: the above commands are for Ubuntu/Debian/Debian-derivative Linux
systems. They will require some modifications to work on other systems.

After Zope starts up by using the above commands, keep the terminal
window open and browse to your Zope/Plone installation in a web
browser.  When the page comes up (and the "No traversable adapter
found" error is displayed), look at the terminal screen.  A traceback
should have been displayed.  Near the bottom of the screen, there
should be a specific error. The error at the bottom of the might screen
start with:

	ImportError:

If this is the case, you should search for the dependency that the
error refers to in Google, download it, and install it.  For example,
the product that I was trying to install required the DataGridField and
AddRemoveWidget Products.  I was able to download those from
<http://www.plone.org/products>.  After installing the dependencies,
Zope/Plone worked perfectly.

However, if you receive a different error, there are a few main
solutions that you could try:

1. Try re-downloading the Product after clearing your browser's cache.
   Internet Explorer is known to download files incorrectly and corrupt
   them from time-to-time.
2. Try downloading a different version of the Product.  There is a
   slight chance that the particular version of the Product that you
   were trying to install had a bug.  If this is the case, make sure to
   report the bug so that it can be fixed by the author.
3. Check to see if the Product that you are using is compatible with
   the version of Plone that you are using.  Many plugins that are
   designed for Plone 2 will not work on Plone 3 without some
   modification.  There may, however, be a pre-release version of the
   Product that does work for your version of Plone.

Hopefully, these tips will help you!  If you have any thoughts on this
subject, feel free to comment below!
