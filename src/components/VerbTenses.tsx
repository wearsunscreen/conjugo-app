'use client';

import { useState, useEffect } from 'react';
import { useSettings } from '@/context/SettingsContext';
import type { Tense } from '@/lib/types';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { BookText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface VerbTensesProps {
  tenses: Tense[];
  infinitive: string;
}

export function VerbTenses({ tenses, infinitive }: VerbTensesProps) {
  const { includeTu, includeVos } = useSettings();
  const [openTenses, setOpenTenses] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  const storageKey = `conjugaí-expanded-${infinitive}`;

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedState = localStorage.getItem(storageKey);
      if (storedState) {
        setOpenTenses(JSON.parse(storedState));
      }
    } catch (e) {
      console.error('Failed to load accordion state from localStorage', e);
    }
  }, [storageKey]);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(openTenses));
      } catch (e) {
        console.error('Failed to save accordion state to localStorage', e);
      }
    }
  }, [openTenses, storageKey, isMounted]);


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
  
  if (!isMounted) {
    return (
      <div className="w-full space-y-2">
        {tenses.map((tense) => (
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
