import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
  },
  status: {
    danger: 'pink',
  },
});

export default theme;
