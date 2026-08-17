"use client";

import { createContext, useContext, useState } from "react";

type UserRole = "patient" | "caregiver" | "guardian" | "";

type OnboardingContextType = {
  role: UserRole;
  setRole: (role: UserRole) => void;
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined,
);

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [role, setRole] = useState<UserRole>("");

  return (
    <OnboardingContext.Provider value={{ role, setRole }}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error("useOnboarding must be used inside OnboardingProvider");
  }

  return context;
}
