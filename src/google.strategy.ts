import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy, VerifyCallback} from 'passport-google-oauth20'

@Injectable()

export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
 
    constructor(){
        super({
            clientID: '749446066756-vaijuq2s0m904nldmueg5ne3vu9tsqnj.apps.googleusercontent.com',
            clientSecret: "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",
            callbackURL: "http://localhost:3000/auth/google/callback",
            scope:['email','profile']
        });
    }

    async validate(asccessToken: string, 
                   refreshToken: string, 
                   profile:any,done: 
                   VerifyCallback): 
    Promise<any>{
        const {name,emails,photos} = profile
        const user = {
            emails:emails[0].value,
            fistname:name.givename,
            lastname: name.familyName,
            picture: photos[0].value,
            asccessToken
        }
        done(null, user)
    }
}