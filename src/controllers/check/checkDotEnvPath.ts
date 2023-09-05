export default function getDotEnvPath(env?: string): string {
  if (env === 'prod') {
    return '.env.prod';
  } else if (env === 'test') {
    return '.env.test';
  } else {
    console.warn('No NODE_ENV set. Using .env.test');
    return '.env.test';
  }
}
