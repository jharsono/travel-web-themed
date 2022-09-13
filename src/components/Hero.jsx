const Hero = (props) => {
  const { img } = props;

  return (
    <div className="mb-3">
      <img src={img} />
    </div>
  )
}

export default Hero;