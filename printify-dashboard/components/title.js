import { useRouter } from 'next/router';
import {useReducer} from 'react'

 const Title=() => {
  const router = useRouter()
  if (router.pathname === "/") {
    return  <h1 className=" hidden md:block font-black text-lg  text-gray-700">
    Welcome Admin !{" "}
    <img
      src="/images/waving-hand.svg"
      alt="waving hand"
      className="inline-block w-8"
    />{" "}
  </h1>
  }
else
  {return <h1 className=" hidden md:block font-black text-lg  text-gray-700 uppercase tracking-wider">
  {router.pathname.slice(1)}
 
</h1>}
}
export default Title;