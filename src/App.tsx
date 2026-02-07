import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDesignService from "./pages/ProductDesignService";
import PrototypingService from "./pages/PrototypingService";
import MassProductionService from "./pages/MassProductionService";
import DefenceSectorPage from "./pages/sectors/DefenceSectorPage";
import EvSectorPage from "./pages/sectors/EvSectorPage";
import ConsumerElectronicsPage from "./pages/sectors/ConsumerElectronicsPage";
import ContactPage from "./pages/ContactPage";
import StartProject from "./pages/StartProject";
import BlogDetail from "./pages/BlogDetails";

// Components
import Blog from "./components/blog";
import StartProjectCTA from "./components/StartProjectCTA";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />

        <div className="min-h-screen bg-background">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* Services */}
            <Route
              path="/services/product-design"
              element={<ProductDesignService />}
            />
            <Route
              path="/services/prototyping"
              element={<PrototypingService />}
            />
            <Route
              path="/services/mass-production"
              element={<MassProductionService />}
            />

            {/* Sectors */}
            <Route path="/sectors/defence" element={<DefenceSectorPage />} />
            <Route path="/sectors/ev" element={<EvSectorPage />} />
            <Route
              path="/sectors/consumer-electronics"
              element={<ConsumerElectronicsPage />}
            />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

            {/* Other pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/start-project-cta" element={<StartProjectCTA />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
