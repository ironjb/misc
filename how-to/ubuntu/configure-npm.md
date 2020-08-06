# Configure NPM

## Configure global package installation

By default NPM may install global packages to some folder that requires admin.  You can changes this by configuring NPM to install them to a hidden folder in your home directory.

First create the hidden folder

```bash
mkdir ~/.npm-packages
```

Open up your `~/.npmrc` file (create it if it doesn't exist) and add the following line:

```
prefix=${HOME}/.npm-packages
```

Now you need to update your PATH so you can use the packages in the terminal

Open your `~/.profile` file and add the following lines:

```bash
# JMB: update path to point to npm packages so they can be run from terminal
NPM_PACKAGES="${HOME}/.npm-packages"
PATH="$NPM_PACKAGES/bin:$PATH"
```
