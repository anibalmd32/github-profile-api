import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('UserController (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /user/:username returns 200 and profile data', () => {
    return request(app.getHttpServer())
      .get('/user/testuser')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('login', 'testuser');
        expect(res.body).toHaveProperty('name', 'Test User');
        expect(res.body).toHaveProperty('public_repos', 5);
        expect(res.body).toHaveProperty('followers', 10);
        expect(res.body).toHaveProperty('following', 3);
      });
  });
});
