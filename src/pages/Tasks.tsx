import { useState } from "react";
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  MapPin, 
  Calendar, 
  Clock, 
  User,
  CheckCircle2,
  AlertCircle,
  FileText
} from "lucide-react";
import OSReportModal from "../components/OSReportModal";
import NewTaskModal from "../components/NewTaskModal";

const tasks = [
  { id: "OS-1042", client: "Tech Solutions Inc", type: "Manutenção Preventiva", status: "Em andamento", tech: "Carlos Silva", date: "Hoje", time: "09:00 - 11:00", address: "Av. Paulista, 1000", priority: "Alta" },
  { id: "OS-1043", client: "Supermercado Central", type: "Instalação", status: "Pendente", tech: "Ana Souza", date: "Hoje", time: "11:30 - 13:00", address: "Rua Augusta, 500", priority: "Média" },
  { id: "OS-1044", client: "Condomínio Flores", type: "Reparo", status: "Concluído", tech: "Marcos Paulo", date: "Hoje", time: "08:00 - 09:30", address: "Rua Oscar Freire, 200", priority: "Baixa" },
  { id: "OS-1045", client: "Clínica Saúde", type: "Visita Técnica", status: "Atrasado", tech: "Roberto Dias", date: "Hoje", time: "10:00 - 11:00", address: "Av. Brasil, 1500", priority: "Alta" },
  { id: "OS-1046", client: "Escola Aprender", type: "Manutenção Corretiva", status: "Pendente", tech: "Não atribuído", date: "Amanhã", time: "09:00 - 12:00", address: "Rua da Consolação, 800", priority: "Média" },
];

export default function Tasks() {
  const [selectedOS, setSelectedOS] = useState<string | null>(null);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Ordens de Serviço</h1>
          <p className="text-slate-500 mt-2 text-base">Gerencie e acompanhe todas as tarefas da equipe.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar OS..." 
              className="pl-12 pr-4 py-2.5 bg-white border border-slate-200/60 rounded-xl text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all w-64 outline-none shadow-sm"
            />
          </div>
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors flex items-center gap-2 shadow-sm">
            <Filter className="w-4 h-4" /> Filtros
          </button>
          <button 
            onClick={() => setIsNewTaskModalOpen(true)}
            className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" /> Nova OS
          </button>
        </div>
      </div>

      {/* Task List - Rich Cards instead of dense table */}
      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center p-5 sm:p-6 gap-6">
              
              {/* Status & ID */}
              <div className="flex items-center md:flex-col md:items-start gap-3 md:w-32 shrink-0">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold
                  ${task.status === 'Concluído' ? 'bg-emerald-100 text-emerald-700' : 
                    task.status === 'Em andamento' ? 'bg-blue-100 text-blue-700' : 
                    task.status === 'Atrasado' ? 'bg-red-100 text-red-700' : 
                    'bg-slate-100 text-slate-700'}`}>
                  {task.status === 'Concluído' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                  {task.status === 'Atrasado' && <AlertCircle className="w-3 h-3 mr-1" />}
                  {task.status}
                </span>
                <span className="font-bold text-slate-900">{task.id}</span>
              </div>

              {/* Main Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors cursor-pointer" onClick={() => setSelectedOS(task.id)}>
                    {task.client}
                  </h3>
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider
                    ${task.priority === 'Alta' ? 'bg-red-50 text-red-600 border border-red-100' : 
                      task.priority === 'Média' ? 'bg-amber-50 text-amber-600 border border-amber-100' : 
                      'bg-slate-50 text-slate-600 border border-slate-200'}`}>
                    {task.priority}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-slate-400" /> {task.type}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" /> <span className="truncate max-w-[200px]">{task.address}</span>
                  </div>
                </div>
              </div>

              {/* Schedule & Tech */}
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 md:w-48 shrink-0 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 border border-slate-200">
                    {task.tech !== "Não atribuído" ? task.tech.split(' ').map(n => n[0]).join('') : <User className="w-4 h-4" />}
                  </div>
                  <span className={task.tech === "Não atribuído" ? "text-slate-400" : ""}>{task.tech}</span>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5 text-sm font-medium text-slate-900 justify-end">
                    <Calendar className="w-4 h-4 text-slate-400" /> {task.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mt-1 justify-end">
                    <Clock className="w-3.5 h-3.5" /> {task.time}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="hidden md:flex items-center justify-end w-10">
                <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <OSReportModal 
        isOpen={!!selectedOS} 
        onClose={() => setSelectedOS(null)} 
        osId={selectedOS || ""} 
      />

      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onClose={() => setIsNewTaskModalOpen(false)}
      />
    </div>
  );
}
