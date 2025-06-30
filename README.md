# 🛒 Shopping Cart Application

A simple, responsive shopping cart application built with **Next.js**, styled using **Tailwind CSS**, and powered by modern frontend practices. Users can view products, add/remove them from their cart, update quantities, and apply a discount coupon, all with minimal yet interactive design.

---

## 🚀 Features

- 🔄 Add, update, and remove products from the cart
- 🧮 Real-time total calculation
- 💸 Apply discount coupon (`POWERLABSx`) for 13.2% off
- 💾 Cart data persists using `localStorage`
- 💻 Fully responsive across devices
- 🚫 Input validation and error handling

---

## 🧑‍💻 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State & Storage:** React Hooks + `localStorage`

---

## 📂 Project Structure

```

.
├── app/
│   ├── page.tsx               # Landing page or redirect
│   ├── shop/page.tsx          # Product listing (shop) page
│   └── cart/page.tsx          # Cart page
├── components/
│   ├── cart/CartItem.tsx      # Individual cart item UI
│   └── cart/CartSummary.tsx   # Coupon + total display
├── public/
│   └── products.json          # Mock product data
├── lib/
│   └── interface.ts           # TypeScript interfaces
├── styles/                    # Global styles
└── README.md

````

---

## 🛠️ How to Run Locally

### 1. **Clone the Repository**
```bash
git clone https://github.com/Miss-nonso/powerlabs-task.git
cd powerlabs-task
````

### 2. **Install Dependencies**

```bash
npm install
# or
yarn
```

### 3. **Run the App**

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing the Coupon

1. Go to the shop page by clicking on `Start shopping` on the landing page
1. Add any products to your cart.
2. Go to the **Cart page** by clicking on `Go to cart` on the top right of the page.
3. Enter the coupon code: `POWERLABSx` at the input found at the bottom of your cart items
4. The total will update with a **13.2% discount** 🎉

---

## 🌐 Live Demo

👉 [View live on Vercel](https://markert-africa.vercel.app/)

---

## 📌 Notes

* All cart interactions are client-side only.
* Data is stored in browser `localStorage`.
* No backend or database involved.

---

## 🧑‍💼 Author

Built with ❤️ by [Chinonso Daniels]([https://github.com/YOUR_USERNAME](https://github.com/Miss-nonso/))
