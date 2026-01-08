import { Box, Typography } from '@mui/material';

function AboutSection() {
  return (
    <Box sx={{ padding: '40px 0' }}>
      <Box sx={{ background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)', borderRadius: '8px', padding: '30px', marginBottom: '30px', border: '2px solid #000000', boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)' }}>
        <Typography variant="h4" sx={{ color: '#3959c3', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}>Group Profile</Typography>
        <Typography variant="body1" sx={{ color: '#000000', marginBottom: '0', lineHeight: 1.6, textAlign: 'center' }}>
          日本大学アカペラサークルSol-faに所属するアカペラグループです。明確な音楽コンセプトはなく、メンバーの個性を活かして活動しています。
        </Typography>
      </Box>
      <Box sx={{ background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)', borderRadius: '8px', padding: '30px', border: '2px solid #000000', boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)' }}>
        <Typography variant="h4" sx={{ color: '#3959c3', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}>How We Play</Typography>
        <Box sx={{ marginBottom: '15px' }}>
          <Typography variant="body1" sx={{ color: '#000000', textAlign: 'center' }}>・ライブごとに選曲を変える</Typography>
        </Box>
        <Box sx={{ marginBottom: '15px' }}>
          <Typography variant="body1" sx={{ color: '#000000', textAlign: 'center' }}>・メンバーで相談しながらアレンジを決める</Typography>
        </Box>
        <Box sx={{ marginBottom: '0' }}>
          <Typography variant="body1" sx={{ color: '#000000', textAlign: 'center' }}>・雰囲気重視の練習スタイル</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutSection;