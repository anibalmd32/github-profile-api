import { Test, TestingModule } from '@nestjs/testing';
import { GithubService } from './github.service';
import { OCTOKIT_CLIENT } from './github.constants';

const mockOctokit = {
  rest: {
    users: {
      getByUsername: jest.fn(),
    },
  },
};

describe('GithubService', () => {
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubService,
        { provide: OCTOKIT_CLIENT, useValue: mockOctokit },
      ],
    }).compile();

    service = module.get<GithubService>(GithubService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch a user profile by username', async () => {
    const mockProfile = {
      login: 'testuser',
      name: 'Test User',
      bio: 'A test bio',
      public_repos: 5,
      followers: 10,
      following: 3,
    };

    mockOctokit.rest.users.getByUsername.mockResolvedValue({
      data: mockProfile,
    });

    const result = await service.getUserProfile('testuser');
    expect(result).toEqual(mockProfile);
    expect(mockOctokit.rest.users.getByUsername).toHaveBeenCalledWith({
      username: 'testuser',
    });
  });
});
