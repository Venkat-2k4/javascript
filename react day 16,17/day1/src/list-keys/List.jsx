
// const List = () => {
//     const arr = [10,20,30];
//     console.log(arr);
//     let num = 0;
//   return (
//     <div>
//       {
//         arr.map((it )=>{
//             return(
//                 <h1 key={num++} >{it}</h1>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default List


const List = ({demo}) => {
    console.log( demo);
  return (
    <div>
      {
        demo?.map((it)=>{
            return(
                <div key={it.id}> <h1>{it.name}</h1> </div>
                
            )
        })
      }
    </div>
  )
}

export default List
