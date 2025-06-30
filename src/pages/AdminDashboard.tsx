
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { LogOut, Users, Clock, CheckCircle, X, Check, Phone, Mail, Calendar, Shield, Eye } from 'lucide-react';

interface PricingRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  status: 'pending' | 'approved' | 'rejected';
  privacy_accepted: boolean;
}

const AdminDashboard = () => {
  const { toast } = useToast();
  const [requests, setRequests] = useState<PricingRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      fetchRequests();
    }
  }, [isAuthenticated]);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('pricing_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (error) {
      console.error('Error fetching requests:', error);
      toast({
        title: "Error",
        description: "No se pudieron cargar las solicitudes.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'novacor2024') {
      setIsAuthenticated(true);
      toast({
        title: "Acceso concedido",
        description: "Bienvenido al panel de administración.",
      });
    } else {
      toast({
        title: "Error de acceso",
        description: "Contraseña incorrecta.",
        variant: "destructive"
      });
    }
  };

  const updateRequestStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('pricing_requests')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      setRequests(requests.map(req => 
        req.id === id ? { ...req, status } : req
      ));

      const actionText = status === 'approved' ? 'aprobada' : 'rechazada';
      toast({
        title: `Solicitud ${actionText}`,
        description: `La solicitud ha sido ${actionText} correctamente.`,
      });

      // In a real app, you would send an email notification here
    } catch (error) {
      console.error('Error updating request:', error);
      toast({
        title: "Error",
        description: "No se pudo actualizar la solicitud.",
        variant: "destructive"
      });
    }
  };

  const generateAccessLink = (email: string) => {
    const token = btoa(email + 'novacor2024');
    const baseUrl = window.location.origin;
    return `${baseUrl}/precios?email=${encodeURIComponent(email)}&token=${token}`;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-300">
            <Clock className="w-3 h-3 mr-1" />
            Pendiente
          </Badge>
        );
      case 'approved':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-800 border-green-300">
            <CheckCircle className="w-3 h-3 mr-1" />
            Aprobado
          </Badge>
        );
      case 'rejected':
        return (
          <Badge variant="outline" className="bg-red-50 text-red-800 border-red-300">
            <X className="w-3 h-3 mr-1" />
            Rechazado
          </Badge>
        );
      default:
        return <Badge>Desconocido</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 novacor-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Panel de Administración</CardTitle>
              <CardDescription className="text-lg">NOVACOR DENTAL LAB</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Contraseña de Administrador
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese la contraseña"
                    required
                    className="h-12 text-lg"
                  />
                </div>
                <Button type="submit" className="w-full h-12 novacor-gradient text-white font-semibold">
                  <Shield className="w-5 h-5 mr-2" />
                  Iniciar Sesión
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const pendingCount = requests.filter(req => req.status === 'pending').length;
  const approvedCount = requests.filter(req => req.status === 'approved').length;
  const rejectedCount = requests.filter(req => req.status === 'rejected').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 novacor-gradient rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">NOVACOR DENTAL LAB</h1>
                <p className="text-sm text-gray-600">Panel de Administración</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
              className="hover:bg-red-50 hover:text-red-600 hover:border-red-200"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                Pendientes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{pendingCount}</div>
              <p className="text-sm text-gray-600">Requieren revisión</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Aprobados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{approvedCount}</div>
              <p className="text-sm text-gray-600">Con acceso activo</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <X className="w-5 h-5 mr-2 text-red-600" />
                Rechazados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">{rejectedCount}</div>
              <p className="text-sm text-gray-600">Sin acceso</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{requests.length}</div>
              <p className="text-sm text-gray-600">Solicitudes recibidas</p>
            </CardContent>
          </Card>
        </div>

        {/* Requests Table */}
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Users className="w-6 h-6 mr-3 text-primary" />
              Gestión de Solicitudes de Acceso
            </CardTitle>
            <CardDescription>
              Revise y gestione las solicitudes de acceso a la lista de precios
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center p-8">
                <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mr-3"></div>
                <span className="text-gray-600">Cargando solicitudes...</span>
              </div>
            ) : requests.length === 0 ? (
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No hay solicitudes registradas</p>
              </div>
            ) : (
              <div className="space-y-4">
                {requests.map((request) => (
                  <div key={request.id} className="border rounded-xl p-6 bg-gradient-to-r from-white to-gray-50 hover:shadow-md transition-all duration-200">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                            <Users className="w-5 h-5 mr-2 text-primary" />
                            {request.name}
                          </h3>
                          {getStatusBadge(request.status)}
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-3">
                          <div className="flex items-center text-gray-600">
                            <Mail className="w-4 h-4 mr-2 text-primary" />
                            <span className="text-sm">{request.email}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Phone className="w-4 h-4 mr-2 text-primary" />
                            <span className="text-sm">{request.phone}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          Solicitado: {formatDate(request.created_at)}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        {request.status === 'approved' && (
                          <Button 
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              const link = generateAccessLink(request.email);
                              navigator.clipboard.writeText(link);
                              toast({
                                title: "Enlace copiado",
                                description: "El enlace de acceso ha sido copiado al portapapeles.",
                              });
                            }}
                            className="border-blue-300 text-blue-600 hover:bg-blue-50"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Copiar Enlace
                          </Button>
                        )}
                        
                        {request.status === 'pending' && (
                          <div className="flex space-x-2">
                            <Button 
                              size="sm"
                              onClick={() => updateRequestStatus(request.id, 'approved')}
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <Check className="w-4 h-4 mr-1" />
                              Aprobar
                            </Button>
                            <Button 
                              size="sm"
                              variant="outline"
                              onClick={() => updateRequestStatus(request.id, 'rejected')}
                              className="border-red-300 text-red-600 hover:bg-red-50"
                            >
                              <X className="w-4 h-4 mr-1" />
                              Rechazar
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-8 shadow-lg border-0 bg-primary/5 backdrop-blur-sm border-primary/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              Instrucciones de Uso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm text-gray-700">
                <h4 className="font-semibold text-gray-900">Gestión de Solicitudes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Aprobar:</strong> Otorga acceso a la lista de precios</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Rechazar:</strong> Deniega el acceso a los precios</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Pendiente:</strong> Requiere revisión y decisión</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3 text-sm text-gray-700">
                <h4 className="font-semibold text-gray-900">Acceso a Precios:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Eye className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Copiar Enlace:</strong> Genera enlace de acceso para usuario aprobado</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-4 h-4 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Comparte el enlace directamente con el odontólogo</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>El acceso es seguro y personalizado por email</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
