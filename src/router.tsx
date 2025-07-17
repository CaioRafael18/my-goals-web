import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { SignInWithGithub } from './pages/sign-in-with-github'
import { SignInWithGithubCallback } from './pages/sign-in-with-github-callback'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInWithGithub />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/auth/github/callback',
    element: <SignInWithGithubCallback />,
  },
])
