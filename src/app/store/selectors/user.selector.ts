import { createSelector } from '@ngrx/store';

import { IappState } from '../state/app.state';
import { IUserState } from '../state/user.state';

const selectUsers = (state: IappState) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: IUserState) => state.users
);
