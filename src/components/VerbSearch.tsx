'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { VerbData } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

export function VerbSearch({ verbs }: { verbs: VerbData[] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVerbs = verbs.filter((verb) =>
    verb.infinitive.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Input
          type="search"
          placeholder="Type a verb... (e.g., 'ser', 'falar')"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-lg p-6 rounded-full shadow-lg"
          aria-label="Search for a verb"
        />
      </div>
      <Card className="mt-4 shadow-lg">
        <CardContent className="p-0">
          <ScrollArea className="h-96">
            <div className="p-4">
              {filteredVerbs.length > 0 ? (
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {filteredVerbs.map((verb) => (
                    <li key={verb.infinitive}>
                      <Button variant="ghost" asChild className="w-full justify-start">
                        <Link
                          href={`/verb/${verb.infinitive}`}
                          className="font-medium"
                        >
                          {verb.infinitive}
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-muted-foreground p-8">
                  No verbs found.
                </p>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
