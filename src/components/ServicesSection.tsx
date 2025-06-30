
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Prótesis Fija",
      description: "Fabricación de coronas y carillas con materiales de alta estética y resistencia",
      materials: ["Zirconio", "E-MAX (Disilicato de litio)", "PMMA", "Metal-Porcelana"],
      icon: "🦷",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Prótesis Removible", 
      description: "Prótesis flexibles y acrílicas que garantizan comodidad y naturalidad",
      materials: ["Prótesis Flexibles", "Acrílicas de Alta Calidad", "Base Reforzada", "Ajuste Preciso"],
      icon: "🔧",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Rehabilitación Completa",
      description: "Soluciones integrales para casos complejos de rehabilitación oral",
      materials: ["Planificación Digital", "Modelos de Estudio", "Pruebas Estéticas", "Seguimiento Post-entrega"],
      icon: "⚙️",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Soluciones Integrales de Mecánica Dental
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Ofrecemos servicios especializados con los más altos estándares de calidad, 
            utilizando tecnología avanzada y materiales premium para garantizar resultados excepcionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-white"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-gray-900 mb-3">Especialidades:</h4>
                <ul className="space-y-2">
                  {service.materials.map((material, materialIndex) => (
                    <li key={materialIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {material}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg medical-gradient-light">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesita una cotización personalizada?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctenos para discutir los detalles de su caso y recibir asesoría especializada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = 'mailto:novacorlab@gmail.com'}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Enviar Email
              </button>
              <button 
                onClick={() => window.location.href = 'tel:3108723348'}
                className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
              >
                Llamar Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
