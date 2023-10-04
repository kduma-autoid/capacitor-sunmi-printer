#!/bin/sh

# Source: https://stackoverflow.com/a/1482133
dir=$( dirname -- "$( readlink -f -- "$0"; )"; )

# Source: https://stackoverflow.com/a/64390598
increment_version() {
  local delimiter=.
  local array=($(echo "$1" | tr $delimiter '\n'))
  array[$2]=$((array[$2]+1))
  if [ $2 -lt 2 ]; then array[2]=0; fi
  if [ $2 -lt 1 ]; then array[1]=0; fi
  echo $(local IFS=$delimiter ; echo "${array[*]}")
}

number=$(sed '3q;d' "${dir}/../example/config.yaml")
number=${number#*: }
if [[ ${1:-2} -lt 0 ]]
then
  new_number=${number}
else
  ((new_number=number+1))
fi

version=$(sed '5q;d' "${dir}/../example/config.yaml")
version=${version#*: }

if [[ ${1:-2} -gt 2 ]]
then
  new_version=${version}
else
  if [[ ${1:-2} -lt 0 ]]
  then
    new_version=${version}
  else
    new_version=$(increment_version ${version} ${1:-2})
  fi
fi

sed -e "3s/$number/$new_number/;5s/$version/$new_version/" "${dir}/../example/config.yaml" > "${dir}/../example/config.yaml.tmp" \
  && mv "${dir}/../example/config.yaml.tmp" "${dir}/../example/config.yaml"


if [[ ${2:ALL} == "VERSION" ]]
then
  echo "$new_version"
else
  if [[ ${2:ALL} == "BUILD" ]]
  then
    echo "$new_number"
  else
    echo "VERSION=$new_version"
    echo "BUILD=$new_number"
  fi
fi

