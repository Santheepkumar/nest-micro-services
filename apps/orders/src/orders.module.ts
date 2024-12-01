import { Module } from '@nestjs/common';
import { OrdersModule as OM } from './orders/orders.module';

@Module({
  imports: [OM],
  controllers: [],
  providers: [],
})
export class OrdersModule {}
