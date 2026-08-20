import "./App.css";
import CookBridgeCaseStudy from "./components/CookBridgeCaseStudy";
import FashionStylistCaseStudy from "./components/FashionStylistCaseStudy";
import Portfolio from "./components/Portfolio";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/work/cookbridge") return <CookBridgeCaseStudy />;
  if (path === "/work/ai-fashion-stylist") return <FashionStylistCaseStudy />;
  return <Portfolio />;
}

export default App;
