import { Injectable } from '@angular/core';
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    {
      code: '001',
      title: 'SAMSUNG Galaxy Book 15.6\'\', i7, 16GB, 512GB, Mystic Silver',
      description: 'Processore Intel® Core™ I7-1165G7 (2.8 GHz - 12 MB L2)\n' +
        '              SSD: 512 GB - RAM: 16 GB - Display: 15.6\'\' LED Full HD\n' +
        '              WiFi IEEE 802.11a/b/g/n/ac/ax - Bluetooth 5.1 - Windows 11 Home\n' +
        '              Scheda grafica: INTEL Iris Xe Graphics Condivisa',
      shortDescription: 'Notebook da 15.6\'\'',
      url: 'https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/16/48/164812.jpg'
    },
    {
      code: '002',
      title: 'ACER Notebook Aspire 3, Intel Core I5-1035G1, 15.6\'\', 8GB, 512GB',
      description: 'Processore Intel® Core™ I5-1035G1 (1 GHz - 6 MB L2)\n' +
        'SSD: 512 GB - RAM: 8 GB - Display: 15,6\'\' LCD Full HD\n' +
        'WiFi IEEE 802.11a/b/g/n/ac - Bluetooth 4.2 - Windows 10 Home\n' +
        'Scheda grafica: INTEL UHD Graphics Condivisa',
      shortDescription: 'Notebook da 15.6\'\'',
      url: 'https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/13/08/130863_thumb.jpg'
    },
    {
      code: '003',
      title: 'LG 28TN515S-PZ',
      description: 'Monitor LED 28\'\' - Risoluzione: HD 1366x768 pixel\n' +
        'Luminosità: 250 cd/m² - Tempo di risposta: 8 ms\n' +
        'Casse - Interfaccia HDMI',
      shortDescription: 'Monitor',
      url: 'https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/13/42/134241.jpg'
    }
  ]

  constructor() {}


  getProducts(): Array<Product> {
    return this.products;
  }

  addProduct(product: Product) {
  }

  removeProduct(code: string) {

  }
}
