import { Module } from '@nestjs/common';
import { OCTOKIT_CLIENT } from './github.constants';
import { GithubService } from './github.service';

@Module({
  providers: [
    {
      provide: OCTOKIT_CLIENT,
      useFactory: async () => {
        const { Octokit } = await import('@octokit/rest');
        return new Octokit();
      },
    },
    GithubService,
  ],
  exports: [GithubService],
})
export class GithubModule {}
