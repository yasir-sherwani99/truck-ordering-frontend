## Truck Ordering App Frontend (React 18)

This is the frontend of the Truck Ordering App, built with React 18. The app allows users to place truck bookings, track bookings, and manage their profiles. It communicates with the backend API (built with Laravel) to manage the ordering, user authentication, and booking status.

### Requirements:

- Node.js >= 20.0
- npm (or Yarn) for package management
- React 18.x
- Axios for API requests
- React Router for routing
- React Context for state management 

### Features:

- **User Authentication:** Users can signup, login and manager their accounts
- **Truck Booking:** Customers can create, update bookings and view the track of booking status
- **Booking Tracking:** View the status of placed bookings, such as "pending", "delivered" etc
- **Role-based Access:** Different user roles (Customer, Admin) with appropriate access and permissions

### Installation:

1. Clone the Git Repository<br />
git clone [https://github.com/yasir-sherwani99/truck-ordering-frontend.git](https://github.com/yasir-sherwani99/truck-ordering-frontend.git) 
<br /><br />
2. Install Dependencies<br />
npm install
<br /><br />
3. Update the .env file<br />
Update the .env file with your API base URL. Example:
VITE_API_BACKEND_URL=http://127.0.0.1:8000<br />
This is the backend URL where your Laravel API is hosted. Make sure the backend is running before starting the frontend.
<br /><br />
4. Start the Development Server<br />
npm run dev
<br /><br />

### Folder Structure:

The folder structure of this project is as follows:

├── public/<br />
│   ├── vite.svg<br />
├── src/<br />
│   ├── assets/                  # Static files (images, etc.)<br />
│   ├── components/              # Reusable UI components (buttons, form inputs, etc.)<br />
│   ├── context/                 # React Context (if used for state management)<br />
│   ├── lib/                     # Axios functions<br />
│   ├── pages/                   # React components for each page (Home, Booking, Profile)<br />
│   ├── services/                # API services<br />
│   ├── theme/                   # Theme Layout<br />
│   ├── App.jsx                  # Main app components<br />
│   ├── main.jsx                 # Entry point for React<br />
│   ├── App.css                  # Global styles<br />
├── .env                         # Environment variables<br />
├── package.json                 # Project dependencies and scripts<br />
├── README.md                    # Project documentation (this file)<br />
└── .gitignore                   # Git ignore file<br />

### API Integration:

#### Authentication

The app uses JWT (JSON Web Token) for authentication. After successful login, the app stores the token in localStorage, which is then sent as an Authorization header in subsequent API requests.

### Pages and Components

- Home Page
- Booking Page
- Login and Signup Page
- Service Page
- Admin Login Page
- Admin Bookings Page
- Admin Booking Details Page
- Admin Notifications Page

### State Management

The app use React Context for global state management. 




