import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";
import Categorys from "./pages/Category";
import Blogs from "./pages/Blogs";
import Dealers from "./pages/Plan";
import Testimonials from "./pages/Testimonials";
import Plans from "./pages/Plan";
import Dealer from "./pages/Dealer";
import Banner from "./pages/Banner";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import About from "./pages/About";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router basename="/lte-admin">
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="orders" element={<Bookings />} />
              <Route path="orders/:orderId" element={<Booking />} />
              <Route path="orders/:orderId" element={<Checkin />} />
              <Route path="products" element={<Cabins />} />
              <Route path="category" element={<Categorys />} />
              <Route path="customers" element={<Users />} />
              <Route path="account" element={<Account />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="plans" element={<Plans />} />
              <Route path="dealers" element={<Dealer />} />
              <Route path="banner" element={<Banner />} />
              <Route path="contact" element={<Contact />} />
              <Route path="terms" element={<Terms />} />
              <Route path="policy" element={<Policy />} />
              <Route path="about" element={<About />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
