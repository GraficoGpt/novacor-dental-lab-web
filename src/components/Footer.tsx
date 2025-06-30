
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">NOVACOR DENTAL LAB</h3>
            <p className="text-gray-300 mb-4">
              Su aliado estratégico en rehabilitación oral. Especialistas en prótesis 
              fijas y removibles de alta calidad en Bogotá, Colombia.
            </p>
            <p className="text-sm text-gray-400">
              Dirigido por Juan Coronado Vaca, Técnico Profesional
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 Carrera 91 # 127c - 06</p>
              <p>Suba, Bogotá, Colombia</p>
              <p>📱 <a href="tel:3108723348" className="hover:text-primary transition-colors">310-872-3348</a></p>
              <p>📧 <a href="mailto:novacorlab@gmail.com" className="hover:text-primary transition-colors">novacorlab@gmail.com</a></p>
              <p>🌐 www.novacorlab.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Coronas de Zirconio</li>
              <li>• Carillas E-MAX</li>
              <li>• Prótesis Metal-Porcelana</li>
              <li>• Prótesis Removibles</li>
              <li>• Rehabilitación Oral</li>
              <li>• Asesoría Técnica</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NOVACOR DENTAL LAB. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
