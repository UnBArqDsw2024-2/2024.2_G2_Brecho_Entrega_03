import {  ShoppingCart, Store } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { Input } from './ui/input'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="flex items-center gap-20 border-b p-6">
      <div className="flex items-center gap-2 text-center">
        <Store className="h-6 w-6" />
        <h1 className="font-semibold">Brechó</h1>
      </div>
      <Input placeholder='Pesquise o produto que deseja!'/>
      <div className="ml-auto flex items-center space-x-4">
        <Button><ShoppingCart/></Button>
        <AccountMenu />
      </div>
    </header>
  )
}
