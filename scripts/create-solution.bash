#!/bin/bash

if [ "$#" -eq 0 ]; then
  echo "Error: No exercise specified." 1>&2
  exit 1
fi

exercise_name="$1"
exercise_path="exercises/$exercise_name"
solution_path="solutions/$exercise_name"

if [ ! -d $exercise_path ]; then
  echo "Error: Exercise \"$exercise_name\" does not exist." 1>&2
  exit 1
fi

if [ -d $solution_path ]; then
  echo "Error: Solution \"$exercise_name\" already exists." 1>&2
  exit 1
fi

cp -Rp $exercise_path $solution_path
mkdir -p $solution_path
find $solution_path -type f -iname 'README.md' -exec rm {} \;
