import { ActionReducerMap } from '@ngrx/store';

import { IappState } from '../state/app.state';
import { userReducers } from './user.reducers';

export const appReducers: ActionReducerMap<IappState, any> = {
    users: userReducers
};
