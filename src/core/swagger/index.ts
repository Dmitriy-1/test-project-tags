import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import {INestApplication} from '@nestjs/common'

export const Swagger = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Api Docs')
        .setDescription('TaskManager')
        .setVersion('1.0')
/*        .addBearerAuth({type: 'http', scheme: 'Bearer', bearerFormat: 'Bearer'})*/
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('swagger', app, document)
}
