'use client';

import { useSettings } from '@/context/SettingsContext';
import type { Tense } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { BookText } from 'lucide-react';

interface VerbTensesProps {
  tenses: Tense[];
}

export function VerbTenses({ tenses }: VerbTensesProps) {
  const { includeTu, includeVos } = useSettings();

  const filteredTenses = tenses.map((tense) => ({
    ...tense,
    conjugations: tense.conjugations.filter((conj) => {
      if (!includeTu && conj.person === 'tu') {
        return false;
      }
      if (!includeVos && conj.person === 'vós') {
        return false;
      }
      return true;
    }),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredTenses.map((tense) => (
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
  );
}
