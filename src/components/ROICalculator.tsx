import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  TrendingDown, 
  Zap, 
  DollarSign,
  Calendar,
  Leaf,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ROICalculator = () => {
  const [consumoMensual, setConsumoMensual] = useState<string>("1000");
  const [precioActual, setPrecioActual] = useState<string>("2500");
  const [showResults, setShowResults] = useState(false);

  // Constantes del modelo
  const AHORRO_PORCENTAJE = 0.40; // 40% de ahorro
  const COSTO_INSTALACION_POR_M3 = 1200; // COP por m3 de capacidad
  const REDUCCION_CO2_POR_M3 = 2.3; // kg de CO2 por m3

  // Cálculos
  const consumo = parseFloat(consumoMensual) || 0;
  const precio = parseFloat(precioActual) || 0;
  
  const costoActualMensual = consumo * precio;
  const costoActualAnual = costoActualMensual * 12;
  
  const ahorro_mensual = costoActualMensual * AHORRO_PORCENTAJE;
  const ahorroAnual = ahorro_mensual * 12;
  const ahorro5Anos = ahorroAnual * 5;
  
  const inversionInicial = consumo * COSTO_INSTALACION_POR_M3 * 12; // Capacidad anual
  const periodoRecuperacion = inversionInicial / ahorroAnual;
  
  const co2EvitadoAnual = consumo * 12 * REDUCCION_CO2_POR_M3;
  const arbolesEquivalentes = Math.round(co2EvitadoAnual / 21); // 1 árbol absorbe ~21kg CO2/año

  // Datos para gráficos
  const datosComparacion = [
    { mes: 'Ene', gasFosil: costoActualMensual, biometano: costoActualMensual * 0.6 },
    { mes: 'Feb', gasFosil: costoActualMensual, biometano: costoActualMensual * 0.6 },
    { mes: 'Mar', gasFosil: costoActualMensual, biometano: costoActualMensual * 0.6 },
    { mes: 'Abr', gasFosil: costoActualMensual, biometano: costoActualMensual * 0.6 },
    { mes: 'May', gasFosil: costoActualMensual, biometano: costoActualMensual * 0.6 },
    { mes: 'Jun', gasFosil: costoActualMensual, biometano: costoActualMensual * 0.6 },
  ];

  const datosAhorroAcumulado = [
    { año: 'Año 1', ahorro: ahorroAnual, inversion: inversionInicial },
    { año: 'Año 2', ahorro: ahorroAnual * 2, inversion: inversionInicial },
    { año: 'Año 3', ahorro: ahorroAnual * 3, inversion: inversionInicial },
    { año: 'Año 4', ahorro: ahorroAnual * 4, inversion: inversionInicial },
    { año: 'Año 5', ahorro: ahorroAnual * 5, inversion: inversionInicial },
  ];

  const handleCalculate = () => {
    if (consumo > 0 && precio > 0) {
      setShowResults(true);
    }
  };

  useEffect(() => {
    if (showResults && consumo > 0 && precio > 0) {
      // Auto-recalcular si cambian los valores
      const timer = setTimeout(() => {
        setShowResults(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [consumo, precio, showResults]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-primary to-primary-hover text-white rounded-full shadow-lg">
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">Calculadora Interactiva</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Calcula Tu Ahorro con <span className="text-primary">Biometano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cuánto podrías ahorrar y el impacto ambiental positivo de cambiar a energía renovable
          </p>
        </div>

        {/* Calculator Input Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="p-8 bg-white shadow-strong border-none">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {/* Input 1 */}
              <div className="space-y-3">
                <Label htmlFor="consumo" className="text-lg font-semibold flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Consumo Mensual (m³)
                </Label>
                <Input
                  id="consumo"
                  type="number"
                  value={consumoMensual}
                  onChange={(e) => setConsumoMensual(e.target.value)}
                  placeholder="Ej: 1000"
                  className="text-lg h-14 border-2 focus:border-primary"
                />
                <p className="text-sm text-muted-foreground">
                  Consumo promedio de gas natural por mes
                </p>
              </div>

              {/* Input 2 */}
              <div className="space-y-3">
                <Label htmlFor="precio" className="text-lg font-semibold flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Precio Actual por m³ (COP)
                </Label>
                <Input
                  id="precio"
                  type="number"
                  value={precioActual}
                  onChange={(e) => setPrecioActual(e.target.value)}
                  placeholder="Ej: 2500"
                  className="text-lg h-14 border-2 focus:border-primary"
                />
                <p className="text-sm text-muted-foreground">
                  Tarifa actual que pagas por m³ de gas
                </p>
              </div>
            </div>

            <Button
              onClick={handleCalculate}
              className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-opacity"
              size="lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Calcular Mi Ahorro
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>

        {/* Results */}
        {showResults && consumo > 0 && precio > 0 && (
          <div className="space-y-8 animate-fade-in-up">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-strong hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingDown className="w-8 h-8" />
                  <h3 className="text-sm font-semibold uppercase">Ahorro Anual</h3>
                </div>
                <p className="text-3xl font-bold mb-1">{formatCurrency(ahorroAnual)}</p>
                <p className="text-sm opacity-90">40% menos que gas fósil</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-strong hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-8 h-8" />
                  <h3 className="text-sm font-semibold uppercase">ROI</h3>
                </div>
                <p className="text-3xl font-bold mb-1">{periodoRecuperacion.toFixed(1)} años</p>
                <p className="text-sm opacity-90">Recuperación de inversión</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-strong hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-8 h-8" />
                  <h3 className="text-sm font-semibold uppercase">5 Años</h3>
                </div>
                <p className="text-3xl font-bold mb-1">{formatCurrency(ahorro5Anos)}</p>
                <p className="text-sm opacity-90">Ahorro acumulado</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-strong hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="w-8 h-8" />
                  <h3 className="text-sm font-semibold uppercase">Impacto Verde</h3>
                </div>
                <p className="text-3xl font-bold mb-1">{arbolesEquivalentes}</p>
                <p className="text-sm opacity-90">Árboles equivalentes/año</p>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Chart 1: Comparación Mensual */}
              <Card className="p-6 bg-white shadow-elegant">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingDown className="w-6 h-6 text-primary" />
                  Comparación Mensual de Costos
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={datosComparacion}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => formatCurrency(Number(value))}
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    />
                    <Legend />
                    <Bar dataKey="gasFosil" fill="#ef4444" name="Gas Fósil" />
                    <Bar dataKey="biometano" fill="#10b981" name="Biometano" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* Chart 2: Ahorro Acumulado */}
              <Card className="p-6 bg-white shadow-elegant">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  Ahorro Acumulado vs Inversión
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={datosAhorroAcumulado}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="año" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => formatCurrency(Number(value))}
                      contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="ahorro" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      name="Ahorro Acumulado"
                      dot={{ fill: '#10b981', r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="inversion" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Inversión Inicial"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Detailed Breakdown */}
            <Card className="p-8 bg-white shadow-strong max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Desglose Detallado del Ahorro</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-subtle rounded-lg">
                  <h4 className="font-semibold text-muted-foreground mb-3">Situación Actual (Gas Fósil)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Costo Mensual:</span>
                      <span className="font-bold text-red-600">{formatCurrency(costoActualMensual)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Costo Anual:</span>
                      <span className="font-bold text-red-600">{formatCurrency(costoActualAnual)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CO₂ Anual:</span>
                      <span className="font-bold">{co2EvitadoAnual.toFixed(0)} kg</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-primary">
                  <h4 className="font-semibold text-primary mb-3">Con Biometano</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Costo Mensual:</span>
                      <span className="font-bold text-green-600">{formatCurrency(costoActualMensual * 0.6)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Costo Anual:</span>
                      <span className="font-bold text-green-600">{formatCurrency(costoActualAnual * 0.6)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CO₂ Anual:</span>
                      <span className="font-bold text-green-600">0 kg ♻️</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-3">Beneficios Totales</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Ahorro Mensual:</span>
                      <span className="font-bold text-blue-600">{formatCurrency(ahorro_mensual)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ahorro Anual:</span>
                      <span className="font-bold text-blue-600">{formatCurrency(ahorroAnual)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CO₂ Evitado:</span>
                      <span className="font-bold text-green-600">{co2EvitadoAnual.toFixed(0)} kg 🌱</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-hero text-white rounded-xl text-center">
                <p className="text-2xl font-bold mb-2">
                  💰 En 5 años ahorrarás: {formatCurrency(ahorro5Anos)}
                </p>
                <p className="text-lg opacity-90">
                  🌍 Equivalente a plantar {arbolesEquivalentes * 5} árboles
                </p>
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <Button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-primary-hover hover:opacity-90"
              >
                Quiero Comenzar Mi Transición
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ROICalculator;

