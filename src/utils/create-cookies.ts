import Cookies from 'universal-cookie'

export function createCookies(token: string) {
  const cookies = new Cookies()

  cookies.set('my-goals', token, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
}
