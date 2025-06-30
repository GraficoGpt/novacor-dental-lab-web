
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Datos simulados para el dashboard
const mockRequests = [
  {
    id: 1,
    name: "Dr. María González",
    email: "maria.gonzalez@clinica.com",
    phone: "310-123-4567",
    date: "2024-01-15",
    status: "pending"
  },
  {
    id: 2,
    name: "Dr. Carlos Rodríguez", 
    email: "carlos.rodriguez@dental.com",
    phone: "320-987-6543",
    date: "2024-01-14",
    status: "approved"
  },
  {
    id: 3,
    name: "Dr. Ana López",
    email: "ana.lopez@odontologia.com", 
    phone: "315-456-7890",
    date: "2024-01-13",
    status: "rejected"
  }
];

const AdminDashboard = () => {
  const { toast } = useToast();
  const [requests, setRequests] = useState(mockRequests);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Password simple para demostración - en producción usar autenticación real
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

  const handleApprove = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    ));
    toast({
      title: "Solicitud Aprobada",
      description: "Se ha enviado el acceso al odontólogo por correo electrónico.",
    });
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'rejected' } : req
    ));
    toast({
      title: "Solicitud Rechazada",
      description: "Se ha notificado al solicitante.",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-300">Pendiente</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-green-50 text-green-800 border-green-300">Aprobado</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-red-50 text-red-800 border-red-300">Rechazado</Badge>;
      default:
        return <Badge>Desconocido</Badge>;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Panel de Administración</CardTitle>
              <CardDescription>NOVACOR DENTAL LAB</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Contraseña de Administrador
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingrese la contraseña"
                    required
                  />
                </div>
                <Button type="submit" className="w-full medical-gradient text-white">
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">NOVACOR DENTAL LAB - Administración</h1>
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
            >
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Solicitudes Pendientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{pendingCount}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Odontólogos Aprobados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{approvedCount}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total de Solicitudes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{requests.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Requests Table */}
        <Card>
          <CardHeader>
            <CardTitle>Gestión de Solicitudes de Acceso</CardTitle>
            <CardDescription>
              Revise y apruebe las solicitudes de acceso a la lista de precios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {requests.map((request) => (
                <div key={request.id} className="border rounded-lg p-4 bg-white">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{request.name}</h3>
                      <p className="text-gray-600">{request.email}</p>
                      <p className="text-gray-600">{request.phone}</p>
                      <p className="text-sm text-gray-500">Solicitado: {request.date}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div>{getStatusBadge(request.status)}</div>
                      
                      {request.status === 'pending' && (
                        <div className="flex space-x-2">
                          <Button 
                            size="sm"
                            onClick={() => handleApprove(request.id)}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            Aprobar
                          </Button>
                          <Button 
                            size="sm"
                            variant="outline"
                            onClick={() => handleReject(request.id)}
                            className="border-red-300 text-red-600 hover:bg-red-50"
                          >
                            Rechazar
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Instrucciones de Uso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• <strong>Aprobar:</strong> El odontólogo recibirá un correo con las credenciales de acceso</p>
              <p>• <strong>Rechazar:</strong> Se notificará al solicitante que su solicitud no fue aprobada</p>
              <p>• <strong>Pendiente:</strong> Solicitudes que requieren revisión y acción</p>
              <p>• Las notificaciones por correo se envían automáticamente al cambiar el estado</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
