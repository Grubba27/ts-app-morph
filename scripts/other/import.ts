import { Server } from "../Server";

export function baz() {
  return 'bar' as const;
}
export function other() {
  return 'other' as const;
}

export function something() {
  return {
    foo: 'bar' as const,
    fizz: 'buzz' as const
  }
}

export function localFake(...params: any[]){
  return 'local' as const
}


