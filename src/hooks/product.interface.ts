export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  [key: string]: string | number;
}
