import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IappState } from '../state/app.state';
import { GetUsers, GetUsersSuccess, EuserActions } from '../actions/user.actions';

import { UserService } from '../../services/user.service';
import { IUser } from '../../models/IUser';

@Injectable()
export class UserEffects {
    @Effect()
    getUsers$ = this.actions$.pipe(
        ofType<GetUsers>(EuserActions.GetUsers),
        switchMap(() => this.userService.getUsers()),
        switchMap((userHttp: IUser[]) => of(
            new GetUsersSuccess(userHttp)
        ))
    );

    // @Effect()
    // postUser$ = this.actions$.pipe(
    //     ofType<PostUser>(EuserActions.PostUser),
    //     switchMap((action) => this.userService.postUserV2(action.payload)),
    //     switchMap((response: any) => of(
    //         new PostUserSuccess(response, this.toastrService)
    //     ))
    // );

    constructor(
        private userService: UserService,
        private actions$: Actions,
        private store: Store<IappState>
    ) {}
}
