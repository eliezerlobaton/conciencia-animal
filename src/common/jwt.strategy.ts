import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { JwtPaload } from 'src/interfaces/jwt-payload';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPaload): Promise<User> {
    const { id, email } = payload;

    const user = await this.userRepository.findOneBy({ id })

    if (!user)
      throw new UnauthorizedException('Token invalid')
    return
  }
}
