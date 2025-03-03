import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: "Y5h7$GtZ!2dXoQ#L9sJkV1pA3fM@dT6u",
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}
