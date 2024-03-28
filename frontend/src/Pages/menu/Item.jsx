import React, { useState } from 'react'

function Item({ item, index }) {

    const [Qty, setQty] = useState(0);

    const dec = () => {
        if (Qty > 0) {
            setQty(Qty - 1)
        }
    }

    const inc = () => {
        setQty(Qty + 1)
    }


    return (


        <div class="bg-slate-100 rounded-lg shadow-md p-6">
            <img src={`food/` + item.image} alt="Product Image" class="w-full h-60 object-cover mb-4 rounded-md" />
            <h2 class="text-2xl font-semibold text-gray-800">{item.name}</h2>
            <div class="mt-4">
                <p class="text-gray-700">{item.desc}</p>
                <div className='flex justify-between mt-6'>
                    <div class="flex items-center ">
                        <span class="text-3xl font-semibold mr-2">₹</span>
                        <span class="text-4xl font-bold text-gray-800">{item.price}</span>
                    </div>
                    {
                        Qty === 0 ? <div>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={inc}>Add To Cart</button>
                        </div> :

                            <div className="flex justify-between mt-6">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={dec}>-</button>
                                <span className="text-4xl font-bold text-gray-800">{Qty}</span>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={inc}>+</button>
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