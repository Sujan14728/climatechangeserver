const express = require("express");

const router = express.Router();

const api = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1591704951890-0862b2e98acb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
    name: "Glass bottles",
    description:
      "Most of us assume that a glass bottle is a more environmentally friendly choice for our drinks than plastic bottles. However, the production of glass calls for furnaces to operate at temperatures of over 1500 degrees Celsius, emitting greenhouse gases that include carbon dioxide, carbon monoxide, nitrogen oxides and sulphur oxides. And because they weigh more than their plastic alternatives, transporting glass bottles can produce even greater emissions. That said, if a glass bottle is reused enough times, it can have a smaller carbon footprint than a plastic bottle.",
    emissions: "",
    alternative: "",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1630459065645-549fe5a56db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Refrigerator",
    description:
      "With countries and companies under pressure to slash their contribution to climate change, the cooling industry is facing a radical overhaul to the way it produces and disposes of refrigerants. Over the past three decades, governments around the world have pledged to crack down on the potent climate-warming chemicals used as coolants, while companies have started seeking natural, less polluting alternatives. But environmental campaigners say changes must be made much faster if international climate goals are to be met.",
    emissions: "HFC ,HCFC, CFC",
    alternative: "GreenFreeze",
    alterDesc:
      "Our first big success on natural refrigerants came in 1992, when Greenpeace developed an alternative refrigerator that did not use the extremely potent greenhouse gases HFCs and HCFCs. Greenpeace obtained orders from 70,000 Germans for the non-existent refrigerator in just three weeks, which in turn encouraged a manufacturer to actually build it.17 years later, over 300 million refrigerators utilizing this technology have been sold in Europe, Asia, and South America by leading brands including Whirlpool, Bosch, Haier, Panasonic, LG, Miele, Electrolux, and Siemens. The technology was a little slower to catch on in America, ironically because the EPA had a lot of bureaucratic red tape before hydrocarbons could be approved.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1536356915696-c6bf1c01da46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Adhesive tape",
    description:
      "Have you ever considered the environmental impact of the adhesive tape you use every time you wrap a present or pack up goods to return goods to the manufacturer? Tape that is made with synthetic resins and plastic film contribute to greenhouse gas emissions, and each application can really add up. Additionally, when the plastic film and synthetic residue are left on paper and cardboard, it can interfere with the recycling process, which can result in batches of recycling being diverted to general household waste. Some types of tape, such as masking tape, can be recycled and make a more sustainable alternative.",
    emissions: "CO2,other greenhouse gases",
    alternative: "using bio-based material",
    alterDesc:
      "Rather than relying on conventional fossil-based raw materials, bio-based adhesives and sealants use, at least in part, renewable materials. These typically include starch, cellulose, proteins (such as casein), vegetable oils, lignin, or natural resins.Global adhesives provider, H.B. Fuller, recently announced that it has been working with one of the world’s largest polymer suppliers, Covestro, to deliver an adhesive with a reduced climate impact for the automotive, textiles, woodworking, and composites industries.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Coffee",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
    emissions: "",
    alternative: "",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Tea bags",
    description:
      "Us Brits consume over 60 billion cups of tea each year, with 96% of tea drinkers choosing tea bags for their brew rather than tea leaves. However, many tea bags available in the shops contain polypropylene plastic, a sealing plastic, to keep them from falling apart. So, when you think you are doing your bit for the planet by putting your used tea bags in the food waste, because this plastic is not recyclable or biodegradable you are contaminating it. However, an increasing number of brands are turning to sustainable tea bags, so watch this space.",
    emissions: "",
    alternative: "",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1560622496-c49bec679e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "The internet",
    description:
      "Did you know the internet has a bigger carbon footprint than air travel? Aside from the manufacturing and powering of products we use, one of the more surprising sources of carbon dioxide comes from processing data. The internet itself releases around 830 million tonnes of carbon dioxide annually. That’s 2% of the global carbon footprint. The main source of this is server farms, which are necessary since they store all the data we use on the internet, as they use a huge amount of energy to power and cool the equipment.",
    emissions: "",
    alternative: "",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Smart tech",
    description:
      "As with the data centres, electronic devices have a large carbon footprint. The contribution of IT and the electronics sector to climate change is a growing problem, with studies suggesting that the production and use of electronic devices will account for 14% of global greenhouse gas emissions by 2040. Like the devices themselves, the issue is complex, with emissions occurring throughout the, often very short, lifecycle of a product. Mining the natural resources for the materials used, multiple stages of manufacture, transportation and disposal all contribute significantly to the climate impact of a device. Using a device each day has a bigger impact on the environment than just manufacturing it. As mentioned before, a lot of energy is needed to run the data centres and infrastructure that allow you to make video calls, post selfies and stream TV.",
    emissions: "",
    alternative: "",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Scented candles",
    description:
      "The UK government's 2019 Clean Air Strategy cited candles as a source of non-methane volatile organic compounds (NMVOCs), which can ultimately be bad for both the environment and your health by contributing to indoor pollution. Many scented candles contain paraffin wax, a by-product of crude oil, which means a burning candle emits fossil fuels. They can have wicks with cotton wrapped around metal which produces soot that is toxic to breathe. Overall, they affect air quality, have perfumes that emit chemicals, and carry excessive and often non-recyclable packaging.",
    emissions: "cancer-causing chemicals",
    alternative: "Grow Fragrance Candles",
    alterDesc:
      "they use a test developed by the U.S. Department of Agriculture to ensure all candles are 100 percent plant-based and free of heavy metals and toxins — no phthalates, parabens, petroleum, or synthetic petrochemicals. Grow Fragrance also says they avoid essential oils with sustainability issues, though they don’t say which ones. Their eco-friendly awareness extends to design as well. When making your first purchase, you’ll buy a concrete outer vessel that can be used again and again with refill candle inserts. The refill inserts are housed in aluminum that can be recycled after use. Made with American-grown soy wax, coconut wax, and plant extracts that burn without emitting any harmful toxins, candles by Grow Fragrance are incredibly fragrant and long-lasting.",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80",
    name: "Lights",
    description:
      "Lights contribute to a significant percentage of electricity use in your house. Replacing the incandescent light bulbs in your five most frequently used light fixtures with energy-efficient CFLs (compact fluorescent lamps) can significantly reduce home electricity use and save you money while simultaneously making a positive impact on climate change. If every household in the United States exchanged five light bulbs for CFLs, it would reduce greenhouse gas emissions as much as removing 10 million cars from the roads.",
    emissions: "",
    alternative: "",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Garbage",
    description:
      "When household garbage ends up in a landfill, it decomposes, producing greenhouse gases including methane. Sorting your trash and reducing overall garbage production in your home can cut the volume of waste that your family contributes to landfills. Reuse and recycle all appropriate materials -- recycling reduces overall energy use to produce goods. Composting organic waste sequesters nitrogen in a useful form instead of allowing it to escape into the atmosphere as methane.",
    emissions: "carbon-based particles,",
    alternative: "Re-using products",
    alterDesc:
      "A lot of these negative effects could be improved if humans slightly amended their behaviour. By managing waste in a way that it avoids landfill and reducing consumption by reusing products, we avoid the creation of unnecessary waste. Nevertheless, by separating and recycling the waste we do create, we could reduce the amount of waste ending up in landfill. The waste that remains would actually be burnt to create energy, meaning less waste or nothing at all is actually sent to landfill.Recycling and zero waste habits take time, but every individual action matters. Since waste is an inevitable bi-product of humans, it is important to start making changes, even by taking smaller steps toward change. Start with avoiding single-use items and choosing durable materials that can be used numerous times instead, ensuring less waste ends up in landfill.",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Plastic Product",
    description:
      "plastics originate as fossil fuels and emit greenhouse gases from cradle to grave. Oil, gas, and coal are the fossil-fuel building blocks of plastics. Natural gas and oil can be extracted from the earth through fracking. Companies drill wells into the ground until they hit a rock layer, then they turn 90 degrees and drill horizontally. Injecting sand, chemicals, or water breaks up the rock to release gas and oil, which are transported to other facilities via pipelines, trains, and trucks.",
    emissions: "CO2,Methane,Ethylene",
    alternative: "Re-use plastics as many times as possible",
    alterDesc:
      "Cutting emissions associated with plastics may require an all-of-the-above strategy: reducing waste, retaining materials by refurbishing or remanufacturing, and recycling. Under this type of circular business model, authors of the CIEL report say carbon dioxide emissions would decrease by 62 million metric tons per year.",
  },
];

router.get("/", (req, res) => {
  res.json({
    status: "ok",
  });
});

router.get("/objects", (req, res) => {
  res.json(api);
});

module.exports = router;
