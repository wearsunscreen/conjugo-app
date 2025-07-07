// 'use server';
/**
 * @fileOverview AI agent that validates the conjugation of a Portuguese verb.
 *
 * - validateConjugation - A function that validates the conjugation of a Portuguese verb.
 * - ValidateConjugationInput - The input type for the validateConjugation function.
 * - ValidateConjugationOutput - The return type for the validateConjugation function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ValidateConjugationInputSchema = z.object({
  verb: z.string().describe('The Portuguese verb to validate.'),
  conjugation: z.string().describe('The conjugation of the verb to validate.'),
  tense: z.string().describe('The tense of the verb conjugation.'),
});

export type ValidateConjugationInput = z.infer<typeof ValidateConjugationInputSchema>;

const ValidateConjugationOutputSchema = z.object({
  isValid: z.boolean().describe('Whether the provided conjugation is valid or not.'),
  explanation: z
    .string()
    .describe('An explanation of why the conjugation is valid or invalid.'),
});

export type ValidateConjugationOutput = z.infer<typeof ValidateConjugationOutputSchema>;

export async function validateConjugation(
  input: ValidateConjugationInput
): Promise<ValidateConjugationOutput> {
  return validateConjugationFlow(input);
}

const validateConjugationPrompt = ai.definePrompt({
  name: 'validateConjugationPrompt',
  input: {schema: ValidateConjugationInputSchema},
  output: {schema: ValidateConjugationOutputSchema},
  prompt: `You are an expert Portuguese language tutor.

You will be given a verb, a conjugation, and a tense.

You must determine if the conjugation is valid for the given verb and tense.

If it is valid, you must set the isValid output field to true, and provide a brief explanation as to why it is valid.
If it is invalid, you must set the isValid output field to false, and provide a brief explanation as to why it is invalid.

Verb: {{{verb}}}
Conjugation: {{{conjugation}}}
Tense: {{{tense}}}`,
});

const validateConjugationFlow = ai.defineFlow(
  {
    name: 'validateConjugationFlow',
    inputSchema: ValidateConjugationInputSchema,
    outputSchema: ValidateConjugationOutputSchema,
  },
  async input => {
    const {output} = await validateConjugationPrompt(input);
    return output!;
  }
);
