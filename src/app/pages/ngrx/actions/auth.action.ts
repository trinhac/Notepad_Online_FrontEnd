import { createAction, props } from "@ngrx/store";

export const ListAction = {
    login: createAction('[Auth] Login'),
    loginSuccess: createAction('[Auth] Login Success', props<{tokenId:string}>()),
    loginFailure: createAction('[Auth] Login Failure', props<{error:string}>()),

    logout: createAction('[Auth] Logout'),
    logoutSuccess: createAction('[Auth] Logout'),
    logoutFailure: createAction('[Auth] Logout Failure', props<{error: string}>()),
} 
