import React from "react";
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Download, Filter, Calendar } from "lucide-react";

export default function ReportsFinance() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Relatórios Financeiros</h1>
          <p className="text-slate-500 mt-2 text-base">DRE, Fluxo de Caixa e análises financeiras detalhadas.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors flex items-center gap-2 shadow-sm">
            <Calendar className="w-4 h-4" /> Este Mês
          </button>
          <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-blue-600/20">
            <Download className="w-4 h-4" /> Exportar PDF
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
            <h3 className="font-bold text-slate-700">Receita Total</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">R$ 245.850</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            +15% vs mês anterior
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Despesas</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">R$ 112.400</p>
          <p className="text-sm text-red-600 font-medium mt-2 flex items-center gap-1">
            +5% vs mês anterior
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Lucro Líquido</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">R$ 133.450</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            +22% vs mês anterior
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Margem</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">54.2%</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            +2.5% vs mês anterior
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fluxo de Caixa Chart Placeholder */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 text-lg">Fluxo de Caixa (Últimos 6 meses)</h3>
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex items-end gap-2 h-64 mt-4">
            {[40, 60, 45, 70, 65, 85].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-2 group">
                <div className="w-full bg-blue-100 rounded-t-md relative group-hover:bg-blue-200 transition-colors" style={{ height: `${height}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    R$ {height * 2.5}k
                  </div>
                </div>
                <div className="text-center text-xs font-medium text-slate-500">
                  {['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Despesas por Categoria */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-900 text-lg">Despesas por Categoria</h3>
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6">
            {[
              { name: 'Folha de Pagamento', value: 45, color: 'bg-blue-500' },
              { name: 'Fornecedores', value: 30, color: 'bg-indigo-500' },
              { name: 'Impostos', value: 15, color: 'bg-purple-500' },
              { name: 'Operacional', value: 10, color: 'bg-slate-400' },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-slate-700">{item.name}</span>
                  <span className="text-slate-900">{item.value}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div className={`h-2.5 rounded-full ${item.color}`} style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Resumo DRE */}
      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-slate-900 text-lg">Resumo DRE (Demonstração do Resultado do Exercício)</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-slate-100">
              <span className="font-medium text-slate-700">Receita Bruta</span>
              <span className="font-bold text-slate-900">R$ 285.000,00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100 pl-4">
              <span className="text-slate-500">(-) Deduções e Impostos</span>
              <span className="text-red-600 font-medium">- R$ 39.150,00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100 bg-slate-50/50 px-4 rounded-lg">
              <span className="font-bold text-slate-900">Receita Líquida</span>
              <span className="font-bold text-slate-900">R$ 245.850,00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100 pl-4">
              <span className="text-slate-500">(-) Custos Operacionais</span>
              <span className="text-red-600 font-medium">- R$ 85.000,00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100 bg-slate-50/50 px-4 rounded-lg">
              <span className="font-bold text-slate-900">Lucro Bruto</span>
              <span className="font-bold text-slate-900">R$ 160.850,00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-slate-100 pl-4">
              <span className="text-slate-500">(-) Despesas Administrativas</span>
              <span className="text-red-600 font-medium">- R$ 27.400,00</span>
            </div>
            <div className="flex justify-between items-center py-4 bg-emerald-50 px-4 rounded-xl mt-4">
              <span className="font-extrabold text-emerald-800 text-lg">Lucro Líquido do Exercício</span>
              <span className="font-extrabold text-emerald-700 text-xl">R$ 133.450,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
