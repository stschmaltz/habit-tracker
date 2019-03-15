module.exports = function(env) {
  return {
    clientAllowedKeys: [
      'FIREBASE_API_KEY',
      'FIREBASE_DB_URL',
      'FIREBASE_SB_URL',
      'FIREBASE_AUTH_DOMAIN',
    ],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: false,
  };
};
