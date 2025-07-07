'use server';

import { validateConjugation, type ValidateConjugationInput, type ValidateConjugationOutput } from '@/ai/flows/validate-conjugation';

export async function checkConjugation(data: ValidateConjugationInput): Promise<ValidateConjugationOutput> {
  try {
    const result = await validateConjugation(data);
    return result;
  } catch (e) {
    console.error("Error in checkConjugation server action:", e);
    throw new Error('An error occurred while communicating with the AI validator. Please try again later.');
  }
}
