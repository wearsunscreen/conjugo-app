import { ValidatorForm } from '@/components/validator/ValidatorForm';

export const metadata = {
  title: 'Conjugaí - Verb Validator',
  description: 'Check your Portuguese verb conjugations with our AI-powered tool.',
};

export default function ValidatorPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Verb Conjugation Validator
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Check your Portuguese verb conjugations with our AI-powered tool.
        </p>
      </div>
      <ValidatorForm />
    </div>
  );
}
