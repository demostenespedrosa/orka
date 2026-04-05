import React from "react";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Sparkles,
  AlertCircle
} from "lucide-react";

export default function DashboardComercial() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Painel de Vendas</h1>
          <p className="text-slate-500 mt-2 text-base">Acompanhe suas metas e conversões.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold outline-none focus:ring-2 focus:ring-blue-500/20">
            <option>Este Mês</option>
            <option>Mês Passado</option>
            <option>Este Ano</option>
          </select>
        </div>
      </div>

      {/* AI Insights Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl shadow-slate-900/20 border border-slate-800">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <h2 className="font-bold text-xl tracking-tight">Insights de Vendas</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md rounded-2xl p-5 border border-white/10 flex gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 mb-1">Alta Probabilidade</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  O lead <strong className="text-emerald-400">Tech Solutions Inc</strong> interagiu com a proposta 3 vezes hoje. Ótimo momento para follow-up!
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md rounded-2xl p-5 border border-white/10 flex gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/30 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 mb-1">Atenção Necessária</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Temos <strong className="text-red-400">12 leads</strong> sem contato há mais de 5 dias. Considere uma campanha de reengajamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard 
          title="Vendas Realizadas" 
          value="R$ 124.500" 
          trend="+15%" 
          trendUp={true} 
          icon={DollarSign} 
          color="blue" 
        />
        <KpiCard 
          title="Novos Leads" 
          value="142" 
          trend="+8%" 
          trendUp={true} 
          icon={Users} 
          color="amber" 
        />
        <KpiCard 
          title="Taxa de Conversão" 
          value="24.5%" 
          trend="-2%" 
          trendUp={false} 
          icon={Target} 
          color="emerald" 
        />
        <KpiCard 
          title="Ticket Médio" 
          value="R$ 3.200" 
          trend="+5%" 
          trendUp={true} 
          icon={TrendingUp} 
          color="purple" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Funil de Vendas */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Funil de Vendas</h2>
            <button className="text-slate-400 hover:text-blue-600 transition-colors">
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <FunnelStage name="Visitantes" count={1200} percentage={100} color="bg-slate-100" textColor="text-slate-600" />
            <FunnelStage name="Leads" count={450} percentage={37.5} color="bg-blue-100" textColor="text-blue-700" />
            <FunnelStage name="Oportunidades" count={180} percentage={15} color="bg-amber-100" textColor="text-amber-700" />
            <FunnelStage name="Propostas" count={85} percentage={7} color="bg-purple-100" textColor="text-purple-700" />
            <FunnelStage name="Vendas" count={32} percentage={2.6} color="bg-emerald-100" textColor="text-emerald-700" />
          </div>
        </div>

        {/* Metas da Equipe */}
        <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Metas da Equipe</h2>
          <div className="space-y-6">
            <TeamGoal name="Ana Souza" progress={85} target="R$ 50k" current="R$ 42.5k" />
            <TeamGoal name="Carlos Mendes" progress={60} target="R$ 50k" current="R$ 30k" />
            <TeamGoal name="Roberto Alves" progress={95} target="R$ 40k" current="R$ 38k" />
            <TeamGoal name="Julia Costa" progress={40} target="R$ 30k" current="R$ 12k" />
          </div>
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
    purple: "bg-purple-50 text-purple-600",
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

function FunnelStage({ name, count, percentage, color, textColor }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-32 shrink-0 text-sm font-bold text-slate-700">{name}</div>
      <div className="flex-1 h-10 bg-slate-50 rounded-xl overflow-hidden flex items-center relative">
        <div className={`h-full ${color} rounded-xl transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }}></div>
        <div className={`absolute left-4 font-bold text-sm ${textColor}`}>{count}</div>
      </div>
      <div className="w-16 text-right text-sm font-bold text-slate-400">{percentage}%</div>
    </div>
  );
}

function TeamGoal({ name, progress, target, current }: any) {
  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <div>
          <p className="font-bold text-slate-900 text-sm">{name}</p>
          <p className="text-xs text-slate-500">{current} / {target}</p>
        </div>
        <span className="text-sm font-bold text-blue-600">{progress}%</span>
      </div>
      <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
