import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Plus, Eye, Edit, BarChart3, Users, MessageCircle, Calendar } from 'lucide-react';
import { mockProyectos } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';

export default function DashboardFeriante() {
  const navigate = useNavigate();
  const { userRole } = useAuth();
  
  // Simular proyectos del feriante actual (filtrar por algún criterio)
  const misProyectos = mockProyectos.filter(p => p.id === '1' || p.id === '5'); // Mock: solo algunos proyectos

  const statsGenerales = {
    totalProyectos: misProyectos.length,
    proyectosPublicados: misProyectos.filter(p => p.estado === 'publicado').length,
    totalVistas: misProyectos.reduce((sum, p) => sum + p.metricas.vistas, 0),
    totalInteres: misProyectos.reduce((sum, p) => sum + p.metricas.meInteresa, 0),
  };

  if (userRole !== 'feriante') {
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

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header del dashboard */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Dashboard Feriante
              </h1>
              <p className="text-muted-foreground">
                Gestiona tus proyectos y visualiza estadísticas
              </p>
            </div>
            <Button 
              onClick={() => navigate('/feriante/nuevo')}
              className="bg-primary hover:bg-primary-dark mt-4 md:mt-0"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Proyecto
            </Button>
          </div>

          {/* Estadísticas generales */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{statsGenerales.totalProyectos}</p>
                  <p className="text-muted-foreground text-sm">Proyectos Totales</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg mr-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{statsGenerales.proyectosPublicados}</p>
                  <p className="text-muted-foreground text-sm">Publicados</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mr-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{statsGenerales.totalVistas}</p>
                  <p className="text-muted-foreground text-sm">Total Vistas</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-lg mr-4">
                  <MessageCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{statsGenerales.totalInteres}</p>
                  <p className="text-muted-foreground text-sm">Me Interesa</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Lista de mis proyectos */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-foreground">Mis Proyectos</h2>
            </div>

            <div className="space-y-4">
              {misProyectos.map((proyecto) => {
                const imagenPrincipal = proyecto.imagenes.find(img => img.esPrincipal) || proyecto.imagenes[0];
                
                return (
                  <Card key={proyecto.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Imagen */}
                        <div className="w-full lg:w-48 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={imagenPrincipal?.url || '/placeholder.svg'}
                            alt={proyecto.titulo}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Información del proyecto */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                {proyecto.titulo}
                              </h3>
                              <div className="flex items-center space-x-2 mb-2">
                                <Badge variant={proyecto.estado === 'publicado' ? 'default' : 'secondary'}>
                                  {proyecto.estado === 'publicado' ? 'Publicado' : 'Borrador'}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {proyecto.categorias[0]}
                                </span>
                              </div>
                            </div>
                            <div className="flex space-x-2 mt-2 sm:mt-0">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => navigate(`/proyecto/${proyecto.id}`)}
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                Ver
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => navigate(`/feriante/${proyecto.id}/editar`)}
                              >
                                <Edit className="w-4 h-4 mr-2" />
                                Editar
                              </Button>
                            </div>
                          </div>

                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {proyecto.descCorta}
                          </p>

                          {/* Progreso y estadísticas */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Progreso</p>
                              <div className="flex items-center space-x-2">
                                <Progress value={proyecto.avance} className="flex-1" />
                                <span className="text-sm font-medium">{proyecto.avance}%</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Vistas</p>
                              <p className="font-medium">{proyecto.metricas.vistas}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Me Interesa</p>
                              <p className="font-medium">{proyecto.metricas.meInteresa}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Comentarios</p>
                              <p className="font-medium">{proyecto.metricas.comentarios}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Equipo: {proyecto.equipo.nombre}</span>
                            <span>
                              <Calendar className="w-3 h-3 inline mr-1" />
                              Actualizado: {new Date(proyecto.ultimaActualizacion).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {misProyectos.length === 0 && (
                <Card>
                  <CardContent className="text-center py-12">
                    <div className="text-6xl mb-4">📁</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      No tienes proyectos aún
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Crea tu primer proyecto y compártelo en la feria
                    </p>
                    <Button 
                      onClick={() => navigate('/feriante/nuevo')}
                      className="bg-primary hover:bg-primary-dark"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Crear Proyecto
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}