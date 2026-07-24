import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { GithubService } from '../github/github.service';

describe('UserService', () => {
  let service: UserService;
  let githubService: jest.Mocked<Pick<GithubService, 'getUserProfile'>>;

  beforeEach(async () => {
    const mockGithubService = {
      getUserProfile: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: GithubService, useValue: mockGithubService },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    githubService = module.get(GithubService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should delegate to GithubService.getUserProfile', async () => {
    const mockProfile = { login: 'testuser', name: 'Test' };
    githubService.getUserProfile.mockResolvedValue(mockProfile as any);

    const result = await service.getGithubProfileInfoByUsername('testuser');
    expect(result).toEqual(mockProfile);
    expect(githubService.getUserProfile).toHaveBeenCalledWith('testuser');
  });
});
