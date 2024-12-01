import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('orders.create')
  create(@Payload() createOrderDto: CreateOrderDto) {
    console.log('Creating here..');
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern('orders.findAll')
  findAll() {
    console.log('Finding here..');
    return this.ordersService.findAll();
  }

  @MessagePattern('orders.findOne')
  findOne(@Payload() id: number) {
    return this.ordersService.findOne(id);
  }

  @MessagePattern('orders.update')
  update(@Payload() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(updateOrderDto.id, updateOrderDto);
  }

  @MessagePattern('orders.remove')
  remove(@Payload() id: number) {
    return this.ordersService.remove(id);
  }
}
