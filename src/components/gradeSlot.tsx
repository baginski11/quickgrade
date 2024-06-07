'use client';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { useGradeContext } from '@/components/gradeContext';
export default function GradeSlot({ grade }: { grade: number }) {
  const { setGrades, grades } = useGradeContext();

  const onDelete = () => {
    const index = grades.findIndex(g => g === grade);
    if (index !== -1) {
      const newGrades = [...grades];
      newGrades.splice(index, 1);
      setGrades(newGrades);
    }
  };

  return (
    <div className="group relative flex h-9 w-9 items-center justify-center rounded-md border border-border">
      <Label className="font-semibold">{grade}</Label>
      <div
        onClick={onDelete}
        className="absolute -right-2 -top-2 hidden rounded-md border border-neutral-400/30 bg-neutral-300/30 p-1 backdrop-blur-[2px] group-hover:flex"
      >
        <X className="h-3 w-3 text-black" />
      </div>
    </div>
  );
}
