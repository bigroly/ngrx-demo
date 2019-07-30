import { Action } from '@ngrx/store';
import { IUser } from '../../models/IUser';

export enum EuserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success'
}

export class GetUsers implements Action {
    public readonly type = EuserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
    public readonly type = EuserActions.GetUsersSuccess;
    constructor(public payload: IUser[]) {}
}

export type UserActions = GetUsers | GetUsersSuccess;
