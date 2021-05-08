module.exports = {
  port: 3000,
  redis: {
    host: '127.0.0.1',
    port: 6379
  },
  db: {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5434,
    username: 'tutorAPI',
    password: 'tutorAPI',
    database: 'tutorAPI',
    autoMigrateOldSchema: true,
    migrationStorageTableName: 'Migrations'
  }
}
