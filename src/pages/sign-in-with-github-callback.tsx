/** biome-ignore-all lint/correctness/useHookAtTopLevel: ignore to confirm the code */
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { createCookies } from '@/utils/create-cookies'
import { useAuthenticateFromGithub } from '../http/generated/api'

export function SignInWithGithubCallback() {
  const navigate = useNavigate()
  const { mutateAsync: authenticateFromGithub } = useAuthenticateFromGithub()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  if (!code) {
    return <Navigate to="/" />
  }

  useEffect(() => {
    authenticateFromGithub({ data: { code } }).then((response) => {
      const token = response.token
      createCookies(token)

      navigate('/dashboard')
    })
  }, [code, authenticateFromGithub, navigate])

  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="size-6 animate-spin text-gray-500" />
    </div>
  )
}
