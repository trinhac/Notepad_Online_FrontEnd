import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListAction } from './pages/ngrx/actions/auth.action';
import { AuthState } from './pages/ngrx/states/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Note_Frontend';

  tokenId$ = this.store.select((state => state.auth.tokenId));

  constructor(private store:Store<{auth: AuthState}>){}

  login(){
    this.store.dispatch(ListAction.login()); 
  }

}
