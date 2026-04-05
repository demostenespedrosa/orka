import { Plus, Search, Calendar, RefreshCw, Building2, MoreVertical, FileSignature, ArrowRight } from "lucide-react";

const contracts = [
  { id: "CTR-001", client: "Condomínio Flores", type: "Manutenção Preventiva Mensal", value: 1200.00, frequency: "Mensal", nextVisit: "10 Abr 2026", status: "Ativo" },
  { id: "CTR-002", client: "Tech Solutions Inc", type: "Suporte TI Nível 2", value: 3500.00, frequency: "Semanal", nextVisit: "08 Abr 2026", status: "Ativo" },
  { id: "CTR-003", client: "Clínica Saúde", type: "Limpeza de Ar Condicionado", value: 800.00, frequency: "Trimestral", nextVisit: "15 Mai 2026", status: "Ativo" },
  { id: "CTR-004", client: "Supermercado Central", type: "Manutenção de Câmaras Frias", value: 2500.00, frequency: "Quinzenal", nextVisit: "12 Abr 2026", status: "Pausado" },
];

export default function Contracts() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Contratos</h1>
          <p className="text-slate-500 mt-2 text-base">Gerencie contratos recorrentes e agendamentos automáticos.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar contrato..." 
              className="pl-12 pr-4 py-2.5 bg-white border border-slate-200/60 rounded-xl text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all w-64 outline-none shadow-sm"
            />
          </div>
          <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 hover:-translate-y-0.5">
            <Plus className="w-4 h-4" /> Novo Contrato
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {contracts.map((contract) => (
          <div key={contract.id} className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col">
            
            {/* Header */}
            <div className="p-6 pb-4 flex items-start justify-between border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 shadow-inner">
                  <FileSignature className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">{contract.client}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-slate-500">{contract.type}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider
                  ${contract.status === 'Ativo' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                  {contract.status}
                </span>
                <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Valor</span>
                <div className="text-lg font-bold text-slate-900">
                  R$ {contract.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Recorrência</span>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <RefreshCw className="w-4 h-4 text-indigo-500" />
                  {contract.frequency}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Próxima Visita</span>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  {contract.nextVisit}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto p-4 border-t border-slate-100 bg-slate-50/50 flex justify-end">
              <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group/btn">
                Ver detalhes do contrato
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
