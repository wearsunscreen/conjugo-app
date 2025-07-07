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
      },
      {
        name: 'Pretérito Imperfeito do Indicativo',
        conjugations: [
            { person: 'eu', form: 'falava', isIrregular: false },
            { person: 'tu', form: 'falavas', isIrregular: false },
            { person: 'ele/ela', form: 'falava', isIrregular: false },
            { person: 'nós', form: 'falávamos', isIrregular: false },
            { person: 'vós', form: 'faláveis', isIrregular: false },
            { person: 'eles/elas', form: 'falavam', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Mais-que-perfeito do Indicativo',
        conjugations: [
            { person: 'eu', form: 'falara', isIrregular: false },
            { person: 'tu', form: 'falaras', isIrregular: false },
            { person: 'ele/ela', form: 'falara', isIrregular: false },
            { person: 'nós', form: 'faláramos', isIrregular: false },
            { person: 'vós', form: 'faláreis', isIrregular: false },
            { person: 'eles/elas', form: 'falaram', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Presente do Indicativo',
        conjugations: [
            { person: 'eu', form: 'falarei', isIrregular: false },
            { person: 'tu', form: 'falarás', isIrregular: false },
            { person: 'ele/ela', form: 'falará', isIrregular: false },
            { person: 'nós', form: 'falaremos', isIrregular: false },
            { person: 'vós', form: 'falareis', isIrregular: false },
            { person: 'eles/elas', form: 'falarão', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Pretérito do Indicativo',
        conjugations: [
            { person: 'eu', form: 'falaria', isIrregular: false },
            { person: 'tu', form: 'falarias', isIrregular: false },
            { person: 'ele/ela', form: 'falaria', isIrregular: false },
            { person: 'nós', form: 'falaríamos', isIrregular: false },
            { person: 'vós', form: 'falaríeis', isIrregular: false },
            { person: 'eles/elas', form: 'falariam', isIrregular: false },
        ],
      },
      {
        name: 'Imperativo Afirmativo',
        conjugations: [
          { person: 'tu', form: 'fala', isIrregular: false },
          { person: 'você', form: 'fale', isIrregular: false },
          { person: 'nós', form: 'falemos', isIrregular: false },
          { person: 'vós', form: 'falai', isIrregular: false },
          { person: 'vocês', form: 'falem', isIrregular: false },
        ]
      },
      {
        name: 'Imperativo Negativo',
        conjugations: [
          { person: 'tu', form: 'não fales', isIrregular: false },
          { person: 'você', form: 'não fale', isIrregular: false },
          { person: 'nós', form: 'não falemos', isIrregular: false },
          { person: 'vós', form: 'não faleis', isIrregular: false },
          { person: 'vocês', form: 'não falem', isIrregular: false },
        ]
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
      },
      {
        name: 'Pretérito Mais-que-perfeito do Indicativo',
        conjugations: [
            { person: 'eu', form: 'fora', isIrregular: true },
            { person: 'tu', form: 'foras', isIrregular: true },
            { person: 'ele/ela', form: 'fora', isIrregular: true },
            { person: 'nós', form: 'fôramos', isIrregular: true },
            { person: 'vós', form: 'fôreis', isIrregular: true },
            { person: 'eles/elas', form: 'foram', isIrregular: true },
        ],
      },
      {
        name: 'Futuro do Presente do Indicativo',
        conjugations: [
            { person: 'eu', form: 'serei', isIrregular: true },
            { person: 'tu', form: 'serás', isIrregular: true },
            { person: 'ele/ela', form: 'será', isIrregular: true },
            { person: 'nós', form: 'seremos', isIrregular: true },
            { person: 'vós', form: 'sereis', isIrregular: true },
            { person: 'eles/elas', form: 'serão', isIrregular: true },
        ],
      },
      {
        name: 'Futuro do Pretérito do Indicativo',
        conjugations: [
            { person: 'eu', form: 'seria', isIrregular: true },
            { person: 'tu', form: 'serias', isIrregular: true },
            { person: 'ele/ela', form: 'seria', isIrregular: true },
            { person: 'nós', form: 'seríamos', isIrregular: true },
            { person: 'vós', form: 'seríeis', isIrregular: true },
            { person: 'eles/elas', form: 'seriam', isIrregular: true },
        ],
      },
      {
        name: 'Imperativo Afirmativo',
        conjugations: [
          { person: 'tu', form: 'sê', isIrregular: true },
          { person: 'você', form: 'seja', isIrregular: true },
          { person: 'nós', form: 'sejamos', isIrregular: true },
          { person: 'vós', form: 'sede', isIrregular: true },
          { person: 'vocês', form: 'sejam', isIrregular: true },
        ]
      },
      {
        name: 'Imperativo Negativo',
        conjugations: [
          { person: 'tu', form: 'não sejas', isIrregular: true },
          { person: 'você', form: 'não seja', isIrregular: true },
          { person: 'nós', form: 'não sejamos', isIrregular: true },
          { person: 'vós', form: 'não sejais', isIrregular: true },
          { person: 'vocês', form: 'não sejam', isIrregular: true },
        ]
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
      },
      {
        name: 'Pretérito Imperfeito do Indicativo',
        conjugations: [
            { person: 'eu', form: 'tinha', isIrregular: true },
            { person: 'tu', form: 'tinhas', isIrregular: true },
            { person: 'ele/ela', form: 'tinha', isIrregular: true },
            { person: 'nós', form: 'tínhamos', isIrregular: true },
            { person: 'vós', form: 'tínheis', isIrregular: true },
            { person: 'eles/elas', form: 'tinham', isIrregular: true },
        ],
      },
      {
        name: 'Pretérito Mais-que-perfeito do Indicativo',
        conjugations: [
            { person: 'eu', form: 'tivera', isIrregular: true },
            { person: 'tu', form: 'tiveras', isIrregular: true },
            { person: 'ele/ela', form: 'tivera', isIrregular: true },
            { person: 'nós', form: 'tivéramos', isIrregular: true },
            { person: 'vós', form: 'tivéreis', isIrregular: true },
            { person: 'eles/elas', form: 'tiveram', isIrregular: true },
        ],
      },
      {
        name: 'Futuro do Presente do Indicativo',
        conjugations: [
            { person: 'eu', form: 'terei', isIrregular: true },
            { person: 'tu', form: 'terás', isIrregular: true },
            { person: 'ele/ela', form: 'terá', isIrregular: true },
            { person: 'nós', form: 'teremos', isIrregular: false },
            { person: 'vós', form: 'tereis', isIrregular: true },
            { person: 'eles/elas', form: 'terão', isIrregular: true },
        ],
      },
      {
        name: 'Futuro do Pretérito do Indicativo',
        conjugations: [
            { person: 'eu', form: 'teria', isIrregular: true },
            { person: 'tu', form: 'terias', isIrregular: true },
            { person: 'ele/ela', form: 'teria', isIrregular: true },
            { person: 'nós', form: 'teríamos', isIrregular: false },
            { person: 'vós', form: 'teríeis', isIrregular: true },
            { person: 'eles/elas', form: 'teriam', isIrregular: true },
        ],
      },
      {
        name: 'Imperativo Afirmativo',
        conjugations: [
          { person: 'tu', form: 'tem', isIrregular: true },
          { person: 'você', form: 'tenha', isIrregular: true },
          { person: 'nós', form: 'tenhamos', isIrregular: true },
          { person: 'vós', form: 'tende', isIrregular: true },
          { person: 'vocês', form: 'tenham', isIrregular: true },
        ]
      },
      {
        name: 'Imperativo Negativo',
        conjugations: [
          { person: 'tu', form: 'não tenhas', isIrregular: true },
          { person: 'você', form: 'não tenha', isIrregular: true },
          { person: 'nós', form: 'não tenhamos', isIrregular: true },
          { person: 'vós', form: 'não tenhais', isIrregular: true },
          { person: 'vocês', form: 'não tenham', isIrregular: true },
        ]
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
        },
        {
            name: 'Pretérito Imperfeito do Indicativo',
            conjugations: [
                { person: 'eu', form: 'ia', isIrregular: true },
                { person: 'tu', form: 'ias', isIrregular: true },
                { person: 'ele/ela', form: 'ia', isIrregular: true },
                { person: 'nós', form: 'íamos', isIrregular: true },
                { person: 'vós', form: 'íeis', isIrregular: true },
                { person: 'eles/elas', form: 'iam', isIrregular: true },
            ]
        },
        {
            name: 'Pretérito Mais-que-perfeito do Indicativo',
            conjugations: [
                { person: 'eu', form: 'fora', isIrregular: true },
                { person: 'tu', form: 'foras', isIrregular: true },
                { person: 'ele/ela', form: 'fora', isIrregular: true },
                { person: 'nós', form: 'fôramos', isIrregular: true },
                { person: 'vós', form: 'fôreis', isIrregular: true },
                { person: 'eles/elas', form: 'foram', isIrregular: true },
            ]
        },
        {
            name: 'Futuro do Presente do Indicativo',
            conjugations: [
                { person: 'eu', form: 'irei', isIrregular: true },
                { person: 'tu', form: 'irás', isIrregular: true },
                { person: 'ele/ela', form: 'irá', isIrregular: true },
                { person: 'nós', form: 'iremos', isIrregular: true },
                { person: 'vós', form: 'ireis', isIrregular: true },
                { person: 'eles/elas', form: 'irão', isIrregular: true },
            ]
        },
        {
            name: 'Futuro do Pretérito do Indicativo',
            conjugations: [
                { person: 'eu', form: 'iria', isIrregular: true },
                { person: 'tu', form: 'irias', isIrregular: true },
                { person: 'ele/ela', form: 'iria', isIrregular: true },
                { person: 'nós', form: 'iríamos', isIrregular: true },
                { person: 'vós', form: 'iríeis', isIrregular: true },
                { person: 'eles/elas', form: 'iriam', isIrregular: true },
            ]
        },
        {
            name: 'Imperativo Afirmativo',
            conjugations: [
                { person: 'tu', form: 'vai', isIrregular: true },
                { person: 'você', form: 'vá', isIrregular: true },
                { person: 'nós', form: 'vamos', isIrregular: true },
                { person: 'vós', form: 'ide', isIrregular: true },
                { person: 'vocês', form: 'vão', isIrregular: true },
            ]
        },
        {
            name: 'Imperativo Negativo',
            conjugations: [
                { person: 'tu', form: 'não vás', isIrregular: true },
                { person: 'você', form: 'não vá', isIrregular: true },
                { person: 'nós', form: 'não vamos', isIrregular: true },
                { person: 'vós', form: 'não vades', isIrregular: true },
                { person: 'vocês', form: 'não vão', isIrregular: true },
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
