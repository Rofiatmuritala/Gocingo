# NGO Website Project

## Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Setup and Installation](#setup-and-installation)
4. [Components](#components)
5. [Pages](#pages)
6. [Styling](#styling)
7. [Data Management](#data-management)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)

## Overview
This project is a comprehensive website for a Non-Governmental Organization (NGO) built using React and Next.js. It showcases the organization's projects, facilitates donations, and provides information about the NGO's mission and team.

## Project Structure
```

ngo/
├── src/
│   ├── components/
│   │   ├── about.js
│   │   ├── contact.js
│   │   ├── donate.js
│   │   ├── faqs.js
│   │   ├── footer.js
│   │   ├── fundraising.js
│   │   ├── getinvolve.js
│   │   ├── hero.js
│   │   ├── navbar.js
│   │   ├── project.js
│   │   ├── projects.js
│   │   └── team.js
├── app/
│   ├── page.js
│   ├── about/
│   │   └── page.js
│   ├── projects/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── donate/
│   │   └── page.js
│   └── layout.js
├── public/
├── .gitignore
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.js

## Setup and Installation

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Steps
1. Clone the repository:
   ```
   git clone [(https://github.com/Rofiatmuritala/Gocingo)]
   cd ngo-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Components
All components are located in the src/components directory:
### 1. Navbar (`navbar.js`)
- Navigation component
- Implements responsive design
- Links to main sections of the website

### 2. Hero (`hero.js`)
- Main landing section
- Displays key message and call-to-action

### 3. Projects (`projects.js`)
- Displays list of NGO projects
- Uses data from the `const projects` array

### 4. Project (`project.js`)
- Individual project component
- Displays project details (title, description, image, status, category)

### 5. About (`about.js`)
- Information about the NGO
- Mission statement and goals

### 6. Team (`team.js`)
- Displays information about team members

### 7. Contact (`contact.js`)
- Contact form for user inquiries

### 8. Donate (`donate.js`)
- Donation form or information

### 9. FAQs (`faqs.js`)
- Frequently Asked Questions section

### 10. Footer (`footer.js`)
- Website footer with links and additional information

### 11. Fundraising (`fundraising.js`)
- Information about fundraising campaigns

### 12. GetInvolve (`getinvolve.js`)
- Information on how users can get involved with the NGO

## Pages
Pages are located in the app directory, following Next.js 13+ App Router structure:
### 1. Home Page (`app/pages.js`)
- Main landing page
- Incorporates Hero, Projects, and other key components

### 2. About Page (`app/about/page.js`)
- Detailed information about the NGO
- Incorporates About and Team components

### 3. Projects Page (`app/projects/page.js`)
- Comprehensive list of all NGO projects
- Uses Projects component

### 4. Contact Page (`app/contact/page.js`)
- Contact information and form
- Uses Contact component

### 5. Donate Page (`app/donate/page.js`)
- Donation information and options
- Uses Donate component


### 6. Layout (app/layout.js)
Root layout component that wraps all pages
Includes elements like the Navbar and Footer

## Styling
- The project uses Tailwind CSS for styling
- Tailwind configuration is in `tailwind.config.js`

## Data Management
- Project data is stored in the `projects` array in `projects.js`
- Consider implementing a CMS or backend API for dynamic data management in future iterations

## Deployment
1. Build the project:
   ```
   npm run build
   ```

2. Start the production server:
   ```
   npm start
   ```

3. Deploy to your preferred hosting platform (e.g., Vercel, Netlify)

## Contributing
We welcome contributions to improve the website. Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License


