
const GallerySection = () => {
  // Usando imágenes de placeholder con temática médica/dental
  const galleryImages = [
    {
      title: "Coronas de Zirconio",
      description: "Restauraciones estéticas de alta resistencia",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=300&fit=crop"
    },
    {
      title: "Carillas E-MAX",
      description: "Disilicato de litio para máxima estética",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop"
    },
    {
      title: "Prótesis Removible",
      description: "Soluciones cómodas y naturales",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      title: "Rehabilitación Completa",
      description: "Casos complejos resueltos con precisión",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop"
    },
    {
      title: "Metal-Porcelana",
      description: "Resistencia y estética combinadas",
      image: "https://images.unsplash.com/photo-1594824694996-f883cd37e42a?w=400&h=300&fit=crop"
    },
    {
      title: "Trabajo de Precisión",
      description: "Atención al detalle en cada proyecto",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Resultados que Hablan por Sí Mismos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Cada trabajo refleja nuestro compromiso con la excelencia. 
            Vea algunos ejemplos de nuestros casos más exitosos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-medical-blue/10 to-medical-green/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="text-2xl">🦷</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quiere ver más casos de éxito?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctenos para conocer más detalles sobre nuestros trabajos y cómo podemos 
              ayudarle con sus casos más desafiantes.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Solicitar Más Información
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
