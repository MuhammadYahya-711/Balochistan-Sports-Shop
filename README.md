# Balochistan Sports Shop — Premium Sports E-Commerce Website

A premium, modern, fully responsive sports e-commerce storefront designed and engineered specifically for **Balochistan Sports Shop**, located on Prince Road, Quetta, Pakistan.

---

## 1. Business & Storefront Information

- **Business Name:** Balochistan Sports Shop
- **Store Location:** 52Q7+JGQ, Prince Road, Quetta, Pakistan
- **Direct Phone:** `03491232756` (International: `+92 349 1232756`)
- **WhatsApp Inquiries:** `923491232756`
- **Customer Rating:** 4.5 / 5 from 172 verified reviews
- **Currency:** Pakistani Rupee (PKR / ₨)
- **Primary Market:** Quetta and surrounding districts across Balochistan and Pakistan

---

## 2. Key Features

- **High-Impact Sports Campaign Hero:** Athletic typography, dark cinematic lighting, electric lime accents, and high-performance visual hierarchy.
- **Shop By Category (8 Dedicated Sports):** Cricket, Football, Sportswear, Footwear, Gym Equipment, Team Kits, Accessories, and Other Sports.
- **Complete Product Catalogue (`/src/data/products.ts`):** 
  - Real PKR pricing with optional strike-through sale prices.
  - Multi-criteria filtering by category, search keywords, max price range, and stock availability.
  - Sorting by Featured, Price (Low-High / High-Low), Rating, and Name (A-Z).
  - Responsive pagination and "Load More" controls.
- **Product Details Modal / Quick View:** High-resolution image gallery, variant & size selector, quantity picker, key specifications, related items, and direct WhatsApp ordering.
- **Shopping Cart & Checkout / Order Request:**
  - LocalStorage persistence for guest carts.
  - Subtotal and quantity calculations.
  - Direct WhatsApp order generator pre-formatting customer name, items, variants, and total.
  - Order request modal with customer address and delivery notes.
- **Customer Wishlist:** Save and manage favorite items, move directly to cart.
- **Customer Reviews & Feedback Form:** Verified 4.5 rating presentation with interactive customer feedback submission.
- **Technical SEO & Accessibility:** Schema.org `SportingGoodsStore` structured JSON-LD data, semantic HTML5 headings, Open Graph & Twitter meta tags, and WCAG high-contrast compliance.

---

## 3. Technology Stack

- **Framework:** React 19 (TypeScript)
- **Bundler:** Vite
- **Styling:** Tailwind CSS (Modern `@import "tailwindcss";` architecture)
- **Icons:** Lucide React
- **Unit Testing:** Node.js native test runner (`node:test` & `node:assert/strict`) via `npx --yes tsx --test`

---

## 4. Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Unit Tests:**
   ```bash
   npx --yes tsx --test src/utils/cart.test.ts
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

---

## 5. Hostinger Deployment Guide

This application is built as a production-grade Single Page Application (SPA) and can be deployed directly to **Hostinger Web Hosting**, **Hostinger Cloud Hosting**, or **Hostinger VPS**.

### Option A: Static Deployment via Hostinger File Manager (Recommended)

1. **Build the production bundle:**
   ```bash
   npm run build
   ```
   This generates an optimized, minified `dist/` folder containing `index.html`, compiled CSS/JS assets, and the `public/` files (including `.htaccess`, `robots.txt`, and `sitemap.xml`).

2. **Log in to Hostinger hPanel:**
   - Go to **Websites** &rarr; Select your domain (e.g. `balochistansports.pk`).
   - Click **File Manager**.
   - Navigate to the `public_html/` directory.

3. **Upload the contents of `dist/`:**
   - Upload all files and folders from inside `dist/` directly into `public_html/` (so that `index.html` and `.htaccess` are directly inside `public_html/`).

4. **Verify SPA Routing (.htaccess):**
   The project includes a ready-to-use `.htaccess` file inside `public/.htaccess`. It ensures that direct links and page refreshes route through `index.html` without throwing a 404 error:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

5. **Test Your Live Website:**
   - Visit your domain.
   - Test adding items to the cart, opening product details, and clicking the WhatsApp order link.

---

## 6. How to Edit Store Information & Catalogue

- **Business Details & Contact Numbers:** Edit `/src/data/shopInfo.ts`. Update the phone number or address in one centralized place.
- **Product Inventory & Pricing:** Edit `/src/data/products.ts`. Add, remove, or modify product names, PKR prices, images, sizes, and descriptions.
- **Categories:** Edit `/src/data/categories.ts`.
- **Customer Reviews:** Edit `/src/data/reviews.ts`.
