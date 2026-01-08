import { Box, Typography } from '@mui/material';

function AboutSection() {
  return (
    <Box sx={{ padding: '40px 0' }}>
      <Box sx={{ background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)', borderRadius: '8px', padding: '30px', maxWidth: '900px', margin: '0 auto', border: '2px solid #000000', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
        <Typography variant="h4" sx={{ color: '#3959c3', marginBottom: '16px', fontWeight: 'bold', textAlign: 'center' }}>Group Profile</Typography>
        <Typography variant="body1" sx={{ color: '#000000', lineHeight: 1.8, textAlign: 'left' }}>
          Sol-fa 2024 夏ライブに参加するために同期で結成。最初のグループ名は、「かくしごと」だった。その後、固定バンドとして活動していくにあたって、「Jerly」に改名。グループ名の由来は、結成前にメンバーで行った「JELLY JELLY CAFE」というボードゲームカフェ。
        </Typography>
        <Typography variant="body1" sx={{ color: '#000000', lineHeight: 1.8, marginTop: '12px', textAlign: 'left' }}>
          メンバーは、全員癖が強いとサークル内で定評がある。
        </Typography>
        <Typography variant="body1" sx={{ color: '#000000', lineHeight: 1.8, marginTop: '12px', textAlign: 'left' }}>
          仲の良さが売りで、クリスマスにはメンバー宅で鍋パを開催した。
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutSection;