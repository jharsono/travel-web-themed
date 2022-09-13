const content = `Erosion shaped the incredible landscape of Turkey's Göreme valley, but thousands of years ago humans took a cue from Mother Nature and began carving an incredible chamber and tunnel complex into the soft rock. Beginning in the fourth century A.D., an urbanized—but underground—cultural landscape was created here.

\nAncient volcanic eruptions blanketed this region with thick ash, which solidified into a soft rock—called tuff—tens of meters thick. Wind and water went to work on this plateau, leaving only its harder elements behind to form a fairy tale landscape of cones, pillars, pinnacles, mushrooms, and chimneys, which stretch as far as 130 feet (40 meters) into the sky.

\nBut human hands performed equally incredible works here. The rocky wonderland is honeycombed with a network of human-created caves; living quarters, places of worship, stables, and storehouses were all dug into the soft stone. In fact, tunnel complexes formed entire towns with as many as eight different stories hidden underground.

\nGöreme was inhabited as early as the Hittite era, circa 1800 to 1200 B.C. and later sat uncomfortably on the boundary between rival empires; first the Greeks and Persians and later the Byzantine Greeks and a host of rivals. This precarious political position meant that residents needed hiding places—and found them by tunneling into the rock itself.`

const LocationDescription = () => {
  const splitContent = content.split(/\r?\n/);

  return (
    <div className="max-w-xl">
      <div className="text-dark-liver py-5 text-2xl font-bold">World heritage site</div>
      {splitContent.map(paragraph => (
        <div>
          <p className="text-dark-liver mb-5 text-xs">{paragraph}</p>
        </div>
      ))}
    </div>
  )
};

export default LocationDescription;