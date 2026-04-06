<script setup lang="ts">
import type { Profile, Skill } from '../../server/utils/types'

const { data: profile } = await useFetch<Profile>('/api/profile')
const { data: skills } = await useFetch<Skill[]>('/api/skills')

const skillsByCategory = computed(() => {
  if (!skills.value) return {} as Record<string, Skill[]>
  return skills.value.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category]!.push(skill)
    return acc
  }, {} as Record<string, Skill[]>)
})

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps',
}

const levelLabels: Record<string, string> = {
  advanced: '★★★',
  intermediate: '★★☆',
  learning: '★☆☆',
}
</script>

<template>
  <div class="portfolio">
    <!-- ヘッダー / ヒーローセクション -->
    <header class="hero">
      <div class="hero-content">
        <div class="hero-badge">👋 Welcome to my portfolio</div>
        <h1 class="hero-name">{{ profile?.name }}</h1>
        <p class="hero-title">{{ profile?.title }}</p>
        <p class="hero-bio">{{ profile?.bio }}</p>
        <div class="hero-links">
          <a :href="profile?.githubUrl" target="_blank" class="btn btn-primary">
            🐙 GitHub
          </a>
          <a href="#skills" class="btn btn-secondary">スキルを見る</a>
          <NuxtLink to="/labs" class="btn btn-secondary">🔬 プロダクト (Labs)</NuxtLink>
        </div>
        <p class="hero-location">📍 {{ profile?.location }}</p>
      </div>
      <div class="hero-visual">
        <div class="avatar-ring">
          <div class="avatar">EJ</div>
        </div>
        <div class="orbit orbit-1" />
        <div class="orbit orbit-2" />
      </div>
    </header>

    <!-- API 動作確認バナー -->
    <div class="api-banner">
      <span class="api-dot" />
      <span>Nitro API connected — <code>GET /api/profile</code> & <code>GET /api/skills</code> ✅</span>
    </div>

    <!-- スキルセクション -->
    <section id="skills" class="skills-section">
      <div class="section-inner">
        <h2 class="section-title">Tech Stack</h2>
        <p class="section-subtitle">Nitro API (<code>/api/skills</code>) から動的に取得しています</p>

        <div class="skill-categories">
          <div
            v-for="(categorySkills, category) in skillsByCategory"
            :key="category"
            class="skill-category"
          >
            <h3 class="category-title">{{ categoryLabels[category] }}</h3>
            <div class="skill-list">
              <div
                v-for="skill in categorySkills"
                :key="skill.id"
                class="skill-card"
                :class="`level-${skill.level}`"
              >
                <span class="skill-icon">{{ skill.icon }}</span>
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ levelLabels[skill.level] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- フッター -->
    <footer class="footer">
      <p>Built with <span class="highlight">Nuxt 4</span> + <span class="highlight">TypeScript</span> + <span class="highlight">Nitro API</span></p>
      <p class="footer-sub">© 2026 {{ profile?.name }}</p>
    </footer>
  </div>
</template>
