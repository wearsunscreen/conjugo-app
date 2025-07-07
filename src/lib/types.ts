export interface Conjugation {
  person: string;
  form: string;
  isIrregular: boolean;
}

export interface Tense {
  name: string;
  conjugations: Conjugation[];
}

export interface VerbData {
  infinitive: string;
  tenses: Tense[];
}
