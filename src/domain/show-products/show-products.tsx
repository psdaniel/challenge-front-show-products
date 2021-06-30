import { useStyles } from './show-products.styles';
import { ShowProductsProps } from './show-products.types';


export const ShowProducts = ({ data }: ShowProductsProps) => {
    const classes = useStyles();

    return (
        <div className={classes.showProductsContainer}>
            {data.map((product, index) => (<ul className={classes.itemList} key={index}>{product.name}</ul>))}
        </div>
    )
}