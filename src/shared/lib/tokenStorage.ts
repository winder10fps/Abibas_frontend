const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

export const tokenStorage = {
  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY) || sessionStorage.getItem(ACCESS_TOKEN_KEY)
  },

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY) || sessionStorage.getItem(REFRESH_TOKEN_KEY)
  },

  setTokens(access_token: string, refresh_token: string, rememberMe: boolean): void {
    this.removeTokens()
    if (rememberMe) {
      localStorage.setItem(ACCESS_TOKEN_KEY, access_token)
      localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token)
    } else {
      sessionStorage.setItem(ACCESS_TOKEN_KEY, access_token)
      sessionStorage.setItem(REFRESH_TOKEN_KEY, refresh_token)
    }
  },

  isRemembered(): boolean {
    return Boolean(localStorage.getItem(REFRESH_TOKEN_KEY))
  },

  removeTokens(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
    sessionStorage.removeItem(ACCESS_TOKEN_KEY)
    sessionStorage.removeItem(REFRESH_TOKEN_KEY)
  },
}
