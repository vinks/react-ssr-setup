// @flow
import { ActionT, AppT } from './types.ts';
import { ActionTypes } from './actions.ts';

export const initialState: AppT = {
    locale: 'en-US',
};

export default (state: AppT = initialState, action: ActionT): AppT => {
    const { type, payload = {} } = action;

    switch (type) {
        case ActionTypes.SETLOCALE: {
            return {
                ...state,
                locale: payload,
            };
        }
    }

    return state;
};
