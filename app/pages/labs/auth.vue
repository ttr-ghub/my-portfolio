<script setup lang="ts">
const { loggedIn, user, clear } = useUserSession()

async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  await clear()
}
</script>

<template>
  <div class="auth-wrapper">
    <header class="auth-header">
      <NuxtLink to="/labs" class="back-btn">← Labs 一覧に戻る</NuxtLink>
      <div class="auth-badge">🔐 OAuth Demo</div>
      <h1 class="auth-title">GitHub 認証</h1>
      <p class="auth-desc">
        GitHub OAuth 2.0 を使ったログイン認証のデモ。
        Cookie ベースの暗号化セッションで状態を管理しています。
      </p>
      <div class="stack-badges">
        <span class="stack-tag">Nuxt 4</span>
        <span class="stack-tag">nuxt-auth-utils</span>
        <span class="stack-tag">GitHub OAuth 2.0</span>
        <span class="stack-tag">Cookie Session</span>
      </div>
    </header>

    <div class="auth-card">
      <!-- 未ログイン -->
      <div v-if="!loggedIn" class="login-state">
        <div class="lock-icon">🔒</div>
        <p class="login-message">
          このページはログインが必要なコンテンツのデモです。<br>
          GitHub アカウントでログインして確認してください。
        </p>
        <a href="/auth/github" class="github-btn">
          <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub でログイン
        </a>
      </div>

      <!-- ログイン済み -->
      <div v-else class="logged-state">
        <div class="user-card">
          <img :src="user?.avatar_url" :alt="user?.name ?? ''" class="avatar" />
          <div class="user-info">
            <p class="user-name">{{ user?.name || user?.login }}</p>
            <a :href="user?.html_url" target="_blank" class="user-login">
              @{{ user?.login }}
            </a>
          </div>
          <div class="verified-badge">✅ 認証済み</div>
        </div>

        <div class="secret-content">
          <h2 class="secret-title">🎉 ログイン成功！</h2>
          <p class="secret-text">
            ここはログインしたユーザーだけが見られる領域です。<br>
            実際のアプリでは、APIレートの制限解除や個人データの表示などに使います。
          </p>
        </div>

        <button class="logout-btn" @click="logout">ログアウト</button>
      </div>

      <!-- OAuth フロー説明 -->
      <div class="flow-info">
        <span class="api-dot" />
        <span class="flow-text">
          <code>GET /auth/github</code> →
          GitHub認証 →
          <code>Cookie</code> セッション保存 →
          <code>useUserSession()</code> で取得
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.auth-wrapper {
  min-height: 100vh;
  background: #0d0d14;
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
  padding: 4rem 8vw;
}

.auth-header { margin-bottom: 2.5rem; }

.back-btn {
  display: inline-flex;
  align-items: center;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  transition: color 0.2s;
}
.back-btn:hover { color: #00dc82; }

.auth-badge {
  display: inline-flex;
  padding: 0.3rem 0.9rem;
  background: rgba(0,220,130,0.1);
  border: 1px solid rgba(0,220,130,0.3);
  border-radius: 100px;
  font-size: 0.85rem;
  color: #00dc82;
  margin-bottom: 1rem;
}

.auth-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #00dc82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.8rem;
}

.auth-desc {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.stack-badges { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.stack-tag {
  padding: 0.2rem 0.6rem;
  background: rgba(59,130,246,0.1);
  border: 1px solid rgba(59,130,246,0.25);
  border-radius: 6px;
  font-size: 0.75rem;
  color: #3b82f6;
}

.auth-card {
  max-width: 580px;
  background: #1a1a2e;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* 未ログイン */
.login-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
  text-align: center;
}

.lock-icon { font-size: 3rem; }

.login-message {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.7;
}

.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.8rem;
  background: #fff;
  color: #000;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s;
}
.github-btn:hover { background: #e2e8f0; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(255,255,255,0.1); }
.github-icon { width: 20px; height: 20px; }

/* ログイン済み */
.logged-state {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background: rgba(0,220,130,0.06);
  border: 1px solid rgba(0,220,130,0.2);
  border-radius: 12px;
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #00dc82;
}

.user-info { flex: 1; }
.user-name { font-weight: 700; font-size: 1rem; }
.user-login {
  color: #94a3b8;
  font-size: 0.85rem;
  text-decoration: none;
}
.user-login:hover { color: #00dc82; }

.verified-badge {
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  background: rgba(0,220,130,0.15);
  border: 1px solid rgba(0,220,130,0.3);
  border-radius: 100px;
  color: #00dc82;
  white-space: nowrap;
}

.secret-content {
  padding: 1.2rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
}
.secret-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.6rem; }
.secret-text { color: #94a3b8; font-size: 0.9rem; line-height: 1.7; }

.logout-btn {
  align-self: flex-start;
  padding: 0.6rem 1.4rem;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  color: #94a3b8;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
}
.logout-btn:hover { border-color: #ef4444; color: #ef4444; }

/* フロー説明 */
.flow-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: #4a5568;
  flex-wrap: wrap;
}
.flow-info code {
  color: #00dc82;
  background: rgba(0,220,130,0.08);
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 0.74rem;
}
.flow-text { flex: 1; }
.api-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #00dc82;
  border-radius: 50%;
  box-shadow: 0 0 6px #00dc82;
  animation: pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
</style>
