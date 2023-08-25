import Image from 'next/image'

export default function Home() {

  const poll =[
    {
      id:1,
      name:"william",
      vote_count:122,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tEwSiItq8aCzctBZx9cmTtS8odxxjpSzyRLN_T4d-pzQjzB1UENr6_XwY4Qp_khEVLM&usqp=CAU"
     
    },
    {
      id:2,
      vote_count:12,
      name:"kenneth",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tEwSiItq8aCzctBZx9cmTtS8odxxjpSzyRLN_T4d-pzQjzB1UENr6_XwY4Qp_khEVLM&usqp=CAU"
     
    },
    {
      id:3,
      vote_count:142,
      name:"Dey",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tEwSiItq8aCzctBZx9cmTtS8odxxjpSzyRLN_T4d-pzQjzB1UENr6_XwY4Qp_khEVLM&usqp=CAU"
     
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-4">
      
     <div className="flex space-y-2 flex-col w-full h-[800px] md:w-[80%] bg-gray-400 shadow-lg items-center justify-center">


      {
        poll.map((poll)=>(

       <div className="flex  w-full md:w-96 h-64 bg-gray-900 text-white flex-col mt-2 my-2">

         <div className="flex w-full items-center justify-around py-4 ">
         <img className=" flex w-40 h-40 object-cover rounded-full " src={poll.img} alt="img"/>

         <div className="flex flex-col items-center justify-center space-y-2">
          <p className=" w-12 h-12 bg-red-800 rounded-full text-center justify-center items-center flex ">{poll.vote_count}</p>
          <button className="flexd h-8 bg-red-800  w-24 rounded-lg ">vote</button>
         </div>

         </div>

         <hr className="flex h-1 bg-white"/>

        <div className="flex flex-col  items-center justify-center  h-full">
        <p>{poll.name}</p>

        <div className="h-6 bg-green-300 w-[90%] items-center flex relative">

          <div className="bg-red-900 h-full w-[60%]  flex">
            
          </div>
            <p className="flex justify-center items-center text-center absolute top-0 left-[50%] right-[50%]">50%</p>

        </div>


        </div>

      </div>

        ))
      }
    




  </div>


    </main>
  )
}
