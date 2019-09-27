import { Component, OnInit } from "@angular/core";
import { IProducts } from "./product";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: IProducts[] = [];

  constructor(private productService: ProductService) {}

  run() {
    console.log("running");
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
