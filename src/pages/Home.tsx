import { useState, useMemo } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { CategoryFilters } from '@/components/filters/CategoryFilters';
import { mockProyectos } from '@/data/mockData';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Filtrar proyectos publicados, por búsqueda y categorías
  const filteredProjects = useMemo(() => {
    return mockProyectos
      .filter(proyecto => proyecto.estado === 'publicado')
      .filter(proyecto => {
        if (!searchQuery) return true;
        const searchLower = searchQuery.toLowerCase();
        return (
          proyecto.titulo.toLowerCase().includes(searchLower) ||
          proyecto.descCorta.toLowerCase().includes(searchLower) ||
          proyecto.categorias.some(cat => cat.toLowerCase().includes(searchLower)) ||
          proyecto.equipo.nombre.toLowerCase().includes(searchLower)
        );
      })
      .filter(proyecto => {
        if (selectedCategories.length === 0) return true;
        return proyecto.categorias.some(cat => selectedCategories.includes(cat));
      });
  }, [searchQuery, selectedCategories]);

  const handleCategoryToggle = (categoria: string) => {
    if (categoria === 'all') {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories(prev => 
      prev.includes(categoria)
        ? prev.filter(c => c !== categoria)
        : [...prev, categoria]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center py-12 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Feria de Software
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Descubre los proyectos más innovadores desarrollados por talentosos equipos de estudiantes
            </p>
            
            {/* Estadísticas rápidas */}
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">
                  {mockProyectos.filter(p => p.estado === 'publicado').length}
                </div>
                <div className="text-sm text-muted-foreground">Proyectos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  {new Set(mockProyectos.flatMap(p => p.categorias)).size}
                </div>
                <div className="text-sm text-muted-foreground">Categorías</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  {mockProyectos.reduce((sum, p) => sum + p.metricas.vistas, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Visualizaciones</div>
              </div>
            </div>
          </section>

          {/* Filtros */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Filtrar por categoría</h2>
            <CategoryFilters 
              selectedCategories={selectedCategories}
              onCategoryToggle={handleCategoryToggle}
            />
          </section>

          {/* Resultados */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-foreground">
                {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''} encontrado{filteredProjects.length !== 1 ? 's' : ''}
              </h2>
              {selectedCategories.length > 0 && (
                <button
                  onClick={() => setSelectedCategories([])}
                  className="text-sm text-muted-foreground hover:text-foreground underline"
                >
                  Limpiar filtros
                </button>
              )}
            </div>

            {/* Grid de proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proyecto) => (
                <ProjectCard key={proyecto.id} proyecto={proyecto} />
              ))}
            </div>

            {/* Estado vacío */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No se encontraron proyectos
                </h3>
                <p className="text-muted-foreground">
                  Intenta ajustar los filtros o términos de búsqueda
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Feria de Software. Descubre, aprende, innova.
          </p>
        </div>
      </footer>
    </div>
  );
}