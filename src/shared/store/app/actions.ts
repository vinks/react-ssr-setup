import { LocaleT } from './types.ts';

export const ActionTypes = {
    SETLOCALE: 'app/set-locale',
};

export const setLocale = (locale: LocaleT) => ({
    type: ActionTypes.SETLOCALE,
    payload: locale,
});
