# Grub Update

How to set Grub to remember your last entry

## Backup

```sh
mkdir ~/grub-backup
```

```sh
cp /etc/default/grub ~/grub-backup
cp -a /etc/grub.d ~/grub-backup
```

## Update Grub

Open grub with nano, gedit, vscode, or sublime text:

```sh
sudo nano /etc/default/grub
```

Look for the line with the following:

```sh
GRUB_DEFAULT=0
```

Change it to:

```sh
GRUB_DEFAULT=saved
```

Next, add a new line with the following:

```sh
GRUB_SAVEDEFAULT=true
```

You may also consider the following:

```sh
# change the grub timeout
GRUB_TIMEOUT=10

# hide grub menu unless shift key is pressed
GRUB_FORCE_HIDDEN_MENU="true"
```

Save and exit the file.

## Update Changes to Grub

```sh
sudo update-grub
```

## Restore Backup (if needed)

```sh
sudo rm /etc/default/grub
sudo rm -rf /etc/grub.d
sudo cp ~/grub-backup/grub /etc/default/
sudo cp -a ~/grub-backup/grub.d/ /etc/
```
