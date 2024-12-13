import {  Store } from 'lucide-react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function Login() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center">
          <Store className="mr-4 h-8 w-8" />
          <h1 className="text-2xl font-semibold">Brechó</h1>
        </div>
        <div className="flex items-center gap-2">
          {pathname === '/' ? (
            <Link to="/sign-up">
              <Button>Cadastrar</Button>
            </Link>
          ) : pathname === '/sign-up' ? (
            <Link to="/">
              <Button>Login</Button>
            </Link>
          ) : (
            <h1 className="text-lg font-bold">Admin Use</h1>
          )}
        </div>
      </header>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
