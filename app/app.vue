<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0d0d14;
  --bg2: #13131f;
  --surface: #1a1a2e;
  --border: rgba(255,255,255,0.08);
  --green: #00dc82;
  --green-dim: rgba(0,220,130,0.15);
  --blue: #3b82f6;
  --purple: #a855f7;
  --text: #e2e8f0;
  --text-muted: #94a3b8;
  --radius: 14px;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

/* Hero */
.portfolio { min-height: 100vh; }

.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 6rem 8vw;
  background: radial-gradient(ellipse at 70% 50%, rgba(0,220,130,0.06) 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, rgba(59,130,246,0.06) 0%, transparent 60%);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: var(--green-dim);
  border: 1px solid rgba(0,220,130,0.3);
  border-radius: 100px;
  font-size: 0.85rem;
  color: var(--green);
  margin-bottom: 1.5rem;
}

.hero-name {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, var(--green) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.hero-title {
  font-size: 1.2rem;
  color: var(--green);
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.hero-bio {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 2rem;
}

.hero-links { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}
.btn-primary {
  background: var(--green);
  color: #000;
}
.btn-primary:hover { background: #00f090; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,220,130,0.3); }
.btn-secondary {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
}
.btn-secondary:hover { border-color: var(--green); color: var(--green); transform: translateY(-2px); }

.hero-location { color: var(--text-muted); font-size: 0.9rem; }

/* Avatar */
.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 360px;
}

.avatar-ring {
  position: relative;
  z-index: 2;
  padding: 6px;
  background: conic-gradient(from 0deg, var(--green), var(--blue), var(--purple), var(--green));
  border-radius: 50%;
  animation: spin 8s linear infinite;
}

.avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 800;
  color: var(--green);
  animation: spin 8s linear infinite reverse;
}

.orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--border);
}
.orbit-1 { width: 260px; height: 260px; animation: spin 12s linear infinite; }
.orbit-2 { width: 340px; height: 340px; animation: spin 18s linear infinite reverse; }

@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* API Banner */
.api-banner {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 8vw;
  background: rgba(0,220,130,0.06);
  border-top: 1px solid rgba(0,220,130,0.15);
  border-bottom: 1px solid rgba(0,220,130,0.15);
  font-size: 0.85rem;
  color: var(--text-muted);
}
.api-banner code {
  color: var(--green);
  font-size: 0.82rem;
  background: var(--green-dim);
  padding: 1px 6px;
  border-radius: 4px;
}
.api-dot {
  display: inline-block;
  width: 8px; height: 8px;
  background: var(--green);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--green);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

/* Skills */
.skills-section {
  padding: 6rem 8vw;
  background: var(--bg2);
}
.section-inner { max-width: 900px; margin: 0 auto; }

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}
.section-subtitle {
  color: var(--text-muted);
  margin-bottom: 3rem;
  font-size: 0.9rem;
}
.section-subtitle code {
  color: var(--green);
  background: var(--green-dim);
  padding: 1px 6px;
  border-radius: 4px;
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
}
.category-title {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 1rem;
}
.skill-list { display: flex; flex-direction: column; gap: 0.6rem; }

.skill-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: all 0.2s ease;
}
.skill-card:hover { border-color: var(--green); transform: translateX(4px); }

.skill-icon { font-size: 1.3rem; }
.skill-name { flex: 1; font-weight: 500; font-size: 0.95rem; }
.skill-level { color: var(--text-muted); font-size: 0.8rem; letter-spacing: 0.05em; }
.level-advanced .skill-level { color: var(--green); }
.level-intermediate .skill-level { color: var(--blue); }
.level-learning .skill-level { color: var(--text-muted); }

/* Footer */
.footer {
  padding: 3rem 8vw;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
  border-top: 1px solid var(--border);
  background: var(--bg);
}
.highlight { color: var(--green); font-weight: 600; }
.footer-sub { margin-top: 0.5rem; font-size: 0.8rem; opacity: 0.6; }

@media (max-width: 768px) {
  .hero { grid-template-columns: 1fr; padding: 4rem 6vw; text-align: center; }
  .hero-visual { height: 240px; order: -1; }
  .avatar { width: 100px; height: 100px; font-size: 2rem; }
  .orbit-1 { width: 180px; height: 180px; }
  .orbit-2 { width: 230px; height: 230px; }
  .hero-links { justify-content: center; }
  .hero-bio { margin: 0 auto 2rem; }
}
</style>