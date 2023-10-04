#!/bin/sh

# Source: https://stackoverflow.com/a/1482133
dir=$( dirname -- "$( readlink -f -- "$0"; )"; )


if [ -z "$(cd "$dir/../" && git status --porcelain)" ]
then
  version=$(cd "$dir/../.scripts/" && ./bump_version.sh ${1:-2} VERSION) && echo "Releasing version $version" && \
  cd "$dir/../example/" && npm install && npm run build:android && \
  cd "$dir/../" && npm install && npm run verify && npm run build && \
  cd "$dir/../" && git add --all && git commit -m "Release $version" && git tag -a "v$version" -m "Release $version" && git push && git push --tags
else
  echo "Working directory not clean. Please commit all changes before releasing."
fi