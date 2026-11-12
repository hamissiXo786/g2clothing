# G2 Clothing & Homeware website

Static showcase site (plain HTML/CSS/JS, no build step) for G2 Clothing & Homeware: branded items for less, with 8 stores in Durban & PMB.

## Run locally
```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

## Pages
- `index.html`: home (hero, kids banner, categories, hot picks, about, why G2)
- `shop.html`: all products, with `?cat=mens|ladies|boys|girls|footwear|accessories`, `?deals=1` and `?q=search`
- `product.html?id=<product-id>`: product + in-store flyer + "Order on WhatsApp"
- `stores.html`, `contact.html`

## Adding or changing products
1. Put the new flyer JPG in `assets/originals/`.
2. Add a line to `scripts/flyers.tsv`: `<filename-prefix>  <product-id>  <template>`. Use A for the grey "Branded items for less" flyers, B for the "Style Wins" flyers and C for campaign flyers.
3. Run `scripts/build-images.sh` (needs ImageMagick). This writes `assets/img/products/<id>.webp` (card crop) and `assets/flyers/<id>.webp`.
4. Add the product to `js/products.js` (name, category, type, price, badge).

Contact details, socials and store addresses live at the bottom of `js/products.js`.
