import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { useEffect } from 'react';

function MemberSection({ members, onMemberClick }) {
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
    <Box sx={{ padding: '40px 0', maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h4" sx={{ color: '#ffffff', marginBottom: '30px', fontWeight: 'bold', textAlign: 'center' }}>Members</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {members.map((member, index) => (
          <Card
            key={member.name}
            className="reveal-on-scroll"
            onClick={() => onMemberClick(member)}
            sx={{
              cursor: 'pointer',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)',
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
              border: '2px solid #000000',
              transition: 'transform 0.36s cubic-bezier(.2,.9,.2,1), box-shadow 240ms',
              '&:hover': { transform: 'translateY(-6px) scale(1.01)', boxShadow: '0 14px 36px rgba(0,0,0,0.45)' },
              transitionDelay: `${index * 80}ms`
            }}
          >
            <CardMedia
              component="div"
              image={member.image}
              alt={member.name}
              sx={{
                width: '100%',
                aspectRatio: '1 / 1',
                backgroundImage: `url(${member.image})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px'
              }}
            />
            <CardContent sx={{ padding: '20px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <Box>
                  <Box sx={{ width: '20px', height: '20px', backgroundColor: member.color, borderRadius: '50%', marginRight: '10px' }} />
                </Box>
                <Typography variant="h6" sx={{ color: '#000000', fontWeight: 'bold' }}>{member.name}</Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#000000', fontWeight: '500' }}>{member.part}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default MemberSection;