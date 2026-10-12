import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Skills from "../pages/Skills.jsx";
import Experience from "../pages/Experience.jsx";
import Projects from "../pages/Projects.jsx";
import ProjectDetails from "../pages/ProjectDetails.jsx";
import Education from "../pages/Education.jsx";
import Contact from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

const pages = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/skills", element: <Skills /> },
  { path: "/experience", element: <Experience /> },
  { path: "/projects", element: <Projects /> },
  { path: "/projects/:id", element: <ProjectDetails /> },
  { path: "/education", element: <Education /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {pages.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PageTransition>{element}</PageTransition>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}
