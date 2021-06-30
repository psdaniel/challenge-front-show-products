import { useState } from 'react';
import { getProductsApi } from '../api/get-products';
import { PRODUCTS_MOCK } from '../api/products.mock';
import { Button } from '../shared/components/button/button';
import { Input } from '../shared/components/input/input';
import { Product, ShowProducts } from '../show-products';

export const Dashboard = () => {
    const [filter, setFilter] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const handleChange = ({ target }: { target: { value: string } }) => {
        const { value } = target;
        setFilter(value);
    };

    const handleClick = async () => {
        //const data = await getProductsApi(filter);
        const data = PRODUCTS_MOCK
        setProducts(data);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <Input
                type="text"
                placeholder="Digite o nome do produto"
                value={filter}
                name='filter'
                id='filter'
                onChange={handleChange}
            />
            <Button
                buttonText="Buscar"
                onClick={handleClick}
            />
            <ShowProducts data={products} />
        </div>
    )
}