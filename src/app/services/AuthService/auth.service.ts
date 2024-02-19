import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { jwtDecode } from "jwt-decode";
import { AppStateService } from '../appState/app-state.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private roles: string[] = [];
  

  constructor(private router: Router ,private http: HttpClient, private appState: AppStateService) {
    this.token = localStorage.getItem('token');
  }

  async login(email: string, password: string) {
    try {
      const loginResponse = await firstValueFrom(this.http.post<any>("http://localhost:8080/api/v1/auth/authenticate", {
        email: email,
        password: password
      }));
  
      // Check if the loginResponse contains access_token and refresh_token properties
      if (!loginResponse || !loginResponse.access_token || !loginResponse.refresh_token) {
        throw new Error("Invalid login response: Tokens not found");
      }

      console.log(loginResponse);
  
      const accessToken = loginResponse.access_token;
      const refreshToken = loginResponse.refresh_token;
  
      localStorage.setItem('token', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
  
      // Set the access token in the AuthService
      this.token = accessToken;
      
  
      const decodedJwt: any = jwtDecode(accessToken);
      this.roles = decodedJwt.roles || [];
  
      this.appState.setAuthState({
        isAuthenticated: true,
        username: decodedJwt.sub,
        roles: this.roles, 
        token: accessToken
      });
  
      return true; 
    } catch (error) {
      console.error(error);
      return Promise.reject("Login failed. Please check your credentials."); 
    }
  }
  

  logout() {
  
    localStorage.removeItem('access_token');

    this.token = null;
  
    this.appState.setAuthState({
      isAuthenticated: false,
      username: undefined,
      roles: [],
      token: undefined
    });
    this.router.navigateByUrl('/login');
  }

  isAuthenticated(): boolean {
   
    return !!this.token;
  }

  getUserRoles(): string[] {
    return this.roles;
  }

}
