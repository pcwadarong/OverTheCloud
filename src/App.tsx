import AuroraBackground from './components/AuroraBackground';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <section className='relative'>
      <Navigation />
      <div className='noise-overlay'></div>
      <AuroraBackground>
        <h1>일렁이는 배경과 함께하는 페이지</h1>
      </AuroraBackground>
    </section>
    
  )
}

export default App;
