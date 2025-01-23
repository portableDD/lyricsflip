/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UserService } from 'src/user/providers/user.service';
import { SignInDto } from '../dtos/signIn.dto';
import { UserDTO } from 'src/user/dtos/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  public signIn(signInDto: SignInDto) {
    //Find the user using email
    //If the user is not found throw an error
    //Compare the password
    // Confirmation Message
  }

  public async createUser(userDto: UserDTO) {
    return await this.userService.createUser(userDto);
  }
}
