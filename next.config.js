// next.config.js  
module.exports = {  
    reactStrictMode: true,  
    env: {  
      CUSTOM_ENV_VARIABLE: 'your_custom_value',  
    },  
    images: {  
      domains: ['example.com', 'another-example.com'],  
    },  
    webpack: (config, { isServer }) => {  
      // Modify the webpack config as needed  
      if (!isServer) {  
        config.resolve.fallback.fs = false;  
      }  
      return config;  
    },  
  };