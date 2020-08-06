## Brother Printer MFC-7840W

**NOTE:** A number of files will be created including some _Un-Install_ files. You may want to move these to a different location.

- Go to [support.brother.com](http://support.brother.com)
- Click on **Downloads**
- Search form **MFC-7840W**
- Select **Linux**, select **Linux (deb)**, then click **OK**
- Click on the **Driver Install Tool**
- Click the **Agree to the EULA and Download** button
- Save file
- Follow online instructions
	- On step 4... don't use `sudo su`.  Instead just use `sudo` on step 5.
	- Also on step 5, for `Brother machine name` use `MFC-7840W`.
	- On step 6 where it asks you to choose DeviceURI, say yes.  After that it asks you to choose the device.  You will see a list of options.  You should use the option to input the IP address.  The IP address usually used for the printer is 192.168.1.42

After this it will send out a test print... you should be done with the printer.


---

### Update needed for scanner

The scanner drivers are placed in `/usr/lib64/sane/`.  However, this is not picked up by the scan program.

You will need to copy the files into either `/usr/lib/sane/` or `/usr/lib/x86_64-linux-gnu/sane/`.

The best way is to create symbolic links into the directory:

```bash
sudo ln -s /usr/lib64/sane/libsane-brother* /usr/lib/x86_64-linux-gnu/sane
```
