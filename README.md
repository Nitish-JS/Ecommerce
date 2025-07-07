# VFY Store
This is an e-commerce website built with React, Redux, Node.js, MongoDB, and Mongoose. The web application has three components - client, server, and admin. The client component is the main e-commerce web app where customers can browse, search, purchase items and make payment through Razorpay gateway. The server component is responsible for handling API requests from the client and authenticating users using JWT tokens. The admin component provides visualizations of customer data and allows the site owner to add or delete items.

## Frontend Features
<ul>
<li>The frontend of the application is built using React, and Redux is used for state management.
<li>The frontend is designed to provide a user-friendly experience for customers, with a responsive UI that works well on both desktop and mobile devices.</li>
<li>The website is integrated with a payment gateway using RazorPay API, allowing customers to complete transactions securely and efficiently.</li>
<li>The frontend also uses JWT authentication to ensure secure user login. This helps to protect user data and prevent unauthorized access to the site.</li>
</li>
</ul>

## Backend Features
<ul>
<li>The backend of the application is built using Node.js, MongoDB, and Mongoose. MongoDB is a NoSQL database that provides scalability and flexibility, making it ideal for e-commerce applications.
<li>The backend is responsible for handling API requests from the frontend, managing the site's data, and authenticating users using JWT tokens.</li>
<li>Mongoose is used to define the data schema and interact with the database. This allows the backend to handle complex queries and transactions efficiently.</li>
<li>The backend also implements advanced security features such as input validation, sanitization, and error handling, to ensure the safety and integrity of the data.
</li>
</ul>

## Admin Panel Features
<ul>
<li>The admin panel provides a visual interface for managing customer data and adding/deleting items. This helps site owners to keep track of their customers and products, and make informed decisions about their business.
<li>The admin panel is designed to be easy to use, with a simple and intuitive interface that allows site owners to view and manage data quickly and efficiently.</li>
<li>In addition to managing customer data and products, the admin panel also allows site owners to upload and manage product images. These images are stored securely in Firebase, making it easy to manage and access them from anywhere.</li>
<li>The admin panel provides provisions for adding and deleting items, allowing site owners to manage their product inventory and make changes as needed.</li>
</ul>

## Installation
Ensure you have Node.js 16 or later installed. If you use Node 17 or newer, set
`NODE_OPTIONS=--openssl-legacy-provider` when running the development servers to
avoid OpenSSL issues.
<ol>
<li>Clone the repository: git clone https://github.com/Nitish-JS/Ecommerce.git</li>
<li>Navigate to the project directory: cd Ecommerce</li>
<li>Navigate to the client directory: cd client</li>
<li>Install dependencies: npm install</li>
<li>Start the server: npm start</li>
<li>Navigate to the server directory: cd server</li>
<li>Install dependencies: npm install</li>
<li>Start the server: npm start</li>
<li>Navigate to the admim directory: cd admin</li>
<li>Install dependencies: npm install</li>
<li>Start the server: npm start</li>
<li> Configure env file</li>
</ol>

## Usage
<ol>
<li>
Register as a new user or log in using an existing account.
</li>
<li>
Browse the available products and add items to your cart.
</li>
<li>
Proceed to checkout and complete the payment process.
</li>
<li>
The site owner can log in to the admin panel to manage products and view customer data
</li>
</ol>

## images

### Client Side
* Sign Up

![image](https://user-images.githubusercontent.com/73771450/233148083-f38cca42-13c0-49fc-9778-7602d9307dc3.png)

* Landing Page

![image](https://user-images.githubusercontent.com/73771450/233148373-89fb729a-b1ac-4aa9-8f79-f364f6ac5f2d.png)
![image](https://user-images.githubusercontent.com/73771450/233148536-d6e94efb-0c35-450e-83b9-cec2167cecb2.png)
![image](https://user-images.githubusercontent.com/73771450/233148414-dc8c98e1-0087-4a08-b8c1-3e14dd838cad.png)

* Product Information Page

![image](https://user-images.githubusercontent.com/73771450/233148621-15e60347-0fbc-4708-8219-8a1051d6f469.png)

* Cart Page

![image](https://user-images.githubusercontent.com/73771450/233148673-7bea58ce-1673-451d-827d-a5ae4ba49f00.png)

* Checkout Page

![image](https://user-images.githubusercontent.com/73771450/233148738-cd616dff-3a15-4b9e-b065-bdcfeb5fb596.png)

* Payment Gateway

![image](https://user-images.githubusercontent.com/73771450/233148899-3ac185ca-d546-4596-b351-9bc525c3dabc.png)

### Admin Panel

* Landing Page

![image](https://user-images.githubusercontent.com/73771450/233149117-07bb5f0b-f8f7-405c-af12-931dfa963460.png)

* Products Page

![image](https://user-images.githubusercontent.com/73771450/233149187-79342528-fc6f-4868-9c72-1dde4f506411.png)

* Edit/Update Product page

![image](https://user-images.githubusercontent.com/73771450/233149259-d65385d1-cc1a-42e9-a581-ca34de7ddbb9.png)

* Create Product Page

![image](https://user-images.githubusercontent.com/73771450/233149350-78c33118-aa37-45b6-8e39-6111d46f3a6f.png)


