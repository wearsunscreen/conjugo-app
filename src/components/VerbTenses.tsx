'use client';

import { useSettings } from '@/context/SettingsContext';
import type { Tense } from '@/lib/types';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { BookText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface VerbTensesProps {
  tenses: Tense[];
}

export function VerbTenses({ tenses }: VerbTensesProps) {
  const { includeTu, includeVos, openTenses, setOpenTenses, isMounted, tenseVisibility } = useSettings();

  // Filter tenses based on visibility settings
  const visibleTenses = tenses.filter(tense => tenseVisibility[tense.name]);

  const filteredTenses = visibleTenses.map((tense) => ({
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
  })).filter(tense => tense.conjugations.length > 0);
  
  if (!isMounted) {
    return (
      <div className="w-full space-y-2">
        {visibleTenses.map((tense) => (
          <div key={tense.name} className="h-[58px] rounded-lg shadow-md bg-card w-full animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <Accordion type="multiple" className="w-full space-y-2" value={openTenses} onValueChange={setOpenTenses}>
      {filteredTenses.map((tense) => (
        <AccordionItem value={tense.name} key={tense.name} className="border-b-0 rounded-lg shadow-md bg-card transition-shadow hover:shadow-lg">
          <AccordionTrigger className="px-4 py-3 font-headline text-lg text-primary/90 hover:no-underline rounded-lg">
            <div className="flex items-center gap-3">
              <BookText className="h-5 w-5" />
              <span>{tense.name}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-2 pt-0 pb-1">
            <Table>
              <TableBody>
                {tense.conjugations.map((conj) => (
                  <TableRow key={conj.person} className="border-none">
                    <TableCell className="w-1/3 py-1 text-muted-foreground capitalize text-xs">{conj.person}</TableCell>
                    <TableCell className={cn("py-1 text-sm", conj.isIrregular && 'font-bold text-primary')}>
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
