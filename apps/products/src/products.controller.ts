import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('products.findAll')
  getProducts(): string {
    return this.productsService.findAll();
  }
}
