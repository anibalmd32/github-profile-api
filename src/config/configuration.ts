export interface EnvironmentVariables {
  PORT: number;
  NODE_ENV: string;
  GITHUB_TOKEN?: string;
  GITHUB_API_URL?: string;
}

export default (): EnvironmentVariables => ({
  PORT: parseInt(process.env.PORT ?? '3000', 10),
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  GITHUB_API_URL: process.env.GITHUB_API_URL ?? 'https://api.github.com',
});
