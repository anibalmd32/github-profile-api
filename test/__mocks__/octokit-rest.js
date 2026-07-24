const mockOctokit = jest.fn(() => ({
  rest: {
    users: {
      getByUsername: jest.fn().mockResolvedValue({
        data: {
          login: 'testuser',
          name: 'Test User',
          bio: 'A test bio',
          public_repos: 5,
          followers: 10,
          following: 3,
          avatar_url: 'https://example.com/avatar.png',
          html_url: 'https://github.com/testuser',
          location: 'Test Location',
          company: null,
          blog: '',
          twitter_username: null,
          created_at: '2020-01-01T00:00:00Z',
        },
      }),
    },
  },
}));

module.exports = { Octokit: mockOctokit };
