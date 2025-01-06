
# FresherBot Tailwind Pages

Welcome to the FresherBot project! This repository contains all the TailwindCSS-based web pages, ensuring a clean, modular, and consistent design. Below are the guidelines and best practices for working on this project to maintain design uniformity and code scalability.

## [![Visit Fresherbot Pages Live](https://img.shields.io/badge/Visit-Fresherbot%20Pages-blue?style=for-the-badge)](https://voilacode.github.io/fresherbot-pages/)

## **New Feature: Modular Header and Footer**

We have implemented a new `modules.js` script that dynamically imports the header and footer across all pages. This eliminates the need to duplicate header and footer code, making maintenance simpler and more efficient.

### **How to Use `modules.js`:**

- Ensure `modules.js` is correctly linked in the HTML file.
- Add placeholders where the header and footer should appear:
  ```html
  <div include="header.html"></div>
  <div include="footer.html"></div>
  ```

---

### **Block: Content Guidelines**

## **Content Guidelines**

### **1. JavaScript Files**

- Write independent JavaScript for each page and save it in the appropriate `js` folder.
- Only include the required script(s) in the HTML file where needed.
- Example:

  ```html
  <script src="js/example-page.js"></script>
  ```

  ### **2. Image Management**

- Place all images inside the `assets` folder.
- Use subfolders for each page to keep the assets organized.

**Example:**

- `assets/global/` → For shared images like the logo or icons.
- `assets/example-page/` → For images specific to a page.

---

### **3. Color Scheme**

- Use only **shades of blue and yellow** to maintain a uniform look and feel.
  - **Sky**: `bg-sky-500`, `text-sky-800`, etc.
  - **Yellow**: `bg-yellow-500`, `text-yellow-600`, etc.

---

### **4. Avoid Custom CSS**

- Rely entirely on **TailwindCSS classes** for styling.
- The compiled CSS is stored in `output.css`. This stylesheet must be linked for Tailwind CSS to take effect. Use `npm run build` to compile the CSS.
- Refrain from writing custom CSS to ensure design consistency across all pages.

---

## **Folder Structure**

Do not change the folder structure as this pattern is used to map the pages in the ViolaCode application built in Laravel.

```plaintext
/
├── assets/
│   ├── global/           # Shared assets (logos, icons)
│   ├── example-page/     # Assets specific to the example page
│   └── ...               # Other page-specific folders
├── dist/
│   ├── js/               # JavaScript files
│   │   ├── modules.js    # Script for importing header and footer
│   │   ├── example-page.js   # Page-specific JavaScript
│   │   └── ...           # Other scripts
│   ├── css/              # CSS files
│   │   ├── output.css  # Tailwind-generated CSS
│   │   └── ...           # Other stylesheets
│   ├── modules/          # Custom reusable HTML modules
│   │   ├── header.html   # Shared header file
│   │   ├── footer.html   # Shared footer file
│   │   └── ...           # Other reusable components
├── src/
│   ├── index.html        # Example HTML page
│   ├── contact.html      # Contact Us page
│   └── ...               # Other HTML files
└── README.md             # This file
```

# Best Practices

## 1. Consistent Design

- Stick to the approved color palette (shades of blue and yellow).
- Ensure all pages are mobile-responsive.

## 2. Modular Code

- Keep the header and footer content centralized using `modules.js`.
- Write reusable components when possible.

## 3. Efficient Asset Usage

- Organize assets into appropriate folders for better scalability.
- Optimize image sizes before adding them to the project.

## 4. Tailwind Only

- Utilize TailwindCSS classes for styling instead of custom CSS.
- Leverage Tailwind utilities for spacing, colors, typography, and responsiveness.

---

© 2025 ViolaCode Technologies. All rights reserved.
