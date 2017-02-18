## How To Copy an Audio CD using the Command Line

[This forum post](http://www.pclinuxos.com/forum/index.php/topic,128931.msg1085671.html?PHPSESSID=j24jiikktepssniffknrmtugv5#msg1085671) is where I got the information to do this.

### Prior Steps
1. Create an empty folder to work with
0. Make sure icedax and wodim are installed

### Copying Audio CD
To Copy an AudioCD with the CD-TEXT info, use the following command:

	icedax dev=/dev/sr0 -vall cddb=0 -B -Owav

### Burn Audio CD
To create the AudioCD with the .wav and .inf files

	wodim dev=/dev/sr0 -eject -v -dao -useinfo -text *.wav


