const express = require("express");

const router = express.Router();

const api = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Glass bottles",
    description:
      "Most of us assume that a glass bottle is a more environmentally friendly choice for our drinks than plastic bottles. However, the production of glass calls for furnaces to operate at temperatures of over 1500 degrees Celsius, emitting greenhouse gases that include carbon dioxide, carbon monoxide, nitrogen oxides and sulphur oxides. And because they weigh more than their plastic alternatives, transporting glass bottles can produce even greater emissions. That said, if a glass bottle is reused enough times, it can have a smaller carbon footprint than a plastic bottle.",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Refrigerator",
    description:
      "With countries and companies under pressure to slash their contribution to climate change, the cooling industry is facing a radical overhaul to the way it produces and disposes of refrigerants. Over the past three decades, governments around the world have pledged to crack down on the potent climate-warming chemicals used as coolants, while companies have started seeking natural, less polluting alternatives. But environmental campaigners say changes must be made much faster if international climate goals are to be met.",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Adhesive tape",
    description:
      "Have you ever considered the environmental impact of the adhesive tape you use every time you wrap a present or pack up goods to return goods to the manufacturer? Tape that is made with synthetic resins and plastic film contribute to greenhouse gas emissions, and each application can really add up. Additionally, when the plastic film and synthetic residue are left on paper and cardboard, it can interfere with the recycling process, which can result in batches of recycling being diverted to general household waste. Some types of tape, such as masking tape, can be recycled and make a more sustainable alternative.",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Coffee",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Tea bags",
    description:
      "Us Brits consume over 60 billion cups of tea each year, with 96% of tea drinkers choosing tea bags for their brew rather than tea leaves. However, many tea bags available in the shops contain polypropylene plastic, a sealing plastic, to keep them from falling apart. So, when you think you are doing your bit for the planet by putting your used tea bags in the food waste, because this plastic is not recyclable or biodegradable you are contaminating it. However, an increasing number of brands are turning to sustainable tea bags, so watch this space.",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "The internet",
    description:
      "Did you know the internet has a bigger carbon footprint than air travel? Aside from the manufacturing and powering of products we use, one of the more surprising sources of carbon dioxide comes from processing data. The internet itself releases around 830 million tonnes of carbon dioxide annually. That’s 2% of the global carbon footprint. The main source of this is server farms, which are necessary since they store all the data we use on the internet, as they use a huge amount of energy to power and cool the equipment.",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Smart tech",
    description:
      "As with the data centres, electronic devices have a large carbon footprint. The contribution of IT and the electronics sector to climate change is a growing problem, with studies suggesting that the production and use of electronic devices will account for 14% of global greenhouse gas emissions by 2040. Like the devices themselves, the issue is complex, with emissions occurring throughout the, often very short, lifecycle of a product. Mining the natural resources for the materials used, multiple stages of manufacture, transportation and disposal all contribute significantly to the climate impact of a device. Using a device each day has a bigger impact on the environment than just manufacturing it. As mentioned before, a lot of energy is needed to run the data centres and infrastructure that allow you to make video calls, post selfies and stream TV.",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Scented candles",
    description:
      "The UK government’s 2019 Clean Air Strategy cited candles as a source of non-methane volatile organic compounds (NMVOCs), which can ultimately be bad for both the environment and your health by contributing to indoor pollution. Many scented candles contain paraffin wax, a by-product of crude oil, which means a burning candle emits fossil fuels. They can have wicks with cotton wrapped around metal which produces soot that is toxic to breathe. Overall, they affect air quality, have perfumes that emit chemicals, and carry excessive and often non-recyclable packaging.",
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Lights",
    description:
      "Lights contribute to a significant percentage of electricity use in your house. Replacing the incandescent light bulbs in your five most frequently used light fixtures with energy-efficient CFLs (compact fluorescent lamps) can significantly reduce home electricity use and save you money while simultaneously making a positive impact on climate change. If every household in the United States exchanged five light bulbs for CFLs, it would reduce greenhouse gas emissions as much as removing 10 million cars from the roads.",
  },
  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Lights",
    description:
      "Lights contribute to a significant percentage of electricity use in your house. Replacing the incandescent light bulbs in your five most frequently used light fixtures with energy-efficient CFLs (compact fluorescent lamps) can significantly reduce home electricity use and save you money while simultaneously making a positive impact on climate change. If every household in the United States exchanged five light bulbs for CFLs, it would reduce greenhouse gas emissions as much as removing 10 million cars from the roads.",
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
