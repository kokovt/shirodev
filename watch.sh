#!/bin/bash
# Copyright {year} {holder}
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
# ...


set -euo pipefail

TSC_LOG="./logs/tsc.log"
SASS_LOG="./logs/sass.log"

mkdir -p ./logs

cleanup() {
  kill $(jobs -p) 2>/dev/null || true
  wait 2>/dev/null || true
}

trap cleanup EXIT INT TERM

NODE_DISABLE_COLORS=1 npx tsc --watch 2>&1 | tee "$TSC_LOG" &
npx sass ./scss:./css --watch 2>&1 | tee "$SASS_LOG" &

wait