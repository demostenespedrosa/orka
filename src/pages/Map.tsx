import { MapPin, Navigation, Clock, User, Layers, Maximize, Search } from "lucide-react";

const techs = [
  { id: 1, name: "Carlos Silva", status: "Em serviço", location: "Centro, São Paulo", lat: -23.5505, lng: -46.6333, lastUpdate: "Há 2 min", task: "OS-1042" },
  { id: 2, name: "Ana Souza", status: "Em deslocamento", location: "Pinheiros, São Paulo", lat: -23.5615, lng: -46.6933, lastUpdate: "Há 5 min", task: "OS-1043" },
  { id: 3, name: "Marcos Paulo", status: "Disponível", location: "Base", lat: -23.5815, lng: -46.6833, lastUpdate: "Há 1 min", task: null },
];

export default function Map() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Monitoramento em Mapa</h1>
          <p className="text-slate-500 mt-2 text-base">Acompanhe a localização da sua equipe em tempo real.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar técnico ou OS..." 
              className="pl-12 pr-4 py-2.5 bg-white border border-slate-200/60 rounded-xl text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all w-64 outline-none shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
        {/* Map Area (Mocked) */}
        <div className="flex-1 bg-slate-100 rounded-3xl border border-slate-200/60 overflow-hidden relative shadow-sm">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
          
          {/* Mock Map Markers */}
          <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
            <div className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold mb-2 shadow-lg shadow-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-200">Carlos S.</div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
              <MapPin className="w-10 h-10 text-blue-600 fill-blue-100 drop-shadow-md relative z-10" />
            </div>
          </div>

          <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
            <div className="bg-amber-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold mb-2 shadow-lg shadow-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-200">Ana S.</div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-20"></div>
              <MapPin className="w-10 h-10 text-amber-500 fill-amber-100 drop-shadow-md relative z-10" />
            </div>
          </div>

          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
            <div className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold mb-2 shadow-lg shadow-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0 duration-200">Marcos P.</div>
            <div className="relative">
              <MapPin className="w-10 h-10 text-emerald-600 fill-emerald-100 drop-shadow-md relative z-10" />
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <button className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-200/60 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
              <span className="text-2xl font-light leading-none">+</span>
            </button>
            <button className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-200/60 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
              <span className="text-2xl font-light leading-none">-</span>
            </button>
            <button className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-200/60 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors mt-2">
              <Navigation className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-6 right-6 flex flex-col gap-2">
            <button className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-200/60 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
              <Layers className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 bg-white rounded-2xl shadow-lg border border-slate-200/60 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tech List Sidebar */}
        <div className="w-full lg:w-96 bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col shrink-0 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Técnicos em Campo</h3>
            <span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-xs font-bold">{techs.length} Online</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {techs.map(tech => (
              <div key={tech.id} className="p-4 border border-slate-200/60 rounded-2xl hover:border-blue-300 hover:shadow-md cursor-pointer transition-all group bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-slate-900 flex items-center gap-3 group-hover:text-blue-600 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                    {tech.name}
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider
                    ${tech.status === 'Disponível' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 
                      tech.status === 'Em serviço' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 
                      'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                    {tech.status}
                  </span>
                </div>
                <div className="text-sm text-slate-600 space-y-2 pl-13">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="font-medium">{tech.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Atualizado {tech.lastUpdate}</span>
                  </div>
                  {tech.task && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Destino Atual</span>
                      <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-lg">{tech.task}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
