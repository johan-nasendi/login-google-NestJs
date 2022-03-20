import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req){
    if(!req.user){
      return 'No user from google'
    }
    return {
      massage: 'user Info From Google',
      user:req.user
    }
  }
}
