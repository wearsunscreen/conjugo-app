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
  },
  {
    infinitive: 'vir',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'venho', isIrregular: true }, { person: 'tu', form: 'vens', isIrregular: true }, { person: 'ele/ela', form: 'vem', isIrregular: true }, { person: 'nós', form: 'vimos', isIrregular: true }, { person: 'vós', form: 'vindes', isIrregular: true }, { person: 'eles/elas', form: 'vêm', isIrregular: true } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'vim', isIrregular: true }, { person: 'tu', form: 'vieste', isIrregular: true }, { person: 'ele/ela', form: 'veio', isIrregular: true }, { person: 'nós', form: 'viemos', isIrregular: true }, { person: 'vós', form: 'viestes', isIrregular: true }, { person: 'eles/elas', form: 'vieram', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'vinha', isIrregular: true }, { person: 'tu', form: 'vinhas', isIrregular: true }, { person: 'ele/ela', form: 'vinha', isIrregular: true }, { person: 'nós', form: 'vínhamos', isIrregular: true }, { person: 'vós', form: 'vínheis', isIrregular: true }, { person: 'eles/elas', form: 'vinham', isIrregular: true } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'viera', isIrregular: true }, { person: 'tu', form: 'vieras', isIrregular: true }, { person: 'ele/ela', form: 'viera', isIrregular: true }, { person: 'nós', form: 'viéramos', isIrregular: true }, { person: 'vós', form: 'viéreis', isIrregular: true }, { person: 'eles/elas', form: 'vieram', isIrregular: true } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'virei', isIrregular: true }, { person: 'tu', form: 'virás', isIrregular: true }, { person: 'ele/ela', form: 'virá', isIrregular: true }, { person: 'nós', form: 'viremos', isIrregular: true }, { person: 'vós', form: 'vireis', isIrregular: true }, { person: 'eles/elas', form: 'virão', isIrregular: true } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'viria', isIrregular: true }, { person: 'tu', form: 'virias', isIrregular: true }, { person: 'ele/ela', form: 'viria', isIrregular: true }, { person: 'nós', form: 'viríamos', isIrregular: true }, { person: 'vós', form: 'viríeis', isIrregular: true }, { person: 'eles/elas', form: 'viriam', isIrregular: true } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'venha', isIrregular: true }, { person: 'que tu', form: 'venhas', isIrregular: true }, { person: 'que ele/ela', form: 'venha', isIrregular: true }, { person: 'que nós', form: 'venhamos', isIrregular: true }, { person: 'que vós', form: 'venhais', isIrregular: true }, { person: 'que eles/elas', form: 'venham', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'viesse', isIrregular: true }, { person: 'se tu', form: 'viesses', isIrregular: true }, { person: 'se ele/ela', form: 'viesse', isIrregular: true }, { person: 'se nós', form: 'viéssemos', isIrregular: true }, { person: 'se vós', form: 'viésseis', isIrregular: true }, { person: 'se eles/elas', form: 'viessem', isIrregular: true } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'vier', isIrregular: true }, { person: 'quando tu', form: 'vieres', isIrregular: true }, { person: 'quando ele/ela', form: 'vier', isIrregular: true }, { person: 'quando nós', form: 'viermos', isIrregular: true }, { person: 'quando vós', form: 'vierdes', isIrregular: true }, { person: 'quando eles/elas', form: 'vierem', isIrregular: true } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'vem', isIrregular: true }, { person: 'você', form: 'venha', isIrregular: true }, { person: 'nós', form: 'venhamos', isIrregular: true }, { person: 'vós', form: 'vinde', isIrregular: true }, { person: 'vocês', form: 'venham', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não venhas', isIrregular: true }, { person: 'você', form: 'não venha', isIrregular: true }, { person: 'nós', form: 'não venhamos', isIrregular: true }, { person: 'vós', form: 'não venhais', isIrregular: true }, { person: 'vocês', form: 'não venham', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'vir', isIrregular: true }, { person: 'tu', form: 'vires', isIrregular: true }, { person: 'ele/ela', form: 'vir', isIrregular: true }, { person: 'nós', form: 'virmos', isIrregular: true }, { person: 'vós', form: 'virdes', isIrregular: true }, { person: 'eles/elas', form: 'virem', isIrregular: true } ] }
    ]
  },
  {
    infinitive: 'ver',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'vejo', isIrregular: true }, { person: 'tu', form: 'vês', isIrregular: true }, { person: 'ele/ela', form: 'vê', isIrregular: true }, { person: 'nós', form: 'vemos', isIrregular: true }, { person: 'vós', form: 'vedes', isIrregular: true }, { person: 'eles/elas', form: 'veem', isIrregular: true } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'vi', isIrregular: true }, { person: 'tu', form: 'viste', isIrregular: true }, { person: 'ele/ela', form: 'viu', isIrregular: true }, { person: 'nós', form: 'vimos', isIrregular: true }, { person: 'vós', form: 'vistes', isIrregular: true }, { person: 'eles/elas', form: 'viram', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'via', isIrregular: true }, { person: 'tu', form: 'vias', isIrregular: true }, { person: 'ele/ela', form: 'via', isIrregular: true }, { person: 'nós', form: 'víamos', isIrregular: true }, { person: 'vós', form: 'víeis', isIrregular: true }, { person: 'eles/elas', form: 'viam', isIrregular: true } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'vira', isIrregular: true }, { person: 'tu', form: 'viras', isIrregular: true }, { person: 'ele/ela', form: 'vira', isIrregular: true }, { person: 'nós', form: 'víramos', isIrregular: true }, { person: 'vós', form: 'víreis', isIrregular: true }, { person: 'eles/elas', form: 'viram', isIrregular: true } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'verei', isIrregular: true }, { person: 'tu', form: 'verás', isIrregular: true }, { person: 'ele/ela', form: 'verá', isIrregular: true }, { person: 'nós', form: 'veremos', isIrregular: true }, { person: 'vós', form: 'vereis', isIrregular: true }, { person: 'eles/elas', form: 'verão', isIrregular: true } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'veria', isIrregular: true }, { person: 'tu', form: 'verias', isIrregular: true }, { person: 'ele/ela', form: 'veria', isIrregular: true }, { person: 'nós', form: 'veríamos', isIrregular: true }, { person: 'vós', form: 'veríeis', isIrregular: true }, { person: 'eles/elas', form: 'veriam', isIrregular: true } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'veja', isIrregular: true }, { person: 'que tu', form: 'vejas', isIrregular: true }, { person: 'que ele/ela', form: 'veja', isIrregular: true }, { person: 'que nós', form: 'vejamos', isIrregular: true }, { person: 'que vós', form: 'vejais', isIrregular: true }, { person: 'que eles/elas', form: 'vejam', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'visse', isIrregular: true }, { person: 'se tu', form: 'visses', isIrregular: true }, { person: 'se ele/ela', form: 'visse', isIrregular: true }, { person: 'se nós', form: 'víssemos', isIrregular: true }, { person: 'se vós', form: 'vísseis', isIrregular: true }, { person: 'se eles/elas', form: 'vissem', isIrregular: true } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'vir', isIrregular: true }, { person: 'quando tu', form: 'vires', isIrregular: true }, { person: 'quando ele/ela', form: 'vir', isIrregular: true }, { person: 'quando nós', form: 'virmos', isIrregular: true }, { person: 'quando vós', form: 'virdes', isIrregular: true }, { person: 'quando eles/elas', form: 'virem', isIrregular: true } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'vê', isIrregular: true }, { person: 'você', form: 'veja', isIrregular: true }, { person: 'nós', form: 'vejamos', isIrregular: true }, { person: 'vós', form: 'vede', isIrregular: true }, { person: 'vocês', form: 'vejam', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não vejas', isIrregular: true }, { person: 'você', form: 'não veja', isIrregular: true }, { person: 'nós', form: 'não vejamos', isIrregular: true }, { person: 'vós', form: 'não vejais', isIrregular: true }, { person: 'vocês', form: 'não vejam', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'ver', isIrregular: true }, { person: 'tu', form: 'veres', isIrregular: true }, { person: 'ele/ela', form: 'ver', isIrregular: true }, { person: 'nós', form: 'vermos', isIrregular: true }, { person: 'vós', form: 'verdes', isIrregular: true }, { person: 'eles/elas', form: 'verem', isIrregular: true } ] }
    ]
  },
  {
    infinitive: 'trazer',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'trago', isIrregular: true }, { person: 'tu', form: 'trazes', isIrregular: false }, { person: 'ele/ela', form: 'traz', isIrregular: false }, { person: 'nós', form: 'trazemos', isIrregular: false }, { person: 'vós', form: 'trazeis', isIrregular: false }, { person: 'eles/elas', form: 'trazem', isIrregular: false } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'trouxe', isIrregular: true }, { person: 'tu', form: 'trouxeste', isIrregular: true }, { person: 'ele/ela', form: 'trouxe', isIrregular: true }, { person: 'nós', form: 'trouxemos', isIrregular: true }, { person: 'vós', form: 'trouxestes', isIrregular: true }, { person: 'eles/elas', form: 'trouxeram', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'trazia', isIrregular: false }, { person: 'tu', form: 'trazias', isIrregular: false }, { person: 'ele/ela', form: 'trazia', isIrregular: false }, { person: 'nós', form: 'trazíamos', isIrregular: false }, { person: 'vós', form: 'trazíeis', isIrregular: false }, { person: 'eles/elas', form: 'traziam', isIrregular: false } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'trouxera', isIrregular: true }, { person: 'tu', form: 'trouxeras', isIrregular: true }, { person: 'ele/ela', form: 'trouxera', isIrregular: true }, { person: 'nós', form: 'trouxéramos', isIrregular: true }, { person: 'vós', form: 'trouxéreis', isIrregular: true }, { person: 'eles/elas', form: 'trouxeram', isIrregular: true } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'trarei', isIrregular: true }, { person: 'tu', form: 'trarás', isIrregular: true }, { person: 'ele/ela', form: 'trará', isIrregular: true }, { person: 'nós', form: 'traremos', isIrregular: true }, { person: 'vós', form: 'trareis', isIrregular: true }, { person: 'eles/elas', form: 'trarão', isIrregular: true } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'traria', isIrregular: true }, { person: 'tu', form: 'trarias', isIrregular: true }, { person: 'ele/ela', form: 'traria', isIrregular: true }, { person: 'nós', form: 'traríamos', isIrregular: true }, { person: 'vós', form: 'traríeis', isIrregular: true }, { person: 'eles/elas', form: 'trariam', isIrregular: true } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'traga', isIrregular: true }, { person: 'que tu', form: 'tragas', isIrregular: true }, { person: 'que ele/ela', form: 'traga', isIrregular: true }, { person: 'que nós', form: 'tragamos', isIrregular: true }, { person: 'que vós', form: 'tragais', isIrregular: true }, { person: 'que eles/elas', form: 'tragam', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'trouxesse', isIrregular: true }, { person: 'se tu', form: 'trouxesses', isIrregular: true }, { person: 'se ele/ela', form: 'trouxesse', isIrregular: true }, { person: 'se nós', form: 'trouxéssemos', isIrregular: true }, { person: 'se vós', form: 'trouxésseis', isIrregular: true }, { person: 'se eles/elas', form: 'trouxessem', isIrregular: true } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'trouxer', isIrregular: true }, { person: 'quando tu', form: 'trouxeres', isIrregular: true }, { person: 'quando ele/ela', form: 'trouxer', isIrregular: true }, { person: 'quando nós', form: 'trouxermos', isIrregular: true }, { person: 'quando vós', form: 'trouxerdes', isIrregular: true }, { person: 'quando eles/elas', form: 'trouxerem', isIrregular: true } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'traze', isIrregular: true }, { person: 'você', form: 'traga', isIrregular: true }, { person: 'nós', form: 'tragamos', isIrregular: true }, { person: 'vós', form: 'trazei', isIrregular: true }, { person: 'vocês', form: 'tragam', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não tragas', isIrregular: true }, { person: 'você', form: 'não traga', isIrregular: true }, { person: 'nós', form: 'não tragamos', isIrregular: true }, { person: 'vós', form: 'não tragais', isIrregular: true }, { person: 'vocês', form: 'não tragam', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'trazer', isIrregular: false }, { person: 'tu', form: 'trazeres', isIrregular: false }, { person: 'ele/ela', form: 'trazer', isIrregular: false }, { person: 'nós', form: 'trazermos', isIrregular: false }, { person: 'vós', form: 'trazerdes', isIrregular: false }, { person: 'eles/elas', form: 'trazerem', isIrregular: false } ] }
    ]
  },
  {
    infinitive: 'dizer',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'digo', isIrregular: true }, { person: 'tu', form: 'dizes', isIrregular: true }, { person: 'ele/ela', form: 'diz', isIrregular: true }, { person: 'nós', form: 'dizemos', isIrregular: false }, { person: 'vós', form: 'dizeis', isIrregular: false }, { person: 'eles/elas', form: 'dizem', isIrregular: true } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'disse', isIrregular: true }, { person: 'tu', form: 'disseste', isIrregular: true }, { person: 'ele/ela', form: 'disse', isIrregular: true }, { person: 'nós', form: 'dissemos', isIrregular: true }, { person: 'vós', form: 'dissestes', isIrregular: true }, { person: 'eles/elas', form: 'disseram', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'dizia', isIrregular: false }, { person: 'tu', form: 'dizias', isIrregular: false }, { person: 'ele/ela', form: 'dizia', isIrregular: false }, { person: 'nós', form: 'dizíamos', isIrregular: false }, { person: 'vós', form: 'dizíeis', isIrregular: false }, { person: 'eles/elas', form: 'diziam', isIrregular: false } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'dissera', isIrregular: true }, { person: 'tu', form: 'disseras', isIrregular: true }, { person: 'ele/ela', form: 'dissera', isIrregular: true }, { person: 'nós', form: 'disséramos', isIrregular: true }, { person: 'vós', form: 'disséreis', isIrregular: true }, { person: 'eles/elas', form: 'disseram', isIrregular: true } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'direi', isIrregular: true }, { person: 'tu', form: 'dirás', isIrregular: true }, { person: 'ele/ela', form: 'dirá', isIrregular: true }, { person: 'nós', form: 'diremos', isIrregular: true }, { person: 'vós', form: 'direis', isIrregular: true }, { person: 'eles/elas', form: 'dirão', isIrregular: true } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'diria', isIrregular: true }, { person: 'tu', form: 'dirias', isIrregular: true }, { person: 'ele/ela', form: 'diria', isIrregular: true }, { person: 'nós', form: 'diríamos', isIrregular: true }, { person: 'vós', form: 'diríeis', isIrregular: true }, { person: 'eles/elas', form: 'diriam', isIrregular: true } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'diga', isIrregular: true }, { person: 'que tu', form: 'digas', isIrregular: true }, { person: 'que ele/ela', form: 'diga', isIrregular: true }, { person: 'que nós', form: 'digamos', isIrregular: true }, { person: 'que vós', form: 'digais', isIrregular: true }, { person: 'que eles/elas', form: 'digam', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'dissesse', isIrregular: true }, { person: 'se tu', form: 'dissesses', isIrregular: true }, { person: 'se ele/ela', form: 'dissesse', isIrregular: true }, { person: 'se nós', form: 'disséssemos', isIrregular: true }, { person: 'se vós', form: 'dissésseis', isIrregular: true }, { person: 'se eles/elas', form: 'dissessem', isIrregular: true } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'disser', isIrregular: true }, { person: 'quando tu', form: 'disserres', isIrregular: true }, { person: 'quando ele/ela', form: 'disser', isIrregular: true }, { person: 'quando nós', form: 'dissermos', isIrregular: true }, { person: 'quando vós', form: 'disserdes', isIrregular: true }, { person: 'quando eles/elas', form: 'disserem', isIrregular: true } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'dize', isIrregular: true }, { person: 'você', form: 'diga', isIrregular: true }, { person: 'nós', form: 'digamos', isIrregular: true }, { person: 'vós', form: 'dizei', isIrregular: true }, { person: 'vocês', form: 'digam', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não digas', isIrregular: true }, { person: 'você', form: 'não diga', isIrregular: true }, { person: 'nós', form: 'não digamos', isIrregular: true }, { person: 'vós', form: 'não digais', isIrregular: true }, { person: 'vocês', form: 'não digam', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'dizer', isIrregular: false }, { person: 'tu', form: 'dizeres', isIrregular: false }, { person: 'ele/ela', form: 'dizer', isIrregular: false }, { person: 'nós', form: 'dizermos', isIrregular: false }, { person: 'vós', form: 'dizerdes', isIrregular: false }, { person: 'eles/elas', form: 'dizerem', isIrregular: false } ] }
    ]
  },
  {
    infinitive: 'fazer',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'faço', isIrregular: true }, { person: 'tu', form: 'fazes', isIrregular: false }, { person: 'ele/ela', form: 'faz', isIrregular: false }, { person: 'nós', form: 'fazemos', isIrregular: false }, { person: 'vós', form: 'fazeis', isIrregular: false }, { person: 'eles/elas', form: 'fazem', isIrregular: false } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'fiz', isIrregular: true }, { person: 'tu', form: 'fizeste', isIrregular: true }, { person: 'ele/ela', form: 'fez', isIrregular: true }, { person: 'nós', form: 'fizemos', isIrregular: true }, { person: 'vós', form: 'fizestes', isIrregular: true }, { person: 'eles/elas', form: 'fizeram', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'fazia', isIrregular: false }, { person: 'tu', form: 'fazias', isIrregular: false }, { person: 'ele/ela', form: 'fazia', isIrregular: false }, { person: 'nós', form: 'fazíamos', isIrregular: false }, { person: 'vós', form: 'fazíeis', isIrregular: false }, { person: 'eles/elas', form: 'faziam', isIrregular: false } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'fizera', isIrregular: true }, { person: 'tu', form: 'fizeras', isIrregular: true }, { person: 'ele/ela', form: 'fizera', isIrregular: true }, { person: 'nós', form: 'fizéramos', isIrregular: true }, { person: 'vós', form: 'fizéreis', isIrregular: true }, { person: 'eles/elas', form: 'fizeram', isIrregular: true } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'farei', isIrregular: true }, { person: 'tu', form: 'farás', isIrregular: true }, { person: 'ele/ela', form: 'fará', isIrregular: true }, { person: 'nós', form: 'faremos', isIrregular: true }, { person: 'vós', form: 'fareis', isIrregular: true }, { person: 'eles/elas', form: 'farão', isIrregular: true } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'faria', isIrregular: true }, { person: 'tu', form: 'farias', isIrregular: true }, { person: 'ele/ela', form: 'faria', isIrregular: true }, { person: 'nós', form: 'faríamos', isIrregular: true }, { person: 'vós', form: 'faríeis', isIrregular: true }, { person: 'eles/elas', form: 'fariam', isIrregular: true } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'faça', isIrregular: true }, { person: 'que tu', form: 'faças', isIrregular: true }, { person: 'que ele/ela', form: 'faça', isIrregular: true }, { person: 'que nós', form: 'façamos', isIrregular: true }, { person: 'que vós', form: 'façais', isIrregular: true }, { person: 'que eles/elas', form: 'façam', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'fizesse', isIrregular: true }, { person: 'se tu', form: 'fizesses', isIrregular: true }, { person: 'se ele/ela', form: 'fizesse', isIrregular: true }, { person: 'se nós', form: 'fizéssemos', isIrregular: true }, { person: 'se vós', form: 'fizésseis', isIrregular: true }, { person: 'se eles/elas', form: 'fizessem', isIrregular: true } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'fizer', isIrregular: true }, { person: 'quando tu', form: 'fizeres', isIrregular: true }, { person: 'quando ele/ela', form: 'fizer', isIrregular: true }, { person: 'quando nós', form: 'fizermos', isIrregular: true }, { person: 'quando vós', form: 'fizerdes', isIrregular: true }, { person: 'quando eles/elas', form: 'fizerem', isIrregular: true } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'faze', isIrregular: true }, { person: 'você', form: 'faça', isIrregular: true }, { person: 'nós', form: 'façamos', isIrregular: true }, { person: 'vós', form: 'fazei', isIrregular: true }, { person: 'vocês', form: 'façam', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não faças', isIrregular: true }, { person: 'você', form: 'não faça', isIrregular: true }, { person: 'nós', form: 'não façamos', isIrregular: true }, { person: 'vós', form: 'não façais', isIrregular: true }, { person: 'vocês', form: 'não façam', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'fazer', isIrregular: false }, { person: 'tu', form: 'fazeres', isIrregular: false }, { person: 'ele/ela', form: 'fazer', isIrregular: false }, { person: 'nós', form: 'fazermos', isIrregular: false }, { person: 'vós', form: 'fazerdes', isIrregular: false }, { person: 'eles/elas', form: 'fazerem', isIrregular: false } ] }
    ]
  },
  {
    infinitive: 'dar',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'dou', isIrregular: true }, { person: 'tu', form: 'dás', isIrregular: true }, { person: 'ele/ela', form: 'dá', isIrregular: true }, { person: 'nós', form: 'damos', isIrregular: false }, { person: 'vós', form: 'dais', isIrregular: false }, { person: 'eles/elas', form: 'dão', isIrregular: true } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'dei', isIrregular: true }, { person: 'tu', form: 'deste', isIrregular: true }, { person: 'ele/ela', form: 'deu', isIrregular: true }, { person: 'nós', form: 'demos', isIrregular: true }, { person: 'vós', form: 'destes', isIrregular: true }, { person: 'eles/elas', form: 'deram', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'dava', isIrregular: false }, { person: 'tu', form: 'davas', isIrregular: false }, { person: 'ele/ela', form: 'dava', isIrregular: false }, { person: 'nós', form: 'dávamos', isIrregular: false }, { person: 'vós', form: 'dáveis', isIrregular: false }, { person: 'eles/elas', form: 'davam', isIrregular: false } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'dera', isIrregular: true }, { person: 'tu', form: 'deras', isIrregular: true }, { person: 'ele/ela', form: 'dera', isIrregular: true }, { person: 'nós', form: 'déramos', isIrregular: true }, { person: 'vós', form: 'déreis', isIrregular: true }, { person: 'eles/elas', form: 'deram', isIrregular: true } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'darei', isIrregular: false }, { person: 'tu', form: 'darás', isIrregular: false }, { person: 'ele/ela', form: 'dará', isIrregular: false }, { person: 'nós', form: 'daremos', isIrregular: false }, { person: 'vós', form: 'dareis', isIrregular: false }, { person: 'eles/elas', form: 'darão', isIrregular: false } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'daria', isIrregular: false }, { person: 'tu', form: 'darias', isIrregular: false }, { person: 'ele/ela', form: 'daria', isIrregular: false }, { person: 'nós', form: 'daríamos', isIrregular: false }, { person: 'vós', form: 'daríeis', isIrregular: false }, { person: 'eles/elas', form: 'dariam', isIrregular: false } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'dê', isIrregular: true }, { person: 'que tu', form: 'dês', isIrregular: true }, { person: 'que ele/ela', form: 'dê', isIrregular: true }, { person: 'que nós', form: 'demos', isIrregular: true }, { person: 'que vós', form: 'deis', isIrregular: true }, { person: 'que eles/elas', form: 'deem', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'desse', isIrregular: true }, { person: 'se tu', form: 'desses', isIrregular: true }, { person: 'se ele/ela', form: 'desse', isIrregular: true }, { person: 'se nós', form: 'déssemos', isIrregular: true }, { person: 'se vós', form: 'désseis', isIrregular: true }, { person: 'se eles/elas', form: 'dessem', isIrregular: true } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'der', isIrregular: true }, { person: 'quando tu', form: 'deres', isIrregular: true }, { person: 'quando ele/ela', form: 'der', isIrregular: true }, { person: 'quando nós', form: 'dermos', isIrregular: true }, { person: 'quando vós', form: 'derdes', isIrregular: true }, { person: 'quando eles/elas', form: 'derem', isIrregular: true } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'dá', isIrregular: true }, { person: 'você', form: 'dê', isIrregular: true }, { person: 'nós', form: 'demos', isIrregular: true }, { person: 'vós', form: 'dai', isIrregular: true }, { person: 'vocês', form: 'deem', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não dês', isIrregular: true }, { person: 'você', form: 'não dê', isIrregular: true }, { person: 'nós', form: 'não demos', isIrregular: true }, { person: 'vós', form: 'não deis', isIrregular: true }, { person: 'vocês', form: 'não deem', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'dar', isIrregular: false }, { person: 'tu', form: 'dares', isIrregular: false }, { person: 'ele/ela', form: 'dar', isIrregular: false }, { person: 'nós', form: 'darmos', isIrregular: false }, { person: 'vós', form: 'dardes', isIrregular: false }, { person: 'eles/elas', form: 'darem', isIrregular: false } ] }
    ]
  },
  {
    infinitive: 'querer',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'quero', isIrregular: true }, { person: 'tu', form: 'queres', isIrregular: false }, { person: 'ele/ela', form: 'quer', isIrregular: false }, { person: 'nós', form: 'queremos', isIrregular: false }, { person: 'vós', form: 'quereis', isIrregular: false }, { person: 'eles/elas', form: 'querem', isIrregular: false } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'quis', isIrregular: true }, { person: 'tu', form: 'quiseste', isIrregular: true }, { person: 'ele/ela', form: 'quis', isIrregular: true }, { person: 'nós', form: 'quisemos', isIrregular: true }, { person: 'vós', form: 'quisestes', isIrregular: true }, { person: 'eles/elas', form: 'quiseram', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'queria', isIrregular: false }, { person: 'tu', form: 'querias', isIrregular: false }, { person: 'ele/ela', form: 'queria', isIrregular: false }, { person: 'nós', form: 'queríamos', isIrregular: false }, { person: 'vós', form: 'queríeis', isIrregular: false }, { person: 'eles/elas', form: 'queriam', isIrregular: false } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'quisera', isIrregular: true }, { person: 'tu', form: 'quiseras', isIrregular: true }, { person: 'ele/ela', form: 'quisera', isIrregular: true }, { person: 'nós', form: 'quiséramos', isIrregular: true }, { person: 'vós', form: 'quiséreis', isIrregular: true }, { person: 'eles/elas', form: 'quiseram', isIrregular: true } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'quererei', isIrregular: false }, { person: 'tu', form: 'quererás', isIrregular: false }, { person: 'ele/ela', form: 'quererá', isIrregular: false }, { person: 'nós', form: 'quereremos', isIrregular: false }, { person: 'vós', form: 'querereis', isIrregular: false }, { person: 'eles/elas', form: 'quererão', isIrregular: false } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'quereria', isIrregular: false }, { person: 'tu', form: 'quererias', isIrregular: false }, { person: 'ele/ela', form: 'quereria', isIrregular: false }, { person: 'nós', form: 'quereríamos', isIrregular: false }, { person: 'vós', form: 'quereríeis', isIrregular: false }, { person: 'eles/elas', form: 'quereriam', isIrregular: false } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'queira', isIrregular: true }, { person: 'que tu', form: 'queiras', isIrregular: true }, { person: 'que ele/ela', form: 'queira', isIrregular: true }, { person: 'que nós', form: 'queiramos', isIrregular: true }, { person: 'que vós', form: 'queirais', isIrregular: true }, { person: 'que eles/elas', form: 'queiram', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'quisesse', isIrregular: true }, { person: 'se tu', form: 'quisesses', isIrregular: true }, { person: 'se ele/ela', form: 'quisesse', isIrregular: true }, { person: 'se nós', form: 'quiséssemos', isIrregular: true }, { person: 'se vós', form: 'quisésseis', isIrregular: true }, { person: 'se eles/elas', form: 'quisessem', isIrregular: true } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'quiser', isIrregular: true }, { person: 'quando tu', form: 'quiseres', isIrregular: true }, { person: 'quando ele/ela', form: 'quiser', isIrregular: true }, { person: 'quando nós', form: 'quisermos', isIrregular: true }, { person: 'quando vós', form: 'quiserdes', isIrregular: true }, { person: 'quando eles/elas', form: 'quiserem', isIrregular: true } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'quer', isIrregular: false }, { person: 'você', form: 'queira', isIrregular: true }, { person: 'nós', form: 'queiramos', isIrregular: true }, { person: 'vós', form: 'querei', isIrregular: false }, { person: 'vocês', form: 'queiram', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não queiras', isIrregular: true }, { person: 'você', form: 'não queira', isIrregular: true }, { person: 'nós', form: 'não queiramos', isIrregular: true }, { person: 'vós', form: 'não queirais', isIrregular: true }, { person: 'vocês', form: 'não queiram', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'querer', isIrregular: false }, { person: 'tu', form: 'quereres', isIrregular: false }, { person: 'ele/ela', form: 'querer', isIrregular: false }, { person: 'nós', form: 'querermos', isIrregular: false }, { person: 'vós', form: 'quererdes', isIrregular: false }, { person: 'eles/elas', form: 'quererem', isIrregular: false } ] }
    ]
  },
  {
    infinitive: 'pôr',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'ponho', isIrregular: true }, { person: 'tu', form: 'pões', isIrregular: true }, { person: 'ele/ela', form: 'põe', isIrregular: true }, { person: 'nós', form: 'pomos', isIrregular: true }, { person: 'vós', form: 'pondes', isIrregular: true }, { person: 'eles/elas', form: 'põem', isIrregular: true } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'pus', isIrregular: true }, { person: 'tu', form: 'puseste', isIrregular: true }, { person: 'ele/ela', form: 'pôs', isIrregular: true }, { person: 'nós', form: 'pusemos', isIrregular: true }, { person: 'vós', form: 'pusestes', isIrregular: true }, { person: 'eles/elas', form: 'puseram', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'punha', isIrregular: true }, { person: 'tu', form: 'punhas', isIrregular: true }, { person: 'ele/ela', form: 'punha', isIrregular: true }, { person: 'nós', form: 'púnhamos', isIrregular: true }, { person: 'vós', form: 'púnheis', isIrregular: true }, { person: 'eles/elas', form: 'punham', isIrregular: true } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'pusera', isIrregular: true }, { person: 'tu', form: 'puseras', isIrregular: true }, { person: 'ele/ela', form: 'pusera', isIrregular: true }, { person: 'nós', form: 'puséramos', isIrregular: true }, { person: 'vós', form: 'puséreis', isIrregular: true }, { person: 'eles/elas', form: 'puseram', isIrregular: true } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'porei', isIrregular: true }, { person: 'tu', form: 'porás', isIrregular: true }, { person: 'ele/ela', form: 'porá', isIrregular: true }, { person: 'nós', form: 'poremos', isIrregular: true }, { person: 'vós', form: 'poreis', isIrregular: true }, { person: 'eles/elas', form: 'porão', isIrregular: true } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'poria', isIrregular: true }, { person: 'tu', form: 'porias', isIrregular: true }, { person: 'ele/ela', form: 'poria', isIrregular: true }, { person: 'nós', form: 'poríamos', isIrregular: true }, { person: 'vós', form: 'poríeis', isIrregular: true }, { person: 'eles/elas', form: 'poriam', isIrregular: true } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'ponha', isIrregular: true }, { person: 'que tu', form: 'ponhas', isIrregular: true }, { person: 'que ele/ela', form: 'ponha', isIrregular: true }, { person: 'que nós', form: 'ponhamos', isIrregular: true }, { person: 'que vós', form: 'ponhais', isIrregular: true }, { person: 'que eles/elas', form: 'ponham', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'pusesse', isIrregular: true }, { person: 'se tu', form: 'pusesses', isIrregular: true }, { person: 'se ele/ela', form: 'pusesse', isIrregular: true }, { person: 'se nós', form: 'puséssemos', isIrregular: true }, { person: 'se vós', form: 'pusésseis', isIrregular: true }, { person: 'se eles/elas', form: 'pusessem', isIrregular: true } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'puser', isIrregular: true }, { person: 'quando tu', form: 'puseres', isIrregular: true }, { person: 'quando ele/ela', form: 'puser', isIrregular: true }, { person: 'quando nós', form: 'pusermos', isIrregular: true }, { person: 'quando vós', form: 'puserdes', isIrregular: true }, { person: 'quando eles/elas', form: 'puserem', isIrregular: true } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'põe', isIrregular: true }, { person: 'você', form: 'ponha', isIrregular: true }, { person: 'nós', form: 'ponhamos', isIrregular: true }, { person: 'vós', form: 'ponde', isIrregular: true }, { person: 'vocês', form: 'ponham', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não ponhas', isIrregular: true }, { person: 'você', form: 'não ponha', isIrregular: true }, { person: 'nós', form: 'não ponhamos', isIrregular: true }, { person: 'vós', form: 'não ponhais', isIrregular: true }, { person: 'vocês', form: 'não ponham', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'pôr', isIrregular: true }, { person: 'tu', form: 'pores', isIrregular: true }, { person: 'ele/ela', form: 'pôr', isIrregular: true }, { person: 'nós', form: 'pormos', isIrregular: true }, { person: 'vós', form: 'pordes', isIrregular: true }, { person: 'eles/elas', form: 'porem', isIrregular: true } ] }
    ]
  },
  {
    infinitive: 'saber',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'sei', isIrregular: true }, { person: 'tu', form: 'sabes', isIrregular: false }, { person: 'ele/ela', form: 'sabe', isIrregular: false }, { person: 'nós', form: 'sabemos', isIrregular: false }, { person: 'vós', form: 'sabeis', isIrregular: false }, { person: 'eles/elas', form: 'sabem', isIrregular: false } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'soube', isIrregular: true }, { person: 'tu', form: 'soubeste', isIrregular: true }, { person: 'ele/ela', form: 'soube', isIrregular: true }, { person: 'nós', form: 'soubemos', isIrregular: true }, { person: 'vós', form: 'soubestes', isIrregular: true }, { person: 'eles/elas', form: 'souberam', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'sabia', isIrregular: false }, { person: 'tu', form: 'sabias', isIrregular: false }, { person: 'ele/ela', form: 'sabia', isIrregular: false }, { person: 'nós', form: 'sabíamos', isIrregular: false }, { person: 'vós', form: 'sabíeis', isIrregular: false }, { person: 'eles/elas', form: 'sabiam', isIrregular: false } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'soubera', isIrregular: true }, { person: 'tu', form: 'souberas', isIrregular: true }, { person: 'ele/ela', form: 'soubera', isIrregular: true }, { person: 'nós', form: 'soubéramos', isIrregular: true }, { person: 'vós', form: 'soubéreis', isIrregular: true }, { person: 'eles/elas', form: 'souberam', isIrregular: true } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'saberei', isIrregular: false }, { person: 'tu', form: 'saberás', isIrregular: false }, { person: 'ele/ela', form: 'saberá', isIrregular: false }, { person: 'nós', form: 'saberemos', isIrregular: false }, { person: 'vós', form: 'sabereis', isIrregular: false }, { person: 'eles/elas', form: 'saberão', isIrregular: false } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'saberia', isIrregular: false }, { person: 'tu', form: 'saberias', isIrregular: false }, { person: 'ele/ela', form: 'saberia', isIrregular: false }, { person: 'nós', form: 'saberíamos', isIrregular: false }, { person: 'vós', form: 'saberíeis', isIrregular: false }, { person: 'eles/elas', form: 'saberiam', isIrregular: false } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'saiba', isIrregular: true }, { person: 'que tu', form: 'saibas', isIrregular: true }, { person: 'que ele/ela', form: 'saiba', isIrregular: true }, { person: 'que nós', form: 'saibamos', isIrregular: true }, { person: 'que vós', form: 'saibais', isIrregular: true }, { person: 'que eles/elas', form: 'saibam', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'soubesse', isIrregular: true }, { person: 'se tu', form: 'soubesses', isIrregular: true }, { person: 'se ele/ela', form: 'soubesse', isIrregular: true }, { person: 'se nós', form: 'soubéssemos', isIrregular: true }, { person: 'se vós', form: 'soubésseis', isIrregular: true }, { person: 'se eles/elas', form: 'soubessem', isIrregular: true } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'souber', isIrregular: true }, { person: 'quando tu', form: 'souberes', isIrregular: true }, { person: 'quando ele/ela', form: 'souber', isIrregular: true }, { person: 'quando nós', form: 'soubermos', isIrregular: true }, { person: 'quando vós', form: 'souberdes', isIrregular: true }, { person: 'quando eles/elas', form: 'souberem', isIrregular: true } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'sabe', isIrregular: false }, { person: 'você', form: 'saiba', isIrregular: true }, { person: 'nós', form: 'saibamos', isIrregular: true }, { person: 'vós', form: 'sabei', isIrregular: false }, { person: 'vocês', form: 'saibam', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não saibas', isIrregular: true }, { person: 'você', form: 'não saiba', isIrregular: true }, { person: 'nós', form: 'não saibamos', isIrregular: true }, { person: 'vós', form: 'não saibais', isIrregular: true }, { person: 'vocês', form: 'não saibam', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'saber', isIrregular: false }, { person: 'tu', form: 'saberes', isIrregular: false }, { person: 'ele/ela', form: 'saber', isIrregular: false }, { person: 'nós', form: 'sabermos', isIrregular: false }, { person: 'vós', form: 'saberdes', isIrregular: false }, { person: 'eles/elas', form: 'saberem', isIrregular: false } ] }
    ]
  },
  {
    infinitive: 'conhecer',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'conheço', isIrregular: true }, { person: 'tu', form: 'conheces', isIrregular: false }, { person: 'ele/ela', form: 'conhece', isIrregular: false }, { person: 'nós', form: 'conhecemos', isIrregular: false }, { person: 'vós', form: 'conheceis', isIrregular: false }, { person: 'eles/elas', form: 'conhecem', isIrregular: false } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'conheci', isIrregular: false }, { person: 'tu', form: 'conheceste', isIrregular: false }, { person: 'ele/ela', form: 'conheceu', isIrregular: false }, { person: 'nós', form: 'conhecemos', isIrregular: false }, { person: 'vós', form: 'conhecestes', isIrregular: false }, { person: 'eles/elas', form: 'conheceram', isIrregular: false } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'conhecia', isIrregular: false }, { person: 'tu', form: 'conhecias', isIrregular: false }, { person: 'ele/ela', form: 'conhecia', isIrregular: false }, { person: 'nós', form: 'conhecíamos', isIrregular: false }, { person: 'vós', form: 'conhecíeis', isIrregular: false }, { person: 'eles/elas', form: 'conheciam', isIrregular: false } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'conhecera', isIrregular: false }, { person: 'tu', form: 'conheceras', isIrregular: false }, { person: 'ele/ela', form: 'conhecera', isIrregular: false }, { person: 'nós', form: 'conhecêramos', isIrregular: false }, { person: 'vós', form: 'conhecêreis', isIrregular: false }, { person: 'eles/elas', form: 'conheceram', isIrregular: false } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'conhecerei', isIrregular: false }, { person: 'tu', form: 'conhecerás', isIrregular: false }, { person: 'ele/ela', form: 'conhecerá', isIrregular: false }, { person: 'nós', form: 'conheceremos', isIrregular: false }, { person: 'vós', form: 'conhecereis', isIrregular: false }, { person: 'eles/elas', form: 'conhecerão', isIrregular: false } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'conheceria', isIrregular: false }, { person: 'tu', form: 'conhecerias', isIrregular: false }, { person: 'ele/ela', form: 'conheceria', isIrregular: false }, { person: 'nós', form: 'conheceríamos', isIrregular: false }, { person: 'vós', form: 'conheceríeis', isIrregular: false }, { person: 'eles/elas', form: 'conheceriam', isIrregular: false } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'conheça', isIrregular: true }, { person: 'que tu', form: 'conheças', isIrregular: true }, { person: 'que ele/ela', form: 'conheça', isIrregular: true }, { person: 'que nós', form: 'conheçamos', isIrregular: true }, { person: 'que vós', form: 'conheçais', isIrregular: true }, { person: 'que eles/elas', form: 'conheçam', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'conhecesse', isIrregular: false }, { person: 'se tu', form: 'conhecesses', isIrregular: false }, { person: 'se ele/ela', form: 'conhecesse', isIrregular: false }, { person: 'se nós', form: 'conhecêssemos', isIrregular: false }, { person: 'se vós', form: 'conhecêsseis', isIrregular: false }, { person: 'se eles/elas', form: 'conhecessem', isIrregular: false } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'conhecer', isIrregular: false }, { person: 'quando tu', form: 'conheceres', isIrregular: false }, { person: 'quando ele/ela', form: 'conhecer', isIrregular: false }, { person: 'quando nós', form: 'conhecermos', isIrregular: false }, { person: 'quando vós', form: 'conhecerdes', isIrregular: false }, { person: 'quando eles/elas', form: 'conhecerem', isIrregular: false } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'conhece', isIrregular: false }, { person: 'você', form: 'conheça', isIrregular: true }, { person: 'nós', form: 'conheçamos', isIrregular: true }, { person: 'vós', form: 'conhecei', isIrregular: false }, { person: 'vocês', form: 'conheçam', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não conheças', isIrregular: true }, { person: 'você', form: 'não conheça', isIrregular: true }, { person: 'nós', form: 'não conheçamos', isIrregular: true }, { person: 'vós', form: 'não conheçais', isIrregular: true }, { person: 'vocês', form: 'não conheçam', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'conhecer', isIrregular: false }, { person: 'tu', form: 'conheceres', isIrregular: false }, { person: 'ele/ela', form: 'conhecer', isIrregular: false }, { person: 'nós', form: 'conhecermos', isIrregular: false }, { person: 'vós', form: 'conhecerdes', isIrregular: false }, { person: 'eles/elas', form: 'conhecerem', isIrregular: false } ] }
    ]
  },
  {
    infinitive: 'estar',
    tenses: [
      { name: 'Presente do Indicativo', conjugations: [ { person: 'eu', form: 'estou', isIrregular: true }, { person: 'tu', form: 'estás', isIrregular: true }, { person: 'ele/ela', form: 'está', isIrregular: true }, { person: 'nós', form: 'estamos', isIrregular: false }, { person: 'vós', form: 'estais', isIrregular: false }, { person: 'eles/elas', form: 'estão', isIrregular: true } ] },
      { name: 'Pretérito Perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'estive', isIrregular: true }, { person: 'tu', form: 'estiveste', isIrregular: true }, { person: 'ele/ela', form: 'esteve', isIrregular: true }, { person: 'nós', form: 'estivemos', isIrregular: true }, { person: 'vós', form: 'estivestes', isIrregular: true }, { person: 'eles/elas', form: 'estiveram', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Indicativo', conjugations: [ { person: 'eu', form: 'estava', isIrregular: false }, { person: 'tu', form: 'estavas', isIrregular: false }, { person: 'ele/ela', form: 'estava', isIrregular: false }, { person: 'nós', form: 'estávamos', isIrregular: false }, { person: 'vós', form: 'estáveis', isIrregular: false }, { person: 'eles/elas', form: 'estavam', isIrregular: false } ] },
      { name: 'Pretérito Mais-que-perfeito do Indicativo', conjugations: [ { person: 'eu', form: 'estivera', isIrregular: true }, { person: 'tu', form: 'estiveras', isIrregular: true }, { person: 'ele/ela', form: 'estivera', isIrregular: true }, { person: 'nós', form: 'estivéramos', isIrregular: true }, { person: 'vós', form: 'estivéreis', isIrregular: true }, { person: 'eles/elas', form: 'estiveram', isIrregular: true } ] },
      { name: 'Futuro do Presente do Indicativo', conjugations: [ { person: 'eu', form: 'estarei', isIrregular: false }, { person: 'tu', form: 'estarás', isIrregular: false }, { person: 'ele/ela', form: 'estará', isIrregular: false }, { person: 'nós', form: 'estaremos', isIrregular: false }, { person: 'vós', form: 'estareis', isIrregular: false }, { person: 'eles/elas', form: 'estarão', isIrregular: false } ] },
      { name: 'Futuro do Pretérito do Indicativo', conjugations: [ { person: 'eu', form: 'estaria', isIrregular: false }, { person: 'tu', form: 'estarias', isIrregular: false }, { person: 'ele/ela', form: 'estaria', isIrregular: false }, { person: 'nós', form: 'estaríamos', isIrregular: false }, { person: 'vós', form: 'estaríeis', isIrregular: false }, { person: 'eles/elas', form: 'estariam', isIrregular: false } ] },
      { name: 'Presente do Subjuntivo', conjugations: [ { person: 'que eu', form: 'esteja', isIrregular: true }, { person: 'que tu', form: 'estejas', isIrregular: true }, { person: 'que ele/ela', form: 'esteja', isIrregular: true }, { person: 'que nós', form: 'estejamos', isIrregular: true }, { person: 'que vós', form: 'estejais', isIrregular: true }, { person: 'que eles/elas', form: 'estejam', isIrregular: true } ] },
      { name: 'Pretérito Imperfeito do Subjuntivo', conjugations: [ { person: 'se eu', form: 'estivesse', isIrregular: true }, { person: 'se tu', form: 'estivesses', isIrregular: true }, { person: 'se ele/ela', form: 'estivesse', isIrregular: true }, { person: 'se nós', form: 'estivéssemos', isIrregular: true }, { person: 'se vós', form: 'estivésseis', isIrregular: true }, { person: 'se eles/elas', form: 'estivessem', isIrregular: true } ] },
      { name: 'Futuro do Subjuntivo', conjugations: [ { person: 'quando eu', form: 'estiver', isIrregular: true }, { person: 'quando tu', form: 'estiveres', isIrregular: true }, { person: 'quando ele/ela', form: 'estiver', isIrregular: true }, { person: 'quando nós', form: 'estivermos', isIrregular: true }, { person: 'quando vós', form: 'estiverdes', isIrregular: true }, { person: 'quando eles/elas', form: 'estiverem', isIrregular: true } ] },
      { name: 'Imperativo Afirmativo', conjugations: [ { person: 'tu', form: 'está', isIrregular: true }, { person: 'você', form: 'esteja', isIrregular: true }, { person: 'nós', form: 'estejamos', isIrregular: true }, { person: 'vós', form: 'estai', isIrregular: true }, { person: 'vocês', form: 'estejam', isIrregular: true } ] },
      { name: 'Imperativo Negativo', conjugations: [ { person: 'tu', form: 'não estejas', isIrregular: true }, { person: 'você', form: 'não esteja', isIrregular: true }, { person: 'nós', form: 'não estejamos', isIrregular: true }, { person: 'vós', form: 'não estejais', isIrregular: true }, { person: 'vocês', form: 'não estejam', isIrregular: true } ] },
      { name: 'Infinitivo Pessoal', conjugations: [ { person: 'eu', form: 'estar', isIrregular: false }, { person: 'tu', form: 'estares', isIrregular: false }, { person: 'ele/ela', form: 'estar', isIrregular: false }, { person: 'nós', form: 'estarmos', isIrregular: false }, { person: 'vós', form: 'estardes', isIrregular: false }, { person: 'eles/elas', form: 'estarem', isIrregular: false } ] }
    ]
  }
];

export function getAllVerbs() {
  return verbs;
}

export function getVerbByInfinitive(infinitive: string): VerbData | undefined {
  return verbs.find((v) => v.infinitive.toLowerCase() === infinitive.toLowerCase());
}
