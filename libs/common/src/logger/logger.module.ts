import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule } from 'nestjs-pino'; // Import the LoggerModule from the @nestjs/logger package

@Module({
    imports: [
        PinoLoggerModule.forRoot({
            pinoHttp: {
                transport: {
                    target: 'pino-pretty',
                    options: {
                        level: 'debug',
                    },
                },
            }
        })
    ]
})
export class LoggerModule { }
