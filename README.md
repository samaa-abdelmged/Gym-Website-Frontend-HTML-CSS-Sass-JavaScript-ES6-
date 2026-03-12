# Gym Website – Frontend (HTML, CSS, Sass, JavaScript ES6+)

A modern and responsive **Gym Landing Page** built using **HTML, CSS, Sass (SCSS), and modern JavaScript (ES6+)**.
The website promotes gym services, programs, and pricing plans while providing interactive features such as a **BMI Calculator** and a **responsive navigation menu**.

This project focuses on **clean UI design, responsive layouts, and interactive frontend functionality** using modern frontend development techniques.

---

# Technologies Used

**Frontend:** HTML5, CSS3, Sass (SCSS), JavaScript (Vanilla JS, ES6+)

**Styling & Layout:** CSS Variables, Flexbox, CSS Grid, Media Queries

**Libraries & Assets:** Google Fonts (Red Hat Display), Remix Icons

**Development Tools:** VS Code, Git, GitHub

---

# Key Features

* Fully responsive navigation menu for mobile devices
* Modern and clean gym landing page design
* Programs section to showcase gym training services
* Pricing plans section
* Interactive **BMI Calculator** using modern JavaScript
* Smooth scrolling navigation
* Footer subscription form
* Clean and maintainable SCSS structure
* Optimized for mobile, tablet, and desktop

---

# Website Sections

**Home Section**
Hero banner introducing the gym and encouraging users to get started.

**Programs Section**
Displays different gym programs such as: Flex Muscle, Cardio Exercise, Basic Yoga, Weight Lifting

**Choose Us Section**
Highlights reasons to choose the gym with statistics: Total members, Best trainers, Available programs, Awards

**Pricing Section**
Displays three membership plans: Basic Package, Premium Package, Diamond Package

**BMI Calculator**
Allows users to enter **height and weight** to calculate Body Mass Index and display health status

**Footer**
Contains subscription form, company links, services links, and social media links

---

# Main Functionality

## Responsive Navigation Menu

Navigation menu opens/closes on mobile using JavaScript ES6+:

```javascript
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
```

Menu auto-closes when clicking on any link.

---

## BMI Calculator

Calculates **BMI = weight / (height × height)** and dynamically displays health results:

* Underweight
* Healthy
* Overweight

Implemented using modern JavaScript DOM manipulation and event handling.

---

# Project Structure

```
gym-website
│
├── index.html
├── assets
│   ├── css
│   │   └── styles.css  (compiled from SCSS)
│   ├── scss
│   │   └── main.scss
│   ├── js
│   │   └── main.js
│   └── img
│       ├── home.png
│       ├── choose.png
│       ├── calculate.png
│       └── other images
└── README.md
```

# Developer Info

| Field    | Details                                                     |
| -------- | ----------------------------------------------------------- |
| Name     | Samaa Abdelmged Roshdy                                      |
| Role     | Full Stack .NET Web Developer                               |
| Location | Egypt, Cairo                                                |
| Email    | samaaabdelmged@gmail.com                                    |
| LinkedIn | linkedin.com/in/samaa-abdelmged                             |
