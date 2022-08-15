
import { createReducer, on } from "@ngrx/store";
import { ListAction } from "../actions/auth.action";
import { AuthState } from "../states/auth.state";

export const initialState: AuthState ={
    isAuthenticated: false,
    tokenId: '',
    error: '',
}

export const authReducer = createReducer(
    initialState,
    on(ListAction.login, state => state),

    on(ListAction.loginSuccess, (state, action) =>({
        ...state,
        isAuthenticated: true,
        tokenId: action.tokenId,
    })),

    on(ListAction.loginFailure, (state, action) => ({
        ...state,
        error: action.error,
    })),
)