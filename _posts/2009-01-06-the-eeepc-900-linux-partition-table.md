---
layout: article
title: The EeePC 900 (Linux) Partition Table
---
<div class="warn" markdown="1">
Note: If you use any of the information in this blog post and trash
your computer, it's not my fault. I'm not liable for anything that
happens to you or your equipment.  This information is provided as-is
with no warranties, expressed or implied.
</div>

During late spring 2008, I used up about $600 of my personal savings to
buy an ASUS EeePC 900.   In retrospect, the EeePC was probably one of
the best purchases that I ever made.  It's amazingly light (a little
over 2 pounds) and gets decent battery life.  These two features were
especially handy during my trip to the Plone Conference Sprints in
Washington DC in October 2008.

In my typical geek/modder/hacker fashion, I proceeded to trick out the
default Xandros operating system. I replaced the default tabbed
interface and IceWM with the super-light XFCE desktop environment.  I
even installed a rudimentary compositor so could have translucent
windows.

At the time, I didn't see the need to install a new OS.  Xandros *is* a
derivative of Debian, after all.  What I didn't realize is that ASUS
made modifications to core libraries used in Debian, such as `libaudio`.
This made compiling certain applications rather difficult.  I also saw
some weirdness with the Java classpath.   The only development
environment that I was able to get running was the Plone toolkit:
buildout, ZopeSkel, etc.  In other words, the default ASUS-modded
Xandros operating system isn't a very good operating system for
software development.

Enter [Easy Peasy](http://www.geteasypeasy.com/).  Essentially, it's an
unofficial fork of Ubuntu with tweaks for netbooks.  When version
8.04.1 of Easy Peasy came out, I tried to install it, but couldn't get
my flash drive to successfully boot the LiveUSB copy of it.

Last night, I managed to get Easy Peasy to boot off of my flash drive.
When I decided to install it, I decided to manually partition the hard
disk.  My EeePC 900 came with 2 hard disks.  The 4 gigabyte disk holds
the system files and mounts to the "/" directory.  The 16 gigabyte disk
holds user files and mounts to the "/home" directory.  Since the EeePC
doesn't have a swap partition (to prevent the flash memory used for the
disks from being trashed), there'd probably be two partitions: one on
the 4 gigabyte disk, one on the 16 gigabyte disk, both formatted with
the Ext-3 filesystem. Right?

Wrong.

When I looked at gparted, the GNOME partitioner, I noticed that there
were a total of 5 partitions.  Not shiny.  To inform readers (and
future me) with what these partitions probably are used for, I've put
together the following handy tables.  The information used to compile
the "notes" and "label" columns of the first table was borrowed from
the ["What is on Partitions 3 and 4 ?"
EeeUser thread](http://forum.eeeuser.com/viewtopic.php?id=779).  The
information for the "drive" and "filesystem" columns was found using
the following command:

	sudo fdisk -l

Finally, the information used to compile the "size" column was taken
from gparted.

Drive: /dev/sda
---------------

|Drive		| Label		| Size	| Filesystem		| Notes                                                                          |
|-----------|-----------|-------|-------------------|--------------------------------------------------------------------------------|
|/dev/sda1 	| SYSTEM	| 2.4 GB| ext2				| This holds a copy of the Xandros operating system used for system restoration. |
|/dev/sda2 	| USER		| 1.5 GB| ext3				| This holds the active copy of Xandros used to run the system.                  |
|/dev/sda3 	| BIOS		| 8 MB	| W95 FAT32 (LBA)	| This holds a copy of the BIOS for updating purposes. Don't delete this.        |
|/dev/sda4 	| EFI		| 8 MB	| EFI (FAT-12/15/32)| Used for the BootBooster BIOS option. Don't delete this.                       |

Drive: /dev/sdb
---------------

|Drive		| Label	| Size		| Filesystem	| Notes                                                                              |
|-----------|-------|-----------|---------------|------------------------------------------------------------------------------------|
|/dev/sdb1	| n/a	| 15.7 GB	| ext3			| Mounted as "/home". This is where all of your files go.                            |
