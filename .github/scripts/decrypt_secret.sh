#!/bin/sh
cd ./.github/scripts/
ls
# Decrypt the file
# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --pinentry-mode loopback --passphrase="mandarina" \
--output ../../src/firebaseAuth.json firebaseAuth.json.gpg