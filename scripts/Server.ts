import { Meteor } from "meteor/meteor";
import { SomeFn } from "/scripts/imported";
import { baz, other, something, localFake } from "/scripts/other/import";
function _localFake (...args: any[]) {
    return localFake(...args);
}

export const server = {
    baz: baz,
    'other-method': other,
    'bruh': something,
    'imported-method': SomeFn,
    localFake,
    some: () => 'kk'
}


export type Server = typeof server

function callMethod<T extends keyof Server>(method: T, ...args: Parameters<Server[T]>): ReturnType<Server[T]> {
    return Meteor.call(method, ...args) as ReturnType<Server[T]>;
}
type j = ReturnType<Server['bruh']>
const k = callMethod('bruh')
