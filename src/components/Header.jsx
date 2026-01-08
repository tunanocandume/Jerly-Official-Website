import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header({ onNavClick }) {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1e2f67', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderBottom: '2px solid #ffffff' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '2.5rem', background: 'linear-gradient(45deg, #ffffff, #e3f2fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Jerly
        </Typography>
        <Button color="inherit" onClick={() => onNavClick('HOME')} sx={{ color: '#ffffff', fontWeight: '500' }}>HOME</Button>
        <Button color="inherit" onClick={() => onNavClick('ABOUT')} sx={{ color: '#ffffff', fontWeight: '500' }}>ABOUT</Button>
        <Button color="inherit" onClick={() => onNavClick('MEMBER')} sx={{ color: '#ffffff', fontWeight: '500' }}>MEMBER</Button>
        <Button color="inherit" onClick={() => onNavClick('VIDEOS')} sx={{ color: '#ffffff', fontWeight: '500' }}>VIDEOS</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;