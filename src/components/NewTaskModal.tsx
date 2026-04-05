import { X } from "lucide-react";

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewTaskModal({ isOpen, onClose }: NewTaskModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white shrink-0">
          <h2 className="text-xl font-bold text-slate-900">Nova Ordem de Serviço</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          <form className="space-y-6" id="new-task-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cliente *</label>
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" required>
                  <option value="">Selecione um cliente</option>
                  <option value="1">Tech Solutions Inc</option>
                  <option value="2">Supermercado Central</option>
                  <option value="3">Condomínio Flores</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tipo de Serviço *</label>
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" required>
                  <option value="">Selecione o tipo</option>
                  <option value="Instalação">Instalação</option>
                  <option value="Manutenção Preventiva">Manutenção Preventiva</option>
                  <option value="Manutenção Corretiva">Manutenção Corretiva</option>
                  <option value="Visita Técnica">Visita Técnica</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Prioridade *</label>
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" required>
                  <option value="Baixa">Baixa</option>
                  <option value="Média">Média</option>
                  <option value="Alta">Alta</option>
                  <option value="Urgente">Urgente</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Técnico Responsável</label>
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm">
                  <option value="">Não atribuir agora</option>
                  <option value="1">Carlos Silva</option>
                  <option value="2">Ana Souza</option>
                  <option value="3">Marcos Paulo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Data Agendada *</label>
                <input type="date" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" required />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Horário Previsto *</label>
                <input type="time" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Descrição / Observações</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm resize-none" placeholder="Detalhes do serviço a ser realizado..."></textarea>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-slate-100 bg-white shrink-0">
          <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-bold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
            Cancelar
          </button>
          <button type="submit" form="new-task-form" className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            Criar OS
          </button>
        </div>
      </div>
    </div>
  );
}
