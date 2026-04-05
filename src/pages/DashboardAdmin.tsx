import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Activity,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";

const kpis = [
  {
    title: "Receita Total (Mês)",
    value: "R$ 124.500",
    change: "+15.3%",
    trend: "up",
    icon: DollarSign,
    color: "emerald"
  },
  {
    title: "Novos Contratos",
    value: "42",
    change: "+8.2%",
    trend: "up",
    icon: Briefcase,
    color: "amber"
  },
  {
    title: "OS Concluídas",
    value: "856",
    change: "+12.5%",
    trend: "up",
    icon: CheckCircle2,
    color: "blue"
  },
  {
    title: "Satisfação (NPS)",
    value: "9.2",
    change: "-0.4%",
    trend: "down",
    icon: Users,
    color: "indigo"
  }
];

const recentActivity = [
  { id: 1, type: "finance", title: "Fatura #4092 paga", desc: "Cliente: Tech Solutions Inc", time: "Há 10 min", amount: "+ R$ 4.500" },
  { id: 2, type: "sales", title: "Novo contrato fechado", desc: "Cliente: Supermercado Central", time: "Há 45 min", amount: "R$ 12.000/ano" },
  { id: 3, type: "ops", title: "OS-1042 Concluída", desc: "Técnico: Carlos Silva", time: "Há 1 hora", amount: null },
  { id: 4, type: "alert", title: "Alerta de SLA", desc: "OS-1045 próxima do vencimento", time: "Há 2 horas", amount: null },
];

export default function DashboardAdmin() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Visão Geral do Sistema</h1>
          <p className="text-slate-500 mt-2 text-base">Acompanhe os principais indicadores de todos os módulos.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors shadow-sm">
            Últimos 30 dias
          </button>
          <button className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold transition-colors shadow-sm shadow-indigo-600/20 flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Gerar Relatório Global
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          const isUp = kpi.trend === 'up';
          
          const colorStyles = {
            emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
            amber: "bg-amber-50 text-amber-600 border-amber-100",
            blue: "bg-blue-50 text-blue-600 border-blue-100",
            indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
          }[kpi.color];

          return (
            <div key={index} className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${colorStyles} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-lg ${isUp ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'}`}>
                  {isUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {kpi.change}
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-slate-500 font-medium text-sm mb-1">{kpi.title}</h3>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{kpi.value}</p>
              </div>
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 blur-2xl ${colorStyles.split(' ')[0]}`}></div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area (Placeholder) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Crescimento da Receita</h3>
              <p className="text-sm text-slate-500">Comparativo de faturamento e despesas</p>
            </div>
            <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 font-medium outline-none">
              <option>Este Ano</option>
              <option>Ano Passado</option>
            </select>
          </div>
          <div className="flex-1 flex items-end gap-2 h-64 mt-4">
            {/* Mock Chart Bars */}
            {[40, 60, 45, 70, 65, 85, 80, 95, 90, 110, 105, 120].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-1 group">
                <div 
                  className="w-full bg-indigo-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity" 
                  style={{ height: `${h}%` }}
                ></div>
                <div 
                  className="w-full bg-slate-200 rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity" 
                  style={{ height: `${h * 0.6}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
            <span>Jul</span><span>Ago</span><span>Set</span><span>Out</span><span>Nov</span><span>Dez</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 text-lg">Atividade Recente</h3>
            <button className="text-indigo-600 text-sm font-bold hover:text-indigo-700">Ver tudo</button>
          </div>
          <div className="flex-1 space-y-6">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  {activity.type === 'finance' && <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><DollarSign className="w-4 h-4" /></div>}
                  {activity.type === 'sales' && <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center"><Briefcase className="w-4 h-4" /></div>}
                  {activity.type === 'ops' && <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></div>}
                  {activity.type === 'alert' && <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center"><AlertCircle className="w-4 h-4" /></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 truncate">{activity.title}</p>
                  <p className="text-xs text-slate-500 truncate mt-0.5">{activity.desc}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span className="text-xs font-medium text-slate-400">{activity.time}</span>
                  </div>
                </div>
                {activity.amount && (
                  <div className="shrink-0 text-right">
                    <span className={`text-sm font-bold ${activity.type === 'finance' ? 'text-emerald-600' : 'text-slate-900'}`}>
                      {activity.amount}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
