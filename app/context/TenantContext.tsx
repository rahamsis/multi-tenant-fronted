"use client";

import { createContext, useContext } from "react";

interface TenantContextProps {
  tenant: string;
}

const TenantContext = createContext<TenantContextProps | undefined>(undefined);

export const TenantProvider = ({ tenant, children }: { tenant: string, children: React.ReactNode }) => {
  return (
    <TenantContext.Provider value={{ tenant }}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (!context) throw new Error("useTenant must be used within a TenantProvider");
  return context;
};
