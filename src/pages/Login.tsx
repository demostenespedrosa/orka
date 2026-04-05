import React from 'react';
import { Sparkles, Briefcase, DollarSign, LayoutDashboard, ArrowRight, ShieldCheck, Crown } from 'lucide-react';
import { useAuth, Role } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: Role) => {
    login(role);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-blue-500/30 mx-auto mb-6 border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <Sparkles size={40} className="text-blue-50" />
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-3">FieldSync</h1>
          <p className="text-slate-400 text-lg font-medium">Selecione seu ambiente de trabalho</p>
        </div>

        <div className="space-y-3">
          {/* Admin */}
          <button 
            onClick={() => handleLogin('admin')}
            className="w-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-xl p-5 rounded-3xl border border-indigo-500/30 shadow-2xl hover:bg-indigo-500/20 hover:border-indigo-400/50 hover:-translate-y-1 transition-all duration-300 group text-left flex items-center gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors border border-indigo-500/30">
              <Crown className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">Administrador</h3>
              <p className="text-xs text-slate-400 mt-0.5">Visão completa (Sistema Único)</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
            </div>
          </button>

          {/* Gestor */}
          <button 
            onClick={() => handleLogin('gestor')}
            className="w-full bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 group text-left flex items-center gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors border border-blue-500/30">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Operações</h3>
              <p className="text-xs text-slate-400 mt-0.5">Gestão de equipes, rotas e OS</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
          </button>

          {/* Comercial */}
          <button 
            onClick={() => handleLogin('comercial')}
            className="w-full bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 group text-left flex items-center gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors border border-amber-500/30">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Comercial</h3>
              <p className="text-xs text-slate-400 mt-0.5">CRM, propostas e conversões</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </div>
          </button>

          {/* Financeiro */}
          <button 
            onClick={() => handleLogin('financeiro')}
            className="w-full bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 group text-left flex items-center gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors border border-emerald-500/30">
              <DollarSign className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Financeiro</h3>
              <p className="text-xs text-slate-400 mt-0.5">Faturamento e fluxo de caixa</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-slate-500 text-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>Acesso seguro e criptografado</span>
        </div>
      </div>
    </div>
  );
}
