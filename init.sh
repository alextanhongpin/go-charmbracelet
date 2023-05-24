#!/bin/sh

# https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
set -e # Exit immediately on error.

export user=$(gum input --placeholder "your name")
export pass=$(gum input --password --placeholder "your password")
export desc=$(gum write --placeholder "Details of this change (CTRL+D to finish)")

# call to validate
node validate.mjs

echo user: $user
echo pass: $pass
echo desc: $desc
