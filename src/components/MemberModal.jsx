import { Box, Typography, IconButton, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';

function MemberModal({ selectedMember, onClose }) {
  return (
    <Modal open={!!selectedMember} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
        borderRadius: '8px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
        border: '2px solid #000000',
        p: 4,
      }}>
        {selectedMember && (
          <>
            <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8, color: '#000000' }}>
              <Close />
            </IconButton>
            <Typography variant="h5" sx={{ marginBottom: '15px', color: '#000000', fontWeight: 'bold', textAlign: 'center' }}>{selectedMember.name}</Typography>
            <Typography variant="body1" sx={{ marginBottom: '15px', color: '#000000', textAlign: 'center' }}>Part: {selectedMember.part}</Typography>
            <Box sx={{ width: '100%', height: '20px', backgroundColor: selectedMember.color, borderRadius: '4px', marginBottom: '15px' }} />
            <Typography variant="body2" sx={{ color: '#000000', textAlign: 'center', lineHeight: 1.6 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default MemberModal;