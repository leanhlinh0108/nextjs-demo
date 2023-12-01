'use client'
import { useRouter } from 'next/navigation';

export default function Product({ params }: { params: { handle: string } }) {
    const data = [
        {
            id: '1',
            name: 'A'
        },
        {
            id: '2',
            name: 'B'
        },
        {
            id: '3',
            name: 'C'
        },
        {
            id: '4',
            name: 'D'
        },
        {
            id: '5',
            name: 'E'
        },
        {
            id: '6',
            name: 'F'
        },
    ]
    const abc =data.find(myFunction);
    function myFunction(value: { id: string; }, index: any, array: any){
        return params.handle == value.id;
    }
    return  <div>My Post: {params.handle + abc?.name}   </div> 
  }
