
const prod_config =
{
  env: 'prod',
  s3: {
    REGION: 'eu-west-1',
    BUCKET: 'thebigmouth-media'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'bqvbrpmepj.execute-api.us-east-1.amazonaws.com/v1'
  },
  auth0:{
    // 'domain': 'dev-a3d-pxib.us.auth0.com',
    // 'clientId': 'yJou2XVElSbPvbmi5DpyYrJ8itIuN6Cg',
    // 'apiAudience': 'https://snp-perf-api.com',
    // 'callbackUrl': `${window.origin}/authenticate`,
   // 'realm': 'Email-Password-Authentication',
   //  'scope': 'openid email update:email update:password',
    // 'token': 'token id_token'
  },
  ga: {
    // 'id': 'G-12345'
  }
}

// Edit the REACT_APP_ENV variable in the root .env file
// const env_config = process.env.REACT_APP_ENV !== 'production' ? perf_config : prod_config
export default prod_config
