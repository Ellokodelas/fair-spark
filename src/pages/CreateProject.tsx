import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Upload, X, Star, StarOff } from 'lucide-react';
import { categorias } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

interface ImageFile {
  id: string;
  url: string;
  file: File;
  esPrincipal: boolean;
}

export default function CreateProject() {
  const navigate = useNavigate();
  const { userRole } = useAuth();
  
  const [formData, setFormData] = useState({
    titulo: '',
    descCorta: '',
    descLarga: '',
    categorias: [] as string[],
    repoUrl: '',
    demoUrl: '',
    equipoNombre: '',
    integrantes: ''
  });
  
  const [imagenes, setImagenes] = useState<ImageFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleCategoria = (categoria: string) => {
    setFormData(prev => ({
      ...prev,
      categorias: prev.categorias.includes(categoria)
        ? prev.categorias.filter(c => c !== categoria)
        : [...prev.categorias, categoria]
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const nuevaImagen: ImageFile = {
            id: Date.now().toString() + Math.random(),
            url: e.target?.result as string,
            file,
            esPrincipal: imagenes.length === 0 // Primera imagen es principal por defecto
          };
          setImagenes(prev => [...prev, nuevaImagen]);
        };
        reader.readAsDataURL(file);
      }
    });

    // Reset input
    event.target.value = '';
  };

  const removeImagen = (id: string) => {
    setImagenes(prev => {
      const filtered = prev.filter(img => img.id !== id);
      // Si removimos la imagen principal, asignar a la primera
      if (filtered.length > 0 && !filtered.some(img => img.esPrincipal)) {
        filtered[0].esPrincipal = true;
      }
      return filtered;
    });
  };

  const setImagenPrincipal = (id: string) => {
    setImagenes(prev => 
      prev.map(img => ({ ...img, esPrincipal: img.id === id }))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!formData.titulo.trim()) {
      toast({ title: "Error", description: "El título es requerido", variant: "destructive" });
      return;
    }
    
    if (!formData.descCorta.trim()) {
      toast({ title: "Error", description: "La descripción corta es requerida", variant: "destructive" });
      return;
    }
    
    if (formData.categorias.length === 0) {
      toast({ title: "Error", description: "Selecciona al menos una categoría", variant: "destructive" });
      return;
    }

    if (imagenes.length === 0) {
      toast({ title: "Error", description: "Sube al menos una imagen", variant: "destructive" });
      return;
    }

    setIsUploading(true);

    // Simular creación (en app real sería API call)
    setTimeout(() => {
      toast({
        title: "¡Proyecto creado exitosamente!",
        description: "Tu proyecto ha sido publicado en la feria",
      });
      
      navigate('/feriante');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/feriante')}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Nuevo Proyecto</h1>
              <p className="text-muted-foreground">Completa la información de tu proyecto</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Información básica */}
            <Card>
              <CardHeader>
                <CardTitle>Información Básica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="titulo">Título del Proyecto *</Label>
                  <Input
                    id="titulo"
                    value={formData.titulo}
                    onChange={(e) => handleInputChange('titulo', e.target.value)}
                    placeholder="Nombre de tu proyecto..."
                    maxLength={100}
                  />
                </div>

                <div>
                  <Label htmlFor="descCorta">Descripción Corta * (máx. 160 caracteres)</Label>
                  <Textarea
                    id="descCorta"
                    value={formData.descCorta}
                    onChange={(e) => handleInputChange('descCorta', e.target.value)}
                    placeholder="Describe brevemente tu proyecto..."
                    maxLength={160}
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.descCorta.length}/160 caracteres
                  </p>
                </div>

                <div>
                  <Label htmlFor="descLarga">Descripción Detallada</Label>
                  <Textarea
                    id="descLarga"
                    value={formData.descLarga}
                    onChange={(e) => handleInputChange('descLarga', e.target.value)}
                    placeholder="Describe en detalle las funcionalidades, tecnologías utilizadas, objetivos del proyecto..."
                    rows={6}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categorías */}
            <Card>
              <CardHeader>
                <CardTitle>Categorías *</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {categorias.map((categoria) => (
                    <Badge
                      key={categoria}
                      variant={formData.categorias.includes(categoria) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary/10"
                      onClick={() => toggleCategoria(categoria)}
                    >
                      {categoria}
                    </Badge>
                  ))}
                </div>
                {formData.categorias.length > 0 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Seleccionadas: {formData.categorias.join(', ')}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Subida de imágenes */}
            <Card>
              <CardHeader>
                <CardTitle>Imágenes del Proyecto *</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Upload area */}
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      id="image-upload"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label 
                      htmlFor="image-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        Subir imágenes
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Arrastra imágenes aquí o haz clic para seleccionar
                      </p>
                    </label>
                  </div>

                  {/* Preview de imágenes */}
                  {imagenes.length > 0 && (
                    <div>
                      <h4 className="font-medium text-foreground mb-3">
                        Imágenes cargadas ({imagenes.length})
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {imagenes.map((imagen) => (
                          <div key={imagen.id} className="relative group">
                            <div className="aspect-video rounded-lg overflow-hidden border">
                              <img 
                                src={imagen.url}
                                alt="Preview"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            {/* Controles */}
                            <div className="absolute top-2 right-2 flex space-x-1">
                              <Button
                                type="button"
                                size="sm"
                                variant={imagen.esPrincipal ? "default" : "outline"}
                                onClick={() => setImagenPrincipal(imagen.id)}
                                className="w-8 h-8 p-0"
                              >
                                {imagen.esPrincipal ? <Star className="w-3 h-3" /> : <StarOff className="w-3 h-3" />}
                              </Button>
                              <Button
                                type="button"
                                size="sm"
                                variant="destructive"
                                onClick={() => removeImagen(imagen.id)}
                                className="w-8 h-8 p-0"
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            </div>

                            {imagen.esPrincipal && (
                              <div className="absolute bottom-2 left-2">
                                <Badge variant="default" className="text-xs">
                                  Principal
                                </Badge>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        * Haz clic en ⭐ para seleccionar la imagen principal que se mostrará en la tarjeta del proyecto
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Links y equipo */}
            <Card>
              <CardHeader>
                <CardTitle>Links y Equipo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="repoUrl">Repositorio (GitHub, GitLab...)</Label>
                    <Input
                      id="repoUrl"
                      value={formData.repoUrl}
                      onChange={(e) => handleInputChange('repoUrl', e.target.value)}
                      placeholder="https://github.com/..."
                      type="url"
                    />
                  </div>

                  <div>
                    <Label htmlFor="demoUrl">Demo en Vivo</Label>
                    <Input
                      id="demoUrl"
                      value={formData.demoUrl}
                      onChange={(e) => handleInputChange('demoUrl', e.target.value)}
                      placeholder="https://mi-proyecto.com"
                      type="url"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="equipoNombre">Nombre del Equipo</Label>
                  <Input
                    id="equipoNombre"
                    value={formData.equipoNombre}
                    onChange={(e) => handleInputChange('equipoNombre', e.target.value)}
                    placeholder="Tech Innovators"
                  />
                </div>

                <div>
                  <Label htmlFor="integrantes">Integrantes (separados por comas)</Label>
                  <Input
                    id="integrantes"
                    value={formData.integrantes}
                    onChange={(e) => handleInputChange('integrantes', e.target.value)}
                    placeholder="Ana García, Carlos López, María Rodríguez"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Botones de acción */}
            <div className="flex justify-end space-x-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate('/feriante')}
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                disabled={isUploading}
                className="bg-primary hover:bg-primary-dark"
              >
                {isUploading ? 'Publicando...' : 'Publicar Proyecto'}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}