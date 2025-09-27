import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopBar } from '@/components/layout/TopBar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Eye, Heart, MessageCircle, ExternalLink, Github } from 'lucide-react';
import { mockProyectos, mockComentarios, type Comentario } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [comentarios, setComentarios] = useState<Comentario[]>(
    mockComentarios.filter(c => c.proyectoId === id)
  );
  const [nuevoComentario, setNuevoComentario] = useState('');
  const [meInteresa, setMeInteresa] = useState(false);

  const proyecto = mockProyectos.find(p => p.id === id);

  if (!proyecto) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <div className="pt-20 pb-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Proyecto no encontrado</h1>
            <Button onClick={() => navigate('/')}>Volver al inicio</Button>
          </div>
        </div>
      </div>
    );
  }

  const imagenPrincipal = proyecto.imagenes.find(img => img.esPrincipal) || proyecto.imagenes[0];

  const handleMeInteresa = () => {
    setMeInteresa(!meInteresa);
    toast({
      title: meInteresa ? "Removido de interés" : "¡Marcado como interés!",
      description: meInteresa 
        ? "El proyecto fue removido de tu lista de interés"
        : "Este proyecto fue agregado a tu lista de interés",
    });
  };

  const handleEnviarComentario = () => {
    if (!nuevoComentario.trim()) return;

    const comentario: Comentario = {
      id: Date.now().toString(),
      proyectoId: id!,
      autor: "Visitante",
      texto: nuevoComentario.trim(),
      fecha: new Date().toISOString()
    };

    setComentarios(prev => [comentario, ...prev]);
    setNuevoComentario('');
    toast({
      title: "¡Comentario publicado!",
      description: "Tu comentario ha sido agregado exitosamente",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Navegación */}
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a proyectos
          </Button>

          {/* Hero del proyecto */}
          <section className="mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
              <img 
                src={imagenPrincipal?.url || '/placeholder.svg'}
                alt={proyecto.titulo}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {proyecto.categorias.map((categoria) => (
                <Badge key={categoria} variant="secondary">
                  {categoria}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {proyecto.titulo}
            </h1>

            <div className="flex items-center justify-between mb-6">
              <div className="text-muted-foreground">
                <p className="font-medium">Equipo: {proyecto.equipo.nombre}</p>
                <p className="text-sm">
                  Integrantes: {proyecto.equipo.integrantes.join(', ')}
                </p>
              </div>

              {/* Métricas y acciones */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{proyecto.metricas.vistas}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{comentarios.length}</span>
                  </div>
                </div>
                
                <Button
                  variant={meInteresa ? "default" : "outline"}
                  size="sm"
                  onClick={handleMeInteresa}
                >
                  <Heart className={`w-4 h-4 mr-2 ${meInteresa ? 'fill-current' : ''}`} />
                  Me interesa
                </Button>
              </div>
            </div>
          </section>

          {/* Descripción y links */}
          <section className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Descripción del Proyecto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {proyecto.descLarga}
                </p>

                {/* Links externos */}
                {(proyecto.links.repo || proyecto.links.demo) && (
                  <div className="flex flex-wrap gap-3">
                    {proyecto.links.repo && (
                      <Button 
                        variant="outline" 
                        asChild
                        className="text-sm"
                      >
                        <a href={proyecto.links.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Ver Código
                        </a>
                      </Button>
                    )}
                    {proyecto.links.demo && (
                      <Button 
                        variant="outline"
                        asChild
                        className="text-sm"
                      >
                        <a href={proyecto.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Ver Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Galería de imágenes adicionales */}
          {proyecto.imagenes.length > 1 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">Galería</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {proyecto.imagenes
                  .filter(img => !img.esPrincipal)
                  .map((imagen, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <img 
                        src={imagen.url}
                        alt={`${proyecto.titulo} - Imagen ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))
                }
              </div>
            </section>
          )}

          {/* Sección de comentarios */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Comentarios ({comentarios.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Formulario nuevo comentario */}
                <div className="mb-6 p-4 bg-muted rounded-lg">
                  <Textarea
                    placeholder="Escribe tu comentario sobre este proyecto..."
                    value={nuevoComentario}
                    onChange={(e) => setNuevoComentario(e.target.value)}
                    className="mb-3"
                    rows={3}
                  />
                  <Button 
                    onClick={handleEnviarComentario}
                    disabled={!nuevoComentario.trim()}
                    className="bg-primary hover:bg-primary-dark"
                  >
                    Publicar comentario
                  </Button>
                </div>

                {/* Lista de comentarios */}
                <div className="space-y-4">
                  {comentarios.map((comentario) => (
                    <div key={comentario.id} className="border-l-2 border-primary/20 pl-4 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm text-foreground">
                          {comentario.autor}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(comentario.fecha).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {comentario.texto}
                      </p>
                    </div>
                  ))}

                  {comentarios.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      Sé el primero en comentar este proyecto
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}