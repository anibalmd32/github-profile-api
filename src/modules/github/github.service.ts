import { Injectable, Inject, Logger } from '@nestjs/common';
import type { OctokitClient } from './github.constants';
import { OCTOKIT_CLIENT } from './github.constants';

@Injectable()
export class GithubService {
  private readonly logger = new Logger(GithubService.name);

  constructor(
    @Inject(OCTOKIT_CLIENT) private readonly octokit: OctokitClient,
  ) {}

  async getUserProfile(username: string) {
    this.logger.log(`Fetching profile for user: ${username}`);
    const { data } = await this.octokit.rest.users.getByUsername({ username });
    return data;
  }
}
