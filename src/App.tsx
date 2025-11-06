import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Catalogo from "./pages/Catalogo";
import AccesoriosPoelsan from "./pages/AccesoriosPoelsan";
import ManguerasWiplast from "./pages/ManguerasWiplast";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="catalogo" element={<Catalogo />} />
            <Route path="catalogo/accesorios-poelsan" element={<AccesoriosPoelsan />} />
            <Route path="catalogo/mangueras-wiplast" element={<ManguerasWiplast />} />
            <Route path="servicios" element={<Servicios />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
