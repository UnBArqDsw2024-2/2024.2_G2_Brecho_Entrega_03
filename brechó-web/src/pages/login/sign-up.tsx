

import { Link } from 'react-router-dom'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'




export function SignUp() {

  return (
    <div className="p-4">
      <div className="m-auto flex w-1/3 flex-col justify-center gap-4 rounded-lg border p-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold">Cadastre-se na nossa plataforma!</h1>
          <span className="text-sm text-muted-foreground">
            Faça seu cadastro
          </span>
        </div>
        <form
          action=""
          className="flex flex-col gap-4"
        >
          <div className="space-y-1">
            <Label htmlFor="name">Seu nome</Label>
            <Input type="text" id="name"/>
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input
              id="email"
              placeholder="seuemail@email.com"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Seu telefone</Label>
            <Input id="phone" placeholder="(55)61" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">CEP</Label>
            <Input id="phone" placeholder="" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Complemento do endereço</Label>
            <Textarea id="phone" placeholder="" />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password">Sua senha</Label>
            <Input type="password" id="password" />
          </div>
          <Button type="submit" className="w-full">
            Finalizar cadastro
          </Button>

          <span className="text-sm text-muted-foreground">
            Já tem cadastro ? Faça{' '}
            <Link to="/sign-in" className="font-semibold">
              login.
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}
