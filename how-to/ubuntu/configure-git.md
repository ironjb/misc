# Configure Git

## Git Config Settings

```bash
git config --global user.name "username"
git config --global user.email email@address.com
```

## Git Branch in Terminal

Copy [.git-branch-in-terminal.sh](files/.git-branch-in-terminal.sh) or [.git-branch-status-in-terminal.sh](files/.git-branch-status-in-terminal.sh) into your home folder.

Now add the following to you `.profile` file (replace `.git-branch-in-terminal.sh` with `.git-branch-status-in-terminal.sh` if desired):

```bash
# JMB: Git branch in terminal
if [ -f ~/.git-branch-in-terminal.sh ]; then
  . ~/.git-branch-in-terminal.sh
fi
```
