import List from './List'

const Comp3 = () => {
    const demo = [{
        id:1,
        name:"Venkat"
    },{
        id:2,
        name:"Gheji Pandu",
        
    },{
        id:3,
        name:"AAnnnaram"
    },

]
  return (
    <div>
      <List  demo={demo}/>
    </div>
  )
}

export default Comp3
