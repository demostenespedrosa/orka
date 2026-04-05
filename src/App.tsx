/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardGestor from "./pages/DashboardGestor";
import DashboardComercial from "./pages/DashboardComercial";
import DashboardFinanceiro from "./pages/DashboardFinanceiro";
import Tasks from "./pages/Tasks";
import Team from "./pages/Team";
import Clients from "./pages/Clients";
import Map from "./pages/Map";
import Reports from "./pages/Reports";
import ReportsSales from "./pages/ReportsSales";
import ReportsFinance from "./pages/ReportsFinance";
import Contracts from "./pages/Contracts";
import Settings from "./pages/Settings";
import Routing from "./pages/Routing";
import Agenda from "./pages/Agenda";
import CRM from "./pages/CRM";
import Receivables from "./pages/Receivables";
import Payables from "./pages/Payables";
import Billing from "./pages/Billing";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        {/* Default route based on role */}
        <Route index element={
          user?.role === 'admin' ? <DashboardAdmin /> :
          user?.role === 'gestor' ? <DashboardGestor /> : 
          user?.role === 'comercial' ? <DashboardComercial /> : 
          user?.role === 'financeiro' ? <DashboardFinanceiro /> : 
          <Navigate to="/login" replace />
        } />
        
        {/* Admin specific dashboards (if they want to see specific ones) */}
        <Route path="operacoes" element={<DashboardGestor />} />
        <Route path="vendas" element={<DashboardComercial />} />
        <Route path="financeiro-dashboard" element={<DashboardFinanceiro />} />

        {/* Gestor Routes */}
        <Route path="tasks" element={<Tasks />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="routing" element={<Routing />} />
        <Route path="map" element={<Map />} />
        <Route path="team" element={<Team />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />

        {/* Comercial Routes */}
        <Route path="crm" element={<CRM />} />
        <Route path="clients" element={<Clients />} />
        <Route path="contracts" element={<Contracts />} />
        <Route path="reports-sales" element={<ReportsSales />} />

        {/* Financeiro Routes */}
        <Route path="receivables" element={<Receivables />} />
        <Route path="payables" element={<Payables />} />
        <Route path="billing" element={<Billing />} />
        <Route path="reports-finance" element={<ReportsFinance />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
