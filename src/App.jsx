import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <AppRoutes />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}
