export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
    isDisabled?: boolean;
  }