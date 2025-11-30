require('dotenv').config();

const admin = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || '123456'
};

const server = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'nav-item-jwt-secret-2024-secure-key'
};

// 安全检查：在生产环境中强制要求覆盖弱默认值
if (process.env.NODE_ENV === 'production') {
  if (!process.env.JWT_SECRET || server.jwtSecret === 'nav-item-jwt-secret-2024-secure-key') {
    console.error('\nERROR: JWT_SECRET is not set or using the default insecure value.');
    console.error('Set a strong JWT_SECRET in environment variables before starting the app in production.\n');
    process.exit(1);
  }
  if (!process.env.ADMIN_PASSWORD || admin.password === '123456') {
    console.error('\nERROR: ADMIN_PASSWORD is not set or is using the default insecure password.');
    console.error('Set ADMIN_PASSWORD in environment variables before starting the app in production.\n');
    process.exit(1);
  }
}

module.exports = {
  admin,
  server
};
