import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findAll() {
    return 'All';
  }

  findOne(id: string) {
    return id;
  }
}
