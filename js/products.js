/*
 * G2 product catalogue. Prices are in Rand, read from the in-store flyers.
 * To add a product: add a line here, put a crop in assets/img/products/<id>.webp
 * and (optionally) the full flyer in assets/flyers/<id>.webp.
 * badge: "best" | "new" | "deal" | null
 */
window.G2_CATEGORIES = [
  { id: "mens", name: "Mens" },
  { id: "ladies", name: "Ladies" },
  { id: "boys", name: "Boys" },
  { id: "girls", name: "Girls" },
  { id: "footwear", name: "Footwear" },
  { id: "accessories", name: "Accessories" },
];

window.G2_PRODUCTS = [
  // Mens
  { id: "mens-plain-tees-r50", name: "Mens Plain Tee", category: "mens", type: "T-Shirts", price: 50, badge: "best" },
  { id: "mens-v-neck-tees", name: "Mens V-Neck Plain Tee", category: "mens", type: "T-Shirts", price: 40, badge: "deal" },
  { id: "mens-graphic-tee-burnt", name: "Mens Graphic Tee – It's Not Burnt", category: "mens", type: "T-Shirts", price: 60, badge: "new" },
  { id: "mens-olive-tee", name: "Mens Premium Tee – Olive", category: "mens", type: "T-Shirts", price: 90, badge: null },
  { id: "mens-boys-shorts", name: "Men's & Boys Shorts", category: "mens", type: "Shorts", price: 100, badge: null },

  // Ladies
  { id: "ladies-slip-dress", name: "Ladies Tiered Slip Dress", category: "ladies", type: "Dresses", price: 75, badge: "best" },
  { id: "ladies-floral-flutter-dress", name: "Ladies Floral Flutter Dress", category: "ladies", type: "Dresses", price: 140, badge: "new" },
  { id: "ladies-black-maxi-dress", name: "Ladies Black Collared Maxi Dress", category: "ladies", type: "Dresses", price: 140, badge: null },
  { id: "ladies-floral-strap-dress", name: "Ladies Floral Strap Dress", category: "ladies", type: "Dresses", price: 130, badge: null },
  { id: "ladies-cream-maxi-dress", name: "Ladies Cream Long-Sleeve Dress", category: "ladies", type: "Dresses", price: 80, badge: null },
  { id: "ladies-glitter-bodycon-dress", name: "Ladies Glitter Bodycon Dress", category: "ladies", type: "Dresses", price: 90, badge: "best" },
  { id: "ladies-assorted-dresses", name: "Ladies Assorted Print Dress", category: "ladies", type: "Dresses", price: 120, badge: null },
  { id: "ladies-jumpsuit", name: "Ladies Ribbed Jumpsuit", category: "ladies", type: "Jumpsuits", price: 90, badge: null },
  { id: "ladies-pjs-set", name: "Ladies PJs Set", category: "ladies", type: "Sleepwear", price: 60, badge: "new" },
  { id: "ladies-gold-cami-top", name: "Ladies Gold Shimmer Cami", category: "ladies", type: "Tops", price: 40, badge: null },
  { id: "ladies-ribbed-top", name: "Ladies Ribbed Top", category: "ladies", type: "Tops", price: 30, badge: "deal" },
  { id: "ladies-graphic-tee", name: "Ladies Graphic Tee", category: "ladies", type: "Tops", price: 35, badge: null },
  { id: "ladies-stripe-top", name: "Ladies Stripe Tee", category: "ladies", type: "Tops", price: 40, badge: null },
  { id: "ladies-black-draped-top", name: "Ladies Black Draped Top", category: "ladies", type: "Tops", price: 50, badge: null },

  // Boys
  { id: "boys-outline-vest", name: "Boys Outline Vest", category: "boys", type: "Vests", price: 20, badge: "deal" },
  { id: "boys-level-up-vest", name: "Boys Level Up Vest", category: "boys", type: "Vests", price: 35, badge: null },
  { id: "boys-palm-vest", name: "Boys Palm Print Vest", category: "boys", type: "Vests", price: 35, badge: null },
  { id: "boys-basketball-vest-shorts", name: "Boys Basketball Vest & Shorts", category: "boys", type: "Sets", price: 80, badge: "best" },
  { id: "boys-car-tee", name: "Boys Car Tee", category: "boys", type: "T-Shirts", price: 40, badge: null },
  { id: "boys-california-tee", name: "Boys California Tee", category: "boys", type: "T-Shirts", price: 45, badge: "new" },

  // Girls
  { id: "girls-oh-la-la-tee", name: "Girls Oh La La Graphic Tee", category: "girls", type: "T-Shirts", price: 30, badge: "deal" },
  { id: "girls-bow-tee", name: "Girls Bow Tee", category: "girls", type: "T-Shirts", price: 45, badge: "best" },
  { id: "girls-star-tee", name: "Girls Star Tee", category: "girls", type: "T-Shirts", price: 45, badge: null },
  { id: "girls-stripe-tee", name: "Girls Stripe Tee", category: "girls", type: "T-Shirts", price: 50, badge: null },
  { id: "girls-jeans", name: "Girls Wide-Leg Jeans", category: "girls", type: "Jeans", price: 150, badge: "new" },

  // Footwear
  { id: "ladies-v-band-sandals", name: "Ladies V Band Sandals", category: "footwear", type: "Sandals", price: 40, badge: "best" },
  { id: "ladies-chain-trim-sandals", name: "Ladies Chain Trim Sandals", category: "footwear", type: "Sandals", price: 40, badge: null },
  { id: "ladies-plain-band-sandals", name: "Ladies Plain Band Sandals", category: "footwear", type: "Sandals", price: 100, badge: null },
  { id: "ladies-flower-flip-flops", name: "Ladies Flower Flip Flops", category: "footwear", type: "Sandals", price: 100, badge: "new" },

  // Accessories
  { id: "ladies-hair-bow", name: "Ladies Hair Bow", category: "accessories", type: "Hair", price: 30, badge: null },
  { id: "ladies-hair-clips", name: "Ladies Hair Clips", category: "accessories", type: "Hair", price: 15, badge: "deal" },
];

window.G2_STORES = [
  { name: "Denis Hurley Street", address: "127 Denis Hurley St, Durban Central" },
  { name: "Dr Yusuf Dadoo Street", address: "151 Dr Yusuf Dadoo St, Durban Central" },
  { name: "Dr Pixley Kaseme Street", address: "483 Dr Pixley Kaseme St, Durban Central" },
  { name: "West Street", address: "425 West Street, Durban Central" },
  { name: "Grey Street", address: "164 & 164A Grey Street, Durban Central" },
  { name: "Smith Street", address: "447 Smith Street, Durban Central" },
  { name: "Umlazi Mega City", address: "Umlazi Mega City (near Spar), Umlazi" },
  { name: "Church Street, PMB", address: "361 Church Street, Pietermaritzburg" },
];

window.G2_CONTACT = {
  phone: "081 271 9802",
  whatsapp: "27812719802",
  instagram: "https://www.instagram.com/g2clothing1/",
  instagramHandle: "@G2CLOTHING1",
  facebook: "https://www.facebook.com/search/top?q=G2%20Clothing%20%26%20Homeware",
  tiktok: "https://www.tiktok.com/@g2clothingandhome",
};
