speedbreeze.com
===============

This repository holds data for my personal website in a
Jekyll-compatible format.

Why?
----

I'm moving away from WordPress/Drupal/[insert SQL-backed CMS here]
because I realized that I'm going to have a wonderfully painful time
trying to migrate my data if I want to move to a different platform or
web host in the future.

I want my site built on a platform that's relatively human-readable and
probably future-proof.  Jekyll makes a good choice for this.  It's
flexible and extensible.  It's based on open formats.  It can be used
with git/GitHub--I can get free revision tracking!

I'm probably not going to use the Jekyll executable to generate a static
site.  I want a bit more interactivity that Jekyll can offer at the
moment.  Instead, I'll probably build an application that will query
the GitHub API and generate the site (with comments) semi-dynamically.
Now that there are several open-source implementations of the AppEngine
server stack, I think it's safe to deploy the application on top of
Google AppEngine.

License
-------

For the time being, all of the content here is copyright 2010 Jonathan
Wilde.  If you want to borrow something, please contact me at
<jonathan+borrowing@speedbreeze.com>.
