# Configure NPM

## Configure global package installation

By default NPM may install global packages to some folder that requires admin.  You can changes this by configuring NPM to install them to a hidden folder in your home directory.

First create the hidden folder

```bash
mkdir ~/.npm-global
```

Open up your `~/.npmrc` file (create it if it doesn't exist) and add the following line:

```
prefix=${HOME}/.npm-global
```

Now you need to update your PATH so you can use the packages in the terminal

Open your `~/.bashrc` file and add the following lines at the end:

```bash
#JMB: Add global npm install location to PATH
NPM=~/.npm-global/bin

#JMB: Combine paths
export PATH=$PATH:$NPM
```
