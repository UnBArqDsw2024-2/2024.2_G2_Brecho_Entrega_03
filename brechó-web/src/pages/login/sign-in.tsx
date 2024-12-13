
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


export function SignIn() {
  return (
    <div className="flex flex-col gap-24 p-8">
      <div className="m-auto flex w-1/3 flex-col justify-center gap-4 rounded-lg border p-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Bem vindo ao seu brechó!</h1>
          <span className="text-sm text-muted-foreground">Faça seu login</span>
        </div>
        <form
          action=""
          className="flex flex-col gap-4"
        >
          <div className="space-y-1">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input
              id="email"
              placeholder="seuemail@email.com"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Sua senha</Label>
            <Input type="password" id="password" />
          </div>
          <Button  type="submit">
             Entrar
          </Button>
          <span className="text-sm text-muted-foreground">
            Não tem cadastro ? Faça{' '}
            <Link to="/sign-up" className="font-semibold">
              aqui.
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}
