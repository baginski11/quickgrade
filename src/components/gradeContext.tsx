'use client';
import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from 'react';

interface GradeContextProps {
  grades: number[];
  setGrades: React.Dispatch<React.SetStateAction<number[]>>;
  grade: string;
  setGrade: React.Dispatch<React.SetStateAction<string>>;
}

const GradeContext = createContext<GradeContextProps>({} as GradeContextProps);

export const GradeProvider = ({ children }: PropsWithChildren) => {
  const [grades, setGrades] = useState<number[]>([]);
  const [grade, setGrade] = useState<string>('');

  return (
    <GradeContext.Provider value={{ grades, setGrades, grade, setGrade }}>
      {children}
    </GradeContext.Provider>
  );
};

export const useGradeContext = () => {
  const context = useContext(GradeContext);
  if (context === undefined) {
    throw new Error('useGradeContext must be used within a GradeProvider');
  }
  return context;
};
