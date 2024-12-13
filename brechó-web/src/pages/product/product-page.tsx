
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
import { Star } from 'lucide-react'

export function ProductPage(){
    return(
       <div className="w-full grid grid-cols-4 mt-16 ">
            <div className="col-span-2 p-6">
                <img src={ImageShirt} alt="" className='rounded'/>
            </div>
            <div className="col-span-2 flex flex-col p-6 gap-4">
                <h3 className='text-2xl font-bold'>Camisa preta algodão linda</h3>
                <h2 className='text-3xl font-bold'>R$ 55,00</h2>
                <p className='text-lg'>Camisa puro algodão muito linda e diferenciada lorem ipsun lorem lorem lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae debitis eos soluta. Excepturi, deserunt. Voluptates nihil totam nemo nesciunt possimus consectetur, nostrum laboriosam accusantium corporis illo, autem, temporibus nam.</p>
                <Card>
                    <CardHeader>
                        <CardTitle>Loja Parceira : Marineide Camisas</CardTitle>
                        <CardDescription>Loja de camisas sitiada em SP</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <p>Avaliacao da loja</p>
                       <div className='flex'>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                       </div>
                       <p>Telefone: 55(61)7837-6378</p>
                        
                    </CardContent>
                    <CardFooter className='flex flex-col gap-2'>
                        
                    </CardFooter>
                </Card>
                <div className='space-y-4'>
                    <Button  className="w-full">Adicionar ao carrinho</Button>
                </div>
            </div>

       </div>
    )
} 