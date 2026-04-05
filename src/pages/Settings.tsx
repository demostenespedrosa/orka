import { useState } from "react";
import { 
  Wrench, 
  CheckSquare, 
  ShieldAlert, 
  ListPlus, 
  Clock, 
  Plus,
  Save
} from "lucide-react";
import { cn } from "../lib/utils";

const tabs = [
  { id: "types", name: "Tipos de Tarefa", icon: Wrench },
  { id: "checklists", name: "Modelos de Checklist", icon: CheckSquare },
  { id: "permissions", name: "Permissões", icon: ShieldAlert },
  { id: "custom_fields", name: "Campos Personalizados", icon: ListPlus },
  { id: "sla", name: "SLA e Prazos", icon: Clock },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("types");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Configurações</h1>
          <p className="text-slate-500 mt-2 text-base">Personalize o sistema para a sua operação.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Tabs Sidebar */}
        <div className="w-full md:w-72 bg-slate-50/50 border-r border-slate-100 p-6 space-y-2 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all text-left",
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent"
              )}
            >
              <tab.icon className={cn("w-5 h-5", activeTab === tab.id ? "text-blue-500" : "text-slate-400")} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          {activeTab === "types" && (
            <div className="space-y-8 animate-in fade-in">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Tipos de Tarefa</h2>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
                  <Plus className="w-4 h-4" /> Novo Tipo
                </button>
              </div>
              <div className="space-y-3">
                {["Instalação", "Manutenção Preventiva", "Manutenção Corretiva", "Visita Técnica", "Orçamento"].map((type) => (
                  <div key={type} className="flex items-center justify-between p-5 border border-slate-200/60 rounded-2xl bg-white hover:border-blue-200 transition-colors group">
                    <span className="font-bold text-slate-700 group-hover:text-slate-900">{type}</span>
                    <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">Editar</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "checklists" && (
            <div className="space-y-8 animate-in fade-in">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Modelos de Checklist</h2>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
                  <Plus className="w-4 h-4" /> Novo Modelo
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Checklist Padrão de Instalação", items: 12 },
                  { name: "Vistoria de Ar Condicionado", items: 8 },
                  { name: "Manutenção Preventiva Mensal", items: 15 },
                ].map((model) => (
                  <div key={model.name} className="p-6 border border-slate-200/60 rounded-2xl bg-white hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{model.name}</h3>
                    <p className="text-sm font-medium text-slate-500 mt-2">{model.items} itens de verificação</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "permissions" && (
            <div className="space-y-8 animate-in fade-in">
              <h2 className="text-xl font-bold text-slate-900">Permissões de Acesso</h2>
              <div className="overflow-hidden border border-slate-200/60 rounded-2xl">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50/50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 font-bold text-slate-700">Recurso</th>
                      <th className="px-6 py-4 font-bold text-slate-700 text-center">Admin</th>
                      <th className="px-6 py-4 font-bold text-slate-700 text-center">Supervisor</th>
                      <th className="px-6 py-4 font-bold text-slate-700 text-center">Técnico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { resource: "Criar OS", admin: true, sup: true, tech: false },
                      { resource: "Editar OS", admin: true, sup: true, tech: false },
                      { resource: "Preencher OS", admin: true, sup: true, tech: true },
                      { resource: "Ver Financeiro", admin: true, sup: false, tech: false },
                      { resource: "Gerenciar Equipe", admin: true, sup: true, tech: false },
                    ].map((row) => (
                      <tr key={row.resource} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-900">{row.resource}</td>
                        <td className="px-6 py-4 text-center"><input type="checkbox" checked={row.admin} readOnly className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" /></td>
                        <td className="px-6 py-4 text-center"><input type="checkbox" checked={row.sup} readOnly className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" /></td>
                        <td className="px-6 py-4 text-center"><input type="checkbox" checked={row.tech} readOnly className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
                  <Save className="w-4 h-4" /> Salvar Permissões
                </button>
              </div>
            </div>
          )}

          {activeTab === "custom_fields" && (
            <div className="space-y-8 animate-in fade-in">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Campos Personalizados (OS)</h2>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
                  <Plus className="w-4 h-4" /> Novo Campo
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Número de Série do Equipamento", type: "Texto", required: true },
                  { name: "Marca do Equipamento", type: "Lista Suspensa", required: false },
                  { name: "Garantia Ativa?", type: "Checkbox", required: true },
                ].map((field) => (
                  <div key={field.name} className="flex items-center justify-between p-5 border border-slate-200/60 rounded-2xl bg-white hover:border-blue-200 transition-colors group">
                    <div>
                      <span className="font-bold text-slate-900">{field.name}</span>
                      <div className="text-sm font-medium text-slate-500 mt-1">Tipo: {field.type} {field.required && "• Obrigatório"}</div>
                    </div>
                    <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">Editar</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "sla" && (
            <div className="space-y-8 animate-in fade-in">
              <h2 className="text-xl font-bold text-slate-900">SLA e Controle de Prazos</h2>
              
              <div className="space-y-6 max-w-lg">
                <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tempo Máximo de Atendimento (Urgente)</label>
                  <div className="flex items-center gap-3">
                    <input type="number" defaultValue={2} className="w-24 px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" />
                    <span className="text-slate-500 font-medium">horas</span>
                  </div>
                </div>
                <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tempo Máximo de Atendimento (Alta)</label>
                  <div className="flex items-center gap-3">
                    <input type="number" defaultValue={8} className="w-24 px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" />
                    <span className="text-slate-500 font-medium">horas</span>
                  </div>
                </div>
                <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tempo Máximo de Atendimento (Média/Baixa)</label>
                  <div className="flex items-center gap-3">
                    <input type="number" defaultValue={48} className="w-24 px-4 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" />
                    <span className="text-slate-500 font-medium">horas</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
                  <Save className="w-4 h-4" /> Salvar SLA
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
