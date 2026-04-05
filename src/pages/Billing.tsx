import React from "react";
import { Search, Filter, Download, Plus, FileText, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const invoices = [
  { id: "NF-8901", client: "Tech Solutions Inc", description: "Serviços de Manutenção", amount: "R$ 12.500,00", issueDate: "01/04/2026", status: "Emitida" },
  { id: "NF-8902", client: "Supermercado Central", description: "Instalação de Equipamentos", amount: "R$ 45.000,00", issueDate: "02/04/2026", status: "Processando" },
  { id: "NF-8903", client: "Condomínio Flores", description: "Contrato Mensal", amount: "R$ 8.400,00", issueDate: "03/04/2026", status: "Emitida" },
  { id: "NF-8904", client: "Clínica Saúde", description: "Visita Técnica", amount: "R$ 850,00", issueDate: "04/04/2026", status: "Erro" },
  { id: "NF-8905", client: "Indústria ABC", description: "Projeto de Climatização", amount: "R$ 120.000,00", issueDate: "05/04/2026", status: "Emitida" },
];

export default function Billing() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Faturamento</h1>
          <p className="text-slate-500 mt-2 text-base">Emissão de notas fiscais e controle de faturamento.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors flex items-center gap-2 shadow-sm">
            <Download className="w-4 h-4" /> Relatório
          </button>
          <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-blue-600/20">
            <Plus className="w-4 h-4" /> Nova Nota Fiscal
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Faturado (Mês)</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">R$ 186.750</p>
          <p className="text-sm text-emerald-600 font-medium mt-2 flex items-center gap-1">
            +12% vs mês anterior
          </p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">A Faturar</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">R$ 45.000</p>
          <p className="text-sm text-slate-500 font-medium mt-2">
            2 notas em processamento
          </p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-700">Erros de Emissão</h3>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">1</p>
          <p className="text-sm text-red-600 font-medium mt-2">
            Requer atenção imediata
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar por NF, cliente ou valor..." 
              className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-100 font-semibold transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filtros
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">NF / Cliente</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Descrição</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Data Emissão</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900">{item.client}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600 font-medium">{item.description}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600 font-medium">{item.issueDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-slate-900">{item.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold
                      ${item.status === 'Emitida' ? 'bg-emerald-100 text-emerald-700' : 
                        item.status === 'Processando' ? 'bg-blue-100 text-blue-700' : 
                        'bg-red-100 text-red-700'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center justify-end gap-1 w-full">
                      <FileText className="w-4 h-4" /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-center">
          <button className="text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors">
            Carregar mais registros
          </button>
        </div>
      </div>
    </div>
  );
}
