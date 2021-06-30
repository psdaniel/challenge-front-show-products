import { makeStyles } from '@material-ui/core';
import { ColorConstants } from '../../styles.constants';

export const useStyles = makeStyles({
    inputStyle: {
        height: '25px',
        borderRadius: '4px',
        border: 0,
        padding: '2px',
        '&:focus': {
            borderColor: ColorConstants.purpleHover,
            border: '2px solid',
            outline: 'none'
        }
    }
})