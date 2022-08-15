import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import { switchMap, map, catchError, } from "rxjs/operators";
import { ListAction } from "../actions/auth.action";
import { AuthService } from "../services/auth.service";
import { of } from "rxjs";

@Injectable()

export class AuthEffect {
    constructor(private action$:Actions,  private authService: AuthService){ }

    authEffect$ = createEffect(() => this.action$.pipe(
        ofType(ListAction.login),
        switchMap(() => this.authService.login()),
        map(tokenId => ListAction.loginSuccess({ tokenId: tokenId})),
        catchError(error => of(ListAction.loginFailure({error: error})))));
}