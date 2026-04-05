import { MapPin, User, Clock, Calendar as CalendarIcon, GripVertical, Search, Filter } from "lucide-react";

const unassignedTasks = [
  { id: "OS-1046", client: "Restaurante Sabor", type: "Manutenção Corretiva", priority: "Urgente", duration: "2h", location: "Vila Madalena" },
  { id: "OS-1047", client: "Escola Aprender", type: "Instalação", priority: "Média", duration: "4h", location: "Moema" },
  { id: "OS-1048", client: "Loja Centro", type: "Visita Técnica", priority: "Baixa", duration: "1h", location: "Centro" },
];

const techs = [
  { 
    id: 1, 
    name: "Carlos Silva", 
    status: "Em serviço",
    tasks: [
      { id: "OS-1042", client: "Tech Solutions Inc", time: "09:00 - 11:00", status: "Em andamento" },
      { id: "OS-1049", client: "Farmácia Vida", time: "13:00 - 15:00", status: "Agendado" }
    ]
  },
  { 
    id: 2, 
    name: "Ana Souza", 
    status: "Disponível",
    tasks: [
      { id: "OS-1043", client: "Supermercado Central", time: "11:30 - 13:00", status: "Pendente" }
    ]
  },
];

export default function Routing() {
  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Roteirização Inteligente</h1>
          <p className="text-slate-500 mt-2 text-base">Planeje rotas otimizadas e distribua tarefas para a equipe.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors flex items-center gap-2 shadow-sm">
            <CalendarIcon className="w-4 h-4" /> 05 Abr 2026
          </button>
          <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-blue-600/20">
            Otimizar Rotas
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
        {/* Unassigned Tasks */}
        <div className="w-full lg:w-96 bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col shrink-0 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Não Atribuídas</h3>
            <span className="bg-amber-100 text-amber-700 py-1 px-3 rounded-full text-xs font-bold">{unassignedTasks.length} Pendentes</span>
          </div>
          <div className="p-4 border-b border-slate-100">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar OS..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/60 rounded-lg text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/30">
            {unassignedTasks.map(task => (
              <div key={task.id} className="p-4 border border-slate-200/60 rounded-2xl bg-white shadow-sm cursor-grab hover:border-blue-400 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-bold text-slate-900">{task.id}</span>
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider
                    ${task.priority === 'Urgente' ? 'bg-red-50 text-red-600 border border-red-100' : 
                      task.priority === 'Média' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-slate-50 text-slate-600 border border-slate-200'}`}>
                    {task.priority}
                  </span>
                </div>
                <div className="font-bold text-slate-700 text-sm mb-1 group-hover:text-blue-600 transition-colors">{task.client}</div>
                <div className="text-xs font-medium text-slate-500">{task.type}</div>
                <div className="flex items-center gap-4 mt-4 text-xs font-medium text-slate-500 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400" /> {task.duration}</div>
                  <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-400" /> <span className="truncate max-w-[120px]">{task.location}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Schedules */}
        <div className="flex-1 bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Agenda da Equipe</h3>
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
            {techs.map(tech => (
              <div key={tech.id} className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-3 font-bold text-slate-900">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold border border-blue-100">
                      {tech.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {tech.name}
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {tech.tasks.length} tarefas
                  </span>
                </div>
                <div className="p-4 bg-slate-50/50 min-h-[120px] space-y-3">
                  {tech.tasks.map(task => (
                    <div key={task.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200/60 rounded-xl shadow-sm hover:border-blue-300 transition-colors group">
                      <GripVertical className="w-5 h-5 text-slate-300 cursor-grab group-hover:text-blue-400 transition-colors" />
                      <div className="w-28 text-sm font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg text-center border border-slate-100">{task.time}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-900 text-sm">{task.id}</span>
                          <span className="text-sm font-medium text-slate-600 truncate">{task.client}</span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shrink-0
                        ${task.status === 'Em andamento' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 
                          task.status === 'Agendado' ? 'bg-slate-50 text-slate-600 border border-slate-200' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                        {task.status}
                      </span>
                    </div>
                  ))}
                  {/* Drop zone placeholder */}
                  <div className="border-2 border-dashed border-slate-300 rounded-xl h-20 flex items-center justify-center text-slate-400 text-sm font-bold bg-slate-50/50 hover:bg-blue-50/50 hover:border-blue-300 hover:text-blue-500 transition-colors cursor-pointer">
                    Arraste uma tarefa para cá
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
