const
  CLIENT_ID = 6099251, // your vk app id
  SCOPE = 8192, // permissions to be able to work with wall api methods. more:  https://vk.com/dev/permissions
  REDIRECT_URL = 'http://localhost:4200/auth';

export const environment = {
  production: false,
  get_token_url: `https://oauth.vk.com/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URL}&response_type=token`
};
