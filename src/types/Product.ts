//Tipando os items de produtos

export interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  priceDiscount: number;
  description: string;
  imgUrl: string;
  discountTrinta: boolean;
  discountCinquenta: boolean;
  newProduct: boolean;
}

export interface ProductHome {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  priceDiscount: number;
  description: string;
  imgUrl: string;
  discountTrinta: boolean;
  discountCinquenta: boolean;
  newProduct: boolean;
}
