"use strict";
const typeorm_1 = require("typeorm");
const tutors_1 = require("./model/tutors");
class Rdb {
    async connect(config, opt) {
        this.config = Object.assign(Object.assign({}, config), { entities: ['entities/*.js'], type: 'postgres', name: 'hermes' });
        try {
            const connectionConfig = Object.assign({}, this.config);
            this.client = await typeorm_1.createConnection(connectionConfig);
            if (opt.needSync === true) {
                await this.client.createQueryRunner().createSchema(config.schema, true);
                await this.client.synchronize(true);
            }
            this.tutor = new tutors_1.ModelTutors(this.client);
            return this.client;
        }
        catch (error) {
            throw error;
        }
    }
    async checkConnection() {
        try {
            if (this.client !== undefined) {
                await this.client.query('SELECT 1');
                return true;
            }
        }
        catch (error) {
            console.error(error);
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