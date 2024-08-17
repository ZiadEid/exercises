import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/Help/FAQ";
import Contact, { contactAction } from "./pages/Help/Contact";
import Careers, { careersLoader } from "./pages/Careers/Careers";
import CareerDetails, { careerLoader } from "./pages/Careers/CareerDetails";
import NotFound from "./pages/NotFound";

// Layout
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import CareersLayout from "./Layouts/CareersLayout";
import CareersError from "./pages/Careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route 
          path=':id'
          element={<CareerDetails />}
          loader={careerLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
