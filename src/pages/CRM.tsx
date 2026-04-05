import React from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  MessageCircle, 
  FileText, 
  Phone,
  MoreVertical,
  Calendar,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Clock,
  MoreHorizontal
} from "lucide-react";

interface Lead {
  id: number;
  name: string;
  contact: string;
  phone: string;
  value: string;
  date: string;
  status: string;
}

const leads: Record<string, Lead[]> = {
  "novo": [
    { id: 1, name: "Supermercado Central", contact: "João Silva", phone: "(11) 98765-4321", value: "R$ 1.500", date: "Hoje, 10:30", status: "novo" },
    { id: 2, name: "Condomínio Flores", contact: "Maria Souza", phone: "(11) 91234-5678", value: "R$ 800", date: "Ontem, 15:45", status: "novo" },
  ],
  "contato": [
    { id: 3, name: "Clínica Saúde", contact: "Dr. Roberto", phone: "(11) 99999-8888", value: "R$ 3.200", date: "Ontem, 09:15", status: "contato" },
  ],
  "proposta": [
    { id: 4, name: "Tech Solutions Inc", contact: "Ana Paula", phone: "(11) 97777-6666", value: "R$ 5.400", date: "02/04, 14:20", status: "proposta" },
    { id: 5, name: "Padaria Pão Quente", contact: "Carlos", phone: "(11) 96666-5555", value: "R$ 450", date: "01/04, 11:00", status: "proposta" },
  ],
  "fechado": [
    { id: 6, name: "Escola Aprender", contact: "Diretora Lúcia", phone: "(11) 95555-4444", value: "R$ 2.100", date: "30/03, 16:30", status: "fechado" },
  ]
};

export default function Comercial() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Comercial & CRM</h1>
          <p className="text-slate-500 mt-2 text-base">Gestão de leads, orçamentos e conversões.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors flex items-center gap-2 shadow-sm">
            <Filter className="w-4 h-4" /> Filtros
          </button>
          <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 hover:-translate-y-0.5">
            <Plus className="w-4 h-4" /> Novo Lead
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex gap-6 min-w-max h-full">
          
          {/* Column: Novo */}
          <div className="w-80 flex flex-col bg-slate-100/50 rounded-3xl border border-slate-200/60 p-4">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                Novos Leads
              </h3>
              <span className="bg-white text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-200">
                {leads.novo.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2">
              {leads.novo.map(lead => (
                <LeadCard key={lead.id} lead={lead} />
              ))}
            </div>
          </div>

          {/* Column: Contato Feito */}
          <div className="w-80 flex flex-col bg-slate-100/50 rounded-3xl border border-slate-200/60 p-4">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                Em Negociação
              </h3>
              <span className="bg-white text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-200">
                {leads.contato.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2">
              {leads.contato.map(lead => (
                <LeadCard key={lead.id} lead={lead} />
              ))}
            </div>
          </div>

          {/* Column: Proposta Enviada */}
          <div className="w-80 flex flex-col bg-slate-100/50 rounded-3xl border border-slate-200/60 p-4">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                Proposta Enviada
              </h3>
              <span className="bg-white text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-200">
                {leads.proposta.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2">
              {leads.proposta.map(lead => (
                <LeadCard key={lead.id} lead={lead} />
              ))}
            </div>
          </div>

          {/* Column: Fechado */}
          <div className="w-80 flex flex-col bg-slate-100/50 rounded-3xl border border-slate-200/60 p-4">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                Fechado / Ganho
              </h3>
              <span className="bg-white text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-200">
                {leads.fechado.length}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2">
              {leads.fechado.map(lead => (
                <LeadCard key={lead.id} lead={lead} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function LeadCard({ lead }: { lead: Lead; key?: React.Key }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-bold text-slate-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">{lead.name}</h4>
        <button className="text-slate-300 hover:text-slate-500 transition-colors">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
            {lead.contact.charAt(0)}
          </div>
          <span className="truncate">{lead.contact}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Calendar className="w-3.5 h-3.5 shrink-0 text-slate-400" />
          {lead.date}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span className="font-extrabold text-slate-900 text-sm flex items-center gap-1">
          <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
          {lead.value}
        </span>
        <div className="flex gap-1.5">
          <button className="w-8 h-8 rounded-full bg-green-50 hover:bg-green-100 text-green-600 flex items-center justify-center transition-colors" title="WhatsApp">
            <MessageCircle className="w-4 h-4" />
          </button>
          {lead.status === 'novo' || lead.status === 'contato' ? (
            <button className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-colors" title="Gerar Orçamento">
              <FileText className="w-4 h-4" />
            </button>
          ) : lead.status === 'proposta' ? (
            <button className="w-8 h-8 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-600 flex items-center justify-center transition-colors" title="Cobrar Resposta">
              <Phone className="w-4 h-4" />
            </button>
          ) : (
            <button className="px-3 h-8 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center gap-1 transition-colors">
              Gerar OS <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
