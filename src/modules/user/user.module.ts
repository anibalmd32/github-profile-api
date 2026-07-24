import { Module } from '@nestjs/common';
import { GithubModule } from '../github/github.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [GithubModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
