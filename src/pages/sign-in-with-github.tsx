import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { LoginWithGithub } from '@/components/login-with-github'
import logo from '../assets/logo-in-orbit.svg'

export function SignInWithGithub() {
  const navigate = useNavigate()
  const githubUrl = new URL('/login/oauth/authorize', 'https://github.com')
  githubUrl.searchParams.set('client_id', import.meta.env.VITE_CLIENT_ID_GITHUB)

  useEffect(() => {
    const cookies = new Cookies()
    const token = cookies.get('my-goals')
    if (token) {
      navigate('/dashboard')
    }
  }, [navigate])

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-8">
      <img alt="in.orbit" src={logo} />

      <p className="max-w-80 text-center text-zinc-300 leading-relaxed">
        Conclua suas metas semanais, ganhe experiência e suba de nível!
      </p>

      <LoginWithGithub githubUrl={githubUrl} />
    </main>
  )
}
