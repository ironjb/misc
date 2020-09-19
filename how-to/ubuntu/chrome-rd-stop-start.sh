#!/bin/bash
# https://askubuntu.com/questions/1197600/unable-to-access-location-not-authorized-to-perform-operation

crd="Chrome Remote Desktop"
read -p "Do you want to start $crd (y/N)" startCRD

if [ "$startCRD" = "y" ]
then
    echo "Starting $crd"
    /opt/google/chrome-remote-desktop/chrome-remote-desktop --start
else
    echo "Stopping $crd"
    /opt/google/chrome-remote-desktop/chrome-remote-desktop --stop
fi

echo "You chose $startCRD"

# /opt/google/chrome-remote-desktop/chrome-remote-desktop --stop

# /opt/google/chrome-remote-desktop/chrome-remote-desktop --start
