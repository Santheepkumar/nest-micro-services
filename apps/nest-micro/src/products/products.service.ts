import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_SERVICE') private productsService: ClientProxy,
  ) {}
  findAll() {
    return this.productsService.send('products.findAll', {});
  }
}
