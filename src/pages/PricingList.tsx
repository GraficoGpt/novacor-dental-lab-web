
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Lock, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import PricingDisplay from '@/components/PricingDisplay';

const PricingList = () => {
  const [searchParams] = useSearchParams();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  useEffect(() => {
    verifyAccess();
  }, [email, token]);

  const verifyAccess = async () => {
    if (!email || !token) {
      setLoading(false);
      return;
    }

    try {
      // Verificar si existe una solicitud aprobada para este email
      const { data, error } = await supabase
        .from('pricing_requests')
        .select('*')
        .eq('email', email)
        .eq('status', 'approved')
        .single();

      if (error || !data) {
        toast({
          title: "Acceso denegado",
          description: "Tu solicitud aún no ha sido aprobada o no existe.",
          variant: "destructive"
        });
        setLoading(false);
        return;
      }

      // Simple token verification (in production, use proper JWT)
      const expectedToken = btoa(email + 'novacor2024');
      if (token !== expectedToken) {
        toast({
          title: "Token inválido",
          description: "El enlace de acceso no es válido.",
          variant: "destructive"
        });
        setLoading(false);
        return;
      }

      setIsAuthorized(true);
    } catch (error) {
      console.error('Error verifying access:', error);
      toast({
        title: "Error de verificación",
        description: "No se pudo verificar el acceso. Intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Acceso Restringido</CardTitle>
              <CardDescription>
                No tienes autorización para ver esta página
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-red-700">
                    <p className="font-semibold mb-1">Posibles causas:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Tu solicitud aún no ha sido aprobada</li>
                      <li>El enlace de acceso ha expirado</li>
                      <li>No tienes una solicitud registrada</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <Link to="/solicitar-precios">
                  <Button className="w-full novacor-gradient text-white">
                    Solicitar Acceso
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver al Inicio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="text-right">
            <p className="text-sm text-gray-600">Acceso autorizado para:</p>
            <p className="font-semibold text-gray-900">{email}</p>
          </div>
        </div>

        {/* Pricing Display */}
        <PricingDisplay />

        {/* Footer */}
        <div className="mt-12 text-center">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">
                ¿Tienes preguntas sobre nuestros precios o servicios?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = 'tel:3108723348'}
                  className="novacor-gradient text-white"
                >
                  Llamar Ahora: 310-872-3348
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = 'mailto:novacorlab@gmail.com'}
                >
                  Enviar Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PricingList;
