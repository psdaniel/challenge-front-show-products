import { makeStyles } from '@material-ui/core';
import { ColorConstants, FontsConstants } from '../shared/styles.constants';

export const useStyles = makeStyles({
    showProductsContainer: {
        padding: '4px',
        marginLeft: '4px',
        marginBottom: '4px'
    },
    itemList: {
        fontFamily: FontsConstants.fontFamily,
        color: ColorConstants.white,
        listStyle: 'none',
        padding: 0,
        margin: 0,
    }
});