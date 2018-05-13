// export enum LocaleT {
//     'en-US' = 'en-US',
//     'de-DE' = 'de-DE',
// }
export type LocaleT = 'en-US' | 'de-DE';

export interface AppT {
    locale: LocaleT;
}

export interface GenericActionT {
    type: string;
    payload: any;
}

export type ActionT = GenericActionT;
