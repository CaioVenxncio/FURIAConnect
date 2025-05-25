# FURIA Connect

![](assets/Furia_Esports_Logo.png)

## Description

**FURIA Connect** is a web application prototype designed to gather and manage information about FURIA fans. Through a registration form, fans can sign up, have their data stored locally (via LocalStorage), and view their profile page. Users can edit their information and, upon completion, are redirected to the official store with access to products and discount coupons.

## Features

- **Fan Registration**: Initial form to collect name, age, location, preferred lineup, and social media links.
- **Local Storage**: Utilizes LocalStorage to save fan data without a backend.
- **Fan Profile**: Page to view the registered profile and navigate to edit it.
- **Profile Editing**: Pre-filled form to update saved data.
- **FURIA Store**: Page with official product catalog, coupons, and links to players’ social media.

## Folder Structure

```
FURIA-Connect/
│
├── assets/               # Logos, product and player images
│   └── Furia_Esports_Logo.png
│
├── css/                  # Stylesheets
│   ├── style.css         # Main CSS for registration and editing
│   ├── profile.css       # CSS for fan profile page
│   └── loja.css          # CSS for store page
│
├── js/                   # JavaScript scripts
│   ├── cadastro.js       # Captures and saves form data
│   ├── perfil.js         # Loads and manages fan profile
│   └── editar-perfil.js  # Handles the profile editing form
│
├── pages/                # Internal pages
│   ├── perfil.html       # Fan profile display
│   ├── editar-perfil.html# Profile editing form
│   └── loja.html         # Product store
│
└── index.html            # Initial registration form
```

## Technologies Used

- **HTML5**
- **CSS3** (Flexbox, responsive design)
- **JavaScript (ES6)**
- **LocalStorage API**

## How to Run

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/FURIA-Connect.git
   ```

2. Open the project folder:

   ```bash
   cd FURIA-Connect
   ```

3. Start a local server (optional but recommended) and open `index.html` in your browser. For example, using VSCode Live Server or Python:

   ```bash
   # With Python 3
   python -m http.server 5500
   ```

4. Go to `http://localhost:5500` and start using the app!

## Usage

1. Fill out the initial fan registration form.
2. Click **Next** to view your profile.
3. In the **Profile** page, click **Edit Registration** to update your info.
4. After editing, click **Complete Registration** to access the store.
5. Browse the store, add products to your cart, and use the provided discount coupon.

## Contribution

Contributions, issues, and pull requests are welcome! Feel free to discuss proposed changes via issues.

## License

This project is licensed under the [MIT License](LICENSE).


