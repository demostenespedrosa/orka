import { X } from "lucide-react";

interface NewClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewClientModal({ isOpen, onClose }: NewClientModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white shrink-0">
          <h2 className="text-xl font-bold text-slate-900">Novo Cliente</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          <form className="space-y-8" id="new-client-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <div className="space-y-5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200/60 pb-2">Dados Principais</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tipo de Cliente *</label>
                  <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" required>
                    <option value="Empresa">Empresa (PJ)</option>
                    <option value="Condomínio">Condomínio</option>
                    <option value="Residencial">Residencial (PF)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">CNPJ / CPF *</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="00.000.000/0000-00" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Razão Social / Nome Completo *</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="Nome da empresa ou pessoa" required />
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200/60 pb-2">Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nome do Contato</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="Ex: João Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Telefone / WhatsApp *</label>
                  <input type="tel" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="(00) 00000-0000" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="contato@empresa.com" />
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200/60 pb-2">Endereço</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">CEP *</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="00000-000" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Logradouro *</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="Rua, Avenida, etc." required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Número *</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" required />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Complemento</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="Sala, Andar, Bloco..." />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bairro *</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Cidade/UF *</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-700 font-medium shadow-sm" placeholder="São Paulo/SP" required />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-slate-100 bg-white shrink-0">
          <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-bold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
            Cancelar
          </button>
          <button type="submit" form="new-client-form" className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            Salvar Cliente
          </button>
        </div>
      </div>
    </div>
  );
}
