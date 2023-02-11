import { createPool } from 'mysql2';

export const connectToDB = createPool({
  database: import.meta.env.VITE_MQDATABASE,
  user: import.meta.env.VITE_MQUSER,
  host: import.meta.env.VITE_MQHOST,
  password: import.meta.env.VITE_MQPASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: true
  }
});
