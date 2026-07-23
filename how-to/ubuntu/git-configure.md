# Configure Git

## Git Config Settings

```bash
git config --global user.name "username"
git config --global user.email email@address.com
```

## Git Branch in Terminal

### Option 1

From the root folder of this repo run the following commands:

```sh
cp how-to/mac/assets/downloads/.git-prompt.sh ~/
cp how-to/ubuntu/files/.git-prompt-colors.sh ~/
printf "\n# JMB: Git branch in terminal\nif [ -f ~/.git-prompt-colors.sh ]; then\n  . ~/.git-prompt-colors.sh\nfi\n" >> ~/.bashrc
```

These commands will add scripts to the home folder and following lines to `~/.bashrc`

```sh
# JMB: Git branch in terminal
if [ -f ~/.git-prompt-colors.sh ]; then
  . ~/.git-prompt-colors.sh
fi
```

### Option 2

Follow [these instructions](https://digitalfortress.tech/tutorial/setting-up-git-prompt-step-by-step/)

> For step 2, I have a modified version I prefer [here](files/.git-prompt-colors.sh).

Add this script to `.bashrc` (does not work in `.profile` on Ubuntu). Or create a separate script and then add a reference to it in your `.bashrc` file.

### Option 3

Copy [.git-branch-in-terminal.sh](files/.git-branch-in-terminal.sh) or [.git-branch-status-in-terminal.sh](files/.git-branch-status-in-terminal.sh) into your home folder.

Now add the following to you `.bashrc` file (replace `.git-branch-in-terminal.sh` with `.git-branch-status-in-terminal.sh` if desired):

```bash
# JMB: Git branch in terminal
if [ -f ~/.git-branch-in-terminal.sh ]; then
  . ~/.git-branch-in-terminal.sh
fi
```
