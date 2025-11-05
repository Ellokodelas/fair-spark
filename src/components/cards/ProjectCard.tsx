import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Heart, MessageCircle } from 'lucide-react';
import { Proyecto } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  proyecto: Proyecto;
}

export function ProjectCard({ proyecto }: ProjectCardProps) {
  const navigate = useNavigate();
  
  const imagenPrincipal = proyecto.imagenes.find(img => img.esPrincipal) || proyecto.imagenes[0];

  const handleVerMas = () => {
    navigate(`/proyecto/${proyecto.id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 group">
      {/* Imagen */}
      <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={handleVerMas} >
        <img 
          src={imagenPrincipal?.url || '/placeholder.svg'} 
          alt={proyecto.titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge 
            variant="secondary" 
            className="bg-background/90 text-foreground backdrop-blur-sm"
          >
            {proyecto.categorias[0]}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Título */}
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {proyecto.titulo}
        </h3>

        {/* Descripción corta */}
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
          {proyecto.descCorta}
        </p>

        {/* Categorías adicionales */}
        <div className="flex flex-wrap gap-1 mb-3">
          {proyecto.categorias.slice(1, 3).map((categoria) => (
            <Badge key={categoria} variant="outline" className="text-xs">
              {categoria}
            </Badge>
          ))}
        </div>

        {/* Equipo */}
        <p className="text-xs text-muted-foreground mb-3">
          <span className="font-medium">Equipo:</span> {proyecto.equipo.nombre}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        {/* Métricas */}
        <div className="flex items-center space-x-3 text-muted-foreground text-xs">
          <div className="flex items-center space-x-1">
            <Eye className="w-3 h-3" />
            <span>{proyecto.metricas.vistas}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart className="w-3 h-3" />
            <span>{proyecto.metricas.meInteresa}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-3 h-3" />
            <span>{proyecto.metricas.comentarios}</span>
          </div>
        </div>

        {/* Botón Ver más */}
        <Button 
          size="sm" 
          onClick={handleVerMas}
          className="bg-primary hover:bg-primary-dark text-primary-foreground"
        >
          Ver más
        </Button>
      </CardFooter>
    </Card>
  );
}