import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, Mail, Crown, Wrench, Award, MapPin, Clock, CheckCircle, Users, Zap, Shield, Star, Microscope, Timer } from 'lucide-react';
import Logo from '@/components/Logo';
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Logo className="h-8 w-auto sm:h-10" />
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" aria-label="Contactar por teléfono">
                <Phone className="mr-2 h-4 w-4" />
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Prótesis Dentales de 
              <span className="text-primary block relative">
                Alta Calidad
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/30 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-3xl mx-auto leading-relaxed px-4" style={{
            animationDelay: '0.2s'
          }}>
              Especializados en coronas, puentes, prótesis removibles y trabajos de implantología 
              con materiales premium y tecnología de vanguardia. 
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <Button size="lg" className="group bg-primary hover:bg-primary/90 shadow-lg" aria-label="Solicitar cotización por teléfono">
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="flex items-center text-muted-foreground bg-card/50 px-4 py-2 rounded-lg border">
                <Mail className="mr-2 h-5 w-5" />
                <span>novacorlab@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-primary/5 border-primary/20">
              <Zap className="w-3 h-3 mr-1" />
              Servicios Especializados
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios protésicos con los más altos estándares de calidad, 
              utilizando materiales certificados y tecnología de última generación.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/80 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Prótesis Fijas</CardTitle>
                <CardDescription>
                  Coronas, puentes y carillas de última generación con materiales premium
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs justify-center">Metal-Porcelana</Badge>
                  <Badge variant="secondary" className="text-xs justify-center">Zirconio</Badge>
                  <Badge variant="secondary" className="text-xs justify-center">E-MAX</Badge>
                  <Badge variant="secondary" className="text-xs justify-center">Carillas</Badge>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Coronas de zirconio y E-MAX con translucidez natural</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Puentes de alta estética</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Carillas ultrafinas de 0.3mm</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Incrustaciones cerámicas de precisión</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/80 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Prótesis Removibles</CardTitle>
                <CardDescription>
                  Dentaduras completas y parciales con ajuste perfecto y estética natural
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs justify-center">Totales</Badge>
                  <Badge variant="secondary" className="text-xs justify-center">Parciales</Badge>
                  <Badge variant="secondary" className="text-xs justify-center">Flexibles</Badge>
                  <Badge variant="secondary" className="text-xs justify-center">Esquelético</Badge>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Prótesis totales con dientes premium y base reforzada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Parciales flexibles biocompatibles sin metal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Esquelético con retenedores de precisión</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Reparaciones y ajustes especializados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/80 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl">Servicios Premium</CardTitle>
                <CardDescription>
                  Servicios adicionales y tecnología avanzada para casos complejos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs justify-center">CAD/CAM</Badge>
                  <Badge variant="secondary" className="text-xs justify-center">Articulación</Badge>
                  <Badge variant="secondary" className="text-xs justify-center">Diagnóstico</Badge>
                  <Badge variant="secondary" className="text-xs justify-center">Implantes</Badge>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Laboratorio 100% digital</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Provisionales en Resina Dental (Impresión 3D)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Encerado diagnóstico para planificación</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span>Guías quirúrgicas para implantes digitales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-primary/5 border-primary/20">
                <Users className="w-3 h-3 mr-1" />
                Nuestra Experiencia
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir NOVACOR?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Con más de 10 años de experiencia en el campo protésico, nos hemos consolidado como referente 
                en calidad y precisión. Nuestro compromiso es brindar soluciones personalizadas 
                que superen las expectativas de nuestros clientes, combinando artesanía tradicional 
                con tecnología de vanguardia.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
              <Card className="text-center border-0 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <p className="text-muted-foreground font-medium">Años de Experiencia</p>
                  <p className="text-sm text-muted-foreground mt-1">En el sector protésico</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">2500+</div>
                  <p className="text-muted-foreground font-medium">Casos Exitosos</p>
                  <p className="text-sm text-muted-foreground mt-1">Trabajos realizados</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground font-medium">Satisfacción</p>
                  <p className="text-sm text-muted-foreground mt-1">De nuestros clientes</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Microscope className="mr-3 h-6 w-6 text-primary" />
                    Tecnología Avanzada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Sistema CAD/CAM</span>
                        <p className="text-muted-foreground">Diseño y fabricación asistida por computador</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Escáner intraoral 3D</span>
                        <p className="text-muted-foreground">Precisión micrométrica en cada trabajo</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Impresión 3D</span>
                        <p className="text-muted-foreground">Impresión 3D de modelos en resina</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-primary" />
                    Garantía de Calidad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Certificación ISO 13485</span>
                        <p className="text-muted-foreground">Sistemas de gestión de calidad médica</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Materiales premium</span>
                        <p className="text-muted-foreground">Proveedores certificados internacionalmente</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Control de calidad</span>
                        <p className="text-muted-foreground">Inspección en cada etapa del proceso</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 bg-primary/5 border-primary/20">
                <Phone className="w-3 h-3 mr-1" />
                Contacto Directo
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Estamos aquí para ayudarte con tus necesidades protésicas. 
                Respuesta garantizada.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/80 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Teléfono</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold mb-2 text-primary">+57 310 872 3348</p>
                  <p className="text-muted-foreground text-sm mb-3">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground text-sm">Sábados: 8:00 AM - 2:00 PM</p>
                  <Badge variant="secondary" className="mt-3">
                    <Clock className="w-3 h-3 mr-1" />
                    Respuesta inmediata
                  </Badge>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/80 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold mb-2 text-primary">info@novacor.com</p>
                  <p className="text-muted-foreground text-sm mb-3">Respuesta garantizada</p>
                  <p className="text-muted-foreground text-sm">Envía fotos y especificaciones</p>
                  <Badge variant="secondary" className="mt-3">
                    <Timer className="w-3 h-3 mr-1" />
                    Cotización rápida
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/80 hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Ubicación</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold mb-2">Bogotá, Colombia</p>
                  <p className="text-muted-foreground text-sm mb-3">Zona Norte - Fácil acceso</p>
                  <p className="text-muted-foreground text-sm">Recogida y entrega disponible</p>
                  <Badge variant="secondary" className="mt-3">
                    <Zap className="w-3 h-3 mr-1" />
                    Servicio express
                  </Badge>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center mb-6">
              <Logo className="h-12 w-auto sm:h-14" />
            </div>
            
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +57 310 872 3348
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                novacorlab@gmail.com
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              
              <Badge variant="outline">Garantía Total</Badge>
            </div>
            
            <div className="pt-6 border-t border-border/50">
              <p className="text-muted-foreground">
                © 2024 NOVACOR - Prótesis dentales de alta calidad. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;