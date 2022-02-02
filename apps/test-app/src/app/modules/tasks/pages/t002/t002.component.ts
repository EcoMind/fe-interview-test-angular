import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/Product";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'fe-interview-test-angular-t002',
  templateUrl: './t002.component.html',
  styleUrls: ['./t002.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class T002Component implements OnInit {

  products: Array<Product>;
  closeResult = '';

  constructor(productService: ProductService,
              private modalService: NgbModal) {
    this.products = productService.getProducts();
  }

  ngOnInit(): void {
  }

  open(content :any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
