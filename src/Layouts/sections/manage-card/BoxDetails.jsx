import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid transparent',
        color: 'white',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            width: '100vw',
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%',
        },
    },
    topSection: {
        backgroundColor: '#343a40',
        width: '100%',
        height: '8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
        paddingBottom: '30px',
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontWeight: '600',
        lineHeight: '1.2',
        fontSize: '1.5rem',
        color: 'white',
    },
    subtitle: {
        fontSize: '0.75rem',
        color: 'white',
    },
    icon: {
        backgroundColor: 'blue',
        color: 'white',
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '65%',
        zIndex: 30,
        borderRadius: '50%',
        padding: '16px',
        border: '1px solid',
        boxShadow: theme.shadows[3],
    },
    bottomSection: {
        backgroundColor: 'white',
        width: '100%',
        height: '8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '30px',
    },
    button: {
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '10px 25px',
        margin: 'auto',
        boxShadow: theme.shadows[3],
        '&:hover': {
            backgroundColor: '#196ecd',
        },
    },
    buttonText: {
        fontSize: '0.875rem',
    },
}));

export default function BoxDetails({
    buttonTitle,
    title,
    icon: IconComponent,
    subtitle,
}) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.topSection}>
                <div className={classes.icon}>
                        <IconComponent className="text-5xl" />
                </div>
                <div className={classes.title}>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        className={classes.subtitle}
                    >
                        {subtitle}
                    </Typography>
                </div>
            </Box>
            <Box className={classes.bottomSection}>
                <Button className={classes.button}>
                    <Typography variant="body2" className={classes.buttonText}>
                        {buttonTitle}
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}
