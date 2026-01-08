import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

function VideosSection({ videos }) {
  const handleVideoClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <Box sx={{ padding: '40px 0' }}>
      <Typography variant="h4" sx={{ color: '#ffffff', marginBottom: '30px', fontWeight: 'bold', textAlign: 'center' }}>Videos</Typography>
      <Grid container spacing={3} justifyContent="center">
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <Card sx={{ borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)', cursor: 'pointer', background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)', border: '2px solid #000000', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }} onClick={() => handleVideoClick(video.videoId)}>
              <CardMedia
                component="img"
                height="200"
                src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt={video.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ padding: '20px' }}>
                <Typography variant="body1" sx={{ color: '#000000', fontWeight: 'bold', textAlign: 'center' }}>{video.title}</Typography>
                <Typography variant="body2" sx={{ color: '#666666', textAlign: 'center', marginTop: '8px' }}>{video.live}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default VideosSection;