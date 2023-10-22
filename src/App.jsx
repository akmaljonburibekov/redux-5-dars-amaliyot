import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal } from "./redux/features/shopSlice"

import Navbar from "./component/navbar"
import ShopProducts from "./component/shopProducts"

export default function App() {
  const shop = useSelector((data) => data.shop)
  const dispatch = useDispatch()

useEffect(() => {
  dispatch(updateTotal())
},[shop, dispatch])

  return (
    <>
     <div className="bg-slate-50">
       <Navbar />
       <ShopProducts />
       </div>
    </>
  )
}