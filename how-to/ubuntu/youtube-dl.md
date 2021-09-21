# youtube-dl

This program will help you download videos or extract audio from youtube videos

Follow instructions from https://youtube-dl.org/ to download

You may also need to create a symlink to python3 [see here](https://stackoverflow.com/questions/3655306/ubuntu-usr-bin-env-python-no-such-file-or-directory)

```
sudo ln -s /usr/bin/python3 /usr/bin/python
```


You also need to install ffmpeg

```
sudo apt install ffmpeg
```

You can create a config file for `youtube-dl` in the following folder

```
~/.config/youtube-dl/config
```

You might include the following to extract mp3 from video:

```
# Always extract audio
-x

# Save all under music/youtube-dl
-o ~/Music/youtube-dl/%(title)s.%(ext)s

# Audio format
--audio-format mp3
```