import { makeStyles } from '@material-ui/core';
import { ColorConstants, FontsConstants } from '../../styles.constants';

export const useStyles = makeStyles({
    buttonStyles: {
        fontFamily: FontsConstants.fontFamily,
        color: ColorConstants.purple,
        fontSize: '18px',
        fontWeight: 'bold',
        height: '38px',
        marginTop: '4px',
        borderRadius: '4px',
        outline: 'none',
        textDecoration: 'none',
        backgroundColor: ColorConstants.white,
        cursor: 'pointer',
        border: 0,
        '&:hover': {
            backgroundColor: ColorConstants.purpleHover,
            color: ColorConstants.white
        }
    }
});