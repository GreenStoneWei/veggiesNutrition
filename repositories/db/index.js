"use strict";
const typeorm_1 = require("typeorm");
class Rdb {
    async connect(config, needSync) {
        this.config = Object.assign(Object.assign({}, config), { entities: ['entities/*.js'], type: 'postgres', name: 'hermes' });
        try {
            const connectionConfig = Object.assign(Object.assign({}, this.config), { cache: this.config.redis
                    ? {
                        type: 'redis',
                        options: {
                            host: this.config.redis.host,
                            password: this.config.redis.password || undefined,
                            port: 6379
                        }
                    }
                    : undefined });
            this.client = await typeorm_1.createConnection(connectionConfig);
            if (needSync === true) {
                await this.client.createQueryRunner().createSchema(config.schema, true);
                await this.client.synchronize(true);
            }
            // this.history = new ModelHistory(this.client, this.config.schema)
            return this.client;
        }
        catch (error) {
            throw error;
        }
    }
    async disconnect() {
        try {
            if (this.client !== undefined)
                await this.client.close();
        }
        catch (error) {
            throw error;
        }
    }
}
module.exports = new Rdb();
//# sourceMappingURL=index.js.map