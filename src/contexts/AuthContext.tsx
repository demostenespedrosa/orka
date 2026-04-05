import React, { createContext, useContext, useState, useEffect } from 'react';

export type Role = 'gestor' | 'comercial' | 'financeiro' | 'admin';

interface User {
  id: string;
  name: string;
  role: Role;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Check local storage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('fieldSyncUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (role: Role) => {
    let newUser: User;
    
    switch (role) {
      case 'admin':
        newUser = { id: '0', name: 'Administrador Principal', role: 'admin', email: 'admin@fieldsync.com' };
        break;
      case 'gestor':
        newUser = { id: '1', name: 'João Silva', role: 'gestor', email: 'joao.gestor@fieldsync.com' };
        break;
      case 'comercial':
        newUser = { id: '2', name: 'Ana Souza', role: 'comercial', email: 'ana.comercial@fieldsync.com' };
        break;
      case 'financeiro':
        newUser = { id: '3', name: 'Carlos Mendes', role: 'financeiro', email: 'carlos.financeiro@fieldsync.com' };
        break;
    }

    setUser(newUser);
    localStorage.setItem('fieldSyncUser', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fieldSyncUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
