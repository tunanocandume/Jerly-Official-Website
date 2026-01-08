import { Box, Typography, Button } from '@mui/material';

function HomeSection({ onNavClick }) {
  return (
    <>
      <Box sx={{ 
        height: '100vh', 
        backgroundImage: 'url(/group_photo.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
      </Box>
      <Box sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        padding: '40px', 
        borderRadius: '8px', 
        border: '2px solid #000000', 
        boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)', 
        textAlign: 'center', 
        width: '80%', 
        margin: '40px auto', 
        position: 'relative', 
        zIndex: 1 
      }}>
        <Typography variant="h3" sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '4rem', color: '#08278f' }}>Jerly</Typography>
        <Typography variant="body1" sx={{ color: '#000000', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px', lineHeight: 1.6 }}>
          日本大学アカペラサークルSol-faに所属するアカペラグループ、Jerlyの公式サイトです。
          <br />
          ここでは、メンバー紹介と、今までのライブで披露した際の動画を掲載しています。
        </Typography>
        <Button variant="contained" onClick={() => onNavClick('VIDEOS')} sx={{ backgroundColor: '#3959c3', color: '#ffffff', fontWeight: 'bold', padding: '12px 24px', borderRadius: '8px', '&:hover': { backgroundColor: '#2f4aa2' } }}>
          View Videos
        </Button>
      </Box>
    </>
  );
}

export default HomeSection;