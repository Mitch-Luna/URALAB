export default function AboutPage() {
  // return (
  //     <div className="container">
  //         <nav></nav>

  //         <main>Contenido</main>
  //     </div>
  // )

  return (
      <div className=''>
          <div className="flex flex-row">
              <div className="basis-1/6 bg-[#1da1f2]">01</div>
              <div className="basis-5/6 bg-[#164e63]">02</div>
          </div>

          <div className="grid grid-col-6">
              <div className="bg-[#1da1f2]">01</div>
              <div className="bg-[#164e63] col-span-5">02</div>
          </div>
      </div>
  )
}

{/* <div className=''>
          <div className="flex flex-row">
              <div className="basis-1/6 bg-[#1da1f2]">01</div>
              <div className="basis-5/6 bg-[#164e63]">02</div>
          </div>
      </div> */}

// export default function Home() {
//   return (
//     // <div className="grid grid-cols-4 gap-4">
//     //   <div className='bg-[#1da1f2] '>Columna 1</div>
//     //   <div className='bg-[#164e63]'>Columna 2</div>
//     // </div>

//     <div>
//       <div className="col-span-1 bg-[#dc2626]">Fila 1</div>
//       <div className="grid grid-cols-2">
//         <div className="bg-[#1da1f2] w-80 h-100">Columna 1</div>
//         <div className="bg-[#164e63]">Columna 2</div>
//       </div>
//     </div >
//   )
// }