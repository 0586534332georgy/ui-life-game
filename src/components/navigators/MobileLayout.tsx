import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, Outlet } from 'react-router-dom';

export const MobileLayout: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <div className='flex flex-col justify-center bg-slate-600'>
      <Button
      style={{ color: 'lightpink' }}
        id="mobile-button"
        aria-controls={open ? 'mobile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="text-lightpink"
      >
        Menu
      </Button>
      <Menu
        id="mobile-menu"
        aria-labelledby="mobile-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className='bg-slate-600'>
        <MenuItem  onClick={handleClose}>
            <NavLink className="text-slate-100"  to="/">Project Details</NavLink>
        </MenuItem>
        <MenuItem  onClick={handleClose}>
            <NavLink className="text-slate-100" to="/front-compute">Front Compute</NavLink>
        </MenuItem>
        <MenuItem  onClick={handleClose}>
            <NavLink className="text-slate-100" to="/back-compute">Back Compute</NavLink>
        </MenuItem>
        </div>
      </Menu>
      
    </div>
    <Outlet></Outlet>
    </>
  );
}               
          