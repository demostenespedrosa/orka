import { X } from "lucide-react";

interface NewTechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewTechModal({ isOpen, onClose }: NewTechModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white shrink-0">
          <h2 className="text-xl font-bold text-slate-900">Novo Técnico</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          <form className="space-y-5" id="new-tech-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nome Completo *</label>
              <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="Ex: Carlos Silva" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cargo / Nível *</label>
                <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" required>
                  <option value="Técnico Júnior">Técnico Júnior</option>
                  <option value="Técnico Pleno">Técnico Pleno</option>
                  <option value="Técnico Sênior">Técnico Sênior</option>
                  <option value="Supervisor">Supervisor</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Telefone / WhatsApp *</label>
                <input type="tel" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="(00) 00000-0000" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">E-mail (Acesso ao App) *</label>
              <input type="email" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="tecnico@empresa.com" required />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Base / Região de Atuação</label>
              <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="Ex: Zona Sul, São Paulo" />
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer w-5 h-5 appearance-none border-2 border-slate-300 rounded-md checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer" defaultChecked />
                  <svg className="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-sm font-medium text-slate-700">Enviar convite de acesso por e-mail</span>
              </label>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-slate-100 bg-white shrink-0">
          <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-bold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
            Cancelar
          </button>
          <button type="submit" form="new-tech-form" className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            Cadastrar Técnico
          </button>
        </div>
      </div>
    </div>
  );
}
