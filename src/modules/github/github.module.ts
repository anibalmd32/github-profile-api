import { Module } from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { OCTOKIT_CLIENT } from './github.constants';
import { GithubService } from './github.service';

@Module({
  providers: [
    {
      provide: OCTOKIT_CLIENT,
      useFactory: () => new Octokit(),
    },
    GithubService,
  ],
  exports: [GithubService],
})
export class GithubModule {}
