import { ShowProductsProps } from './show-products.types';


export const ShowProducts = ({ data }: ShowProductsProps) => {
    return (
        <div>
            {data.map((product, index) => (<li key={index}>{product.name}</li>))}
        </div>
    )
}