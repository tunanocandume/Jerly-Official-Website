import { Box, Typography, Button } from '@mui/material';
import { useEffect } from 'react';

function HomeSection({ onNavClick }) {
  useEffect(() => {
    // IntersectionObserver fallback for reveal-on-scroll
    const els = document.querySelectorAll('.reveal-on-scroll');
    if (!els || els.length === 0) return;

    // If browser supports CSS Scroll-Driven Animations, let CSS handle it.
    const supportsScrollTimeline = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('animation-timeline: reveal-timeline');
    if (supportsScrollTimeline) {
      els.forEach(el => el.setAttribute('data-scroll-timeline', 'reveal'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Box className="hero-bg reveal-on-scroll" sx={{ 
        height: { xs: '48vh', sm: '60vh', md: '100vh' },
        backgroundImage: 'url(/group_photo.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        display: 'block'
      }}>
      </Box>
      <Box className="reveal-on-scroll" sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        padding: { xs: '20px', sm: '30px', md: '40px' }, 
        borderRadius: '8px', 
        border: '2px solid #000000', 
        boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)', 
        textAlign: 'center', 
        width: { xs: '94%', sm: '86%', md: '80%' }, 
        margin: { xs: '16px auto', sm: '28px auto', md: '40px auto' }, 
        position: 'relative', 
        zIndex: 1 
      }}>
        <Typography variant="h3" sx={{ marginBottom: { xs: '12px', md: '20px' }, fontWeight: 'bold', fontSize: { xs: '2rem', sm: '2.6rem', md: '4rem' }, color: '#08278f' }}>Jerly</Typography>
        <Typography variant="body1" sx={{ color: '#000000', marginBottom: { xs: '18px', md: '30px' }, maxWidth: '700px', margin: '0 auto 30px', lineHeight: 1.6, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
          日本大学アカペラサークルSol-faに所属するアカペラグループ、Jerlyの公式サイトです。
          <br />
          ここでは、メンバー紹介と、今までのライブで披露した際の動画を掲載しています。
        </Typography>
        <Button variant="contained" onClick={() => onNavClick('VIDEOS')} sx={{ backgroundColor: '#3959c3', color: '#ffffff', fontWeight: 'bold', padding: { xs: '10px 18px', md: '12px 24px' }, borderRadius: '8px', '&:hover': { backgroundColor: '#2f4aa2' } }}>
          Watch Videos
        </Button>
      </Box>
    </>
  );
}

export default HomeSection;