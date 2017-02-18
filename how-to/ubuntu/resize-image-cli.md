#Resize Image

You may need to install imagemagick. Also see this link on [HowToGeek](http://www.howtogeek.com/109369/how-to-quickly-resize-convert-modify-images-from-the-linux-terminal/).

```bash
sudo apt-get install imagemagick
```

Then use one of the following commands:

One format to another

```bash
convert image.png image.jpg
```

Compression for jpeg

```bash
convert image.png -quality 95 image.jpg
```

Resize, but try to keep aspect ratio

```bash
convert example.png -resize 200×100 example.png
```

Resize and forget aspect ratio

```bash
convert example.png -resize 200×100! example.png
```

Resize to width

```bash
convert example.png -resize 200 example.png
```

Resize to height

```bash
convert example.png -resize x100 example.png
```

Batch Process

```bash
for file in *.png; do convert $file -rotate 90 rotated-$file; done
```

```bash
for file in *.jpg; do convert $file -resize 720x720 testf/$file; done
```

