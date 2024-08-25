import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignIn from "./pages/SignIn/SignIn";
import SignOut from "./pages/SignOut/SignOut";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Home/Dashboard/Dashboard";
import Institution from "./pages/Home/Institution/Institution";
import Settings from "./pages/Home/Settings/Settings";
import Monitor from "./pages/Home/Monitor/Monitor";
import Analytics from "./pages/Home/Analytics/Analytics";
import Support from "./pages/Home/Support/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignOut />} />
        <Route path="/home" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="institution" element={<Institution />} />
          <Route path="settings" element={<Settings />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
