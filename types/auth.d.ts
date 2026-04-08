declare module '#auth-utils' {
  interface User {
    login: string
    name: string | null
    avatar_url: string
    html_url: string
  }
}

export {}
