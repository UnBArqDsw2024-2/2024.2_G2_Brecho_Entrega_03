
import ImageShirt from '../../assets/camisa.jpg'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
  

export function HomePage (){
    return(
     <div className="mt-4 flex flex-col w-full gap-8 p-4">
       <h1 className="font-semibold">Nosso brechó</h1>
       <div className='flex justify-center gap-24'>

       
        <Card>
            <CardHeader>
                <CardTitle>Camisa Preta Massa</CardTitle>
                <CardDescription>Camisa preta de algodão super confortavel lorem ipsun kasndjsnajd</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex justify-center'>
                    <img src={ImageShirt} alt="Imagem do produto" className="max-w-80"/>
                </div>
                <div>
                    <p>Tamanho: M</p>
                    <p>Preço: R$ 60,00</p>
                </div>
                
            </CardContent>
             <CardFooter className='flex flex-col gap-2'>
                <p>Loja Parceira  : Mileine Fraga Costa Neto BSB-DF</p>
                <Button className='w-full'>Adicionar ao carrinho</Button>
             </CardFooter>
        </Card>

    <Card>
            <CardHeader>
                <CardTitle>Camisa Preta Massa mas parece vestido</CardTitle>
                <CardDescription>Vestido de noiva super bonito e caro super confortavel lorem ipsun kasndjsnajd</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex justify-center'>
                    <img src={ImageShirt} alt="Imagem do produto" className="max-w-80 max-h-60"/>
                </div>
                <div>
                    <p>Tamanho: P</p>
                    <p>Preço: R$ 550,00</p>
                </div>
                
            </CardContent>
            <CardFooter className='flex flex-col gap-2'>
                <p>Loja Parceira  : Mileine Fraga Costa Neto BSB-DF</p>
                <Button className='w-full'>Adicionar ao carrinho</Button>
             </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Vestido lindo</CardTitle>
                <CardDescription>Vestido de noiva super bonito e caro super confortavel lorem ipsun kasndjsnajd</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex justify-center'>
                    <img src={ImageShirt} alt="Imagem do produto" className="max-w-80 max-h-60"/>
                </div>
                <div>
                    <p>Tamanho: P</p>
                    <p>Preço: R$ 550,00</p>
                </div>
                
            </CardContent>
            <CardFooter className='flex flex-col gap-2'>
                <p>Loja Parceira  : Mileine Fraga Costa Neto BSB-DF</p>
                <Button className='w-full'>Adicionar ao carrinho</Button>
             </CardFooter>
        </Card>
    </div>
    <div className='flex justify-center gap-24'>

       
        <Card>
            <CardHeader>
                <CardTitle>Camisa Preta Massa</CardTitle>
                <CardDescription>Camisa preta de algodão super confortavel lorem ipsun kasndjsnajd</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex justify-center'>
                    <img src={ImageShirt} alt="Imagem do produto" className="max-w-80"/>
                </div>
                <div>
                    <p>Tamanho: M</p>
                    <p>Preço: R$ 60,00</p>
                </div>
                
            </CardContent>
            <CardFooter className='flex flex-col gap-2'>
                <p>Loja Parceira  : Mileine Fraga Costa Neto BSB-DF</p>
                <Button className='w-full'>Adicionar ao carrinho</Button>
             </CardFooter>
        </Card>

    <Card>
            <CardHeader>
                <CardTitle>Camisa Preta Massa mas parece vestido</CardTitle>
                <CardDescription>Vestido de noiva super bonito e caro super confortavel lorem ipsun kasndjsnajd</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex justify-center'>
                    <img src={ImageShirt} alt="Imagem do produto" className="max-w-80 max-h-60"/>
                </div>
                <div>
                    <p>Tamanho: P</p>
                    <p>Preço: R$ 550,00</p>
                </div>
                
            </CardContent>
            <CardFooter className='flex flex-col gap-2'>
                <p>Loja Parceira  : Mileine Fraga Costa Neto BSB-DF</p>
                <Button className='w-full'>Adicionar ao carrinho</Button>
             </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Vestido lindo</CardTitle>
                <CardDescription>Vestido de noiva super bonito e caro super confortavel lorem ipsun kasndjsnajd</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex justify-center'>
                    <img src={ImageShirt} alt="Imagem do produto" className="max-w-80 max-h-60"/>
                </div>
                <div>
                    <p>Tamanho: P</p>
                    <p>Preço: R$ 550,00</p>
                </div>
                
            </CardContent>
            <CardFooter className='flex flex-col gap-2'>
                <p>Loja Parceira  : Mileine Fraga Costa Neto BSB-DF</p>
                <Button className='w-full'>Adicionar ao carrinho</Button>
             </CardFooter>
        </Card>
    </div>
</div>
    )
    
}