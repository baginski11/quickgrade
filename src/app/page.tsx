import { Label } from '@/components/ui/label';
import GradeCounter from '@/components/gradeCounter';

export default function Home() {
  return (
    <main className="h-dvw flex w-dvw flex-col items-center justify-center gap-4 p-32">
      <Label className="text-2xl font-semibold text-primary">Quick Grade</Label>
      <Label className="font-medium text-muted-foreground">
        Effortlessly check your average grade with a few clicks.
      </Label>
      <GradeCounter />
    </main>
  );
}
