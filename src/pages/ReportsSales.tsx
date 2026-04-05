import React from "react";
import { BarChart3, TrendingUp, Users, Target, Download, Filter, Calendar, ArrowUpRight } from "lucide-react";

export default function ReportsSales() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Relatórios de Vendas</h1>
          <p className="text-slate-500 mt-2 text-base">Análise de desempenho comercial, funil de vendas e metas.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors flex items-center gap-2 shadow-sm">
            <Calendar className="w-4 h-4" /> Este Mês
          </button>
          <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-blue-600/20">
            <Download className="w-4 h-4" /> Exportar Relatório
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Vendas Totais</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">R$ 185.400</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            +12% vs mês anterior
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Novos Clientes</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">24</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            +4 vs mês anterior
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Taxa de Conversão</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">18.5%</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            +2.1% vs mês anterior
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Ticket Médio</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">R$ 7.725</p>
          <p className="text-sm text-slate-500 font-medium mt-2 flex items-center gap-1">
            Estável vs mês anterior
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendas por Mês Chart Placeholder */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 text-lg">Vendas por Mês</h3>
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex items-end gap-2 h-64 mt-4">
            {[45, 55, 40, 65, 75, 85].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-2 group">
                <div className="w-full bg-emerald-100 rounded-t-md relative group-hover:bg-emerald-200 transition-colors" style={{ height: `${height}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    R$ {height * 2.2}k
                  </div>
                </div>
                <div className="text-center text-xs font-medium text-slate-500">
                  {['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Funil de Vendas */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 text-lg">Funil de Vendas</h3>
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            {[
              { name: 'Leads Gerados', value: 130, color: 'bg-blue-100 text-blue-700 border-blue-200', width: '100%' },
              { name: 'Contatos Realizados', value: 85, color: 'bg-indigo-100 text-indigo-700 border-indigo-200', width: '80%' },
              { name: 'Propostas Enviadas', value: 42, color: 'bg-purple-100 text-purple-700 border-purple-200', width: '60%' },
              { name: 'Negócios Fechados', value: 24, color: 'bg-emerald-100 text-emerald-700 border-emerald-200', width: '40%' },
            ].map((step, i) => (
              <div key={step.name} className="flex flex-col items-center">
                <div 
                  className={`py-3 px-4 rounded-xl border font-bold flex justify-between items-center transition-all hover:scale-[1.02] cursor-pointer ${step.color}`}
                  style={{ width: step.width }}
                >
                  <span>{step.name}</span>
                  <span>{step.value}</span>
                </div>
                {i < 3 && <div className="h-4 border-l-2 border-dashed border-slate-200 my-1"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Top Vendedores */}
      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-900 text-lg">Desempenho da Equipe</h3>
          <button className="text-sm text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1">
            Ver todos <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Vendedor</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Negócios Fechados</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Valor Total</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Taxa de Conversão</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Carlos Silva', deals: 12, value: 'R$ 85.000', conversion: '22%' },
                { name: 'Ana Paula', deals: 8, value: 'R$ 62.400', conversion: '19%' },
                { name: 'Roberto Santos', deals: 4, value: 'R$ 38.000', conversion: '15%' },
              ].map((seller, i) => (
                <tr key={seller.name} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs">
                        {seller.name.charAt(0)}
                      </div>
                      <span className="font-bold text-slate-900">{seller.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">{seller.deals}</td>
                  <td className="px-6 py-4 font-bold text-slate-900">{seller.value}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                      {seller.conversion}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
