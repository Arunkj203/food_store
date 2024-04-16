import React, { useEffect, useState } from 'react'
import {Add, Remove} from '@mui/icons-material';

function Item({ item }) {

    const [Qty, setQty] = useState(0);

    useEffect(() => {
        const existingOrderList = sessionStorage.getItem('order_list')

        if (existingOrderList) {
            const cartItems = new Map(JSON.parse(existingOrderList))
            if (cartItems.has(item.name)) {
                setQty(cartItems.get(item.name));
            }
        }

        else{
            setQty(0);
        }


    }, [item.name]);


    const dec = () => {
        if (Qty > 0) {
            setQty(Qty - 1)
            updateCartItems(item.name, Qty - 1)
        }

        if (Qty === 1) {
            setQty(Qty - 1)
            const existingOrderList = sessionStorage.getItem('order_list')
            const cartItems = new Map(JSON.parse(existingOrderList))
            cartItems.delete(item.name)
            sessionStorage.setItem('order_list', JSON.stringify(Array.from(cartItems.entries())));
        }
    }

    const inc = () => {
        setQty(Qty + 1)
        updateCartItems(item.name, Qty + 1)
    }

    const updateCartItems = (itemName, quantity) => {
        const existingOrderList = sessionStorage.getItem('order_list')
        const cartItems = new Map(JSON.parse(existingOrderList))
        cartItems.set(itemName, quantity);
        sessionStorage.setItem('order_list', JSON.stringify(Array.from(cartItems.entries())));
    };




    return (
        <div class="w-full max-w-80 h-96 grid grid-rows-10 pb-5 px-2 gap-2 bg-slate-100 rounded-lg shadow-md">
            <img src={`food/` + item.image} alt="Product Image" class="w-full h-full row-span-5 object-cover mb-4 rounded-md" />
            <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 row-span-1">{item.name}</h2>
            <p class="text-base sm:text-xl text-gray-700 row-span-2 pt-4">{item.desc}</p>
            <div class="mt-4 row-span-2">
                <div className='flex justify-between mt-6'>
                    <div class="flex items-center ">
                        <span class="text-xl font-semibold mr-2">₹</span>
                        <span class="text-2xl font-bold text-gray-800">{item.price}</span>
                    </div>
                    {
                        Qty === 0 ? <div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-xl text-white font-bold rounded-full px-2 py-1" onClick={inc}>Add To Cart</button>
                        </div> :
                        <div className="flex items-center justify-between text-2xl">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full flex items-center justify-center" onClick={dec}><Remove/></button>
                            <span className=" font-bold text-gray-800">{Qty}</span>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full flex items-center justify-center" onClick={inc}><Add/></button>
                        </div>
                    }
                </div>
            </div>
        </div>



    )
}

export default Item



{/* <img src={`food/` + item.image} alt="Product Image" class="w-full h-60 object-cover mb-4 rounded-md" />
                    <h2 class="text-2xl font-semibold text-gray-800">{item.name}</h2>
                    <div class="mt-4">
                        <p class="text-gray-700">{item.desc}</p>
                        <div class="flex items-center mt-6">
                            <span class="text-3xl font-semibold mr-2">₹</span>
                            <span class="text-4xl font-bold text-gray-800">{item.price}</span>

                        </div>

                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-8 rounded-full justify-end">Add to cart</button>
                    </div> */}


{/* <div key={index}>
{Data.map((item, index1) => (
    <div key={index1}>
        <div className='item-cont grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            <img src={`food/` + item.image} alt='img' className='img w-40 h-24' />
            <div className=" flex flex-col">
                <div className='title-price'>
                    <h5>{item.name}</h5>
                    <small>{item.price}</small>
                </div>
                <div>
                    <small className='ml-3 w-full'>--------------------------</small>
                    <p className='para-menu'>{item.desc}</p>
                </div>

            </div>
        </div>
    </div>
))
}
</div > */}