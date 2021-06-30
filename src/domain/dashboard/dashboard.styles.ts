import { ColorConstants, FontsConstants } from '../shared/styles.constants';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    dashboardTitle: {
        fontFamily: FontsConstants.fontFamily,
        textAlign: 'center',
        color: ColorConstants.white,
    },
    dashboardContainer: {
        width: '600px',
        height: '325px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: ColorConstants.purple,
        borderRadius: '10px',
        alignItems: 'center'
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '200px'
    }
})