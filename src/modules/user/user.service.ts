import { Injectable } from '@nestjs/common';
import { GithubService } from '../github/github.service';

@Injectable()
export class UserService {
  constructor(private readonly githubService: GithubService) {}

  async getGithubProfileInfoByUsername(username: string) {
    return this.githubService.getUserProfile(username);
  }
}
