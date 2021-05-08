module.exports = {
  port: 3000,
  redis: {
    host: 'localhost',
    port: 6379,
    password: undefined,
    db: undefined
  },
  dB: {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'tutorAPI',
    password: 'tutorAPI',
    database: 'tutorAPI',
    autoMigrateOldSchema: true,
    migrationStorageTableName: 'Migrations'
  }
}
