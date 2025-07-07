import { getVerbByInfinitive, getAllVerbs } from '@/lib/verbs';
import { notFound } from 'next/navigation';
import { VerbTenses } from '@/components/VerbTenses';

interface VerbPageProps {
  params: {
    verb: string;
  };
}

export async function generateMetadata({ params }: VerbPageProps) {
  const verb = decodeURIComponent(params.verb);
  return {
    title: `Conjugaí - ${verb.charAt(0).toUpperCase() + verb.slice(1)}`,
    description: `Conjugations for the Portuguese verb '${verb}'.`,
  };
}

export default function VerbPage({ params }: VerbPageProps) {
  const verbData = getVerbByInfinitive(decodeURIComponent(params.verb));

  if (!verbData) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary capitalize">
        {verbData.infinitive}
      </h1>
      <VerbTenses tenses={verbData.tenses} />
    </div>
  );
}

export async function generateStaticParams() {
  const verbs = getAllVerbs();
  return verbs.map((verb) => ({
    verb: verb.infinitive,
  }));
}
