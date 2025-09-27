import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

// Определяем base path для GitHub Pages
const basename = "";

// Компонент для отображения ошибок
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen bg-gradient-cyber flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-2xl font-bold mb-4">Ошибка загрузки</h1>
      <p className="text-red-400 mb-4">{error.message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
      >
        Перезагрузить
      </button>
    </div>
  </div>
);

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
