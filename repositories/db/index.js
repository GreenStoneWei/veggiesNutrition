"use strict";
const typeorm_1 = require("typeorm");
const tfnd_1 = require("./model/tfnd");
class Rdb {
    async connect(config, opt) {
        this.config = Object.assign(Object.assign({}, config), { entities: ['entities/*.js'], type: 'postgres', name: 'veggies' });
        try {
            const connectionConfig = Object.assign({}, this.config);
            this.client = await typeorm_1.createConnection(connectionConfig);
            if (opt.needSync === true) {
                await this.client.createQueryRunner().createSchema(config.schema, true);
                await this.client.synchronize(true);
            }
            // this.tutor = new ModelTutors(this.client)
            return this.client;
        }
        catch (error) {
            throw error;
        }
    }
    async connectTdNd(config, opt) {
        this.config = Object.assign(Object.assign({}, config), { entities: ['entities/*.js'], type: 'postgres', name: 'tfnd' });
        try {
            const connectionConfig = Object.assign({}, this.config);
            this.tfndClient = await typeorm_1.createConnection(connectionConfig);
            if (opt.needSync === true) {
                await this.tfndClient.createQueryRunner().createSchema(config.schema, true);
                await this.tfndClient.synchronize(true);
            }
            this.tfnd = new tfnd_1.ModelTNFD(this.tfndClient);
            return this.client;
        }
        catch (error) {
            throw error;
        }
    }
    async checkConnection() {
        try {
            if (this.client !== undefined) {
                // await this.client.query('SELECT 1')
                await this.tfndClient.query('SELECT 1');
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
            if (this.tfndClient !== undefined)
                await this.tfndClient.close();
        }
        catch (error) {
            throw error;
        }
    }
}
module.exports = new Rdb();
//# sourceMappingURL=index.js.map