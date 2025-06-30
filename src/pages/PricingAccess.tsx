
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Send, Shield, Clock, CheckCircle, Phone, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingAccess = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    privacyAccepted: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      toast({
        title: "Error de validación",
        description: "Debes aceptar la política de privacidad para continuar.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('pricing_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            privacy_accepted: formData.privacyAccepted,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Solicitud enviada correctamente",
        description: "Revisaremos tu solicitud y te contactaremos pronto.",
      });
    } catch (error) {
      console.error('Error submitting request:', error);
      toast({
        title: "Error al enviar solicitud",
        description: "Hubo un problema al procesar tu solicitud. Intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <CardTitle className="text-3xl text-gray-900 mb-2">
                ¡Solicitud Recibida!
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Hemos recibido tu solicitud de acceso a nuestra lista de precios
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Próximos Pasos
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Revisaremos tu solicitud en las próximas 24 horas
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Te contactaremos para confirmar tu información profesional
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Una vez aprobado, recibirás acceso completo a nuestros precios
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent/5 rounded-lg p-4 border border-accent/10">
                  <div className="flex items-center mb-2">
                    <Phone className="w-5 h-5 text-accent mr-2" />
                    <span className="font-semibold text-gray-900">Contacto Directo</span>
                  </div>
                  <p className="text-gray-600">310-872-3348</p>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <div className="flex items-center mb-2">
                    <Mail className="w-5 h-5 text-primary mr-2" />
                    <span className="font-semibold text-gray-900">Email</span>
                  </div>
                  <p className="text-gray-600">novacorlab@gmail.com</p>
                </div>
              </div>

              <div className="text-center pt-4">
                <Link to="/">
                  <Button variant="outline" className="w-full sm:w-auto">
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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solicitar Acceso a 
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lista de Precios
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completa este formulario para acceder a nuestros precios especializados 
            para profesionales odontológicos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <User className="w-6 h-6 mr-3 text-primary" />
                  Información Profesional
                </CardTitle>
                <CardDescription>
                  Proporciona tus datos para procesar tu solicitud de acceso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre Completo *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Dr. Juan Pérez"
                        required
                        className="h-12 text-lg"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Correo Electrónico *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="doctor@clinica.com"
                        required
                        className="h-12 text-lg"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="310-123-4567"
                        required
                        className="h-12 text-lg"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacyAccepted}
                      onCheckedChange={(checked) => handleInputChange('privacyAccepted', checked as boolean)}
                      className="mt-1"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                      Acepto la política de privacidad y autorizo el tratamiento de mis datos personales 
                      para procesar mi solicitud de acceso a la lista de precios de NOVACOR DENTAL LAB. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 text-lg font-semibold novacor-gradient text-white hover:opacity-90 transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Solicitud
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Acceso Exclusivo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Nuestra lista de precios está disponible exclusivamente para 
                  profesionales odontológicos certificados.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Precios competitivos actualizados</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Descuentos por volumen</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Condiciones preferenciales</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-primary/5 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Proceso de Aprobación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <span>Envío de solicitud</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <span>Verificación profesional</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <span>Acceso aprobado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAccess;
