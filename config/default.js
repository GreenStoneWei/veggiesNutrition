module.exports = {
  port: 3000,
  redis: {
    host: '127.0.0.1',
    port: 6379
  },
  tfndDb: {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5434,
    username: 'veggies',
    password: 'veggies',
    database: 'veggies',
    autoMigrateOldSchema: true,
    migrationStorageTableName: 'Migrations',
    logging: true
  },
  db: {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5435,
    username: 'veggies',
    password: 'veggies',
    database: 'veggies',
    autoMigrateOldSchema: true,
    migrationStorageTableName: 'Migrations',
    logging: true
  }
}
