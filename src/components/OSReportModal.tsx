import { X, Download, MapPin, Clock, Calendar, CheckCircle2, FileSignature, AlertTriangle } from "lucide-react";

interface OSReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  osId: string;
}

export default function OSReportModal({ isOpen, onClose, osId }: OSReportModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-slate-900">Relatório de Serviço</h2>
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-extrabold tracking-wider">{osId}</span>
            </div>
            <p className="text-sm font-medium text-slate-500 mt-1">Finalizado em 05 Abr 2026 às 11:00</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-200 transition-colors">
              <Download className="w-4 h-4" /> PDF
            </button>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50/50">
          
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Dados do Cliente</h3>
              <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm">
                <p className="font-bold text-slate-900 text-lg">Tech Solutions Inc</p>
                <p className="text-sm font-medium text-slate-500 mt-1">CNPJ: 12.345.678/0001-90</p>
                <div className="flex items-start gap-2 mt-3 text-sm font-medium text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" /> 
                  <span>Av. Paulista, 1000 - São Paulo, SP</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Detalhes do Atendimento</h3>
              <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500 flex items-center gap-2"><UserIcon className="w-4 h-4 text-slate-400" /> Técnico</span>
                  <span className="text-sm font-bold text-slate-900">Carlos Silva</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500 flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400" /> Data</span>
                  <span className="text-sm font-bold text-slate-900">05 Abr 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500 flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> Duração</span>
                  <span className="text-sm font-bold text-slate-900">09:00 - 11:00 (2h)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Checklist Preenchido</h3>
            <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm overflow-hidden">
              {[
                "Verificação de tensão elétrica",
                "Limpeza dos filtros",
                "Teste de funcionamento",
                "Aperto de conexões",
                "Medição de gás refrigerante"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 text-sm font-medium text-slate-700 border-b border-slate-100 last:border-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Photos */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Registro Fotográfico</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-slate-100 rounded-xl border border-slate-200/60 overflow-hidden relative group shadow-sm">
                  <img src={`https://picsum.photos/seed/os${i}/400/400`} alt={`Foto ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white text-sm font-bold">Ver foto</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Observações do Técnico</h3>
            <div className="bg-amber-50 border border-amber-200/60 p-5 rounded-xl shadow-sm flex gap-4">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-amber-900 leading-relaxed">
                Equipamento apresentava ruído anormal no compressor. Realizado ajuste na fixação e lubrificação. Recomendada troca da correia na próxima manutenção preventiva.
              </p>
            </div>
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[280px] h-32 bg-white border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center mb-3 relative overflow-hidden">
                <FileSignature className="w-8 h-8 text-slate-300 absolute" />
                {/* Placeholder for actual signature image */}
              </div>
              <p className="font-bold text-slate-900">Carlos Silva</p>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Assinatura do Técnico</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[280px] h-32 bg-white border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center mb-3 relative overflow-hidden">
                <FileSignature className="w-8 h-8 text-slate-300 absolute" />
                {/* Placeholder for actual signature image */}
              </div>
              <p className="font-bold text-slate-900">João Silva</p>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Assinatura do Cliente</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper icon
function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
