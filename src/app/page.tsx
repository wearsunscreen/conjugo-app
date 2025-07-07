import { VerbSearch } from '@/components/VerbSearch';
import { getAllVerbs } from '@/lib/verbs';

export default function HomePage() {
  const verbs = getAllVerbs();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Portuguese Verb Conjugations
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find any Portuguese verb conjugation. Start by typing a verb or selecting from the list below.
        </p>
      </div>
      <VerbSearch verbs={verbs} />
    </div>
  );
}
