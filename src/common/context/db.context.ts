// user-context.service.ts
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class DbContextService {
  private db_name: string;

  set set_db_name(value: string) {
    this.db_name = value;
  }

  get get_db_name(): string {
    return this.db_name;
  }
}
