import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDesignService from "./pages/ProductDesignService";
import PrototypingService from "./pages/PrototypingService";
import MassProductionService from "./pages/MassProductionService";
import DefenceSectorPage from "./pages/sectors/DefenceSectorPage";
import EvSectorPage from "./pages/sectors/EvSectorPage";
import ConsumerElectronicsPage from "./pages/sectors/ConsumerElectronicsPage";
import ContactPage from "./pages/ContactPage"; // Import the new page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/product-design" element={<ProductDesignService />} />
            <Route path="/services/prototyping" element={<PrototypingService />} />
            <Route path="/services/mass-production" element={<MassProductionService />} />
            <Route path="/sectors/defence" element={<DefenceSectorPage />} />
            <Route path="/sectors/ev" element={<EvSectorPage />} />
            <Route path="/sectors/consumer-electronics" element={<ConsumerElectronicsPage />} />
            <Route path="/contact" element={<ContactPage />} /> {/* New route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;