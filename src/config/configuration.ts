export interface EnvironmentVariables {
  PORT: number;
  NODE_ENV: string;
}

export default (): EnvironmentVariables => ({
  PORT: parseInt(process.env.PORT ?? '3000', 10),
  NODE_ENV: process.env.NODE_ENV ?? 'development',
});
