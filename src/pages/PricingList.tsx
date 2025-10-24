import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Wrench, Settings, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';

const PricingList = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'novacor2025') {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

 const pricingData = [
  {
    category: 'Prótesis fija',
    icon: Crown,
    items: [
      { name: 'Carilla, corona, incrustación o “lente” disilicato de litio E-MAX', price: 250000 },
      { name: 'Cerámica de encía/ hombro cerámico por unidad', price: 40000 },
      { name: 'Corona metal cerámica', price: 160000 },
      { name: 'Corona zirconio', price: 250000 },
      { name: 'Colado de UCLA calcinable, núcleos o ganchos', price: 55000 },
      { name: 'Hombro cerámico 180°', price: 50000 },
      { name: 'Implant bridge zro2 por conexión', price: 1150000 },
      { name: 'Barra híbrida cada conexión (metal acrílico)', price: 360000 },
      { name: 'Personalizado de abutment', price: 50000 },
    ]
  },
  {
    category: 'Prótesis removible',
    icon: Wrench,
    items: [
      { name: 'Prótesis total o parcial alto impacto (Biodent)', price: 190000 },
      { name: 'Prótesis total o parcial convencional (Biodent)', price: 150000 },
      { name: 'Acker flexible', price: 150000 },
      { name: 'Prótesis flexible', price: 260000 },
      { name: 'Prótesis removible (estructura metálica)', price: 320000 },
      { name: 'Rebase', price: 60000 },
      { name: 'Reparación', price: 50000 },
      { name: 'Rodete y plato base', price: 50000 }
    ]
  },
  {
    category: 'Otros',
    icon: Settings,
    items: [
      { name: 'Cubeta', price: 50000 },
      { name: 'Modelo impreso 3D', price: 50000 },
      { name: 'Modelo impreso con diseño para muck up (hasta 6 unds)', price: 100000 },
      { name: 'Placa NMR (dura o blanda)', price: 50000 },
      { name: 'Placa Extra confort', price: 190000 },
      { name: 'Provisionales PMMA monocapa', price: 50000 },
      { name: 'Provisionales PMMA multicapa', price: 60000 },
      { name: 'Diseño digital (por diente)', price: 30000 }
    ]
  }
];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground">Acceso a Lista de Precios</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Ingrese la contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full">
              Ingresar
            </Button>
            <Button variant="outline" onClick={() => navigate('/')} className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-6">
            <Logo className="h-10 w-auto sm:h-12" />
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6">Lista de Precios</p>
          <Button variant="outline" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </Button>
        </div>

        <div className="grid gap-6 sm:gap-8">
          {pricingData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="flex items-center text-xl text-primary">
                    <IconComponent className="mr-3 h-6 w-6" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 hover:bg-muted/50 transition-colors gap-2 sm:gap-0">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-primary font-bold text-lg">
                          ${item.price.toLocaleString('es-CO')}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12 p-4 sm:p-6 bg-card rounded-lg border border-border">
          <p className="text-sm sm:text-base text-muted-foreground">
            Precios válidos hasta nueva notificación. Consulte por descuentos especiales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingList;