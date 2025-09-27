import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { mockProyectos, mockSeminarios } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';

export default function AgendaSeminarios() {
  const navigate = useNavigate();
  const { userRole } = useAuth();
  
  const [filtroFecha, setFiltroFecha] = useState<string>('todos');

  if (userRole !== 'profesor') {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <div className="pt-20 pb-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Acceso no autorizado</h1>
            <Button onClick={() => navigate('/')}>Volver al inicio</Button>
          </div>
        </div>
      </div>
    );
  }

  // Combinar seminarios con información de proyectos
  const seminariosConProyectos = mockSeminarios.map(seminario => {
    const proyecto = mockProyectos.find(p => p.id === seminario.proyectoId);
    return {
      ...seminario,
      proyecto: proyecto || null
    };
  }).filter(s => s.proyecto !== null);

  // Agrupar por fecha
  const seminariosPorFecha = seminariosConProyectos.reduce((acc, seminario) => {
    const fecha = new Date(seminario.fechaHora).toDateString();
    if (!acc[fecha]) {
      acc[fecha] = [];
    }
    acc[fecha].push(seminario);
    return acc;
  }, {} as Record<string, typeof seminariosConProyectos>);

  const fechasOrdenadas = Object.keys(seminariosPorFecha).sort((a, b) => 
    new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button 
                variant="outline" 
                onClick={() => navigate('/profesor')}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Agenda de Seminarios</h1>
                <p className="text-muted-foreground">Gestiona las presentaciones de los equipos</p>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {seminariosConProyectos.length}
                  </div>
                  <p className="text-sm text-muted-foreground">Seminarios Programados</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {fechasOrdenadas.length}
                  </div>
                  <p className="text-sm text-muted-foreground">Días de Presentaciones</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {new Set(seminariosConProyectos.map(s => s.sala)).size}
                  </div>
                  <p className="text-sm text-muted-foreground">Salas Utilizadas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de seminarios por fecha */}
          <div className="space-y-6">
            {fechasOrdenadas.map((fecha) => {
              const seminariosDia = seminariosPorFecha[fecha];
              const fechaObj = new Date(fecha);
              
              return (
                <Card key={fecha}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-primary" />
                      {fechaObj.toLocaleDateString('es-ES', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                      <Badge variant="outline" className="ml-3">
                        {seminariosDia.length} seminario{seminariosDia.length !== 1 ? 's' : ''}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {seminariosDia
                        .sort((a, b) => new Date(a.fechaHora).getTime() - new Date(b.fechaHora).getTime())
                        .map((seminario) => {
                          const fechaHora = new Date(seminario.fechaHora);
                          const imagenPrincipal = seminario.proyecto!.imagenes.find(img => img.esPrincipal) || seminario.proyecto!.imagenes[0];
                          
                          return (
                            <div key={seminario.id} className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                              {/* Imagen del proyecto */}
                              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                <img 
                                  src={imagenPrincipal?.url || '/placeholder.svg'}
                                  alt={seminario.proyecto!.titulo}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              {/* Información */}
                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                                  <div>
                                    <h4 className="font-semibold text-foreground">
                                      {seminario.proyecto!.titulo}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                      Equipo: {seminario.proyecto!.equipo.nombre}
                                    </p>
                                  </div>
                                  
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2 sm:mt-0">
                                    <div className="flex items-center space-x-1">
                                      <Clock className="w-3 h-3" />
                                      <span>{fechaHora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <MapPin className="w-3 h-3" />
                                      <span>{seminario.sala}</span>
                                    </div>
                                  </div>
                                </div>

                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                  {seminario.proyecto!.descCorta}
                                </p>

                                <div className="flex justify-between items-center">
                                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                    <Users className="w-3 h-3" />
                                    <span>{seminario.proyecto!.equipo.integrantes.join(', ')}</span>
                                  </div>
                                  
                                  <div className="flex space-x-2">
                                    <Button 
                                      variant="outline" 
                                      size="sm"
                                      onClick={() => navigate(`/proyecto/${seminario.proyecto!.id}`)}
                                    >
                                      Ver Proyecto
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {fechasOrdenadas.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <div className="text-6xl mb-4">📅</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No hay seminarios programados
                  </h3>
                  <p className="text-muted-foreground">
                    Los seminarios aparecerán aquí cuando sean programados
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}