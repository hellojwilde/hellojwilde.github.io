---
layout: article
title: Solving Ubuntu 9.04's PIL Problems
---
Last night, I began some volunteer Plone 3 development work for a local
robotics organization.  My first step was to create a buildout on my
Ubuntu 9.04 workstation where I do my development.  I ran the usual set
of commands to create, bootstrap, and build a new one.  Everything went
normally, until I attempted to start the buildout in foreground with
the following:

	python2.4 bin/instance fg

For some reason, the instance did not start. Instead, I received the following
Python error:

	ImportError: No module named PIL

My first thought was to check Synaptic to make sure that the
`python-imaging` package (which contains a copy of PIL, the Python
Imaging Library) was installed properly.  It's possible that I could
have uninstalled it accidentally.  Suprisingly, according to Synaptic,
the `python-imaging` package was installed.

Was my Python 2.4 installation somehow corrupted?  I tried reinstalling
all of my Python packages.  Unfortunately, even after that, I still
received that PIL ImportError.

Eventually, I decided to stop trying to get the official Ubuntu
packages to work.  I usually rely on the Ubuntu repositories because
installing software through other means may cause problems in the
future if one tries to upgrade to the next distribution release (e.g.
Ubuntu 9.10) using the in-place upgrader.

Instead, I decided to install the Python Imaging Library with the
`easy_install` utility, as suggested in the "A note about PIL" section
of Pinax's documenation.  To do this, I ran the following command:

	sudo easy_install -i http://dist.serverzen.com/pypi/simple PILwoTk

After installing PIL with the above method, my Plone 3 buildout worked.
It appears that the current Ubuntu PIL packages are broken for some
reason.  If you need PIL and cannot get the Ubuntu PIL packages to
work, this provides a simple workaround.
