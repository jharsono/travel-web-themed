const Button = (props) => {
  const { text } = props
  return (
    <div className="bg-tulip rounded-lg h-11 flex">
      <div className="text-white text-base text-center self-center basis-full font-bold">{text}</div> 
    </div>
  )
}


export default Button