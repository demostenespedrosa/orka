import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  TrendingUp,
  MapPin,
  MoreVertical,
  Sparkles,
  Trophy,
  ArrowRight,
  Activity,
  Users,
  Wrench,
  Calendar
} from "lucide-react";

const stats = [
  { name: "OS Hoje", value: "48", icon: Clock, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", trend: "+12%" },
  { name: "Concluídas", value: "22", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100", trend: "45%" },
  { name: "Técnicos em Campo", value: "15", icon: Users, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100", trend: "100%" },
  { name: "Alertas SLA", value: "3", icon: AlertCircle, color: "text-red-600", bg: "bg-red-50", border: "border-red-100", trend: "-2" },
];

const recentTasks = [
  { id: "OS-1042", client: "Tech Solutions Inc", type: "Manutenção Preventiva", status: "Em andamento", tech: "Carlos Silva", time: "09:00 - 11:00", avatar: "CS" },
  { id: "OS-1043", client: "Supermercado Central", type: "Instalação", status: "Pendente", tech: "Ana Souza", time: "11:30 - 13:00", avatar: "AS" },
  { id: "OS-1044", client: "Condomínio Flores", type: "Reparo", status: "Concluído", tech: "Marcos Paulo", time: "08:00 - 09:30", avatar: "MP" },
  { id: "OS-1045", client: "Clínica Saúde", type: "Visita Técnica", status: "Atrasado", tech: "Roberto Dias", time: "10:00 - 11:00", avatar: "RD" },
];

const ranking = [
  { name: "Carlos Silva", score: 98, os: 45, time: "1h 10m", avatar: "CS" },
  { name: "Ana Souza", score: 95, os: 42, time: "1h 25m", avatar: "AS" },
  { name: "Marcos Paulo", score: 88, os: 38, time: "1h 40m", avatar: "MP" },
];

export default function DashboardGestor() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Painel de Operações</h1>
          <p className="text-slate-500 mt-2 text-base">Controle total da operação de campo em tempo real.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold shadow-sm flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400" /> Hoje, 05 de Abril
          </div>
        </div>
      </div>

      {/* AI Insights Banner - Von Restorff Effect (Isolation) */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl shadow-slate-900/20 border border-slate-800">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="font-bold text-xl tracking-tight">Insights da Operação</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md rounded-2xl p-5 border border-white/10 flex gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 mb-1">Otimização de Rota</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Realoque 2 OS da Zona Norte para a Zona Sul para economizar <strong className="text-emerald-400">45 minutos</strong> de deslocamento.
                </p>
              </div>
            </div>
            
            <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md rounded-2xl p-5 border border-white/10 flex gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-100 mb-1">Risco de Atraso</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  O técnico Roberto Dias está preso no trânsito. A OS-1045 tem <strong className="text-amber-400">80% de chance</strong> de estourar o SLA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} border ${stat.border} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={`text-sm font-bold ${stat.color}`}>{stat.trend}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-1">{stat.name}</p>
              <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Tasks */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col">
          <div className="p-6 sm:p-8 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Painel de Despacho</h2>
              <p className="text-sm text-slate-500 mt-1">Acompanhamento das OS de hoje</p>
            </div>
            <button className="text-sm text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 group">
              Ver todas <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="flex-1 p-2">
            <div className="space-y-1">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm shrink-0">
                      {task.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{task.client}</h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <span className="font-medium text-slate-700">{task.id}</span>
                        <span>•</span>
                        <span>{task.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-semibold text-slate-900">{task.tech}</p>
                      <p className="text-xs text-slate-500 flex items-center justify-end gap-1 mt-1">
                        <Clock className="w-3 h-3" /> {task.time}
                      </p>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold
                      ${task.status === 'Concluído' ? 'bg-emerald-100 text-emerald-700' : 
                        task.status === 'Em andamento' ? 'bg-blue-100 text-blue-700' : 
                        task.status === 'Atrasado' ? 'bg-red-100 text-red-700' : 
                        'bg-slate-100 text-slate-700'}`}>
                      {task.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mini Map Preview */}
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-500" /> Mapa da Operação
            </h2>
          </div>
          <div className="flex-1 bg-slate-100 relative min-h-[300px]">
             {/* Placeholder for map */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-500">Mapa ao vivo</p>
                  <p className="text-xs text-slate-400">15 técnicos em campo</p>
                </div>
             </div>
             {/* Fake markers */}
             <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md animate-bounce"></div>
             <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-md"></div>
             <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-amber-500 rounded-full border-2 border-white shadow-md"></div>
          </div>
          <div className="p-4 bg-white">
            <button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-colors text-sm">
              Abrir Mapa Completo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
