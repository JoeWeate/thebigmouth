const prod_config = {
  env: "prod",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "thebigmouth-media",
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "etcart9j81.execute-api.eu-west-2.amazonaws.com/v1/",
  },
  auth0: {
    domain: "thebigmouth.uk.auth0.com",
    clientId: "aYP7YnBCGp8iIo3UKdQfn2WOyi9652jp",
    apiAudience: "https://auth0-jwt-authorizer",
    // 'apiAudience': 'https://snp-perf-api.com',
    // 'callbackUrl': `${window.origin}/authenticate`,
    // 'realm': 'Email-Password-Authentication',
    //  'scope': 'openid email update:email update:password',
    // 'token': 'token id_token'
  },
  ga: {
    // 'id': 'G-12345'
  },
};

// Edit the REACT_APP_ENV variable in the root .env file
// const env_config = process.env.REACT_APP_ENV !== 'production' ? perf_config : prod_config
export default prod_config;
