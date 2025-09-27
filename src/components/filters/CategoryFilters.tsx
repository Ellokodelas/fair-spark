import { Badge } from '@/components/ui/badge';
import { categorias } from '@/data/mockData';

interface CategoryFiltersProps {
  selectedCategories: string[];
  onCategoryToggle: (categoria: string) => void;
}

export function CategoryFilters({ selectedCategories, onCategoryToggle }: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge 
        variant={selectedCategories.length === 0 ? "default" : "outline"}
        className="cursor-pointer hover:bg-primary/10"
        onClick={() => onCategoryToggle('all')}
      >
        Todos
      </Badge>
      {categorias.map((categoria) => (
        <Badge
          key={categoria}
          variant={selectedCategories.includes(categoria) ? "default" : "outline"}
          className="cursor-pointer hover:bg-primary/10"
          onClick={() => onCategoryToggle(categoria)}
        >
          {categoria}
        </Badge>
      ))}
    </div>
  );
}