# Ubuntu Install

## Enable Canonical Partners

- Open **Software & Updates**.
- Click on the **Other Software** tab.
- Check the box next to **Cononical Partners**


## Core files

```bash
sudo apt-get install curl screen trash-cli chromium-browser git
```


## Multimedia Extras

### Ubuntu 16.04

```bash
sudo apt-get install ubuntu-restricted-extras
sudo apt-get install libdvd-pkg
sudo dpkg-reconfigure libdvd-pkg
```

See:
[this](https://help.ubuntu.com/community/RestrictedFormats/PlayingDVDs)
and
[this](https://sites.google.com/site/easylinuxtipsproject/multimedia)

### Ubuntu 14.04

```bash
sudo apt-get install ubuntu-restricted-extras
sudo apt-get install libdvdread4
sudo /usr/share/doc/libdvdread4/install-css.sh
```


## Multimedia

```bash
sudo apt-get install vlc easytag k3b asunder icedax wodim skype
```


## Flash for Chromium

Open **Software & Updates** and go to the **Other Software** tab and make sure the **Canonical Partners** is checked.

```bash
sudo apt-get update
sudo apt-get install adobe-flashplugin
```


## Dropbox

```bash
sudo apt-get install nautilus-dropbox
```

Then run dropbox from the Applications menu. You may be asked to restart nautilus.

Sign in with \*\*\*\*\*b@g\*\*\*\*.com


## NodeJS (choose version 4 or older)

See: [this](https://github.com/nodesource/distributions#debinstall)

#### v4 LTS
```bash
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### v6 Current
```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```


## NPM packages to install

- bower
- clean-css
- html-minifier
- http-server
- js-beautify
- less
- less-plugin-autoprefix
- less-plugin-clean-css
- minjson
- rimraf
- tsd
- typescript
- uglify-js
- uglifycss



## Meteor

```bash
curl https://install.meteor.com/ | sh
```


## Sublime Text

```bash
sudo add-apt-repository -y ppa:webupd8team/sublime-text-3
sudo apt-get update
sudo apt-get install sublime-text-installer
```

Then go to [https://packagecontrol.io/](https://packagecontrol.io/) to install the package manager and packages.

> Some packages you may want to install:

>- AdvancedNewFile
- Alignment
- AngularJS
- AngularJS (CoffeeScript)
- Better CoffeeScript
- DocBlockr
- Emmet
- jQuery
- JsFormat
- LESS
- Less2Css
- Typescript
- RevertFontSize
- SublimeLinter
	- coffee
	- csslint
	- contrib-lessc
	- html-tidy
	- json
	- xmllint


## FreeFileSync

(does not have 16.04 repository yet)

```bash
sudo add-apt-repository ppa:freefilesync/ffs
sudo apt-get update
sudo apt-get install freefilesync
```


## Handbrake

Note: The default Ubuntu version does not create MP4 files.

```bash
sudo add-apt-repository ppa:stebbins/handbrake-releases
sudo apt-get update
sudo apt-get install handbrake-gtk handbrake-cli
```


## MoneyDance

Go to [MoneyDance](http://moneydance.com/). Download the **MoneyDance 64-bit .DEB version** then run the command:

```bash
sudo dpkg -i [name-of-moneydance-file].deb
```

### Moneydance Archive and Restore


#### Create backup/archive

In Moneydance, go to **File > Export Backup...**

Save the **.moneydancearchive** file.

Make sure this gets backed up somewhere at some point.


#### Restore Moneydance from monedancearchive file

First, copy the **_somename_.moneydancearchive** file into the **~/.moneydance/Documents/** folder (don't go into the backup folder).

Open MoneyDance. You should get the **Welcome to Moneydance** startup screen. Select **Import new account set**. (If you don't get the **Welcome to Moneydance** startup screen, go to **File > Restore from Backup...**)

Navigate to the **_somename_.moneydancearchive** file you placed into the **~/.moneydance/Documents/** folder and click **Open**. (You may need to use **ctrl+h** to view hidden folders and files.)

You should now be good to go.

**NOTE:** If you get a "java.lang..." error, you might be able to just ignore it. It probably created the files correctly.  However, now you will need to use the **open other** option.

### MoneyDance Key

After the install, you need to register it with the key.


## Brother Printer

**NOTE:** A number of files will be created including some _Un-Install_ files. You may want to move these to a different location.

- Go to [support.brother.com](http://support.brother.com)
- Click on **Downloads**
- Search form **MFC-7840W**
- Select **Linux**, select **Linux (deb)**, then click **Search**
- Click on the **Driver Install Tool**
- Click the **Agree to the EULA and Download** button
- Save file
- Follow online instructions
	- On step 4... don't use `sudo su`.  Instead just use `sudo` on step 5.
	- Also on step 5, for `Brother machine name` use `MFC-7840W`.
	- On step 6 where it asks you to choose DeviceURI, say yes.  After that it asks you to choose the device.  You will see a list of options.  You should use the option to input the IP address.  The IP address usually used for the printer is 192.168.1.42

After this it will send out a test print... you should be done.

If the scanner can't be found, you may look into the following:
[This](http://ubuntuforums.org/showthread.php?t=2321613&page=2),
[this](http://ubuntuforums.org/showthread.php?t=2043258), and
[this for ubuntu 18.04](https://ubuntuforums.org/showthread.php?t=2390815&page=2).

These suggest copying **/usr/lib64/sane** to **/usr/lib/sane**

```bash
sudo cp -r /usr/lib64/sane /usr/lib/sane
```

For **Ubuntu 18.04** use the following:

```bash
sudo cp /usr/lib64/sane/libsane-brother* /usr/lib/x86_64-linux-gnu/sane
```


## Other development tools
gitk, git-gui, meld, koala???


## Other
fslint, skype, google hangouts, samba (if needed)


## SSH

[Ubuntu SSH Guide](https://help.ubuntu.com/lts/serverguide/openssh-server.html),
[Other Helpful SSH Guide](https://help.ubuntu.com/community/SSH/OpenSSH/Keys)

The follwing installs openssh-client and openssh-server (openssh-client is probably already installed)

```bash
sudo apt-get install ssh
```

Next make a copy of the ssh server config file and make it read only

```bash
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.original
sudo chmod a-w /etc/ssh/sshd_config.original
```

Open the sshd_config file and make changes as needed. You may want to change the following:

- Set **Port** to something other than **22**
- Set **PubkeyAuthentication** to **yes**
- Set **PermitRootLogin** to **no**
- Set **PasswordAuthentication** to **no** (must use ssh key instead)

After saving changes to config file, restart SSH

```bash
sudo service ssh restart
```

### To generate SSH Key

On the **Client** Use the command below.

```bash
ssh-keygen -t rsa
```

Note:
- It _may_ prompt for password.
- Just hit _Enter_ for **Enter file in which to save the key**
- Just hit _Enter_ for **Enter passphrase** unless you want to use a passphrase

Now copy the public key to the server (you will still need password access at this point)

```bash
ssh-copy-id username@serverIP
```

This will append the public key to **~/.ssh/authorized_keys** on the server.

Now that you have your public/private key set up you may update the **/etc/ssh/sshd_config** file to disable **PasswordAuthentication**


## Copy to/from server with SCP

[Examples for SCP](http://www.hypexr.org/linux_scp_help.php)

### copy from server to local
```bash
scp username@serverIp:/remote_dir/filename localdir/
```

### copy from local to server
```bash
scp localdir/filename username@serverIp:/remote_dir/
```



## logitech pairing
```bash
sudo apt install solaar
```

You shouldn't have to add the PPA
[Solaar Instructions](http://www.webupd8.org/2013/07/pair-unpair-logitech-unifying-devices.html)



## logitech mouse buttons
[xinput](http://askubuntu.com/questions/492744/how-do-i-automatically-remap-buttons-on-my-mouse-at-startup/492745#492745)

Install **xinput**
```bash
sudo apt install xinput
```

View list of devices and their **id** (my mouse had an id of **9**)
```bash
xinput
```

View the list of **buttons supported** for the device (Substitute _id-of-device_ for the actual id)
```bash
input list _id-of-device_
```

Test which key to remap for device (Substitute _id-of-device_ for the actual id)
```bash
xinput test _id-of-device_
```

For each mouse movement and button press you will see the output for it.  Press the mouse button you want to map and make a note of the **id** (in my case it was button **10**)

To map the mouse button to a function, you need to install some other packages:
```bash
sudo apt install xbindkeys xautomation
```

See [THIS](http://askubuntu.com/questions/19569/how-can-i-assign-actions-to-all-my-mouse-buttons/308969#308969)

Create **.xbindkeysrc** file
```bash
xbindkeys --defaults > $HOME/.xbindkeysrc
```

Add the following lines to the **.xbindkeysrc** file. (Change **10** to the correct button id)
```sh
# Show Windows Mouse Button
"xte 'keydown Super_L' 'key w' 'keyup Super_L'"
  b:10
```

Set **xbindkeys** to start on startup


[xev - didn't work.](http://askubuntu.com/questions/152297/how-to-configure-extra-buttons-in-logitech-mouse)


