<template>
  <div class="labs-wrapper">
    <header class="labs-header">
      <NuxtLink to="/" class="back-btn">← ポートフォリオに戻る</NuxtLink>
      <div class="labs-badge">🔬 Labs</div>
      <h1 class="labs-title">実験室</h1>
      <p class="labs-desc">学習・挑戦した技術を実際に動くデモとして公開しています</p>
    </header>

    <div class="labs-grid">
      <NuxtLink to="/labs/todo" class="lab-card">
        <div class="lab-icon">✅</div>
        <div class="lab-info">
          <h2 class="lab-name">タスク管理 (CRUD)</h2>
          <p class="lab-description">Prisma + PostgreSQL (Neon) を使ったフルスタックCRUDデモ。タスクの追加・完了・削除が、データベースに永続化されます。</p>
          <div class="lab-tags">
            <span class="tag">Nuxt 4</span>
            <span class="tag">Nitro API</span>
            <span class="tag">Prisma</span>
            <span class="tag">PostgreSQL</span>
          </div>
        </div>
        <div class="lab-arrow">→</div>
      </NuxtLink>

      <NuxtLink to="/labs/auth" class="lab-card">
        <div class="lab-icon">🔐</div>
        <div class="lab-info">
          <h2 class="lab-name">GitHub 認証 (OAuth 2.0)</h2>
          <p class="lab-description">GitHub OAuth 2.0 を使ったログイン認証デモ。Cookie ベースの暗号化セッションで状態を管理します。</p>
          <div class="lab-tags">
            <span class="tag">nuxt-auth-utils</span>
            <span class="tag">GitHub OAuth</span>
            <span class="tag">Cookie Session</span>
          </div>
        </div>
        <div class="lab-arrow">→</div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.labs-wrapper {
  min-height: 100vh;
  background: #0d0d14;
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
  padding: 4rem 8vw;
}

.labs-header {
  margin-bottom: 3rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  transition: color 0.2s;
}
.back-btn:hover { color: #00dc82; }

.labs-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.9rem;
  background: rgba(0,220,130,0.1);
  border: 1px solid rgba(0,220,130,0.3);
  border-radius: 100px;
  font-size: 0.85rem;
  color: #00dc82;
  margin-bottom: 1rem;
}

.labs-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #00dc82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.8rem;
}

.labs-desc {
  color: #94a3b8;
  font-size: 1rem;
}

.labs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}

.lab-card {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1.5rem;
  background: #1a1a2e;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  cursor: pointer;
}
.lab-card:not(.lab-card--coming):hover {
  border-color: #00dc82;
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0,220,130,0.12);
}
.lab-card--coming {
  opacity: 0.5;
  cursor: default;
}

.lab-icon {
  font-size: 2rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.lab-info { flex: 1; }

.lab-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.lab-description {
  color: #94a3b8;
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.lab-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  padding: 0.2rem 0.6rem;
  background: rgba(0,220,130,0.1);
  border: 1px solid rgba(0,220,130,0.2);
  border-radius: 6px;
  font-size: 0.75rem;
  color: #00dc82;
}

.lab-arrow {
  color: #00dc82;
  font-size: 1.2rem;
  align-self: center;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.lab-card:not(.lab-card--coming):hover .lab-arrow {
  transform: translateX(4px);
}
.coming-label {
  font-size: 0.7rem;
  white-space: nowrap;
  color: #94a3b8;
}
</style>
