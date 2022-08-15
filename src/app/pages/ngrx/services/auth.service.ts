import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth'
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }
  login() {
    return from(new Promise<string>(async (resolve, reject) => {
      try {
        let credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
        let tokenId = await credential.user.getIdToken();
        resolve(tokenId);
      }
      catch {
        reject("Cannot log into Google");
      }
    }));
  }
}
