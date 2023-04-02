
function Cart({cartList, setCart}) {
    const [item] = cartList;
    return(
        <div>
            

            {
                cartList.map((items, index)=>{
                    return(
                        <div>
                            hello
                        </div>)
                })
            }
        </div>
    )
}

export default Cart;
