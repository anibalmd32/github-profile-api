import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: jest.Mocked<
    Pick<UserService, 'getGithubProfileInfoByUsername'>
  >;

  beforeEach(async () => {
    const mockUserService = {
      getGithubProfileInfoByUsername: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useValue: mockUserService }],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get(UserService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call UserService with the username param', async () => {
    const mockProfile = { login: 'testuser', name: 'Test' };
    userService.getGithubProfileInfoByUsername.mockResolvedValue(
      mockProfile as any,
    );

    const result = await controller.getGithubProfileInfoByUsername('testuser');
    expect(result).toEqual(mockProfile);
    expect(userService.getGithubProfileInfoByUsername).toHaveBeenCalledWith(
      'testuser',
    );
  });
});
