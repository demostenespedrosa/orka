import { BarChart3, Download, Calendar as CalendarIcon, TrendingUp, Clock, CheckCircle2, Filter } from "lucide-react";

export default function Reports() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Relatórios Operacionais</h1>
          <p className="text-slate-500 mt-2 text-base">Analise a produtividade e o desempenho da sua equipe de campo.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors flex items-center gap-2 shadow-sm">
            <CalendarIcon className="w-4 h-4" /> Últimos 30 dias
          </button>
          <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-blue-600/20">
            <Download className="w-4 h-4" /> Exportar Dados
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">OS Concluídas</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">342</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +12% vs mês anterior
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Tempo Médio</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">1h 45m</p>
          <p className="text-sm text-red-600 font-medium mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +5% vs mês anterior
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Sucesso 1ª Visita</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">88%</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +8% vs mês anterior
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Produtividade</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">94%</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +15% vs mês anterior
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mock Chart 1 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 text-lg">OS Concluídas por Técnico</h3>
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6">
            {[
              { name: "Carlos Silva", value: 85, color: "bg-blue-500" },
              { name: "Ana Souza", value: 72, color: "bg-indigo-500" },
              { name: "Roberto Dias", value: 64, color: "bg-purple-500" },
              { name: "Juliana Costa", value: 58, color: "bg-emerald-500" },
              { name: "Marcos Paulo", value: 45, color: "bg-amber-500" },
            ].map(tech => (
              <div key={tech.name}>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-slate-700">{tech.name}</span>
                  <span className="text-slate-900">{tech.value} OS</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className={`${tech.color} h-2.5 rounded-full`} style={{ width: `${tech.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mock Chart 2 */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 text-lg">Tempo Médio por Tipo de Serviço</h3>
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6">
            {[
              { type: "Instalação", time: "2h 30m", width: "100%", color: "bg-blue-500" },
              { type: "Manutenção Preventiva", time: "1h 45m", width: "70%", color: "bg-indigo-500" },
              { type: "Manutenção Corretiva", time: "1h 15m", width: "50%", color: "bg-purple-500" },
              { type: "Visita Técnica", time: "0h 45m", width: "30%", color: "bg-emerald-500" },
            ].map(service => (
              <div key={service.type}>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-slate-700">{service.type}</span>
                  <span className="text-slate-900">{service.time}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className={`${service.color} h-2.5 rounded-full`} style={{ width: service.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
