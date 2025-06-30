
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: "Prótesis Fija de Alta Estética",
      description: "Fabricación de coronas unitarias y puentes con materiales biocompatibles de última generación",
      materials: [
        "Coronas de Zirconio Monolítico y Estratificado",
        "Carillas E-MAX (Disilicato de Litio)",
        "Puentes Metal-Porcelana de Precisión",
        "Incrustaciones y Onlays Cerámicas"
      ],
      icon: "👑",
      gradient: "from-blue-500 via-blue-600 to-purple-600",
      features: ["Biocompatibilidad Total", "Resistencia Superior", "Estética Natural"]
    },
    {
      title: "Prótesis Removible Avanzada", 
      description: "Diseño y fabricación de prótesis parciales y completas con ajuste anatómico perfecto",
      materials: [
        "Prótesis Flexibles Sin Metal (Nylon)",
        "Acrílicas Termopolimerizadas",
        "Bases Reforzadas con Fibra",
        "Retenedores Estéticos Precisos"
      ],
      icon: "🔧",
      gradient: "from-green-500 via-green-600 to-teal-600",
      features: ["Comodidad Máxima", "Ajuste Anatómico", "Durabilidad Garantizada"]
    },
    {
      title: "Rehabilitación Oral Integral",
      description: "Soluciones multidisciplinarias para casos complejos con enfoque prostodóntico integral",
      materials: [
        "Planificación Digital 3D",
        "Modelos de Estudio Articulados",
        "Guías Quirúrgicas Personalizadas",
        "Seguimiento Post-instalación"
      ],
      icon: "⚙️",
      gradient: "from-purple-500 via-purple-600 to-pink-600",
      features: ["Análisis Digital", "Enfoque Multidisciplinario", "Garantía Extendida"]
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            Servicios Especializados
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Soluciones Prostodónticas
            <span className="block text-primary mt-2">de Clase Mundial</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in">
            Combinamos <span className="font-semibold text-gray-800">experiencia clínica</span>, 
            <span className="font-semibold text-primary"> tecnología avanzada</span> y 
            <span className="font-semibold text-accent"> materiales premium</span> para 
            entregar resultados que superan las expectativas del odontólogo y del paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-all duration-500 animate-scale-in border-0 bg-white relative overflow-hidden group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="text-center relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                  Especialidades Técnicas:
                </h4>
                <ul className="space-y-3 mb-6">
                  {service.materials.map((material, materialIndex) => (
                    <li key={materialIndex} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{material}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Features badges */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-10 shadow-2xl medical-gradient-light max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Necesita una Cotización Técnica Especializada?
              </h3>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Nuestro equipo técnico está listo para analizar su caso, brindar asesoría prostodóntica 
                y entregar una propuesta detallada con tiempos de entrega garantizados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button 
                  onClick={() => window.location.href = 'mailto:novacorlab@gmail.com?subject=Consulta Técnica - Cotización'}
                  className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <span className="mr-2">📧</span>
                  Solicitar Cotización
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:3108723348'}
                  className="bg-accent text-white px-8 py-4 rounded-xl hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <span className="mr-2">📱</span>
                  Consulta Inmediata
                </button>
              </div>
              
              <div className="text-sm text-gray-500">
                <span className="font-semibold">⏱️ Respuesta en menos de 2 horas</span> durante horario laboral
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
