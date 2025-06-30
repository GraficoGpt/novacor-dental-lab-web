
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';

const PricingAccess = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    privacyAccepted: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      toast({
        title: "Error",
        description: "Debe aceptar el tratamiento de datos personales para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Simular envío de solicitud
    console.log('Solicitud de acceso enviada:', formData);
    
    // En una implementación real, aquí se enviaría la información al backend
    // y se notificaría al administrador
    
    setIsSubmitted(true);
    
    toast({
      title: "Solicitud Enviada",
      description: "Su solicitud ha sido recibida. Le contactaremos pronto para verificar su información.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-2xl">✅</div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Solicitud Recibida!
            </h2>
            
            <p className="text-gray-600 mb-6">
              Hemos recibido su solicitud de acceso a nuestra lista de precios. 
              Nuestro equipo revisará su información y le contactaremos en un plazo de 24-48 horas.
            </p>
            
            <div className="space-y-3 text-sm text-gray-500 mb-6">
              <p>📧 Recibirá una confirmación por email</p>
              <p>📱 Le contactaremos al número proporcionado</p>
              <p>⏱️ Tiempo de respuesta: 24-48 horas</p>
            </div>
            
            <Button 
              onClick={() => window.location.href = '/'}
              className="w-full medical-gradient text-white"
            >
              Volver al Inicio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => window.location.href = '/'}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
            <h1 className="text-xl font-bold text-primary">NOVACOR DENTAL LAB</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔐</div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Acceso a Lista de Precios para Odontólogos
              </h2>
              
              <p className="text-gray-600 text-lg">
                Para acceder a nuestra lista de precios exclusiva para profesionales, 
                por favor complete el siguiente formulario. Nuestro equipo verificará 
                su solicitud y le enviaremos el acceso a la brevedad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Dr. Juan Pérez González"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="doctor@clinica.com"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Este será su usuario de acceso a la plataforma
                </p>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Celular *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="310-123-4567"
                />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Checkbox
                  id="privacy"
                  checked={formData.privacyAccepted}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, privacyAccepted: checked as boolean })
                  }
                />
                <label htmlFor="privacy" className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium">Autorizo el tratamiento de mis datos personales</span> de 
                  acuerdo con su política de privacidad y acepto ser contactado por NOVACOR DENTAL LAB 
                  para fines relacionados con la verificación de mi identidad profesional y el acceso 
                  a información comercial. *
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full medical-gradient text-white py-3 text-lg hover:opacity-90 transition-opacity"
                disabled={!formData.privacyAccepted}
              >
                Solicitar Acceso
              </Button>
            </form>

            {/* Additional Information */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Información Importante:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• El acceso está reservado exclusivamente para odontólogos certificados</li>
                <li>• Su solicitud será revisada en un plazo de 24-48 horas</li>
                <li>• Recibirá una notificación por correo electrónico con las instrucciones de acceso</li>
                <li>• Los precios mostrados son para profesionales y están sujetos a condiciones comerciales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingAccess;
