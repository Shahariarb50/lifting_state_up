import React from 'react'

const Practice = (props) => {
  console.log(props)
  const data={name:"Shahariar",id:"182-15-2112",address:"Dhaka"}
  return (
    <button onClick={()=>props.data(data)}>Click</button>
  )
}

export default Practice