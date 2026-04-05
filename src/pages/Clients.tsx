import { Plus, Search, Building2, MapPin, Phone, Mail, MoreVertical, FileText } from "lucide-react";
import { useState } from "react";
import NewClientModal from "../components/NewClientModal";

const clients = [
  { id: 1, name: "Tech Solutions Inc", type: "Empresa", document: "12.345.678/0001-90", contact: "João Silva", phone: "(11) 3456-7890", email: "contato@techsolutions.com", address: "Av. Paulista, 1000 - São Paulo, SP", activeOS: 2 },
  { id: 2, name: "Supermercado Central", type: "Empresa", document: "98.765.432/0001-10", contact: "Maria Oliveira", phone: "(11) 3333-4444", email: "gerencia@supercentral.com", address: "Rua Augusta, 500 - São Paulo, SP", activeOS: 1 },
  { id: 3, name: "Condomínio Flores", type: "Condomínio", document: "45.678.901/0001-23", contact: "Síndico Roberto", phone: "(11) 5555-6666", email: "admin@condflores.com", address: "Rua das Flores, 123 - São Paulo, SP", activeOS: 0 },
  { id: 4, name: "Clínica Saúde", type: "Empresa", document: "11.222.333/0001-44", contact: "Dra. Ana", phone: "(11) 4444-5555", email: "atendimento@clinicasaude.com", address: "Av. Brasil, 200 - São Paulo, SP", activeOS: 1 },
];

export default function Clients() {
  const [newClientModalOpen, setNewClientModalOpen] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Clientes</h1>
          <p className="text-slate-500 mt-2 text-base">Gerencie sua carteira de clientes e locais de atendimento.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar cliente..." 
              className="pl-12 pr-4 py-2.5 bg-white border border-slate-200/60 rounded-xl text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all w-64 outline-none shadow-sm"
            />
          </div>
          <button 
            onClick={() => setNewClientModalOpen(true)}
            className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Plus className="w-4 h-4" /> Novo Cliente
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col">
            
            {/* Header */}
            <div className="p-6 pb-4 flex items-start justify-between border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-inner">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{client.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-extrabold uppercase tracking-wider">
                      {client.type}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{client.document}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Contato Principal</span>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs">
                      {client.contact.charAt(0)}
                    </div>
                    {client.contact}
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <Phone className="w-4 h-4 text-slate-400" />
                    {client.phone}
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="truncate">{client.email}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Endereço</span>
                  <div className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2 leading-relaxed">{client.address}</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold
                    ${client.activeOS > 0 ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'bg-slate-50 text-slate-600 border border-slate-200'}`}>
                    <FileText className="w-4 h-4" />
                    {client.activeOS} OS {client.activeOS === 1 ? 'Ativa' : 'Ativas'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <NewClientModal 
        isOpen={newClientModalOpen}
        onClose={() => setNewClientModalOpen(false)}
      />
    </div>
  );
}
