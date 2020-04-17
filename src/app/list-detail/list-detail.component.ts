import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-detail",
  templateUrl: "./list-detail.component.html",
  styleUrls: ["./list-detail.component.css"]
})
export class ListDetailComponent implements OnInit {
  constructor() {}

  product = {
    productId: "1111",
    productName: "Leaf Rake",
    productCode: "GDN-0011",
    releaseDate: "March 19, 2016",
    description: "Leaf rake with 48-inch wooden handle.",
    price: 19.95,
    starRating: 3.2,
    imageUrl:
      "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  };

  ngOnInit() {}
}
