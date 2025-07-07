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
        name: 'Presente do Subjuntivo',
        conjugations: [
          { person: 'que eu', form: 'fale', isIrregular: false },
          { person: 'que tu', form: 'fales', isIrregular: false },
          { person: 'que ele/ela', form: 'fale', isIrregular: false },
          { person: 'que nós', form: 'falemos', isIrregular: false },
          { person: 'que vós', form: 'faleis', isIrregular: false },
          { person: 'que eles/elas', form: 'falem', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Subjuntivo',
        conjugations: [
          { person: 'se eu', form: 'falasse', isIrregular: false },
          { person: 'se tu', form: 'falasses', isIrregular: false },
          { person: 'se ele/ela', form: 'falasse', isIrregular: false },
          { person: 'se nós', form: 'falássemos', isIrregular: false },
          { person: 'se vós', form: 'falásseis', isIrregular: false },
          { person: 'se eles/elas', form: 'falassem', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Subjuntivo',
        conjugations: [
          { person: 'quando eu', form: 'falar', isIrregular: false },
          { person: 'quando tu', form: 'falares', isIrregular: false },
          { person: 'quando ele/ela', form: 'falar', isIrregular: false },
          { person: 'quando nós', form: 'falarmos', isIrregular: false },
          { person: 'quando vós', form: 'falardes', isIrregular: false },
          { person: 'quando eles/elas', form: 'falarem', isIrregular: false },
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
      },
      {
        name: 'Infinitivo Pessoal',
        conjugations: [
          { person: 'eu', form: 'falar', isIrregular: false },
          { person: 'tu', form: 'falares', isIrregular: false },
          { person: 'ele/ela', form: 'falar', isIrregular: false },
          { person: 'nós', form: 'falarmos', isIrregular: false },
          { person: 'vós', form: 'falardes', isIrregular: false },
          { person: 'eles/elas', form: 'falarem', isIrregular: false },
        ],
      },
    ],
  },
  {
    infinitive: 'comer',
    tenses: [
      {
        name: 'Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'como', isIrregular: false },
          { person: 'tu', form: 'comes', isIrregular: false },
          { person: 'ele/ela', form: 'come', isIrregular: false },
          { person: 'nós', form: 'comemos', isIrregular: false },
          { person: 'vós', form: 'comeis', isIrregular: false },
          { person: 'eles/elas', form: 'comem', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'comi', isIrregular: false },
          { person: 'tu', form: 'comeste', isIrregular: false },
          { person: 'ele/ela', form: 'comeu', isIrregular: false },
          { person: 'nós', form: 'comemos', isIrregular: false },
          { person: 'vós', form: 'comestes', isIrregular: false },
          { person: 'eles/elas', form: 'comeram', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'comia', isIrregular: false },
          { person: 'tu', form: 'comias', isIrregular: false },
          { person: 'ele/ela', form: 'comia', isIrregular: false },
          { person: 'nós', form: 'comíamos', isIrregular: false },
          { person: 'vós', form: 'comíeis', isIrregular: false },
          { person: 'eles/elas', form: 'comiam', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Mais-que-perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'comera', isIrregular: false },
          { person: 'tu', form: 'comeras', isIrregular: false },
          { person: 'ele/ela', form: 'comera', isIrregular: false },
          { person: 'nós', form: 'comêramos', isIrregular: false },
          { person: 'vós', form: 'comêreis', isIrregular: false },
          { person: 'eles/elas', form: 'comeram', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'comerei', isIrregular: false },
          { person: 'tu', form: 'comerás', isIrregular: false },
          { person: 'ele/ela', form: 'comerá', isIrregular: false },
          { person: 'nós', form: 'comeremos', isIrregular: false },
          { person: 'vós', form: 'comereis', isIrregular: false },
          { person: 'eles/elas', form: 'comerão', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Pretérito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'comeria', isIrregular: false },
          { person: 'tu', form: 'comerias', isIrregular: false },
          { person: 'ele/ela', form: 'comeria', isIrregular: false },
          { person: 'nós', form: 'comeríamos', isIrregular: false },
          { person: 'vós', form: 'comeríeis', isIrregular: false },
          { person: 'eles/elas', form: 'comeriam', isIrregular: false },
        ],
      },
      {
        name: 'Presente do Subjuntivo',
        conjugations: [
          { person: 'que eu', form: 'coma', isIrregular: false },
          { person: 'que tu', form: 'comas', isIrregular: false },
          { person: 'que ele/ela', form: 'coma', isIrregular: false },
          { person: 'que nós', form: 'comamos', isIrregular: false },
          { person: 'que vós', form: 'comais', isIrregular: false },
          { person: 'que eles/elas', form: 'comam', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Subjuntivo',
        conjugations: [
          { person: 'se eu', form: 'comesse', isIrregular: false },
          { person: 'se tu', form: 'comesses', isIrregular: false },
          { person: 'se ele/ela', form: 'comesse', isIrregular: false },
          { person: 'se nós', form: 'comêssemos', isIrregular: false },
          { person: 'se vós', form: 'comêsseis', isIrregular: false },
          { person: 'se eles/elas', form: 'comessem', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Subjuntivo',
        conjugations: [
          { person: 'quando eu', form: 'comer', isIrregular: false },
          { person: 'quando tu', form: 'comeres', isIrregular: false },
          { person: 'quando ele/ela', form: 'comer', isIrregular: false },
          { person: 'quando nós', form: 'comermos', isIrregular: false },
          { person: 'quando vós', form: 'comerdes', isIrregular: false },
          { person: 'quando eles/elas', form: 'comerem', isIrregular: false },
        ],
      },
      {
        name: 'Imperativo Afirmativo',
        conjugations: [
          { person: 'tu', form: 'come', isIrregular: false },
          { person: 'você', form: 'coma', isIrregular: false },
          { person: 'nós', form: 'comamos', isIrregular: false },
          { person: 'vós', form: 'comei', isIrregular: false },
          { person: 'vocês', form: 'comam', isIrregular: false },
        ]
      },
      {
        name: 'Imperativo Negativo',
        conjugations: [
          { person: 'tu', form: 'não comas', isIrregular: false },
          { person: 'você', form: 'não coma', isIrregular: false },
          { person: 'nós', form: 'não comamos', isIrregular: false },
          { person: 'vós', form: 'não comais', isIrregular: false },
          { person: 'vocês', form: 'não comam', isIrregular: false },
        ]
      },
      {
        name: 'Infinitivo Pessoal',
        conjugations: [
          { person: 'eu', form: 'comer', isIrregular: false },
          { person: 'tu', form: 'comeres', isIrregular: false },
          { person: 'ele/ela', form: 'comer', isIrregular: false },
          { person: 'nós', form: 'comermos', isIrregular: false },
          { person: 'vós', form: 'comerdes', isIrregular: false },
          { person: 'eles/elas', form: 'comerem', isIrregular: false },
        ],
      },
    ],
  },
  {
    infinitive: 'vender',
    tenses: [
      {
        name: 'Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'vendo', isIrregular: false },
          { person: 'tu', form: 'vendes', isIrregular: false },
          { person: 'ele/ela', form: 'vende', isIrregular: false },
          { person: 'nós', form: 'vendemos', isIrregular: false },
          { person: 'vós', form: 'vendeis', isIrregular: false },
          { person: 'eles/elas', form: 'vendem', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'vendi', isIrregular: false },
          { person: 'tu', form: 'vendeste', isIrregular: false },
          { person: 'ele/ela', form: 'vendeu', isIrregular: false },
          { person: 'nós', form: 'vendemos', isIrregular: false },
          { person: 'vós', form: 'vendestes', isIrregular: false },
          { person: 'eles/elas', form: 'venderam', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'vendia', isIrregular: false },
          { person: 'tu', form: 'vendias', isIrregular: false },
          { person: 'ele/ela', form: 'vendia', isIrregular: false },
          { person: 'nós', form: 'vendíamos', isIrregular: false },
          { person: 'vós', form: 'vendíeis', isIrregular: false },
          { person: 'eles/elas', form: 'vendiam', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Mais-que-perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'vendera', isIrregular: false },
          { person: 'tu', form: 'venderas', isIrregular: false },
          { person: 'ele/ela', form: 'vendera', isIrregular: false },
          { person: 'nós', form: 'vendêramos', isIrregular: false },
          { person: 'vós', form: 'vendêreis', isIrregular: false },
          { person: 'eles/elas', form: 'venderam', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'venderei', isIrregular: false },
          { person: 'tu', form: 'venderás', isIrregular: false },
          { person: 'ele/ela', form: 'venderá', isIrregular: false },
          { person: 'nós', form: 'venderemos', isIrregular: false },
          { person: 'vós', form: 'vendereis', isIrregular: false },
          { person: 'eles/elas', form: 'venderão', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Pretérito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'venderia', isIrregular: false },
          { person: 'tu', form: 'venderias', isIrregular: false },
          { person: 'ele/ela', form: 'venderia', isIrregular: false },
          { person: 'nós', form: 'venderíamos', isIrregular: false },
          { person: 'vós', form: 'venderíeis', isIrregular: false },
          { person: 'eles/elas', form: 'venderiam', isIrregular: false },
        ],
      },
      {
        name: 'Presente do Subjuntivo',
        conjugations: [
          { person: 'que eu', form: 'venda', isIrregular: false },
          { person: 'que tu', form: 'vendas', isIrregular: false },
          { person: 'que ele/ela', form: 'venda', isIrregular: false },
          { person: 'que nós', form: 'vendamos', isIrregular: false },
          { person: 'que vós', form: 'vendais', isIrregular: false },
          { person: 'que eles/elas', form: 'vendam', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Subjuntivo',
        conjugations: [
          { person: 'se eu', form: 'vendesse', isIrregular: false },
          { person: 'se tu', form: 'vendesses', isIrregular: false },
          { person: 'se ele/ela', form: 'vendesse', isIrregular: false },
          { person: 'se nós', form: 'vendêssemos', isIrregular: false },
          { person: 'se vós', form: 'vendêsseis', isIrregular: false },
          { person: 'se eles/elas', form: 'vendessem', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Subjuntivo',
        conjugations: [
          { person: 'quando eu', form: 'vender', isIrregular: false },
          { person: 'quando tu', form: 'venderes', isIrregular: false },
          { person: 'quando ele/ela', form: 'vender', isIrregular: false },
          { person: 'quando nós', form: 'vendermos', isIrregular: false },
          { person: 'quando vós', form: 'venderdes', isIrregular: false },
          { person: 'quando eles/elas', form: 'venderem', isIrregular: false },
        ],
      },
      {
        name: 'Imperativo Afirmativo',
        conjugations: [
          { person: 'tu', form: 'vende', isIrregular: false },
          { person: 'você', form: 'venda', isIrregular: false },
          { person: 'nós', form: 'vendamos', isIrregular: false },
          { person: 'vós', form: 'vendei', isIrregular: false },
          { person: 'vocês', form: 'vendam', isIrregular: false },
        ]
      },
      {
        name: 'Imperativo Negativo',
        conjugations: [
          { person: 'tu', form: 'não vendas', isIrregular: false },
          { person: 'você', form: 'não venda', isIrregular: false },
          { person: 'nós', form: 'não vendamos', isIrregular: false },
          { person: 'vós', form: 'não vendais', isIrregular: false },
          { person: 'vocês', form: 'não vendam', isIrregular: false },
        ]
      },
      {
        name: 'Infinitivo Pessoal',
        conjugations: [
          { person: 'eu', form: 'vender', isIrregular: false },
          { person: 'tu', form: 'venderes', isIrregular: false },
          { person: 'ele/ela', form: 'vender', isIrregular: false },
          { person: 'nós', form: 'vendermos', isIrregular: false },
          { person: 'vós', form: 'venderdes', isIrregular: false },
          { person: 'eles/elas', form: 'venderem', isIrregular: false },
        ],
      },
    ],
  },
  {
    infinitive: 'abrir',
    tenses: [
      {
        name: 'Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'abro', isIrregular: false },
          { person: 'tu', form: 'abres', isIrregular: false },
          { person: 'ele/ela', form: 'abre', isIrregular: false },
          { person: 'nós', form: 'abrimos', isIrregular: false },
          { person: 'vós', form: 'abris', isIrregular: false },
          { person: 'eles/elas', form: 'abrem', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'abri', isIrregular: false },
          { person: 'tu', form: 'abriste', isIrregular: false },
          { person: 'ele/ela', form: 'abriu', isIrregular: false },
          { person: 'nós', form: 'abrimos', isIrregular: false },
          { person: 'vós', form: 'abristes', isIrregular: false },
          { person: 'eles/elas', form: 'abriram', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'abria', isIrregular: false },
          { person: 'tu', form: 'abrias', isIrregular: false },
          { person: 'ele/ela', form: 'abria', isIrregular: false },
          { person: 'nós', form: 'abríamos', isIrregular: false },
          { person: 'vós', form: 'abríeis', isIrregular: false },
          { person: 'eles/elas', form: 'abriam', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Mais-que-perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'abrira', isIrregular: false },
          { person: 'tu', form: 'abriras', isIrregular: false },
          { person: 'ele/ela', form: 'abrira', isIrregular: false },
          { person: 'nós', form: 'abríramos', isIrregular: false },
          { person: 'vós', form: 'abríreis', isIrregular: false },
          { person: 'eles/elas', form: 'abriram', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'abrirei', isIrregular: false },
          { person: 'tu', form: 'abrirás', isIrregular: false },
          { person: 'ele/ela', form: 'abrirá', isIrregular: false },
          { person: 'nós', form: 'abriremos', isIrregular: false },
          { person: 'vós', form: 'abrireis', isIrregular: false },
          { person: 'eles/elas', form: 'abrirão', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Pretérito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'abriria', isIrregular: false },
          { person: 'tu', form: 'abririas', isIrregular: false },
          { person: 'ele/ela', form: 'abriria', isIrregular: false },
          { person: 'nós', form: 'abriríamos', isIrregular: false },
          { person: 'vós', form: 'abriríeis', isIrregular: false },
          { person: 'eles/elas', form: 'abririam', isIrregular: false },
        ],
      },
      {
        name: 'Presente do Subjuntivo',
        conjugations: [
          { person: 'que eu', form: 'abra', isIrregular: false },
          { person: 'que tu', form: 'abras', isIrregular: false },
          { person: 'que ele/ela', form: 'abra', isIrregular: false },
          { person: 'que nós', form: 'abramos', isIrregular: false },
          { person: 'que vós', form: 'abrais', isIrregular: false },
          { person: 'que eles/elas', form: 'abram', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Subjuntivo',
        conjugations: [
          { person: 'se eu', form: 'abrisse', isIrregular: false },
          { person: 'se tu', form: 'abrisses', isIrregular: false },
          { person: 'se ele/ela', form: 'abrisse', isIrregular: false },
          { person: 'se nós', form: 'abríssemos', isIrregular: false },
          { person: 'se vós', form: 'abrísseis', isIrregular: false },
          { person: 'se eles/elas', form: 'abrissem', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Subjuntivo',
        conjugations: [
          { person: 'quando eu', form: 'abrir', isIrregular: false },
          { person: 'quando tu', form: 'abrires', isIrregular: false },
          { person: 'quando ele/ela', form: 'abrir', isIrregular: false },
          { person: 'quando nós', form: 'abrirmos', isIrregular: false },
          { person: 'quando vós', form: 'abrirdes', isIrregular: false },
          { person: 'quando eles/elas', form: 'abrirem', isIrregular: false },
        ],
      },
      {
        name: 'Imperativo Afirmativo',
        conjugations: [
          { person: 'tu', form: 'abre', isIrregular: false },
          { person: 'você', form: 'abra', isIrregular: false },
          { person: 'nós', form: 'abramos', isIrregular: false },
          { person: 'vós', form: 'abri', isIrregular: false },
          { person: 'vocês', form: 'abram', isIrregular: false },
        ]
      },
      {
        name: 'Imperativo Negativo',
        conjugations: [
          { person: 'tu', form: 'não abras', isIrregular: false },
          { person: 'você', form: 'não abra', isIrregular: false },
          { person: 'nós', form: 'não abramos', isIrregular: false },
          { person: 'vós', form: 'não abrais', isIrregular: false },
          { person: 'vocês', form: 'não abram', isIrregular: false },
        ]
      },
      {
        name: 'Infinitivo Pessoal',
        conjugations: [
          { person: 'eu', form: 'abrir', isIrregular: false },
          { person: 'tu', form: 'abrires', isIrregular: false },
          { person: 'ele/ela', form: 'abrir', isIrregular: false },
          { person: 'nós', form: 'abrirmos', isIrregular: false },
          { person: 'vós', form: 'abrirdes', isIrregular: false },
          { person: 'eles/elas', form: 'abrirem', isIrregular: false },
        ],
      },
    ],
  },
  {
    infinitive: 'partir',
    tenses: [
      {
        name: 'Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'parto', isIrregular: false },
          { person: 'tu', form: 'partes', isIrregular: false },
          { person: 'ele/ela', form: 'parte', isIrregular: false },
          { person: 'nós', form: 'partimos', isIrregular: false },
          { person: 'vós', form: 'partis', isIrregular: false },
          { person: 'eles/elas', form: 'partem', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'parti', isIrregular: false },
          { person: 'tu', form: 'partiste', isIrregular: false },
          { person: 'ele/ela', form: 'partiu', isIrregular: false },
          { person: 'nós', form: 'partimos', isIrregular: false },
          { person: 'vós', form: 'partistes', isIrregular: false },
          { person: 'eles/elas', form: 'partiram', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'partia', isIrregular: false },
          { person: 'tu', form: 'partias', isIrregular: false },
          { person: 'ele/ela', form: 'partia', isIrregular: false },
          { person: 'nós', form: 'partíamos', isIrregular: false },
          { person: 'vós', form: 'partíeis', isIrregular: false },
          { person: 'eles/elas', form: 'partiam', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Mais-que-perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'partira', isIrregular: false },
          { person: 'tu', form: 'partiras', isIrregular: false },
          { person: 'ele/ela', form: 'partira', isIrregular: false },
          { person: 'nós', form: 'partíramos', isIrregular: false },
          { person: 'vós', form: 'partíreis', isIrregular: false },
          { person: 'eles/elas', form: 'partiram', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Presente do Indicativo',
        conjugations: [
          { person: 'eu', form: 'partirei', isIrregular: false },
          { person: 'tu', form: 'partirás', isIrregular: false },
          { person: 'ele/ela', form: 'partirá', isIrregular: false },
          { person: 'nós', form: 'partiremos', isIrregular: false },
          { person: 'vós', form: 'partireis', isIrregular: false },
          { person: 'eles/elas', form: 'partirão', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Pretérito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'partiria', isIrregular: false },
          { person: 'tu', form: 'partirias', isIrregular: false },
          { person: 'ele/ela', form: 'partiria', isIrregular: false },
          { person: 'nós', form: 'partiríamos', isIrregular: false },
          { person: 'vós', form: 'partiríeis', isIrregular: false },
          { person: 'eles/elas', form: 'partiriam', isIrregular: false },
        ],
      },
      {
        name: 'Presente do Subjuntivo',
        conjugations: [
          { person: 'que eu', form: 'parta', isIrregular: false },
          { person: 'que tu', form: 'partas', isIrregular: false },
          { person: 'que ele/ela', form: 'parta', isIrregular: false },
          { person: 'que nós', form: 'partamos', isIrregular: false },
          { person: 'que vós', form: 'partais', isIrregular: false },
          { person: 'que eles/elas', form: 'partam', isIrregular: false },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Subjuntivo',
        conjugations: [
          { person: 'se eu', form: 'partisse', isIrregular: false },
          { person: 'se tu', form: 'partisses', isIrregular: false },
          { person: 'se ele/ela', form: 'partisse', isIrregular: false },
          { person: 'se nós', form: 'partíssemos', isIrregular: false },
          { person: 'se vós', form: 'partísseis', isIrregular: false },
          { person: 'se eles/elas', form: 'partissem', isIrregular: false },
        ],
      },
      {
        name: 'Futuro do Subjuntivo',
        conjugations: [
          { person: 'quando eu', form: 'partir', isIrregular: false },
          { person: 'quando tu', form: 'partires', isIrregular: false },
          { person: 'quando ele/ela', form: 'partir', isIrregular: false },
          { person: 'quando nós', form: 'partirmos', isIrregular: false },
          { person: 'quando vós', form: 'partirdes', isIrregular: false },
          { person: 'quando eles/elas', form: 'partirem', isIrregular: false },
        ],
      },
      {
        name: 'Imperativo Afirmativo',
        conjugations: [
          { person: 'tu', form: 'parte', isIrregular: false },
          { person: 'você', form: 'parta', isIrregular: false },
          { person: 'nós', form: 'partamos', isIrregular: false },
          { person: 'vós', form: 'parti', isIrregular: false },
          { person: 'vocês', form: 'partam', isIrregular: false },
        ]
      },
      {
        name: 'Imperativo Negativo',
        conjugations: [
          { person: 'tu', form: 'não partas', isIrregular: false },
          { person: 'você', form: 'não parta', isIrregular: false },
          { person: 'nós', form: 'não partamos', isIrregular: false },
          { person: 'vós', form: 'não partais', isIrregular: false },
          { person: 'vocês', form: 'não partam', isIrregular: false },
        ]
      },
      {
        name: 'Infinitivo Pessoal',
        conjugations: [
          { person: 'eu', form: 'partir', isIrregular: false },
          { person: 'tu', form: 'partires', isIrregular: false },
          { person: 'ele/ela', form: 'partir', isIrregular: false },
          { person: 'nós', form: 'partirmos', isIrregular: false },
          { person: 'vós', form: 'partirdes', isIrregular: false },
          { person: 'eles/elas', form: 'partirem', isIrregular: false },
        ],
      },
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
        name: 'Pretérito Perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'fui', isIrregular: true },
          { person: 'tu', form: 'foste', isIrregular: true },
          { person: 'ele/ela', form: 'foi', isIrregular: true },
          { person: 'nós', form: 'fomos', isIrregular: true },
          { person: 'vós', form: 'fostes', isIrregular: true },
          { person: 'eles/elas', form: 'foram', isIrregular: true },
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
        name: 'Presente do Subjuntivo',
        conjugations: [
          { person: 'que eu', form: 'seja', isIrregular: true },
          { person: 'que tu', form: 'sejas', isIrregular: true },
          { person: 'que ele/ela', form: 'seja', isIrregular: true },
          { person: 'que nós', form: 'sejamos', isIrregular: true },
          { person: 'que vós', form: 'sejais', isIrregular: true },
          { person: 'que eles/elas', form: 'sejam', isIrregular: true },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Subjuntivo',
        conjugations: [
          { person: 'se eu', form: 'fosse', isIrregular: true },
          { person: 'se tu', form: 'fosses', isIrregular: true },
          { person: 'se ele/ela', form: 'fosse', isIrregular: true },
          { person: 'se nós', form: 'fôssemos', isIrregular: true },
          { person: 'se vós', form: 'fôsseis', isIrregular: true },
          { person: 'se eles/elas', form: 'fossem', isIrregular: true },
        ],
      },
      {
        name: 'Futuro do Subjuntivo',
        conjugations: [
          { person: 'quando eu', form: 'for', isIrregular: true },
          { person: 'quando tu', form: 'fores', isIrregular: true },
          { person: 'quando ele/ela', form: 'for', isIrregular: true },
          { person: 'quando nós', form: 'formos', isIrregular: true },
          { person: 'quando vós', form: 'fordes', isIrregular: true },
          { person: 'quando eles/elas', form: 'forem', isIrregular: true },
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
      },
      {
        name: 'Infinitivo Pessoal',
        conjugations: [
          { person: 'eu', form: 'ser', isIrregular: true },
          { person: 'tu', form: 'seres', isIrregular: true },
          { person: 'ele/ela', form: 'ser', isIrregular: true },
          { person: 'nós', form: 'sermos', isIrregular: true },
          { person: 'vós', form: 'serdes', isIrregular: true },
          { person: 'eles/elas', form: 'serem', isIrregular: true },
        ],
      },
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
        name: 'Pretérito Perfeito do Indicativo',
        conjugations: [
          { person: 'eu', form: 'tive', isIrregular: true },
          { person: 'tu', form: 'tiveste', isIrregular: true },
          { person: 'ele/ela', form: 'teve', isIrregular: true },
          { person: 'nós', form: 'tivemos', isIrregular: true },
          { person: 'vós', form: 'tivestes', isIrregular: true },
          { person: 'eles/elas', form: 'tiveram', isIrregular: true },
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
        name: 'Presente do Subjuntivo',
        conjugations: [
          { person: 'que eu', form: 'tenha', isIrregular: true },
          { person: 'que tu', form: 'tenhas', isIrregular: true },
          { person: 'que ele/ela', form: 'tenha', isIrregular: true },
          { person: 'que nós', form: 'tenhamos', isIrregular: true },
          { person: 'que vós', form: 'tenhais', isIrregular: true },
          { person: 'que eles/elas', form: 'tenham', isIrregular: true },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Subjuntivo',
        conjugations: [
          { person: 'se eu', form: 'tivesse', isIrregular: true },
          { person: 'se tu', form: 'tivesses', isIrregular: true },
          { person: 'se ele/ela', form: 'tivesse', isIrregular: true },
          { person: 'se nós', form: 'tivéssemos', isIrregular: true },
          { person: 'se vós', form: 'tivésseis', isIrregular: true },
          { person: 'se eles/elas', form: 'tivessem', isIrregular: true },
        ],
      },
      {
        name: 'Futuro do Subjuntivo',
        conjugations: [
          { person: 'quando eu', form: 'tiver', isIrregular: true },
          { person: 'quando tu', form: 'tiveres', isIrregular: true },
          { person: 'quando ele/ela', form: 'tiver', isIrregular: true },
          { person: 'quando nós', form: 'tivermos', isIrregular: true },
          { person: 'quando vós', form: 'tiverdes', isIrregular: true },
          { person: 'quando eles/elas', form: 'tiverem', isIrregular: true },
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
      },
      {
        name: 'Infinitivo Pessoal',
        conjugations: [
          { person: 'eu', form: 'ter', isIrregular: true },
          { person: 'tu', form: 'teres', isIrregular: true },
          { person: 'ele/ela', form: 'ter', isIrregular: true },
          { person: 'nós', form: 'termos', isIrregular: true },
          { person: 'vós', form: 'terdes', isIrregular: true },
          { person: 'eles/elas', form: 'terem', isIrregular: true },
        ],
      },
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
        name: 'Presente do Subjuntivo',
        conjugations: [
          { person: 'que eu', form: 'vá', isIrregular: true },
          { person: 'que tu', form: 'vás', isIrregular: true },
          { person: 'que ele/ela', form: 'vá', isIrregular: true },
          { person: 'que nós', form: 'vamos', isIrregular: true },
          { person: 'que vós', form: 'vades', isIrregular: true },
          { person: 'que eles/elas', form: 'vão', isIrregular: true },
        ],
      },
      {
        name: 'Pretérito Imperfeito do Subjuntivo',
        conjugations: [
          { person: 'se eu', form: 'fosse', isIrregular: true },
          { person: 'se tu', form: 'fosses', isIrregular: true },
          { person: 'se ele/ela', form: 'fosse', isIrregular: true },
          { person: 'se nós', form: 'fôssemos', isIrregular: true },
          { person: 'se vós', form: 'fôsseis', isIrregular: true },
          { person: 'se eles/elas', form: 'fossem', isIrregular: true },
        ],
      },
      {
        name: 'Futuro do Subjuntivo',
        conjugations: [
          { person: 'quando eu', form: 'for', isIrregular: true },
          { person: 'quando tu', form: 'fores', isIrregular: true },
          { person: 'quando ele/ela', form: 'for', isIrregular: true },
          { person: 'quando nós', form: 'formos', isIrregular: true },
          { person: 'quando vós', form: 'fordes', isIrregular: true },
          { person: 'quando eles/elas', form: 'forem', isIrregular: true },
        ],
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
      },
      {
        name: 'Infinitivo Pessoal',
        conjugations: [
          { person: 'eu', form: 'ir', isIrregular: true },
          { person: 'tu', form: 'ires', isIrregular: true },
          { person: 'ele/ela', form: 'ir', isIrregular: true },
          { person: 'nós', form: 'irmos', isIrregular: true },
          { person: 'vós', form: 'irdes', isIrregular: true },
          { person: 'eles/elas', form: 'irem', isIrregular: true },
        ],
      },
    ]
  }
];

export function getAllVerbs() {
  return verbs;
}

export function getVerbByInfinitive(infinitive: string): VerbData | undefined {
  return verbs.find((v) => v.infinitive.toLowerCase() === infinitive.toLowerCase());
}
