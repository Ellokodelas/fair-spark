import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'visitante' | 'feriante' | 'profesor';

interface AuthContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  isLoggedIn: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<UserRole>('visitante');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (role: UserRole) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserRole('visitante');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
      userRole,
      setUserRole,
      isLoggedIn,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}