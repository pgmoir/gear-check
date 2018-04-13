import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
            .then(
                response => {
                    this.router.navigate(['/']);
                    console.log(response);
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token: string) => this.token = token
                        );
                }
            );
    }

    signOut() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
