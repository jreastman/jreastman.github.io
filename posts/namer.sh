#!/bin/bash

cdir="/home/jre/code/jreastman.github.io/posts"


if [ $# -eq 0 ]; then
        echo "please provide filename as argument"
else
    if [ "$PWD" = "$cdir" ]; then
        
        arg=$(echo "$1"|tr " " "_")
        touch "$(date +%y-%m-%d)-$arg.jade"
    else
        echo "You are in the wrong DIR!"
        echo "Go to $cdir"
    fi
fi
