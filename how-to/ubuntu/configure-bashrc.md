# Configure .bashrc

Add the following to the end of the `.bashrc` file:

```
# ========== JMB stuff ==========

#JMB: Add global npm install location to PATH
NPM=~/.npm-global/bin

export PATH=$PATH:$NPM

# JMB: Sets Sublime Text or VSCode as editor
# export EDITOR='subl -w'
export EDITOR='code -w'

# JMB: Git branch in terminal
if [ -f ~/.git-prompt-colors.sh ]; then
  . ~/.git-prompt-colors.sh
fi

```
