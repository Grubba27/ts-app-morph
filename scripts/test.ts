import { Meteor } from "meteor/meteor";
import { SomeFn } from "/scripts/imported";
import { baz, other, something, localFake } from "/scripts/other/import";
import { Server } from "/Server";
import { someJs } from "/scripts/some-js";

function _localFake(...args: any[]) {
  return localFake(...args);
}

export const server = {
  baz: baz,
  'other-method': other,
  'bruh': something,
  'imported-method': SomeFn,
  localFake,
  someJs
}


