import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaModule } from './lista/lista.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type":"mysql",
    "host":"b39vlac7vokynrsawylw-mysql.services.clever-cloud.com",
    "port":3306,
    "username":"urr1zsoumlcigcut",
    "password":"ygOigmpHQOmIb1YQTUwI",
    "database":"b39vlac7vokynrsawylw",
    "entities":[`${__dirname}/**/**/**.entity{.ts,.js}`],
    "synchronize":true
    })
    ,ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
