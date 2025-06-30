
-- Crear tabla para almacenar la lista de precios
CREATE TABLE public.pricing (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  service_name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Crear tabla para solicitudes de acceso a precios
CREATE TABLE public.pricing_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  privacy_accepted BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insertar precios iniciales basados en la imagen de referencia
INSERT INTO public.pricing (category, service_name, price, description) VALUES
-- Prótesis Fijas
('protesis_fija', 'Corona Metal Porcelana', 180000.00, 'Corona individual con base metálica y recubrimiento cerámico'),
('protesis_fija', 'Corona Zirconio Monolítico', 220000.00, 'Corona de zirconio completo con alta resistencia'),
('protesis_fija', 'Corona Zirconio Estratificado', 280000.00, 'Corona de zirconio con capas cerámicas para máxima estética'),
('protesis_fija', 'Corona E-MAX', 320000.00, 'Corona de disilicato de litio con translucidez natural'),
('protesis_fija', 'Carilla E-MAX', 280000.00, 'Carilla ultrafina de disilicato de litio'),
('protesis_fija', 'Incrustación Cerámica', 250000.00, 'Inlay/Onlay cerámico de precisión'),
('protesis_fija', 'Poste Colado', 120000.00, 'Poste y muñón en aleación noble'),

-- Prótesis Removibles
('protesis_removible', 'Prótesis Total Superior', 380000.00, 'Prótesis completa maxilar con dientes premium'),
('protesis_removible', 'Prótesis Total Inferior', 380000.00, 'Prótesis completa mandibular con dientes premium'),
('protesis_removible', 'Prótesis Parcial Acrílica', 280000.00, 'Prótesis parcial con base acrílica reforzada'),
('protesis_removible', 'Prótesis Flexible Nylon', 420000.00, 'Prótesis sin metal con material flexible biocompatible'),
('protesis_removible', 'Esquelético Cromo Cobalto', 480000.00, 'Estructura metálica con retenedores de precisión'),
('protesis_removible', 'Reparación Prótesis', 80000.00, 'Reparación de fracturas y ajustes'),

-- Servicios Adicionales
('servicios', 'Toma de Color', 25000.00, 'Registro de color personalizado con guía Vita'),
('servicios', 'Articulación en ASA', 35000.00, 'Montaje en articulador semiajustable'),
('servicios', 'Encerado Diagnóstico', 45000.00, 'Modelo de estudio en cera para planificación'),
('servicios', 'Guía Quirúrgica', 120000.00, 'Guía para implantes con precisión digital'),
('servicios', 'Rebasado Blando', 90000.00, 'Reacondicionador de tejidos blandos');

-- Habilitar RLS en las tablas
ALTER TABLE public.pricing ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pricing_requests ENABLE ROW LEVEL SECURITY;

-- Políticas para pricing (solo lectura pública)
CREATE POLICY "Anyone can view active pricing" 
  ON public.pricing 
  FOR SELECT 
  USING (is_active = true);

-- Políticas para pricing_requests (inserción pública, lectura restringida)
CREATE POLICY "Anyone can create pricing requests" 
  ON public.pricing_requests 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own requests" 
  ON public.pricing_requests 
  FOR SELECT 
  USING (true);
