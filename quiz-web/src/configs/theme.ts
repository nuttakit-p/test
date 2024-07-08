import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    // fontSize: 20, // Set your desired base font size
    fontFamily: 'DBHeavent-Med',
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     '@global': {
    //       '@media (min-width: 600px)': {
    //         html: {
    //           fontSize: 18,
    //         },
    //       },
    //       '@media (min-width: 960px)': {
    //         html: {
    //           fontSize: 20,
    //         },
    //       },
    //       '@media (min-width: 375px)': {
    //         html: {
    //           fontSize: 13,
    //         },
    //       },
    //     },
    //   },
    // },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffff',
          color: '#474747',
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          width: '100%',
          borderRadius: '20px',
        },
      },
    },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       // borderRadius: '20px', // Set the desired border radius
    //       // padding: '8px',
    //       // backgroundColor: '#e1efffa1', // Set the desired background color
    //     },
    //   },
    // },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          // color: '#474747',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          // color: '#474747',
        },
        // contained: {
        //   '&:hover': {
        //     backgroundColor: '#cc0000', // Define the hover background color for primary button
        //     // Add any other hover styles you want
        //   },
        // },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Set the desired border radius
          // padding: '8px',
          // backgroundColor: '#ffff', // Set the desired background color
        },
      },
    },
    // MuiMenu:{
    //   styleOverrides: {
    //     root: {
    //       borderRadius: '20px', // Set the desired border radius
    //       // padding: '8px',
    //       // backgroundColor: '#ffff', // Set the desired background color
    //     },
    //   },
    // },
    MuiPaper: {
      styleOverrides: {
        root: {
          // borderRadius: '20px', // Set the desired border radius
          // padding: '8px',
          // backgroundColor: '#ffff', // Set the desired background color
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#023b66',
      // hover: '#cc0000'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#000000', // Define the primary text color
      secondary: '#808080', // Define the secondary text color
    },
  },
});

export default theme;
