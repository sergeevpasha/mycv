#!/bin/sh
set -e

[ -d node_modules ] || cp -a /build/node_modules ./node_modules

exec "$@"
