declare module 'cloudflare:workers' {
  export const env: {
    WHOP_API_ORIGIN?: string
    WHOP_API_KEY?: string
    APP_ID?: string
    BUILD_ID?: string
    [key: string]: unknown
  }
}
