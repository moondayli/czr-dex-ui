#!/usr/bin/env bash
# Create a new public repo on your GitHub account and push this project.
# Run in your normal terminal (not CI): `gh` needs a TTY or GH_TOKEN.
set -euo pipefail
cd "$(dirname "$0")/.."
REPO_NAME="${1:-czr-7499}"

if git remote get-url origin &>/dev/null; then
  echo "Remote 'origin' already exists:"
  git remote get-url origin
  echo "Remove it first: git remote remove origin"
  exit 1
fi

gh auth status
gh repo create "$REPO_NAME" --public --source=. --remote=origin --push \
  --description "Orderly broker DEX UI"
LOGIN="$(gh api user -q .login)"
echo "Published: https://github.com/${LOGIN}/${REPO_NAME}"
