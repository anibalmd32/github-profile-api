import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit } from '@octokit/rest';
import { OCTOKIT_CLIENT } from './github.constants';
import { GithubService } from './github.service';
import type { EnvironmentVariables } from '../../config/configuration';

@Module({
  providers: [
    {
      provide: OCTOKIT_CLIENT,
      inject: [ConfigService],
      useFactory: (configService: ConfigService<EnvironmentVariables>) => {
        const token = configService.get<string>('GITHUB_TOKEN');
        return new Octokit(token ? { auth: token } : undefined);
      },
    },
    GithubService,
  ],
  exports: [GithubService],
})
export class GithubModule {}
