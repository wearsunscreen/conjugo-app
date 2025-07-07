import type { VerbData } from './types';

export const TENSES = [
  "Presente do Indicativo",
  "Pretérito Perfeito do Indicativo",
  "Pretérito Imperfeito do Indicativo",
  "Pretérito Mais-que-perfeito do Indicativo",
  "Futuro do Presente do Indicativo",
  "Futuro do Pretérito do Indicativo",
  "Presente do Subjuntivo",
  "Pretérito Imperfeito do Subjuntivo",
  "Futuro do Subjuntivo",
  "Imperativo Afirmativo",
  "Imperativo Negativo",
  "Infinitivo Pessoal",
];

const verbs: VerbData[] = [
  {
    infinitive: 'falar',
    tenses: [
      {
        name: 'Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'falo', isIrregular: false },
          { person: 'tu', form: 'falas', isIrregular: false },
          { person: 'ele/ela', form: 'fala', isIrregular: false },
          { person: 'nós', form: 'falamos', isIrregular: false },
          { person: 'vós', form: 'falais', isIrregular: false },
          { person: 'eles/elas', form: 'falam', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'falei', isIrregular: false },
          { person: 'tu', form: 'falaste', isIrregular: false },
          { person: 'ele/ela', form: 'falou', isIrregular: false },
          { person: 'nós', form: 'falámos', isIrregular: false },
          { person: 'vós', form: 'falastes', isIrregular: false },
          { person: 'eles/elas', form: 'falaram', isIrregular: false },
        ],
      }
    ],
  },
  {
    infinitive: 'ser',
    tenses: [
      {
        name: 'Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'sou', isIrregular: true },
          { person: 'tu', form: 'és', isIrregular: true },
          { person: 'ele/ela', form: 'é', isIrregular: true },
          { person: 'nós', form: 'somos', isIrregular: true },
          { person: 'vós', form: 'sois', isIrregular: true },
          { person: 'eles/elas', form: 'são', isIrregular: true },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'era', isIrregular: true },
          { person: 'tu', form: 'eras', isIrregular: true },
          { person: 'ele/ela', form: 'era', isIrregular: true },
          { person: 'nós', form: 'éramos', isIrregular: true },
          { person: 'vós', form: 'éreis', isIrregular: true },
          { person: 'eles/elas', form: 'eram', isIrregular: true },
        ],
      }
    ],
  },
  {
    infinitive: 'ter',
    tenses: [
      {
        name: 'Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'tenho', isIrregular: true },
          { person: 'tu', form: 'tens', isIrregular: true },
          { person: 'ele/ela', form: 'tem', isIrregular: true },
          { person: 'nós', form: 'temos', isIrregular: false },
          { person: 'vós', form: 'tendes', isIrregular: true },
          { person: 'eles/elas', form: 'têm', isIrregular: true },
        ],
      },
       {
        name: 'Futuro do Subjuntivo',
        conjugations: [
          { person: 'quando eu', form: 'tiver', isIrregular: true },
          { person: 'quando tu', form: 'tiveres', isIrregular: true },
          { person: 'quando ele', form: 'tiver', isIrregular: true },
          { person: 'quando nós', form: 'tivermos', isIrregular: true },
          { person: 'quando vós', form: 'tiverdes', isIrregular: true },
          { person: 'quando eles', form: 'tiverem', isIrregular: true },
        ],
      }
    ],
  },
  {
    infinitive: 'ir',
    tenses: [
        {
            name: 'Presente do Indicativo',
            conjugations: [
                { person: 'eu', form: 'vou', isIrregular: true },
                { person: 'tu', form: 'vais', isIrregular: true },
                { person: 'ele/ela', form: 'vai', isIrregular: true },
                { person: 'nós', form: 'vamos', isIrregular: true },
                { person: 'vós', form: 'ides', isIrregular: true },
                { person: 'eles/elas', form: 'vão', isIrregular: true },
            ]
        },
        {
            name: 'Pretérito Perfeito do Indicativo',
            conjugations: [
                { person: 'eu', form: 'fui', isIrregular: true },
                { person: 'tu', form: 'foste', isIrregular: true },
                { person: 'ele/ela', form: 'foi', isIrregular: true },
                { person: 'nós', form: 'fomos', isIrregular: true },
                { person: 'vós', form: 'fostes', isIrregular: true },
                { person: 'eles/elas', form: 'foram', isIrregular: true },
            ]
        }
    ]
  }
];

export function getAllVerbs() {
  return verbs;
}

export function getVerbByInfinitive(infinitive: string): VerbData | undefined {
  return verbs.find((v) => v.infinitive.toLowerCase() === infinitive.toLowerCase());
}
