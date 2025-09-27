import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MessageCircle, BarChart3, Eye, Clock, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import { mockProyectos, mockSeminarios } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

interface Feedback {
  id: string;
  proyectoId: string;
  texto: string;
  estado: 'observacion' | 'aprobado' | 'cambios';
  fecha: string;
}

export default function DashboardProfesor() {
  const navigate = useNavigate();
  const { userRole } = useAuth();
  
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackEstado, setFeedbackEstado] = useState<'observacion' | 'aprobado' | 'cambios'>('observacion');
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  // Solo proyectos publicados para evaluación
  const proyectosParaEvaluar = mockProyectos.filter(p => p.estado === 'publicado');
  
  const estadisticasGenerales = {
    totalProyectos: proyectosParaEvaluar.length,
    enObservacion: proyectosParaEvaluar.filter(p => p.avance < 70).length,
    aprobados: proyectosParaEvaluar.filter(p => p.avance >= 90).length,
    proximosSeminarios: mockSeminarios.length
  };

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

  const getEstadoColor = (avance: number) => {
    if (avance >= 90) return 'text-green-600';
    if (avance >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getEstadoIcon = (avance: number) => {
    if (avance >= 90) return <CheckCircle2 className="w-4 h-4 text-green-600" />;
    if (avance >= 70) return <AlertCircle className="w-4 h-4 text-yellow-600" />;
    return <XCircle className="w-4 h-4 text-red-600" />;
  };

  const getEstadoTexto = (avance: number) => {
    if (avance >= 90) return 'Aprobado Preliminar';
    if (avance >= 70) return 'En Observación';
    return 'Requiere Cambios';
  };

  const handleEnviarFeedback = () => {
    if (!selectedProject || !feedbackText.trim()) return;

    const nuevoFeedback: Feedback = {
      id: Date.now().toString(),
      proyectoId: selectedProject,
      texto: feedbackText.trim(),
      estado: feedbackEstado,
      fecha: new Date().toISOString()
    };

    setFeedbacks(prev => [nuevoFeedback, ...prev]);
    setFeedbackText('');
    setSelectedProject(null);
    
    toast({
      title: "¡Retroalimentación enviada!",
      description: "El equipo recibirá tu feedback sobre el proyecto",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Dashboard Profesor
              </h1>
              <p className="text-muted-foreground">
                Evalúa proyectos y gestiona seminarios
              </p>
            </div>
            <Button 
              onClick={() => navigate('/profesor/agenda')}
              variant="outline"
              className="mt-4 md:mt-0"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Ver Agenda
            </Button>
          </div>

          {/* Estadísticas */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{estadisticasGenerales.totalProyectos}</p>
                  <p className="text-muted-foreground text-sm">Proyectos Total</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/10 rounded-lg mr-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{estadisticasGenerales.enObservacion}</p>
                  <p className="text-muted-foreground text-sm">En Observación</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg mr-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{estadisticasGenerales.aprobados}</p>
                  <p className="text-muted-foreground text-sm">Aprobados</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{estadisticasGenerales.proximosSeminarios}</p>
                  <p className="text-muted-foreground text-sm">Seminarios</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Lista de proyectos */}
            <section className="xl:col-span-2">
              <h2 className="text-xl font-semibold text-foreground mb-6">Proyectos para Evaluar</h2>
              
              <div className="space-y-4">
                {proyectosParaEvaluar.map((proyecto) => {
                  const imagenPrincipal = proyecto.imagenes.find(img => img.esPrincipal) || proyecto.imagenes[0];
                  const feedbacksProyecto = feedbacks.filter(f => f.proyectoId === proyecto.id);
                  
                  return (
                    <Card key={proyecto.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          {/* Imagen */}
                          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={imagenPrincipal?.url || '/placeholder.svg'}
                              alt={proyecto.titulo}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Información */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-foreground">{proyecto.titulo}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Equipo: {proyecto.equipo.nombre}
                                </p>
                              </div>
                              <div className="flex items-center space-x-1">
                                {getEstadoIcon(proyecto.avance)}
                                <span className={`text-sm font-medium ${getEstadoColor(proyecto.avance)}`}>
                                  {getEstadoTexto(proyecto.avance)}
                                </span>
                              </div>
                            </div>

                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                              {proyecto.descCorta}
                            </p>

                            {/* Progreso */}
                            <div className="flex items-center space-x-3 mb-3">
                              <span className="text-sm text-muted-foreground w-16">Progreso:</span>
                              <Progress value={proyecto.avance} className="flex-1" />
                              <span className="text-sm font-medium w-12">{proyecto.avance}%</span>
                            </div>

                            {/* Métricas y acciones */}
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Eye className="w-3 h-3" />
                                  <span>{proyecto.metricas.vistas}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageCircle className="w-3 h-3" />
                                  <span>{feedbacksProyecto.length} feedback</span>
                                </div>
                                <span>
                                  Act: {new Date(proyecto.ultimaActualizacion).toLocaleDateString()}
                                </span>
                              </div>

                              <div className="flex space-x-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => navigate(`/proyecto/${proyecto.id}`)}
                                >
                                  Ver Proyecto
                                </Button>
                                <Button 
                                  size="sm"
                                  onClick={() => setSelectedProject(proyecto.id)}
                                  className="bg-primary hover:bg-primary-dark"
                                >
                                  Retroalimentar
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Panel de retroalimentación */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Enviar Retroalimentación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedProject ? (
                    <>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Proyecto seleccionado:</p>
                        <p className="font-medium">
                          {proyectosParaEvaluar.find(p => p.id === selectedProject)?.titulo}
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Estado del Proyecto</label>
                        <Select 
                          value={feedbackEstado} 
                          onValueChange={(value: 'observacion' | 'aprobado' | 'cambios') => setFeedbackEstado(value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="observacion">En Observación</SelectItem>
                            <SelectItem value="aprobado">Aprobado Preliminar</SelectItem>
                            <SelectItem value="cambios">Requiere Cambios</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Comentarios</label>
                        <Textarea
                          value={feedbackText}
                          onChange={(e) => setFeedbackText(e.target.value)}
                          placeholder="Escribe tu retroalimentación para el equipo..."
                          rows={4}
                        />
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          onClick={handleEnviarFeedback}
                          disabled={!feedbackText.trim()}
                          className="bg-primary hover:bg-primary-dark flex-1"
                        >
                          Enviar Feedback
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setSelectedProject(null)}
                        >
                          Cancelar
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Selecciona un proyecto para enviar retroalimentación</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Historial de feedback reciente */}
              {feedbacks.length > 0 && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Feedback Reciente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {feedbacks.slice(0, 5).map((feedback) => {
                        const proyecto = proyectosParaEvaluar.find(p => p.id === feedback.proyectoId);
                        return (
                          <div key={feedback.id} className="border-l-2 border-primary/20 pl-3 py-2">
                            <div className="flex justify-between items-start mb-1">
                              <span className="text-sm font-medium">{proyecto?.titulo}</span>
                              <Badge variant="outline" className="text-xs">
                                {feedback.estado === 'aprobado' ? 'Aprobado' : 
                                 feedback.estado === 'cambios' ? 'Cambios' : 'Observación'}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {feedback.texto}
                            </p>
                            <span className="text-xs text-muted-foreground">
                              {new Date(feedback.fecha).toLocaleDateString()}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}