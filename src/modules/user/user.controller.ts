import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username')
  getGithubProfileInfoByUsername(@Param() username: string) {
    return this.userService.getGithubProfileInfoByUsername(username);
  }
}
