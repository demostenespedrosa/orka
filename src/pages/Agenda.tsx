import React, { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Filter, 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  MoreHorizontal
} from "lucide-react";
import { cn } from "../lib/utils";

// Mock data generation for the calendar
const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const getMockEvents = (day: number) => {
  if (day === 15) return [
    { id: 'OS-1042', title: 'Instalação Ar', time: '09:00', type: 'blue', tech: 'Carlos S.' },
    { id: 'OS-1043', title: 'Manutenção', time: '14:00', type: 'amber', tech: 'Ana S.' }
  ];
  if (day === 5) return [{ id: 'OS-1021', title: 'Visita Técnica', time: '10:00', type: 'emerald', tech: 'Marcos P.' }];
  if (day === 12) return [
    { id: 'OS-1035', title: 'Reparo Elétrico', time: '08:30', type: 'red', tech: 'Roberto D.' },
    { id: 'OS-1036', title: 'Orçamento', time: '16:00', type: 'blue', tech: 'Carlos S.' }
  ];
  if (day === 18) return [{ id: 'OS-1050', title: 'Instalação Rede', time: '13:00', type: 'blue', tech: 'Ana S.' }];
  if (day === 22) return [{ id: 'OS-1055', title: 'Manutenção Prev.', time: '09:00', type: 'amber', tech: 'Marcos P.' }];
  if (day === 25) return [{ id: 'OS-1060', title: 'Troca de Peça', time: '11:00', type: 'slate', tech: 'Roberto D.' }];
  return [];
};

const calendarDays = Array.from({ length: 35 }, (_, i) => {
  const day = i - 2; // Offset to start month on a specific weekday (e.g., Wednesday = 1st)
  const isCurrentMonth = day > 0 && day <= 30;
  const isToday = day === 15;
  return {
    day: isCurrentMonth ? day : (day <= 0 ? 31 + day : day - 30),
    isCurrentMonth,
    isToday,
    events: isCurrentMonth ? getMockEvents(day) : []
  };
});

const upcomingTasks = [
  { id: "OS-1042", client: "Tech Solutions Inc", type: "Instalação", time: "Hoje, 09:00", tech: "Carlos Silva", status: "Em andamento" },
  { id: "OS-1043", client: "Supermercado Central", type: "Manutenção", time: "Hoje, 14:00", tech: "Ana Souza", status: "Agendado" },
  { id: "OS-1044", client: "Condomínio Flores", type: "Reparo", time: "Amanhã, 08:00", tech: "Marcos Paulo", status: "Pendente" },
];

export default function Agenda() {
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Agenda Operacional</h1>
          <p className="text-slate-500 mt-2 text-base">Visão completa de agendamentos, técnicos e ordens de serviço.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
            <button 
              onClick={() => setView('month')}
              className={cn("px-4 py-1.5 text-sm font-bold rounded-lg transition-all", view === 'month' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700")}
            >
              Mês
            </button>
            <button 
              onClick={() => setView('week')}
              className={cn("px-4 py-1.5 text-sm font-bold rounded-lg transition-all", view === 'week' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700")}
            >
              Semana
            </button>
            <button 
              onClick={() => setView('day')}
              className={cn("px-4 py-1.5 text-sm font-bold rounded-lg transition-all", view === 'day' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700")}
            >
              Dia
            </button>
          </div>
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors flex items-center gap-2 shadow-sm">
            <Filter className="w-4 h-4" /> Filtros
          </button>
          <button className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-blue-600/20">
            <Plus className="w-4 h-4" /> Agendar OS
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
        {/* Calendar Main Area */}
        <div className="flex-1 bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col overflow-hidden">
          {/* Calendar Toolbar */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-extrabold text-slate-900">Abril 2026</h2>
              <div className="flex items-center gap-1 bg-white border border-slate-200/60 rounded-lg p-1 shadow-sm">
                <button className="p-1.5 hover:bg-slate-100 rounded-md text-slate-600 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="px-3 py-1.5 text-sm font-bold text-slate-700 hover:bg-slate-100 rounded-md transition-colors">
                  Hoje
                </button>
                <button className="p-1.5 hover:bg-slate-100 rounded-md text-slate-600 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="flex-1 flex flex-col overflow-hidden bg-slate-200/60 gap-px p-px">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-px shrink-0">
              {daysOfWeek.map(day => (
                <div key={day} className="bg-slate-50 py-3 text-center text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Days Grid */}
            <div className="flex-1 grid grid-cols-7 gap-px overflow-y-auto custom-scrollbar">
              {calendarDays.map((date, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "min-h-[120px] p-2 transition-colors hover:bg-slate-50 group flex flex-col",
                    date.isCurrentMonth ? "bg-white" : "bg-slate-50/50"
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={cn(
                      "w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold",
                      date.isToday ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : 
                      date.isCurrentMonth ? "text-slate-700" : "text-slate-400"
                    )}>
                      {date.day}
                    </span>
                    {date.isCurrentMonth && (
                      <button className="w-6 h-6 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Plus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  
                  {/* Events */}
                  <div className="flex-1 space-y-1.5 overflow-y-auto custom-scrollbar pr-1">
                    {date.events.map((event, j) => {
                      const colorStyles = {
                        blue: "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100",
                        emerald: "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100",
                        amber: "bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100",
                        red: "bg-red-50 text-red-700 border-red-100 hover:bg-red-100",
                        slate: "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200",
                      }[event.type as string];

                      return (
                        <div 
                          key={j} 
                          className={cn(
                            "px-2 py-1.5 rounded-lg border text-xs font-bold cursor-pointer transition-colors flex flex-col gap-1",
                            colorStyles
                          )}
                          title={`${event.title} - ${event.tech}`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="truncate">{event.time}</span>
                            <span className="truncate opacity-70">{event.id}</span>
                          </div>
                          <span className="truncate font-medium">{event.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Upcoming & Techs */}
        <div className="w-full lg:w-96 flex flex-col gap-6 shrink-0 overflow-hidden">
          {/* Mini Calendar / Date Picker could go here, but let's focus on Actionable items */}
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col flex-1 overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Próximos Agendamentos</h3>
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30">
              {upcomingTasks.map((task, i) => (
                <div key={i} className="bg-white border border-slate-200/60 p-4 rounded-2xl shadow-sm hover:border-blue-300 transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{task.id}</span>
                    <span className={cn(
                      "text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider",
                      task.status === 'Em andamento' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                      task.status === 'Agendado' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                      'bg-slate-50 text-slate-600 border border-slate-200'
                    )}>
                      {task.status}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-700 mb-3">{task.client}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <Clock className="w-4 h-4 text-slate-400" />
                      {task.time}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <User className="w-4 h-4 text-slate-400" />
                      {task.tech}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100 bg-white">
              <button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-colors border border-slate-200/60">
                Ver todos os agendamentos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
