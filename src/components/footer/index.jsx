import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Search from '@mui/icons-material/Search';
import Description from '@mui/icons-material/Description';
import Person from '@mui/icons-material/Person';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue)
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Inicio" value={"/home"} icon={<HomeIcon />} />
        <BottomNavigationAction label="Buscar" icon={<Search />} />
        <BottomNavigationAction label="Pedidos" icon={<Description />} />
        <BottomNavigationAction label="Perfil" icon={<Person />} />
      </BottomNavigation>
    </Box>
  );
}
