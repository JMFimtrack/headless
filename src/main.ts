import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Fimtrack example')
    .setDescription('Esta API está diseñada para clientes B2B y proporciona acceso a los datos relacionados con el servicio asignado. Su principal función es permitir la consulta y obtención de información relevante sobre los servicios que han sido asignados a cada cliente. A través de esta interfaz, los usuarios pueden integrar y acceder fácilmente a los datos de manera eficiente para optimizar su gestión de servicios y operaciones comerciales.')
    .setVersion('1.0')
    .addTag('Fimtrack B2B')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors({
    "origin": "http://localhost:4200",
    "methods": "GET,POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
