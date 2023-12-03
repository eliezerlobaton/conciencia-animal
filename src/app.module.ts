import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: false,
      migrationsTableName: "custom_migration_table",
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      migrations: [
        '../migration/'
      ],
      subscribers: [],

    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
