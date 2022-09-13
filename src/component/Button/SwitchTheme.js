import React, {useContext} from 'react'
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import ColorModeContext from '../Context/ColorModeContext';

const SwitchTheme = (props) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
  );
}

export default SwitchTheme