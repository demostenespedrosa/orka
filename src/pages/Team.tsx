import { Plus, Search, MapPin, Phone, Mail, Star, User, Navigation, Activity } from "lucide-react";
import { useState } from "react";
import NewTechModal from "../components/NewTechModal";

const team = [
  { id: 1, name: "Carlos Silva", role: "Técnico Sênior", status: "Em serviço", location: "Centro, São Paulo", phone: "(11) 98765-4321", email: "carlos@fieldsync.com", rating: 4.8, tasksToday: 4, avatar: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Ana Souza", role: "Técnica Pleno", status: "Em deslocamento", location: "Pinheiros, São Paulo", phone: "(11) 98765-4322", email: "ana@fieldsync.com", rating: 4.9, tasksToday: 3, avatar: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Marcos Paulo", role: "Técnico Júnior", status: "Disponível", location: "Base", phone: "(11) 98765-4323", email: "marcos@fieldsync.com", rating: 4.5, tasksToday: 2, avatar: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Roberto Dias", role: "Técnico Sênior", status: "Atrasado", location: "Vila Mariana, São Paulo", phone: "(11) 98765-4324", email: "roberto@fieldsync.com", rating: 4.7, tasksToday: 5, avatar: "https://i.pravatar.cc/150?u=4" },
  { id: 5, name: "Juliana Costa", role: "Técnica Pleno", status: "Folga", location: "-", phone: "(11) 98765-4325", email: "juliana@fieldsync.com", rating: 4.6, tasksToday: 0, avatar: "https://i.pravatar.cc/150?u=5" },
];

export default function Team() {
  const [newTechModalOpen, setNewTechModalOpen] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Equipe Técnica</h1>
          <p className="text-slate-500 mt-2 text-base">Gerencie seus técnicos, acompanhe a localização e produtividade.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar técnico..." 
              className="pl-12 pr-4 py-2.5 bg-white border border-slate-200/60 rounded-xl text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all w-64 outline-none shadow-sm"
            />
          </div>
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors flex items-center gap-2 shadow-sm">
            <MapPin className="w-4 h-4" /> Mapa
          </button>
          <button 
            onClick={() => setNewTechModalOpen(true)}
            className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" /> Novo Técnico
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {team.map((member) => (
          <div key={member.id} className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col">
            
            {/* Header / Profile */}
            <div className="p-6 pb-4 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white
                    ${member.status === 'Disponível' ? 'bg-emerald-500' : 
                      member.status === 'Em serviço' ? 'bg-blue-500' : 
                      member.status === 'Folga' ? 'bg-slate-400' :
                      'bg-amber-500'}`} 
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <p className="text-sm font-medium text-slate-500">{member.role}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider
                ${member.status === 'Disponível' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 
                  member.status === 'Em serviço' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 
                  member.status === 'Folga' ? 'bg-slate-50 text-slate-600 border border-slate-200' :
                  'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                {member.status}
              </span>
            </div>

            {/* Contact Info */}
            <div className="px-6 py-4 space-y-3">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                {member.phone}
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{member.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                  <Navigation className="w-4 h-4" />
                </div>
                <span className="truncate">{member.location}</span>
              </div>
            </div>

            {/* Footer Stats */}
            <div className="mt-auto p-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Avaliação</span>
                <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  {member.rating}
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex flex-col items-end">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Tarefas Hoje</span>
                <div className="flex items-center gap-1.5 text-slate-900 font-bold">
                  <Activity className="w-4 h-4 text-blue-500" />
                  {member.tasksToday}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <NewTechModal 
        isOpen={newTechModalOpen}
        onClose={() => setNewTechModalOpen(false)}
      />
    </div>
  );
}
