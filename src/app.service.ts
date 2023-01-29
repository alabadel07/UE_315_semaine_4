import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World !  aller sur la route "graphql" puis ouvrez le fichier test.txt du projet pour avoir une idée sur les testes à faire ';
  }
}
 