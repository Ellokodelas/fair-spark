import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TopBar } from "@/components/layout/TopBar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! Esta página no existe en la Feria de Software
          </p>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-primary hover:bg-primary-dark"
          >
            Volver al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
