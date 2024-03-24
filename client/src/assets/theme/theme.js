import { createTheme } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
        main: '#6aa84f',
        },
        secondary: {
        main: '#006b81',
        },
        error: {
        main: yellow.A400,
        },
    },
    justifyContent: "center",
});

export default theme;
