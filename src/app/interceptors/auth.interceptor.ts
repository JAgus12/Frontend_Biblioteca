import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../pages/login/login.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const loginService=inject(LoginService)
  const token=loginService.getToken()

  if(req.url.includes('/auth/login') || req.url.includes('/auth/registro')){
    return next(req)
  }

  const authReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })

  //console.log(authReq)
  return next(authReq);
};
