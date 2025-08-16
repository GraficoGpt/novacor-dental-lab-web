import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Wrench, Settings, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      category: 'Prótesis Fijas',
      icon: Crown,
      items: [
        { name: 'Corona Metal Porcelana', price: 180000 },
        { name: 'Corona Zirconio Monolítico', price: 220000 },
        { name: 'Corona Zirconio Estratificado', price: 280000 },
        { name: 'Corona E-MAX', price: 320000 },
        { name: 'Carilla E-MAX', price: 280000 },
        { name: 'Incrustación Cerámica', price: 250000 },
        { name: 'Poste Colado', price: 120000 }
      ]
    },
    {
      category: 'Prótesis Removibles',
      icon: Wrench,
      items: [
        { name: 'Prótesis Total Superior', price: 380000 },
        { name: 'Prótesis Total Inferior', price: 380000 },
        { name: 'Prótesis Parcial Acrílica', price: 280000 },
        { name: 'Prótesis Flexible Nylon', price: 420000 },
        { name: 'Esquelético Cromo Cobalto', price: 480000 },
        { name: 'Reparación Prótesis', price: 80000 }
      ]
    },
    {
      category: 'Servicios Adicionales',
      icon: Settings,
      items: [
        { name: 'Toma de Color', price: 25000 },
        { name: 'Articulación en ASA', price: 35000 },
        { name: 'Encerado Diagnóstico', price: 45000 },
        { name: 'Guía Quirúrgica', price: 120000 },
        { name: 'Rebasado Blando', price: 90000 }
      ]
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-primary">NOVACOR</CardTitle>
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            NOVACOR
          </h1>
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