#!/bin/bash
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