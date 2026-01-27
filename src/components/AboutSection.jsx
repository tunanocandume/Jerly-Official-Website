import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

function AboutSection() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll');
    if (!els || els.length === 0) return;

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
    <Box sx={{ padding: '40px 0' }}>
      <Box className="reveal-on-scroll" sx={{ background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)', borderRadius: '8px', padding: '30px', maxWidth: '900px', margin: '0 auto', border: '2px solid #000000', boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}>
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
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-on-scroll');
    if (!els || els.length === 0) return;

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
}

export default AboutSection;