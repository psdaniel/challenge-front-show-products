import { useState } from 'react';
import { useStyles } from './dashboard.styles';
import { getProductsApi } from '../api/get-products';
import { PRODUCTS_MOCK } from '../api/products.mock';
import { Button } from '../shared/components/button/button';
import { Input } from '../shared/components/input/input';
import { Product, ShowProducts } from '../show-products';

export const Dashboard = () => {
    const classes = useStyles();

    const [filter, setFilter] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const handleChange = ({ target }: { target: { value: string } }) => {
        const { value } = target;
        setFilter(value);
    };

    const handleClick = async () => {
        // The API is returning CORS error when I make this request, so I decided to mock the data
        //const data = await getProductsApi(filter);
        const data = PRODUCTS_MOCK
        setProducts(data);
    };

    return (
        <div className={classes.dashboardContainer}>
            <h1 className={classes.dashboardTitle}>Dashboard</h1>
                <ShowProducts data={products} />
            <div className={classes.searchContainer}>
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
            </div>
        </div>
    )
}