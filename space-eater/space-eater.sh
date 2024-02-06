#!/bin/bash
# A puzzle script that creates a tree structure using folders with a depth 5 where each sub folder also has 5 sub folders
# One random end node folder has a 1GB file in it, find it! (hint: du)

makeFolders() {
  for i in {0..4}; do
    folder=$2/$i
    mkdir $folder

    if (($1 > 1)); then
      makeFolders $(($1 - 1)) $folder
    fi
  done
}

makeFolders 5 $(pwd)

file=$(($RANDOM % 5))
for i in {0..4}; do
  file="$file/$(($RANDOM % 5))"
done

dd if=/dev/zero of=$file bs=1M count=1000
