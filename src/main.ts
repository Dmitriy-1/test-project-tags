import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Swagger} from "./core/swagger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Swagger(app)
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))

  await app.listen(3000);
}
bootstrap();
