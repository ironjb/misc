# Helpful File Folder Commands

## Remove duplicate files

Install `fdupes`, then run command from folder:

```sh
fdupes -r -d ./
```

## Remove empty folders

```sh
find ./ -empty -type d -delete
```

## Find files and delete

```sh
find . -name "Thumbs.db" -delete
```

## Rename files

```sh
#example:
rename 's/old-name/new-name/' files

#takes out _000_ and puts only _
rename 's/_000_/_/' *.*

# renames file inside folder and moves it up folders
# NOTE: remove the -n to perform action
rename -n -d 's//..\/..\/2008-09-25-/' 2008/09/25/*
```
