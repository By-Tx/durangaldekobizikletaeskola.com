"use client"
import Title from '@/app/[locale]/(main)/components/Titles/Title';
import ShopItems from '@/app/[locale]/(main)/components/shop/ShopItems';
import SubTitle from '../components/Titles/SubTitle';
import DropDownSelection from '../form/dropDownSelecction';

import { useState } from 'react';

export default function clothes() {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
  
   
    const item=[
        {
            image: 'https://photos.txuli.com/duranguesa/clothes/mailotDromFront.jpeg',
            image2: 'https://photos.txuli.com/duranguesa/clothes/mailotDromSide.jpeg',
            name: 'maillot'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/clothes/culotteDrom.jpeg',
            image2: 'https://photos.txuli.com/duranguesa/clothes/culotteDromSide.jpeg',
            name: 'culotte'
        }
       
    ]
    const itemShool=[
        {
            image: 'https://photos.txuli.com/duranguesa/clothes/mailotDromFront.jpeg',
            image2: 'https://photos.txuli.com/duranguesa/clothes/mailotDromSide.jpeg',
            name: 'maillot'
        },
        {
            image: 'https://photos.txuli.com/duranguesa/clothes/culotteDrom.jpeg',
            image2: 'https://photos.txuli.com/duranguesa/clothes/culotteDromSide.jpeg',
            name: 'culotte'
        }
       
    ]
    const items = [
        {content: 'maillot', value: 'maillot', checked: false},
        {content: 'culotte', value: 'culotte', checked: false},
    ]
    return (
    <>
    <Title title='ARROPA'/>
   
    <section>
    <ShopItems item={item}  title="Dromedario"/>
    <ShopItems item={itemShool}  title="Eskolak"/>
    </section>
    <SubTitle subTitle='LORTU ZURE EKIPAMENDUA'/>

    <form action="" className="mt-10 max-w-3xl mx-auto bg-gradient-to-br bg-customblue shadow-2xl rounded-lg p-8 text-black">
    
    
    </form>
    <DropDownSelection items={items} title='Arropa mota' />
    
    </>
    )
}

