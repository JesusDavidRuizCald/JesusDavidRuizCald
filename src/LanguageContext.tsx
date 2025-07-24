import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Tipo para los idiomas
type Language = "es" | "en";

// Tipo para el contexto
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

// Crear contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};

// Componente proveedor
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    return stored === "en" || stored === "es" ? stored : "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ Solo exporta LanguageContext aquí
export { LanguageContext };