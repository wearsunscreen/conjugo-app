'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, XCircle, LoaderCircle } from 'lucide-react';

import { checkConjugation } from '@/app/validator/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { TENSES } from '@/lib/verbs';
import type { ValidateConjugationOutput } from '@/ai/flows/validate-conjugation';

const formSchema = z.object({
  verb: z.string().min(1, 'Please enter a verb.'),
  conjugation: z.string().min(1, 'Please enter a conjugation.'),
  tense: z.string().min(1, 'Please select a tense.'),
});

type FormData = z.infer<typeof formSchema>;

export function ValidatorForm() {
  const [result, setResult] = useState<ValidateConjugationOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      verb: '',
      conjugation: '',
      tense: '',
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: FormData) {
    setResult(null);
    try {
      const response = await checkConjugation(data);
      setResult(response);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error instanceof Error ? error.message : 'An unknown error occurred.',
      });
    }
  }

  return (
    <>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Enter Verb Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="verb"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Verb (infinitive)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., comer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="conjugation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conjugation</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., como" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tense"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tense</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tense" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TENSES.map((tense) => (
                          <SelectItem key={tense} value={tense}>{tense}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting && <LoaderCircle className="animate-spin mr-2" />}
                Validate
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {result && (
        <div className="max-w-2xl mx-auto mt-6">
          <Alert variant={result.isValid ? 'default' : 'destructive'} className="shadow-md">
            {result.isValid ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <XCircle className="h-4 w-4" />
            )}
            <AlertTitle className="font-bold">
              {result.isValid ? 'Correct!' : 'Incorrect'}
            </AlertTitle>
            <AlertDescription>{result.explanation}</AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
}
