"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const config_1 = require("@nestjs/config");
const enumConfig_1 = require("./enumConfig");
const postgress_config_1 = require("./postgress.config");
exports.databaseConfig = (0, config_1.registerAs)(enumConfig_1.EnumConfig.DATABASE, () => ({
    pg: {
        ...(0, postgress_config_1.pgConfig)()
    },
}));
//# sourceMappingURL=configuration.js.map