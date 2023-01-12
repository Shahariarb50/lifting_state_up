import Practice from "./component/Practice";
const App = () => {
  const parentAlert = (item)=>{
  alert(item.name);
  alert(item.id);
  alert(item.address);
  }
  return (
  <>
  <Practice data={parentAlert}/>
  </>
  )
}

export default App