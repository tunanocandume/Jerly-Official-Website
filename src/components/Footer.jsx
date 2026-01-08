import { Box, Typography, Button, IconButton } from '@mui/material';
import { Instagram } from '@mui/icons-material';

function Footer({ onNavClick }) {
  return (
    <Box sx={{ backgroundColor: '#1e2f67', padding: '20px', textAlign: 'center', borderTop: '2px solid #ffffff' }}>
      <Typography variant="h6" sx={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '2rem', background: 'linear-gradient(45deg, #ffffff, #e3f2fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Jerly</Typography>
      <Box sx={{ marginBottom: '10px' }}>
        <Button color="inherit" onClick={() => onNavClick('HOME')} sx={{ color: '#ffffff', fontWeight: '500' }}>HOME</Button>
        <Button color="inherit" onClick={() => onNavClick('ABOUT')} sx={{ color: '#ffffff', fontWeight: '500' }}>ABOUT</Button>
        <Button color="inherit" onClick={() => onNavClick('MEMBER')} sx={{ color: '#ffffff', fontWeight: '500' }}>MEMBER</Button>
        <Button color="inherit" onClick={() => onNavClick('VIDEOS')} sx={{ color: '#ffffff', fontWeight: '500' }}>VIDEOS</Button>
      </Box>
      <IconButton href="https://instagram.com/jerly__official" target="_blank" sx={{ color: '#e3f2fd', '&:hover': { color: '#ffffff' } }}>
        <Instagram />
      </IconButton>
    </Box>
  );
}

export default Footer;