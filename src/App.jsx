import { useState } from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import MemberSection from './components/MemberSection';
import VideosSection from './components/VideosSection';
import MemberModal from './components/MemberModal';
import './App.css';

const members = [
  { name: 'いたりー', part: 'read', color: '#B0C4DE', image: '/member1.jpg' },
  { name: 'ﾍﾟﾝﾍﾟﾚﾍﾟﾝ', part: 'chorus', color: '#417ab1', image: '/member2.jpg' },
  { name: 'きぬ', part: 'chorus', color: '#001e43', image: '/member3.jpg' },
  { name: 'おむ', part: 'chorus', color: '#2c2f8e', image: '/member4.jpg' },
  { name: 'サランラップ橋本', part: 'bass', color: '#0068b7', image: '/member5.jpg' },
  { name: 'ロバート', part: 'v.p.', color: '#00479d', image: '/member6.jpg' },
];

const videos = [
  { id: 1, title: 'Tokimeki/Vaundy', videoId: 'gUc_imtkj1A', live: '2025 桜麗祭' },
  { id: 2, title: 'もうどうなってもいいや/星街すいせい', videoId: '_9_4uCo9dMM', live: 'Sol-fa 2025 夏ライブ' },
  { id: 3, title: '', videoId: 'hrYMsJRyX-E', live: 'Fuchu A Cappella Avenue 2025' },
  { id: 4, title: 'Jerly50祭メドレー', videoId: 'EepwzxzFU94', live: '50Fes' },
  { id: 5, title: '絶え間なく藍色/獅子志司', videoId: 'B2r6cpCXD-s', live: 'Sol-fa 2025 冬ライブ' },
  { id: 6, title: 'Make-up Shadow/井上陽水 ヨルシカアレンジ', videoId: 'P9QEGZWJyZU', live: 'Sol-fa 2024 夏ライブ' },
];

function App() {
  const [currentSection, setCurrentSection] = useState('HOME');
  const [selectedMember, setSelectedMember] = useState(null);

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'HOME':
        return <HomeSection onNavClick={handleNavClick} />;
      case 'ABOUT':
        return <AboutSection />;
      case 'MEMBER':
        return <MemberSection members={members} onMemberClick={handleMemberClick} />;
      case 'VIDEOS':
        return <VideosSection videos={videos} />;
      default:
        return <HomeSection onNavClick={handleNavClick} />;
    }
  };

  return (
    <Box sx={{ backgroundColor: '#3959c3', minHeight: '100vh' }}>
      <Header onNavClick={handleNavClick} />

      <Container maxWidth="lg" sx={{ paddingTop: '80px', paddingBottom: '40px' }}>
        {renderSection()}
      </Container>

      <Footer onNavClick={handleNavClick} />

      <MemberModal selectedMember={selectedMember} onClose={handleCloseModal} />
    </Box>
  );
}

export default App;
