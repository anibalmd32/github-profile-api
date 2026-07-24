import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username')
  @ApiOperation({ summary: 'Get GitHub profile by username' })
  @ApiParam({
    name: 'username',
    description: 'GitHub username',
    example: 'anibalmd32',
  })
  async getGithubProfileInfoByUsername(@Param('username') username: string) {
    return this.userService.getGithubProfileInfoByUsername(username);
  }
}
