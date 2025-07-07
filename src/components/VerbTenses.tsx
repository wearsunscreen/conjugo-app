'use client';

import { useSettings } from '@/context/SettingsContext';
import type { Tense } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { BookText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface VerbTensesProps {
  tenses: Tense[];
}

export function VerbTenses({ tenses }: VerbTensesProps) {
  const { includeTu, includeVos } = useSettings();

  const filteredTenses = tenses.map((tense) => ({
    ...tense,
    conjugations: tense.conjugations.filter((conj) => {
      if (!includeTu && conj.person.toLowerCase() === 'tu') {
        return false;
      }
      if (!includeVos && conj.person.toLowerCase() === 'vós') {
        return false;
      }
      // Special filter for imperative forms
      if (tense.name.includes("Imperativo")) {
         if (conj.person === 'eu') return false;
      }
      return true;
    }),
  }));

  return (
    <Accordion type="multiple" className="w-full space-y-2">
      {filteredTenses.map((tense) => (
        <AccordionItem value={tense.name} key={tense.name} className="border-b-0 rounded-lg shadow-md bg-card transition-shadow hover:shadow-lg">
          <AccordionTrigger className="px-4 py-3 font-headline text-lg text-primary/90 hover:no-underline rounded-lg">
            <div className="flex items-center gap-3">
              <BookText className="h-5 w-5" />
              <span>{tense.name}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-2 pt-0 pb-2">
            <Table>
              <TableBody>
                {tense.conjugations.map((conj) => (
                  <TableRow key={conj.person} className="border-none">
                    <TableCell className="w-1/3 py-2 text-muted-foreground capitalize">{conj.person}</TableCell>
                    <TableCell className={cn("py-2", conj.isIrregular && 'font-bold text-primary')}>
                      {conj.form}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
