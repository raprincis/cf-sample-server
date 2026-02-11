namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      VCAP_SERVICES: string;
      VCAP_APPLICATION: string;
    }
  }