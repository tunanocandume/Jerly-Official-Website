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
  { name: 'いたりー', part: 'Read', color: '#B0C4DE', image: '/member1.jpg', 
    description: [
      '第二の故郷はイタリア',
      'ホワイトボード使ってるようじゃダメか…歌詞はね、入れとかないと。って時がある',
      'ピアスホール一生不安定',
      'メンバーから寝坊してないか心配されがち',
      '支度最速10分(その後テストを受けるが単位取得ならず)'
    ] },
  { name: 'ﾍﾟﾝﾍﾟﾚﾍﾟﾝ', part: 'Chorus', color: '#417ab1', image: '/member2.jpg', description: [
    '幼少期弟の頭をかじり歯が抜けた',
    '人に興味がない',
    'バイトが恋人',
    'すぐしぬ‼️',
    'アー写はAIによる画像生成(?)'
  ] },
  { name: 'きぬ', part: 'Chorus', color: '#001e43', image: '/member3.jpg', description: [
    '細身(イケメン)彼氏募集中',
    '遅刻魔',
    '白飛びで亡霊みたいになる女',
    '撮影日にスタジオでメイクする',
    '髪が時々変色する(今はイカ墨中)'
  ] },
  { name: 'おむ', part: 'Chorus', color: '#2c2f8e', image: '/member4.jpg', description: [
    'エナジードリンクを酸素と同じくらい体内に取り込んでいる',
    '普段リーダーとして見られてないが、都合の良い時だけ「リーダー！」って言われてる',
    '酒でバカ酔いして転倒・出血',
    '食べても体重が変わらない生きるテセウスの船',
    'パチモン増殖中'
  ] },
  { name: 'サランラップ橋本', part: 'Bass', color: '#0068b7', image: '/member5.jpg', description: [
    '練習にコミケの戦利品を持ってくる',
    'ウエハースを配ってるのは徳を積みたいから',
    '鬼滅でいうと善逸',
    'スタバンど緊張、ソロパートニヤニヤ(3年目)',
    '練習中1万ゲーム課金(爆死)'
  ] },
  { name: 'ロバート', part: 'V.P.', color: '#00479d', image: '/member6.jpg', description: [
    '一昔前の面白ネタとかをよく知ってる',
    'シンバル不発男',
    'どんだけいじられてもへこたれない',
    '歩く音MAD',
    'あくび大公開'
  ] },
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
