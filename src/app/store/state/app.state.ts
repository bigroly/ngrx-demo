import { IUserState, initialUserState } from './user.state';

export interface IappState {
    users: IUserState;
}

export const initialAppState: IappState = {
    users: initialUserState
};

export function getInitialState(): IappState {
    return initialAppState;
}
