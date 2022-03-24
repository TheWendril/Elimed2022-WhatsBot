#!/bin/bash

#processID=$(node index.js)

#echo "$processID"

while true; do

    actualhour=$(date +%H)
    echo $actualhour;

    if ["$actualhour" == "23"]; then
        exit 0
    fi

    # Esperar uma hora pra refazer a verificação
    sleep 3600
done