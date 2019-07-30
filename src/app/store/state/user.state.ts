import { IUser } from '../../models/IUser';

export interface IUserState {
    users: IUser[];
}

export const initialUserState: IUserState = {
    users: []
};
