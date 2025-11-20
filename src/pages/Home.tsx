import { useState, useMemo } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { CategoryFilters } from '@/components/filters/CategoryFilters';
import { WelcomePopup } from '@/components/ui/welcome-popup';
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
      <WelcomePopup />
      
      <main className="pt-20 pb-12">
        {/* Hero Section con gradiente */}
        <section className="gradient-hero text-white py-16 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                33ª Feria de Software USM
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Descubre los proyectos más innovadores desarrollados por talentosos equipos de estudiantes
              </p>
              
              {/* Estadísticas rápidas */}
              <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold">
                    {mockProyectos.filter(p => p.estado === 'publicado').length}
                  </div>
                  <div className="text-sm opacity-90">Proyectos</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold">
                    {new Set(mockProyectos.flatMap(p => p.categorias)).size}
                  </div>
                  <div className="text-sm opacity-90">Categorías</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
                  <div className="text-3xl font-bold">
                    {mockProyectos.reduce((sum, p) => sum + p.metricas.vistas, 0)}
                  </div>
                  <div className="text-sm opacity-90">Visualizaciones</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4">

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