#!/usr/bin/env bash
# Turns the G2 promo flyers into web images.
#   assets/flyers/<slug>.webp          full flyer (product page)
#   assets/img/products/<slug>.webp    product crop (cards)
# Usage: scripts/build-images.sh [dir-with-original-jpgs]   (default: assets/originals)
set -euo pipefail
SRC="${1:-$(cd "$(dirname "$0")/.." && pwd)/assets/originals}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/assets/flyers" "$ROOT/assets/img/products"
while IFS=$'\t' read -r prefix slug tpl; do
  [[ -z "$prefix" || "$prefix" == \#* ]] && continue
  f=$(ls "$SRC"/"$prefix"_*.jpg | grep -v '(1)' | head -1)
  convert "$f" -resize 900x -quality 80 "$ROOT/assets/flyers/$slug.webp"
  case "$tpl" in
    A) crop="1078x880+0+235" ;;   # below title/logo, above footer
    B) crop="1080x810+0+430" ;;   # below big logo, above footer
    C) crop="1080x760+0+400" ;;   # campaign flyer
  esac
  convert "$f" -crop "$crop" +repage -resize 800x -quality 80 "$ROOT/assets/img/products/$slug.webp"
  echo "ok $slug"
done < "$ROOT/scripts/flyers.tsv"
