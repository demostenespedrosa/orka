import React from "react";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  Sparkles
} from "lucide-react";

export default function DashboardFinanceiro() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Painel Financeiro</h1>
          <p className="text-slate-500 mt-2 text-base">Visão geral do fluxo de caixa e inadimplência.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors flex items-center gap-2 shadow-sm">
            <Download className="w-4 h-4" /> Exportar
          </button>
          <select className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold outline-none focus:ring-2 focus:ring-emerald-500/20">
            <option>Este Mês</option>
            <option>Mês Passado</option>
            <option>Este Ano</option>
          </select>
        </div>
      </div>

      {/* AI Insights Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl shadow-slate-900/20 border border-slate-800">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
              <Sparkles className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="font-bold text-xl tracking-tight">Insights Financeiros</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md rounded-2xl p-5 border border-white/10 flex gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 mb-1">Previsão Positiva</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  O fluxo de caixa projetado para a próxima semana indica um superávit de <strong className="text-emerald-400">R$ 45.000</strong>.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md rounded-2xl p-5 border border-white/10 flex gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 mb-1">Risco de Inadimplência</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  3 clientes do setor de varejo estão com faturas atrasadas há mais de 15 dias. <strong className="text-amber-400">R$ 12.500 em risco</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard 
          title="Saldo Atual" 
          value="R$ 342.500" 
          trend="+12%" 
          trendUp={true} 
          icon={DollarSign} 
          color="emerald" 
        />
        <KpiCard 
          title="Receitas (Mês)" 
          value="R$ 128.400" 
          trend="+5%" 
          trendUp={true} 
          icon={TrendingUp} 
          color="blue" 
        />
        <KpiCard 
          title="Despesas (Mês)" 
          value="R$ 84.200" 
          trend="-2%" 
          trendUp={true} 
          icon={TrendingDown} 
          color="amber" 
        />
        <KpiCard 
          title="Inadimplência" 
          value="4.2%" 
          trend="+0.5%" 
          trendUp={false} 
          icon={AlertCircle} 
          color="red" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fluxo de Caixa Previsto */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Fluxo de Caixa (Próximos 7 dias)</h2>
            <button className="text-slate-400 hover:text-emerald-600 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <CashFlowItem day="Seg, 06/04" inValue="R$ 12.500" outValue="R$ 4.200" balance="R$ 8.300" positive={true} />
            <CashFlowItem day="Ter, 07/04" inValue="R$ 8.400" outValue="R$ 15.000" balance="-R$ 6.600" positive={false} />
            <CashFlowItem day="Qua, 08/04" inValue="R$ 22.100" outValue="R$ 3.500" balance="R$ 18.600" positive={true} />
            <CashFlowItem day="Qui, 09/04" inValue="R$ 5.000" outValue="R$ 5.000" balance="R$ 0" positive={true} />
            <CashFlowItem day="Sex, 10/04" inValue="R$ 45.000" outValue="R$ 12.000" balance="R$ 33.000" positive={true} />
          </div>
        </div>

        {/* Contas a Vencer */}
        <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Contas a Vencer (Hoje)</h2>
          <div className="space-y-4">
            <BillItem name="Aluguel Sede" value="R$ 15.000" type="pagar" />
            <BillItem name="Internet Link Dedicado" value="R$ 2.500" type="pagar" />
            <BillItem name="Condomínio Flores" value="R$ 8.400" type="receber" />
            <BillItem name="Tech Solutions" value="R$ 12.000" type="receber" />
          </div>
          <button className="w-full mt-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold rounded-xl transition-colors">
            Ver todas as contas
          </button>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ title, value, trend, trendUp, icon: Icon, color }: any) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    emerald: "bg-emerald-50 text-emerald-600",
    red: "bg-red-50 text-red-600",
  }[color as string] || "bg-slate-50 text-slate-600";

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colorClasses}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-lg ${trendUp ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'}`}>
          {trendUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          {trend}
        </div>
      </div>
      <div>
        <p className="text-slate-500 font-medium mb-1">{title}</p>
        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">{value}</h3>
      </div>
    </div>
  );
}

function CashFlowItem({ day, inValue, outValue, balance, positive }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
      <div className="w-24 font-bold text-slate-900 text-sm">{day}</div>
      <div className="flex-1 grid grid-cols-3 gap-4 text-sm">
        <div className="text-emerald-600 font-medium flex items-center gap-1">
          <ArrowUpRight className="w-4 h-4" /> {inValue}
        </div>
        <div className="text-red-600 font-medium flex items-center gap-1">
          <ArrowDownRight className="w-4 h-4" /> {outValue}
        </div>
        <div className={`font-bold text-right ${positive ? 'text-emerald-700' : 'text-red-700'}`}>
          {balance}
        </div>
      </div>
    </div>
  );
}

function BillItem({ name, value, type }: any) {
  const isPagar = type === 'pagar';
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${isPagar ? 'bg-red-500' : 'bg-emerald-500'}`}></div>
        <span className="font-medium text-slate-700 text-sm">{name}</span>
      </div>
      <span className={`font-bold text-sm ${isPagar ? 'text-red-600' : 'text-emerald-600'}`}>
        {isPagar ? '-' : '+'}{value}
      </span>
    </div>
  );
}
