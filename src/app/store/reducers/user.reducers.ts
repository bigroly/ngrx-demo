import { EuserActions, UserActions } from '../actions/user.actions';
import { initialUserState, IUserState  } from '../state/user.state';

export const userReducers = (
    state = initialUserState,
    action: UserActions
): IUserState => {
    switch (action.type) {
        case EuserActions.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }

        default:
            return state;
    }
};
