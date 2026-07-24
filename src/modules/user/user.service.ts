import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getGithubProfileInfoByUsername(username: string) {
    return username;
  }
}
