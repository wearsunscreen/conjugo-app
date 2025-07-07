import { getVerbByInfinitive, getAllVerbs } from '@/lib/verbs';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { BookText } from 'lucide-react';

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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {verbData.tenses.map((tense) => (
          <Card key={tense.name} className="flex flex-col shadow-md hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-xl text-primary/90">
                <BookText className="h-5 w-5" />
                {tense.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Person</TableHead>
                    <TableHead>Conjugation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tense.conjugations.map((conj) => (
                    <TableRow key={conj.person}>
                      <TableCell className="text-muted-foreground">{conj.person}</TableCell>
                      <TableCell className={cn(conj.isIrregular && 'font-bold text-primary')}>
                        {conj.form}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const verbs = getAllVerbs();
  return verbs.map((verb) => ({
    verb: verb.infinitive,
  }));
}
