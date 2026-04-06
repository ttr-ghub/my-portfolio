<script setup lang="ts">
interface Task {
  id: number
  title: string
  completed: boolean
  createdAt: string
}

const { data: tasks, refresh } = await useFetch<Task[]>('/api/tasks')

const newTitle = ref('')
const adding = ref(false)

async function addTask() {
  if (!newTitle.value.trim()) return
  adding.value = true
  await $fetch('/api/tasks', {
    method: 'POST',
    body: { title: newTitle.value.trim() },
  })
  newTitle.value = ''
  adding.value = false
  await refresh()
}

async function toggleTask(task: Task) {
  await $fetch(`/api/tasks/${task.id}`, {
    method: 'PATCH',
    body: { completed: !task.completed },
  })
  await refresh()
}

async function deleteTask(id: number) {
  await $fetch(`/api/tasks/${id}`, { method: 'DELETE' })
  await refresh()
}

const completedCount = computed(() => tasks.value?.filter(t => t.completed).length ?? 0)
const totalCount = computed(() => tasks.value?.length ?? 0)
</script>

<template>
  <div class="todo-wrapper">
    <header class="todo-header">
      <NuxtLink to="/labs" class="back-btn">← Labs 一覧に戻る</NuxtLink>
      <div class="todo-badge">✅ CRUD Demo</div>
      <h1 class="todo-title">タスク管理</h1>
      <p class="todo-desc">
        Nitro API + Prisma + PostgreSQL (Neon) でデータを永続化しています。
        ページをリロードしても消えません。
      </p>
      <div class="stack-badges">
        <span class="stack-tag">Nuxt 4</span>
        <span class="stack-tag">Nitro API</span>
        <span class="stack-tag">Prisma</span>
        <span class="stack-tag">Neon PostgreSQL</span>
      </div>
    </header>

    <div class="todo-card">
      <!-- 進捗 -->
      <div class="progress-bar-wrap">
        <div class="progress-meta">
          <span class="progress-label">完了</span>
          <span class="progress-count">{{ completedCount }} / {{ totalCount }}</span>
        </div>
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: totalCount > 0 ? `${(completedCount / totalCount) * 100}%` : '0%' }"
          />
        </div>
      </div>

      <!-- 入力フォーム -->
      <form class="add-form" @submit.prevent="addTask">
        <input
          v-model="newTitle"
          class="add-input"
          placeholder="新しいタスクを入力..."
          :disabled="adding"
        />
        <button class="add-btn" type="submit" :disabled="adding || !newTitle.trim()">
          {{ adding ? '追加中...' : '追加' }}
        </button>
      </form>

      <!-- タスクリスト -->
      <div class="task-list">
        <div v-if="!tasks?.length" class="empty-state">
          タスクがありません。上から追加してみてください！
        </div>
        <div
          v-for="task in tasks"
          :key="task.id"
          class="task-item"
          :class="{ completed: task.completed }"
        >
          <button class="check-btn" @click="toggleTask(task)">
            <span class="check-icon">{{ task.completed ? '✅' : '⬜' }}</span>
          </button>
          <span class="task-title">{{ task.title }}</span>
          <button class="delete-btn" @click="deleteTask(task.id)">🗑️</button>
        </div>
      </div>

      <!-- API確認バナー -->
      <div class="api-info">
        <span class="api-dot" />
        <span>
          <code>GET /api/tasks</code> &nbsp;|&nbsp;
          <code>POST /api/tasks</code> &nbsp;|&nbsp;
          <code>PATCH /api/tasks/:id</code> &nbsp;|&nbsp;
          <code>DELETE /api/tasks/:id</code>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.todo-wrapper {
  min-height: 100vh;
  background: #0d0d14;
  color: #e2e8f0;
  font-family: 'Inter', sans-serif;
  padding: 4rem 8vw;
}

.todo-header { margin-bottom: 2.5rem; }

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

.todo-badge {
  display: inline-flex;
  padding: 0.3rem 0.9rem;
  background: rgba(0,220,130,0.1);
  border: 1px solid rgba(0,220,130,0.3);
  border-radius: 100px;
  font-size: 0.85rem;
  color: #00dc82;
  margin-bottom: 1rem;
}

.todo-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #00dc82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.8rem;
}

.todo-desc {
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

.todo-card {
  max-width: 680px;
  background: #1a1a2e;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Progress */
.progress-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: #94a3b8;
}
.progress-bar {
  height: 6px;
  background: rgba(255,255,255,0.08);
  border-radius: 100px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00dc82, #3b82f6);
  border-radius: 100px;
  transition: width 0.4s ease;
}

/* Form */
.add-form { display: flex; gap: 0.8rem; }
.add-input {
  flex: 1;
  padding: 0.75rem 1rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
  outline: none;
  transition: border-color 0.2s;
}
.add-input:focus { border-color: #00dc82; }
.add-input::placeholder { color: #4a5568; }
.add-btn {
  padding: 0.75rem 1.4rem;
  background: #00dc82;
  color: #000;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  font-family: 'Inter', sans-serif;
}
.add-btn:hover:not(:disabled) { background: #00f090; transform: translateY(-1px); }
.add-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Task list */
.task-list { display: flex; flex-direction: column; gap: 0.5rem; min-height: 60px; }
.empty-state {
  text-align: center;
  color: #4a5568;
  font-size: 0.9rem;
  padding: 2rem 0;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 1rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  transition: all 0.2s;
}
.task-item:hover { border-color: rgba(255,255,255,0.12); }
.task-item.completed .task-title {
  text-decoration: line-through;
  color: #4a5568;
}

.check-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.2rem;
  line-height: 1;
  transition: transform 0.1s;
}
.check-btn:hover { transform: scale(1.15); }

.task-title {
  flex: 1;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  opacity: 0.3;
  transition: opacity 0.2s;
  padding: 0;
}
.delete-btn:hover { opacity: 1; }

/* API info */
.api-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: #4a5568;
  flex-wrap: wrap;
}
.api-info code {
  color: #00dc82;
  background: rgba(0,220,130,0.08);
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 0.74rem;
}
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
