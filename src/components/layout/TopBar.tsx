import { Search, LogIn, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface TopBarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export function TopBar({ searchQuery = '', onSearchChange }: TopBarProps) {
  const { userRole, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchChange = (value: string) => {
    setLocalSearch(value);
    onSearchChange?.(value);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardRoute = () => {
    switch (userRole) {
      case 'feriante':
        return '/feriante';
      case 'profesor':
        return '/profesor';
      default:
        return '/';
    }
  };

  const getRoleDisplayName = () => {
    switch (userRole) {
      case 'feriante':
        return 'Feriante';
      case 'profesor':
        return 'Profesor';
      default:
        return '';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">FS</span>
          </div>
          <h1 className="text-xl font-bold text-foreground">Feria Software</h1>
        </div>

        {/* Buscador */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Buscar proyectos..."
              value={localSearch}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 bg-muted/50 border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Botones de usuario */}
        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <>
              <Button
                variant="outline"
                onClick={() => navigate(getDashboardRoute())}
                className="hidden sm:flex"
              >
                <User className="w-4 h-4 mr-2" />
                {getRoleDisplayName()}
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                size="sm"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Salir
              </Button>
            </>
          ) : (
            <Button onClick={handleLoginClick} className="bg-primary hover:bg-primary-dark">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}