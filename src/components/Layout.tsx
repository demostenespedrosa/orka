import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  ClipboardList, 
  Users, 
  Building2, 
  Settings,
  Bell,
  Search,
  Menu,
  Map as MapIcon,
  BarChart3,
  DollarSign,
  FileText,
  Route,
  Briefcase,
  Sparkles,
  LogOut,
  TrendingUp,
  CreditCard,
  Globe,
  CalendarDays
} from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { useAuth } from "../contexts/AuthContext";

const navigation = [
  // Admin only
  { name: "Visão Geral", href: "/", icon: Globe, roles: ["admin"], section: "Geral" },

  // Gestor
  { name: "Painel de Operações", href: "/operacoes", icon: LayoutDashboard, roles: ["gestor", "admin"], section: "Operações", defaultHref: "/" },
  { name: "Ordens de Serviço", href: "/tasks", icon: ClipboardList, roles: ["gestor", "admin"], section: "Operações" },
  { name: "Agenda Operacional", href: "/agenda", icon: CalendarDays, roles: ["gestor", "admin"], section: "Operações" },
  { name: "Roteirização", href: "/routing", icon: Route, roles: ["gestor", "admin"], section: "Operações" },
  { name: "Mapa ao Vivo", href: "/map", icon: MapIcon, roles: ["gestor", "admin"], section: "Operações" },
  { name: "Equipe de Campo", href: "/team", icon: Users, roles: ["gestor", "admin"], section: "Operações" },
  { name: "Relatórios Operacionais", href: "/reports", icon: BarChart3, roles: ["gestor", "admin"], section: "Operações" },
  { name: "Configurações", href: "/settings", icon: Settings, roles: ["gestor", "admin"], section: "Operações" },
  
  // Comercial
  { name: "Painel de Vendas", href: "/vendas", icon: LayoutDashboard, roles: ["comercial", "admin"], section: "Comercial", defaultHref: "/" },
  { name: "CRM & Leads", href: "/crm", icon: Briefcase, roles: ["comercial", "admin"], section: "Comercial" },
  { name: "Carteira de Clientes", href: "/clients", icon: Building2, roles: ["comercial", "admin"], section: "Comercial" },
  { name: "Propostas & Contratos", href: "/contracts", icon: FileText, roles: ["comercial", "admin"], section: "Comercial" },
  { name: "Relatórios de Vendas", href: "/reports-sales", icon: TrendingUp, roles: ["comercial", "admin"], section: "Comercial" },

  // Financeiro
  { name: "Painel Financeiro", href: "/financeiro-dashboard", icon: LayoutDashboard, roles: ["financeiro", "admin"], section: "Financeiro", defaultHref: "/" },
  { name: "Contas a Receber", href: "/receivables", icon: DollarSign, roles: ["financeiro", "admin"], section: "Financeiro" },
  { name: "Contas a Pagar", href: "/payables", icon: CreditCard, roles: ["financeiro", "admin"], section: "Financeiro" },
  { name: "Faturamento", href: "/billing", icon: FileText, roles: ["financeiro", "admin"], section: "Financeiro" },
  { name: "Relatórios Financeiros", href: "/reports-finance", icon: BarChart3, roles: ["financeiro", "admin"], section: "Financeiro" },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  const filteredNavigation = navigation.filter(item => item.roles.includes(user.role));

  // Group navigation items by section for Admin
  const groupedNavigation = filteredNavigation.reduce((acc, item) => {
    const section = item.section || 'Menu Principal';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(item);
    return acc;
  }, {} as Record<string, typeof navigation>);

  const getRoleDisplay = (role: string) => {
    switch (role) {
      case 'admin': return 'Administrador';
      case 'gestor': return 'Gestor de Operações';
      case 'comercial': return 'Comercial';
      case 'financeiro': return 'Financeiro';
      default: return role;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200/60 transform transition-transform duration-300 ease-out lg:translate-x-0 lg:static lg:flex-shrink-0 flex flex-col shadow-2xl lg:shadow-none",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-20 flex items-center px-8 shrink-0">
          <div className="flex items-center gap-3 text-slate-900 font-extrabold text-2xl tracking-tight">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Sparkles size={22} className="text-blue-50" />
            </div>
            FieldSync
          </div>
        </div>
        
        <div className="px-6 pb-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 border border-white shadow-sm flex items-center justify-center text-blue-700 font-bold">
              {user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">{user.name}</p>
              <p className="text-xs text-slate-500 truncate capitalize">{getRoleDisplay(user.role)}</p>
            </div>
          </div>
        </div>

        <nav className="px-4 space-y-6 flex-1 overflow-y-auto custom-scrollbar pb-8">
          {Object.entries(groupedNavigation).map(([section, items]) => (
            <div key={section} className="space-y-1">
              {user.role === 'admin' && section !== 'Geral' && (
                <p className="px-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2 mt-4">{section}</p>
              )}
              {user.role !== 'admin' && section === 'Operações' && (
                <p className="px-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2 mt-4">Menu Principal</p>
              )}
              {user.role !== 'admin' && section === 'Comercial' && (
                <p className="px-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2 mt-4">Menu Principal</p>
              )}
              {user.role !== 'admin' && section === 'Financeiro' && (
                <p className="px-4 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2 mt-4">Menu Principal</p>
              )}
              
              {items.map((item) => {
                // Determine the correct href based on user role
                const href = (user.role !== 'admin' && item.defaultHref) ? item.defaultHref : item.href;
                
                return (
                  <NavLink
                    key={item.name}
                    to={href}
                    className={({ isActive }) => cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group",
                      isActive 
                        ? "bg-blue-50 text-blue-700" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className={cn(
                      "w-5 h-5 transition-colors duration-200",
                      "group-hover:text-blue-600"
                    )} />
                    {item.name}
                  </NavLink>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200/60 mt-auto">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-semibold text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5 group-hover:text-red-600 transition-colors" />
            Sair do Sistema
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top header - Glassmorphism */}
        <header className="h-20 glass border-b border-slate-200/60 flex items-center justify-between px-4 sm:px-8 z-10 shrink-0 sticky top-0">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden sm:block group">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Buscar OS, cliente ou técnico (Pressione '/')" 
                className="pl-12 pr-4 py-2.5 bg-slate-100/80 border border-transparent rounded-xl text-sm font-medium focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all w-64 lg:w-[400px] outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Main scrollable area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
