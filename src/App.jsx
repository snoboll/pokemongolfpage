import './App.css'
import {
  Globe, Layers, Grid2x2, Zap, BarChart2, CloudUpload,
  Apple, Play, Star, GitBranch,
} from 'lucide-react'

const RARITIES = [
  {
    name: 'Common',
    color: '#9ca3af',
    bg: 'rgba(156,163,175,0.1)',
    border: 'rgba(156,163,175,0.35)',
    glow: 'rgba(156,163,175,0.2)',
    pokemonId: 16,
    pokemonName: 'Pidgey',
    chance: '45%',
    catchAtPar: '50%',
  },
  {
    name: 'Uncommon',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.35)',
    glow: 'rgba(34,197,94,0.2)',
    pokemonId: 133,
    pokemonName: 'Eevee',
    chance: '30%',
    catchAtPar: '50%',
  },
  {
    name: 'Rare',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.35)',
    glow: 'rgba(59,130,246,0.2)',
    pokemonId: 25,
    pokemonName: 'Pikachu',
    chance: '15%',
    catchAtPar: '40%',
  },
  {
    name: 'Epic',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.1)',
    border: 'rgba(168,85,247,0.4)',
    glow: 'rgba(168,85,247,0.25)',
    pokemonId: 149,
    pokemonName: 'Dragonite',
    chance: '8%',
    catchAtPar: '25%',
  },
  {
    name: 'Legendary',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.45)',
    glow: 'rgba(245,158,11,0.3)',
    pokemonId: 150,
    pokemonName: 'Mewtwo',
    chance: '2%',
    catchAtPar: '10%',
  },
]

const FEATURES = [
  { icon: <Globe size={22} />, title: '23 Swedish Courses', desc: 'Play on real Swedish golf courses built right into the app. Each course brings unique terrain and encounter modifiers.', color: '#a8d878' },
  { icon: <Layers size={22} />, title: 'Custom Courses', desc: 'Build and share your own golf courses. Any course in the world can become a Pokemon hunting ground.', color: '#5a9e5a' },
  { icon: <Grid2x2 size={22} />, title: 'Terrain Modifiers', desc: "Bunkers, water hazards and rough don't just hurt your score — they shift which Pokemon you'll encounter.", color: '#f59e0b' },
  { icon: <Zap size={22} />, title: 'Legendary Streaks', desc: 'Chain consecutive pars or better to unlock a streak that dramatically boosts your odds of encountering Legendaries.', color: '#c8f078' },
  { icon: <BarChart2 size={22} />, title: 'Leaderboards', desc: 'Compete with friends and players worldwide. Rankings track both your golf scores and Pokedex completion.', color: '#7db87d' },
  { icon: <CloudUpload size={22} />, title: 'Cloud Sync', desc: 'Your Pokedex and scores are stored securely in the cloud. Switch devices without losing a single catch.', color: '#5a9e5a' },
]

const STEPS = [
  {
    num: '01',
    title: 'Play a Round',
    desc: 'Head to any golf course — one of 23 presets or one you\'ve built. Each hole sets the stage for an encounter.',
    color: '#a8d878',
  },
  {
    num: '02',
    title: 'Trigger an Encounter',
    desc: 'Complete a hole and a Pokemon appears. Rarity depends on terrain, your streak, and a dash of luck.',
    color: '#5a9e5a',
  },
  {
    num: '03',
    title: 'Score Decides Everything',
    desc: 'Eagle? 100% catch rate. Birdie? Great odds. Bogey? You\'ll have to fight for it. Play better, catch rarer.',
    color: '#c8f078',
  },
]

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="Pokemon Golf home">
          <span>Pokemon Golf</span>
        </a>
        <div className="nav-links">
          <a href="#how-it-works">How It Works</a>
          <a href="#rarities">Rarities</a>
          <a href="#features">Features</a>
        </div>
        <a href="#download" className="btn btn-primary btn-sm">
          Download Free
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true" />
            Now available on iOS &amp; Android
          </div>
          <h1 className="hero-title">
            Golf Meets<br />
            <span className="gradient-text">Pokémon</span>
          </h1>
          <p className="hero-desc">
            Every hole is a Pokemon encounter. Play better, catch rarer. Build your Pokédex one round at a time across 23 Swedish golf courses.
          </p>
          <div className="hero-ctas">
            <a href="#download" className="btn btn-primary btn-lg">
              <Apple size={20} />
              App Store
            </a>
            <a href="#download" className="btn btn-secondary btn-lg">
              <Play size={20} />
              Google Play
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">23</span>
              <span className="hero-stat-label">Golf Courses</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat-value">5</span>
              <span className="hero-stat-label">Rarity Tiers</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat-value">151</span>
              <span className="hero-stat-label">Pokémon</span>
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="game-header">
                <span className="game-hole">Hole 7 · Par 4</span>
                <span className="game-score score-birdie">BIRDIE −1</span>
              </div>
              <div className="game-course-bg">
                <div className="course-flag">
                  <div className="flag-pole" />
                  <div className="flag-banner" />
                </div>
                <div className="course-hole" />
              </div>
              <div className="encounter-popup">
                <div className="encounter-flash" />
                <p className="encounter-label">A wild Pokémon appeared!</p>
                <div className="encounter-pokemon">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
                    alt="Mewtwo"
                    className="encounter-sprite"
                    loading="lazy"
                    width="80"
                    height="80"
                  />
                  <span className="encounter-name">Mewtwo</span>
                  <span className="rarity-badge legendary">Legendary</span>
                </div>
                <div className="catch-rate-bar">
                  <div className="catch-rate-label">
                    <span>Catch Rate</span>
                    <span className="catch-rate-value">75%</span>
                  </div>
                  <div className="catch-rate-track">
                    <div className="catch-rate-fill" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="phone-notch" />
          </div>
          <div className="phone-glow" />
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Simple concept, deep gameplay</p>
          <h2 className="section-title">How It Works</h2>
        </div>
        <div className="steps-grid">
          {STEPS.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-num" style={{ color: step.color, borderColor: step.color + '55', background: step.color + '15' }}>
                {step.num}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              <div className="step-line" style={{ background: `linear-gradient(to right, ${step.color}, transparent)` }} />
            </div>
          ))}
        </div>
        <div className="score-table">
          <h3 className="score-table-title">Score → Catch Rate</h3>
          <div className="score-rows">
            {[
              { score: 'Eagle (−2)', rate: '100%', color: '#f59e0b', label: 'Guaranteed!' },
              { score: 'Birdie (−1)', rate: '75%', color: '#a855f7', label: 'High chance' },
              { score: 'Par (0)', rate: '50%', color: '#3b82f6', label: 'Even odds' },
              { score: 'Bogey (+1)', rate: '25%', color: '#22c55e', label: 'Low chance' },
              { score: 'Double+ (≥+2)', rate: '10%', color: '#9ca3af', label: 'Slim odds' },
            ].map((row) => (
              <div key={row.score} className="score-row">
                <span className="score-label">{row.score}</span>
                <div className="score-bar-track">
                  <div
                    className="score-bar-fill"
                    style={{ width: row.rate, background: row.color }}
                  />
                </div>
                <span className="score-pct" style={{ color: row.color }}>{row.rate}</span>
                <span className="score-hint">{row.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RaritySection() {
  return (
    <section className="section section-dark" id="rarities">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">From Pidgey to Mewtwo</p>
          <h2 className="section-title">Five Tiers of Encounters</h2>
          <p className="section-subtitle">
            Every hole spawns a Pokemon from one of five rarity tiers. The better your golf game, the better your shot at catching them all.
          </p>
        </div>
        <div className="rarity-grid">
          {RARITIES.map((r) => (
            <div
              key={r.name}
              className="rarity-card"
              style={{
                '--rarity-color': r.color,
                '--rarity-bg': r.bg,
                '--rarity-border': r.border,
                '--rarity-glow': r.glow,
              }}
            >
              <div className="rarity-img-wrap">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${r.pokemonId}.png`}
                  alt={r.pokemonName}
                  className="rarity-pokemon-img"
                  loading="lazy"
                  width="96"
                  height="96"
                />
              </div>
              <div className="rarity-badge-pill" style={{ background: r.bg, color: r.color, borderColor: r.border }}>
                {r.name}
              </div>
              <p className="rarity-pokemon-name">{r.pokemonName}</p>
              <div className="rarity-stats">
                <div className="rarity-stat">
                  <span className="rarity-stat-label">Encounter chance</span>
                  <span className="rarity-stat-val" style={{ color: r.color }}>{r.chance}</span>
                </div>
                <div className="rarity-stat">
                  <span className="rarity-stat-label">Catch at par</span>
                  <span className="rarity-stat-val" style={{ color: r.color }}>{r.catchAtPar}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="eagle-callout">
          <div className="eagle-icon" aria-hidden="true">
            <Star size={22} color="#f59e0b" />
          </div>
          <p>
            <strong style={{ color: '#f59e0b' }}>Eagle or better?</strong> You get a 100% catch rate on any Pokemon — no matter the rarity. Play legendary golf, catch Legendary Pokemon.
          </p>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Everything you need</p>
          <h2 className="section-title">Packed with Features</h2>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon" style={{ color: f.color, background: f.color + '18', borderColor: f.color + '40' }}>
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TerrainSection() {
  const terrains = [
    { name: 'Fairway', icon: '', effect: 'Standard encounter table', color: '#a8d878' },
    { name: 'Rough', icon: '', effect: 'Increased Grass-type encounters', color: '#5a9e5a' },
    { name: 'Bunker', icon: '', effect: 'Increased Ground & Rock-types', color: '#f59e0b' },
    { name: 'Water', icon: '', effect: 'Water-type Pokemon more likely', color: '#5aa8a8' },
  ]
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="terrain-layout">
          <div className="terrain-text">
            <p className="section-eyebrow">The course shapes your game</p>
            <h2 className="section-title">Terrain Modifiers</h2>
            <p className="terrain-desc">
              Where your ball lands isn't just about your score — it determines what Pokemon lurk nearby. Water hazards bring Water-types, bunkers churn up Ground and Rock-types. Even your lies in the rough matter.
            </p>
            <a href="#download" className="btn btn-primary">Download &amp; Explore</a>
          </div>
          <div className="terrain-cards">
            {terrains.map((t) => (
              <div key={t.name} className="terrain-card" style={{ '--t-color': t.color }}>
                <span className="terrain-card-name" style={{ color: t.color }}>{t.name}</span>
                <span className="terrain-card-effect">{t.effect}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadSection() {
  return (
    <section className="section download-section" id="download">
      <div className="download-bg" aria-hidden="true">
        <div className="download-orb download-orb-1" />
        <div className="download-orb download-orb-2" />
      </div>
      <div className="container">
        <div className="download-inner">
          <div className="download-pokeball" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="58" stroke="url(#pb-stroke)" strokeWidth="2" />
              <path d="M2 60h116" stroke="url(#pb-stroke)" strokeWidth="2" />
              <circle cx="60" cy="60" r="18" fill="#0d0d22" stroke="url(#pb-stroke)" strokeWidth="2" />
              <circle cx="60" cy="60" r="8" fill="url(#pb-fill)" />
              <defs>
                <linearGradient id="pb-stroke" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#5a9e5a" />
                  <stop offset="100%" stopColor="#a8d878" />
                </linearGradient>
                <linearGradient id="pb-fill" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#a8d878" />
                  <stop offset="100%" stopColor="#c8f078" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="download-title">Ready to Catch 'em on the Course?</h2>
          <p className="download-desc">
            Free to download. Grab your clubs, open the app, and let every round become an adventure.
          </p>
          <div className="download-btns">
            <a href="#" className="store-btn">
              <Apple size={28} />
              <div className="store-btn-text">
                <span className="store-btn-sub">Download on the</span>
                <span className="store-btn-main">App Store</span>
              </div>
            </a>
            <a href="#" className="store-btn">
              <Play size={28} />
              <div className="store-btn-text">
                <span className="store-btn-sub">Get it on</span>
                <span className="store-btn-main">Google Play</span>
              </div>
            </a>
          </div>
          <p className="download-note">Free · No ads · Cloud sync included</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#hero" className="footer-logo" aria-label="Pokemon Golf">
            <svg viewBox="0 0 32 32" fill="none" width="24" height="24" aria-hidden="true">
              <circle cx="16" cy="16" r="15" stroke="#5a9e5a" strokeWidth="2" />
              <path d="M1 16h30" stroke="#5a9e5a" strokeWidth="2" />
              <circle cx="16" cy="16" r="5" fill="#080818" stroke="#5a9e5a" strokeWidth="2" />
              <circle cx="16" cy="16" r="2" fill="#a8d878" />
            </svg>
            <span>Pokemon Golf</span>
          </a>
          <p className="footer-note">
            Pokemon Golf is a fan-made app. Pokémon and all related names are trademarks of Nintendo / Game Freak.
          </p>
          <a
            href="https://github.com/snoboll/pokemongolf"
            className="footer-github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
          >
            <GitBranch size={18} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <RaritySection />
        <FeaturesSection />
        <TerrainSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
