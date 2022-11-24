import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';



export default function LabelBottomNavigation() {


    const [value, setValue] = React.useState('recents');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box display="flex" justifyContent="center" width="1" paddingBottom='56px' >
            <BottomNavigation sx={{ position: 'fixed', bottom: 0, width: 1.0, flexGrow: 1, display: { xs: 'flex' }, postition: 'fixed', bottom: '0' }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Recents"
                value="recents"
                icon={<RestoreIcon />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={<LocationOnIcon />}
            />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>
        </Box>
    );
}
