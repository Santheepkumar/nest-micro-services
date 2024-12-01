import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './dto/order.dto';

@Injectable()
export class OrdersService {
  private orders: Order[] = [
    {
      id: 1,
      product: 'ice cream',
      rating: 2,
    },
  ];

  create(createOrderDto: CreateOrderDto) {
    const newOrder = {
      ...createOrderDto,
      id: this.orders.length + 1,
    };
    console.log('Inside order service creating..', newOrder);
    this.orders.push(newOrder);
    return newOrder;
  }

  findAll() {
    console.log('Inside order service finding..');
    return this.orders;
  }

  findOne(id: number) {
    return this.orders.find((o) => o.id === id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    const orderIdx = this.orders.findIndex((a) => a.id === id);
    const updateProduct = {
      ...updateOrderDto,
      id: orderIdx,
    };
    if (orderIdx !== -1) {
      this.orders[orderIdx] = updateProduct;
    }

    return updateProduct;
  }

  remove(id: number) {
    const orderIdx = this.orders.findIndex((a) => a.id === id);
    if (orderIdx !== -1) {
      this.orders.splice(orderIdx, 1);
    }
    return `Removed order Id:${id}`;
  }
}
