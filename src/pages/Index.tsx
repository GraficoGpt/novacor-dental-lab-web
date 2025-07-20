
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, Crown, Wrench, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NOVACOR
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Prótesis Dentales de Alta Calidad
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
              Especializados en coronas, puentes, prótesis removibles y trabajos de implantología.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="group">
                <Phone className="mr-2 h-5 w-5" />
                Contactar
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="flex items-center text-muted-foreground">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@novacor.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
            Nuestros Servicios
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-card border border-border">
              <Crown className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Prótesis Fijas</h3>
              <p className="text-muted-foreground">
                Coronas, puentes y carillas de última generación.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-card border border-border">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Prótesis Removibles</h3>
              <p className="text-muted-foreground">
                Dentaduras completas y parciales de alta calidad.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-card border border-border">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Calidad Premium</h3>
              <p className="text-muted-foreground">
                Materiales de primera calidad y acabados perfectos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Contáctanos
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos aquí para ayudarte con tus necesidades protésicas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center text-lg">
              <Phone className="mr-3 h-6 w-6 text-primary" />
              <span>+57 123 456 7890</span>
            </div>
            
            <div className="flex items-center text-lg">
              <Mail className="mr-3 h-6 w-6 text-primary" />
              <span>info@novacor.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
