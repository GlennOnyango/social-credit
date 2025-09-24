import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { CreditModule } from './credit/credit.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    AuthenticationModule,
    CreditModule,
    UserModule,
    DatabaseModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
