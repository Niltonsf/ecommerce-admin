# E-commerce Admin

A scalable e-commerce admin platform built with [React, Node.js, ShadcnUI]. This admin panel provides users with an intuitive interface for managing the e-commerce platform, including product catalog management, order tracking, user management, and integration with payment gateways.

## Table of Contents
1. [Features](#features)
2. [Technologies](#technologies)
3. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Stripe configuration](#stripe)
    - [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Project](#running-the-project)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

- 🛍️ **Product Management**: Create, update, and manage the product catalog.
- 📦 **Order Management**: View, track, and manage customer orders.
- 📊 **Analytics Dashboard**: View sales data and performance metrics.

## Technologies

- **Backend**: [React, Supabase, Tailwind CSS]
- **Image handling**: [Cloudinary]
- **Payment Gateway**: [Stripe]

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js
- npm or yarn
- Supabase
- Cloudinary

### Stripe

1. Login in to stripe
2. Create a new account with a name. (example: `ecommerce-admin`)
3. Copy your secret key and paste in `STRIPE_API_KEY`
4. Search for `webhook` or go in `developers`
5. Select `Test in a local environment`
6. Follow the steps

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Niltonsf/ecommerce-admin   
    ```

2. Install dependencies:

    ```bash    
    cd ecommerce-admin
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file and add the following variables:
    ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    DATABASE_URL="postgresql://postgres.[here]:[password]@aws-0-us-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"
    DIRECT_URL="postgresql://postgres.[here]:[password]@aws-0-us-west-1.pooler.supabase.com:5432/postgres"
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
    STRIPE_API_KEY=
    FRONTEND_STORE_URL=http://localhost:3001
    STRIPE_WEBHOOK_SECRET=   
    ```

## Configuration

- **Payment Gateway**: Configure Stripe for development.
- **Cloudinary**: For image picking.
- **Environment Variables**: Refer to the `.env.example` file for more configurations.

## Running the Project

### Development Mode

1. Start the backend server:

    ```bash
    cd ecommerce-admin
    npm run dev
    ```

2. Start the frontend application:

    ```bash
    cd ecommerce-store
    npm start
    ```

Now, the app should be running at `http://localhost:3001` (for the frontend) and `http://localhost:3000` (for the backend).
  
## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This is a educational project.
