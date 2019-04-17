# Mac setup

Go to the bottom of this page to see the final results of the `~/.npmrc`, `~/.profile`, and `~/.gitconfig` files.

---

## Basic Git Setup

Use the following setting to set up Git:

```bash
git config --global user.name "Your Name"
git config --global user.email your@email.com
git config --global http.proxy http://proxy.server.address
git config --global http.sslVerify false
git config --global https.proxy http://proxy.server.address
git config --global https.sslVerify false

```

---

## Display Git branch name in terminal

In **Git Bash** on Windows, the branch name is shown when you are in a git repository.  The Mac terminal does not do this out of the box.  You will need to follow the steps below to get this to work:

1. Open the terminal and copy the `git-prompt.sh` file into your home directory with the following command:

	```bash
	cp /Library/Developer/CommandLineTools/usr/share/git-core/git-prompt.sh ~/.git-prompt.sh
	```

	The `git-prompt.sh` file should already come with the MacOS command line tools (`xcode-select --install`).  If not, you can download it [here](assets/downloads/.git-prompt.sh) and place it in your home directory.

2. Open `~/.profile` in your favorite text editor and add the following lines of code:

	```bash
	# GIT: display branch in prompt
	if [ -f ~/.git-prompt.sh ]; then
	. ~/.git-prompt.sh
	fi

	export PS1='\u@\h \W\[\033[32m\]$(__git_ps1 " (%s)")\[\033[00m\] \$ '
	```

3. Close and re-open the terminal for changes to go into effect.

---

## Git autocomplete branch name

In **Git Bash** on Windows, you can start typing the name of a branch and then hit the TAB key to autocomplete the branch name.  The Mac terminal does not do this out of the box.  You will need follow the steps below to get this to work:

1. Open the terminal and copy the `git-completion.bash` file into your home directory with the following command:

	```bash
	cp /Library/Developer/CommandLineTools/usr/share/git-core/git-completion.bash ~/.git-completion.bash
	```

	The `git-completion.bash` file should already come with the MacOS command line tools (`xcode-select --install`).  If not, you can download it [here](assets/downloads/.git-completion.bash) and place it in your home directory.

2. Open `~/.profile` in your favorite text editor and add the following lines of code:

	```bash
	# GIT: autocomplete branch name in terminal
	if [ -f ~/.git-completion.bash ]; then
	  . ~/.git-completion.bash
	fi
	```

3. Close and re-open the terminal for changes to go into effect.

---

## Setting up NPM

Use the following settings to set up NPM:

```bash
npm config set strict-ssl false
npm config set ca=null
npm config set proxy http://proxy.server.address
npm config set http-proxy http://proxy.server.address
npm config set https-proxy http://proxy.server.address
```

Make sure `prefix` is set:

```bash
npm config get prefix
```

This should return something like:

```bash
/Users/aa00000/.npm-packages
```
with `aa00000` being your SEOID.

If prefix is **NOT** set you will need to set it, otherwise skip this next part.

First make sure the folder `~/.npm-packages/` exists.  Then, run the following:

```bash
npm config set prefix ~/.npm-packages
```

---

## Setup for using global NPM commands in command line

If you have installed Gulp, @angular/cli or any other NPM package globally, you may get `command not found`.  This is because NPM is not part of the PATH.

First we need to take a look at the `~/.npmrc` file.  You may already have a setting for `prefix`. If not, you will need to add the following (note that aa00000 should be your SEOID):

```bash
prefix=/Users/aa00000/.npm-packages
```

Now we need to add this to the PATH.  Let's open up `~/.profile`.  In this file you may already have a setting for path.  Something like this:

```bash
export PATH=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin
```

We will be adding to this path.  You can do this by adding the following lines of code in `~/.profile`:

```bash
# Node Path
NPM=~/.npm-packages/bin

# Combine Paths
export PATH=$PATH:$NPM
```

---

## Setup for using VSCode, SublimeText, etc. in command line

In order to run `code`, `subl`, etc. from the command line, you will need to add it/them to the path.  Open the `~/.profile` file and add the following lines of code above the PATH export:

```bash
# VS Code Path (code)
VSCODE=~/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin

# Sublime Text Path (subl)
SUBL=~/Applications/Sublime\ Text.app/Contents/SharedSupport/bin

# Sublime Merge Path (smerge)
SMERGE=~/Applications/Sublime\ Merge.app/Contents/SharedSupport/bin
```

Then update the PATH to export the additional path(s):
```bash
# Combine Paths
export PATH=$PATH:$NPM:$VSCODE:$SUBL:$SMERGE
```

---
---



## The final `~/.gitconfig` file

```bash
[user]
	name = Your Name
	email = your@email.com
[http]
	proxy = http://proxy.server.address
	sslVerify = false
[https]
	proxy = http://proxy.server.address
	sslVerify = false

# You may have additional settings if you installed SourceTree or made other config changes
```



## The final `~/.npmrc` file

```
prefix=/Users/jb56785/.npm-packages
strict-ssl=false
ca=null
proxy=http://proxy.server.address/
http-proxy=http://proxy.server.address
https-proxy=http://proxy.server.address
```


## The final `~/.profile` file

```bash
export PATH=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin

# Node Path
NPM=~/.npm-packages/bin

# VS Code Path (code)
VSCODE=~/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin

# Sublime Text Path (subl)
SUBL=~/Applications/Sublime\ Text.app/Contents/SharedSupport/bin

# Sublime Merge Path (smerge)
SMERGE=~/Applications/Sublime\ Merge.app/Contents/SharedSupport/bin

# SASS Path (sass)
SASS=~/CliApplications/dart-sass

# Combine Paths
export PATH=$PATH:$NPM:$VSCODE:$SUBL:$SMERGE:$SASS



# P4Merge
alias p4merge=~/Applications/p4merge.app/Contents/MacOS/p4merge



# Set NPM proxy
npm config set proxy http://proxy.server.address
npm config set http-proxy http://proxy.server.address
npm config set https-proxy http://proxy.server.address

# Something for Node in dealing with Certificate
export NODE_TLS_REJECT_UNAUTHORIZED='0'



# Sets SublimeText (or VSCode) as editor
export EDITOR='subl -w'
# export EDITOR='code -w'


# Set proxy for terminal
export http_proxy=http://proxy.server.address
export https_proxy=http://proxy.server.address



# GIT: autocomplete branch name in terminal
if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi

# GIT: display branch in prompt
if [ -f ~/.git-prompt.sh ]; then
  . ~/.git-prompt.sh
fi

export PS1='\u@\h \W\[\033[32m\]$(__git_ps1 " (%s)")\[\033[00m\] \$ '



# Color in terminal
export CLICOLOR=1;
export LSCOLORS=exfxcxdxbxegedabagacad;


```
