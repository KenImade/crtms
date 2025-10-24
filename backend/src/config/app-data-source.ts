import { DataSource } from "typeorm";

export const postgresDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "test_db",
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: false,
});