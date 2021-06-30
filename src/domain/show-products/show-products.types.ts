export interface Product {
    id: string;
    name: string;
    type: string;
}

export interface ShowProductsProps {
    data: Product[];
}