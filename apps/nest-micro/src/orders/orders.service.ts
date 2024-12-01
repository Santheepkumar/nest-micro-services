import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(@Inject('ORDERS_CLIENT') private ordersClient: ClientProxy) {}
  create(createOrderDto: CreateOrderDto) {
    return this.ordersClient.send('orders.create', createOrderDto);
  }

  findAll() {
    return this.ordersClient.send('orders.findAll', {});
  }

  findOne(id: number) {
    return this.ordersClient.send('orders.findOne', id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.ordersClient.send('orders.update', { id, ...updateOrderDto });
  }

  remove(id: number) {
    return this.ordersClient.send('orders.remove', id);
  }
}
