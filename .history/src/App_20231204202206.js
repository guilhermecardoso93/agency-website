import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";

import Home from "./Pages/Home";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import ScrollToTop from "./components/ScrollToTop/index";

export function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </>
  );
}
