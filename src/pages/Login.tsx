import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, GraduationCap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '@/components/layout/TopBar';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelection = (role: 'feriante' | 'profesor') => {
    login(role);
    navigate(role === 'feriante' ? '/feriante' : '/profesor');
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Elige tu rol
            </h1>
            <p className="text-muted-foreground">
              Selecciona cómo deseas participar en la Feria de Software
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Tarjeta Feriante */}
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Feriante</CardTitle>
                <CardDescription>
                  Publica y gestiona tus proyectos de software
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Subir proyectos con imágenes</li>
                  <li>• Ver estadísticas de visualización</li>
                  <li>• Gestionar información del equipo</li>
                  <li>• Editar y actualizar proyectos</li>
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark"
                  onClick={() => handleRoleSelection('feriante')}
                >
                  Continuar como Feriante
                </Button>
              </CardContent>
            </Card>

            {/* Tarjeta Profesor */}
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Profesor Calificador</CardTitle>
                <CardDescription>
                  Evalúa y da retroalimentación a proyectos
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Acceso a todos los proyectos</li>
                  <li>• Dar retroalimentación a equipos</li>
                  <li>• Gestionar agenda de seminarios</li>
                  <li>• Monitorear progreso de proyectos</li>
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark"
                  onClick={() => handleRoleSelection('profesor')}
                >
                  Continuar como Profesor
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              Volver al inicio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}