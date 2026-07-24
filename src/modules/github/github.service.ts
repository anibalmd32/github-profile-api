import { Injectable, Inject, Logger } from '@nestjs/common';
import type { OctokitClient } from './github.constants';
import { OCTOKIT_CLIENT } from './github.constants';

@Injectable()
export class GithubService {
  private readonly logger = new Logger(GithubService.name);

  constructor(
    @Inject(OCTOKIT_CLIENT) private readonly octokit: OctokitClient,
  ) {}

  /**
   * Obtiene el perfil de un usuario de GitHub.
   */
  async getUserProfile(username: string) {
    this.logger.log(`Fetching profile for user: ${username}`);
    const { data } = await this.octokit.rest.users.getByUsername({ username });
    return data;
  }

  /**
   * Obtiene los repositorios públicos de un usuario.
   */
  async getUserRepos(username: string, perPage = 30) {
    this.logger.log(`Fetching repos for user: ${username}`);
    const { data } = await this.octokit.rest.repos.listForUser({
      username,
      per_page: perPage,
      sort: 'updated',
    });
    return data;
  }

  /**
   * Obtiene el usuario autenticado (dueño del token).
   */
  async getAuthenticatedUser() {
    this.logger.log('Fetching authenticated user');
    const { data } = await this.octokit.rest.users.getAuthenticated();
    return data;
  }
}
