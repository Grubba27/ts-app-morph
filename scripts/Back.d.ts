export type Server = {
  baz: typeof import("/Users/grubba/Desktop/work/meteor/tests/ts-app-morph/scripts/other/import").baz;
  'other-method': typeof import("/Users/grubba/Desktop/work/meteor/tests/ts-app-morph/scripts/other/import").other; bruh: typeof import("/Users/grubba/Desktop/work/meteor/tests/ts-app-morph/scripts/other/import").something;
  'imported-method': typeof import("/Users/grubba/Desktop/work/meteor/tests/ts-app-morph/scripts/imported").SomeFn;
};
