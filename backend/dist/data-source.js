"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const config = {
    type: "postgres",
    host: 'db.pagonila.id', // <-- host database
    port: 47001,
    username: 'lrntz_gambitsch',
    password: '6a2bfa7b8a',
    database: 'kasir_bakso_tiga_f984eea72f4649cb9b5072748efd34ca', // <-- nama database
    synchronize: false,
    logging: false,
    migrations: [
        __dirname + '/migration/**.ts' // <-- path "migration" akan dijadikan acuan lokasi untuk men-generate migration database
    ],
    entities: [
        __dirname + '/lib-api/model/**/*.{ts,js}' // <-- "lib-api" = nama sesuai output keluaran generator kode
    ]
};
exports.AppDataSource = new typeorm_1.DataSource(config);
