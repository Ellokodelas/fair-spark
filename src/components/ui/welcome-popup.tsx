import { useState, useEffect } from 'react';
import { X, LogIn } from 'lucide-react';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';

export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si es la primera visita
    const hasVisited = localStorage.getItem('fesw-visited');
    
    if (!hasVisited) {
      // Mostrar el popup después de 1 segundo
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('fesw-visited', 'true');
    setIsVisible(false);
  };

  const handleLogin = () => {
    localStorage.setItem('fesw-visited', 'true');
    setIsVisible(false);
    navigate('/login');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-scale-in">
      <div className="relative bg-card border-2 border-primary/20 rounded-lg shadow-2xl p-6 max-w-sm">
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Contenido */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
            <LogIn className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">
              ¡Bienvenido a la Feria de Software!
            </h3>
            <p className="text-sm text-muted-foreground">
              Inicia sesión para publicar tus proyectos o calificar como profesor
            </p>
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-2">
          <Button
            onClick={handleLogin}
            className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground"
          >
            Iniciar sesión
          </Button>
          <Button
            onClick={handleClose}
            variant="outline"
            className="flex-1"
          >
            Más tarde
          </Button>
        </div>

        {/* Flecha apuntando al botón Login */}
        <div className="absolute -top-2 right-8 w-4 h-4 bg-card border-t-2 border-l-2 border-primary/20 transform rotate-45"></div>
      </div>
    </div>
  );
}
