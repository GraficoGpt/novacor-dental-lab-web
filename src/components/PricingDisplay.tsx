
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Crown, Wrench, Plus, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PricingItem {
  id: string;
  category: string;
  service_name: string;
  price: number;
  description?: string;
  is_active: boolean;
}

const PricingDisplay = () => {
  const [pricing, setPricing] = useState<PricingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      const { data, error } = await supabase
        .from('pricing')
        .select('*')
        .eq('is_active', true)
        .order('category', { ascending: true })
        .order('price', { ascending: true });

      if (error) throw error;
      setPricing(data || []);
    } catch (error) {
      console.error('Error fetching pricing:', error);
      toast({
        title: "Error",
        description: "No se pudieron cargar los precios. Intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'protesis_fija':
        return <Crown className="w-6 h-6 text-primary" />;
      case 'protesis_removible':
        return <Wrench className="w-6 h-6 text-accent" />;
      case 'servicios':
        return <Plus className="w-6 h-6 text-green-600" />;
      default:
        return <DollarSign className="w-6 h-6 text-gray-600" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'protesis_fija':
        return 'Prótesis Fijas';
      case 'protesis_removible':
        return 'Prótesis Removibles';
      case 'servicios':
        return 'Servicios Adicionales';
      default:
        return 'Otros Servicios';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'protesis_fija':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'protesis_removible':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'servicios':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2 text-lg text-gray-600">Cargando precios...</span>
      </div>
    );
  }

  const categories = ['protesis_fija', 'protesis_removible', 'servicios'];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Lista de Precios NOVACOR</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Precios actualizados para servicios de laboratorio dental especializado. 
          Todos los trabajos incluyen garantía de calidad.
        </p>
      </div>

      {categories.map((category) => {
        const categoryItems = pricing.filter(item => item.category === category);
        
        if (categoryItems.length === 0) return null;

        return (
          <Card key={category} className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                {getCategoryIcon(category)}
                <div>
                  <CardTitle className="text-2xl text-gray-900">
                    {getCategoryTitle(category)}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {categoryItems.length} servicios disponibles
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {categoryItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.service_name}
                      </h4>
                      {item.description && (
                        <p className="text-sm text-gray-600 mb-2">
                          {item.description}
                        </p>
                      )}
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getCategoryColor(category)}`}
                      >
                        {getCategoryTitle(category)}
                      </Badge>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-primary">
                        {formatPrice(item.price)}
                      </div>
                      <div className="text-xs text-gray-500">
                        Precio unitario
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}

      <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
          <Crown className="w-5 h-5 mr-2 text-primary" />
          Información Importante
        </h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Todos los precios incluyen materiales premium certificados</li>
          <li>• Garantía de calidad en todos nuestros trabajos</li>
          <li>• Tiempo de entrega estándar: 3-5 días hábiles</li>
          <li>• Descuentos especiales para volúmenes altos</li>
          <li>• Precios sujetos a cambios sin previo aviso</li>
        </ul>
      </div>
    </div>
  );
};

export default PricingDisplay;
