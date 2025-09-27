import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProjectDetail from "./pages/ProjectDetail";
import DashboardFeriante from "./pages/DashboardFeriante";
import CreateProject from "./pages/CreateProject";
import DashboardProfesor from "./pages/DashboardProfesor";
import AgendaSeminarios from "./pages/AgendaSeminarios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/proyecto/:id" element={<ProjectDetail />} />
            <Route path="/feriante" element={<DashboardFeriante />} />
            <Route path="/feriante/nuevo" element={<CreateProject />} />
            <Route path="/feriante/:id/editar" element={<CreateProject />} />
            <Route path="/profesor" element={<DashboardProfesor />} />
            <Route path="/profesor/agenda" element={<AgendaSeminarios />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
