'use client';
import { useEffect, useState } from 'react';
import { InputOTP, InputOTPSlot } from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import GradeSlot from '@/components/gradeSlot';
import { useGradeContext } from '@/components/gradeContext';

const GradeCounter = () => {
  const { grade, grades, setGrades, setGrade } = useGradeContext();
  const [average, setAverage] = useState<string>('');
  const addGrade = (grade: string | null) => {
    if (typeof grade == null) {
      setGrade('');
      return;
    }
    if (typeof grade === 'string') {
      setGrades(prevGrades => [...prevGrades, parseInt(grade)]);
      setGrade('');
    }
  };

  const calculateAverage = () => {
    const sum = grades.reduce((a, b) => a + b, 0);
    return grades.length ? (sum / grades.length).toFixed(2) : 'No grades yet';
  };

  useEffect(() => {
    setAverage(calculateAverage());
  }, [grades]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center gap-3">
        <InputOTP
          autoComplete="off"
          maxLength={1}
          onChange={e => setGrade(e)}
          value={grade}
        >
          <InputOTPSlot className="rounded-md" index={0} />
        </InputOTP>
        <Button onClick={() => addGrade(grade)}>Add Grade</Button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Label className="text-xl font-medium">Grades</Label>
        <div className="items-cente flex gap-2">
          {grades.map(grade => {
            return <GradeSlot grade={grade} />;
          })}
        </div>
      </div>

      <Label className="font-medium">
        Average Grade:{' '}
        <span
          className={`font-semibold ${parseInt(average) < 2 ? 'text-red-500' : parseInt(average) >= 5 ? 'text-green-400' : 'text-orange-400'}`}
        >
          {average}
        </span>
      </Label>
    </div>
  );
};

export default GradeCounter;
