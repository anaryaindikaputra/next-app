import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    newsletterButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        [theme.breakpoints.down('md')]: {
            background: 'linear-gradient(45deg, #ACD1AF 30%, #ACF2AF 90%)',
        },
        [theme.breakpoints.down('sm')]: {
            background: 'linear-gradient(45deg, #AC77E0 30%, #ACA5E0 90%)',
        }
    },
    newsletterInput: {
        backgroundColor: 'white',
    },
}));