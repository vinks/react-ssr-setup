/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { AppT, LocaleT } from './types.ts';

export const app = (state: { app: AppT }): AppT => state.app;

export const getLocale = createSelector([app], (app) => app.locale);
