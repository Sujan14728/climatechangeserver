const express = require("express");

const router = express.Router();

const api = [
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1591704951890-0862b2e98acb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
    name: "Glass bottles",
    description:
      "Most of us assume that a glass bottle is a more environmentally friendly choice for our drinks than plastic bottles. However, the production of glass calls for furnaces to operate at temperatures of over 1500 degrees Celsius, emitting greenhouse gases that include carbon dioxide, carbon monoxide, nitrogen oxides and sulphur oxides. And because they weigh more than their plastic alternatives, transporting glass bottles can produce even greater emissions. That said, if a glass bottle is reused enough times, it can have a smaller carbon footprint than a plastic bottle.",
    emissions: "CO2,Methane",
    alternative1: "Reusable glass bottles",
    alterDesc1:
      "These can be used multiple times, reducing the need for the production and disposal of single-use packaging.",
    alternative2: "Aluminum cans",
    alterDesc2:
      "Lightweight, easily recyclable and have a high recycling rate. They are also energy-efficient to produce and transport.",
    alternative3: "Paper-based packaging",
    alterDesc3:
      "This includes options such as paper cartons and boxes, which are made from renewable resources and can be easily recycled or composted.",
    alternative4: "Bioplastics",
    alterDesc4:
      "These are made from renewable materials such as corn starch, sugarcane, and cassava and are biodegradable or compostable.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1630459065645-549fe5a56db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Refrigerator",
    description:
      "With countries and companies under pressure to slash their contribution to climate change, the cooling industry is facing a radical overhaul to the way it produces and disposes of refrigerants. Over the past three decades, governments around the world have pledged to crack down on the potent climate-warming chemicals used as coolants, while companies have started seeking natural, less polluting alternatives. But environmental campaigners say changes must be made much faster if international climate goals are to be met.",
    emissions: "HFC ,HCFC, CFC",
    alternative1: "Absorption refrigeration",
    alterDesc1:
      "This type of refrigeration uses heat as the energy source, rather than electricity. It is often powered by natural gas or solar thermal energy, making it more energy-efficient than traditional electric refrigeration units.",
    alternative2: "Compression refrigeration",
    alterDesc2:
      "This type of refrigeration uses a compressor to pressurize refrigerant, which then cools the refrigeration unit. Compression refrigeration units that use natural refrigerants such as propane or ammonia are considered more environmentally friendly than those that use synthetic refrigerants like HFCs.",
    alternative3: "Passive cooling",
    alterDesc3:
      "This method uses natural ventilation and thermal mass to cool the space, eliminating the need for a refrigeration unit altogether. This is more effective in moderate climates.",
    alternative4: "Evaporative cooling",
    alterDesc4:
      "This method cools the air by passing it over water-moistened pads, which causes the water to evaporate and cool the air. This is more effective in hot and dry climates.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1536356915696-c6bf1c01da46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Adhesive tape",
    description:
      "Have you ever considered the environmental impact of the adhesive tape you use every time you wrap a present or pack up goods to return goods to the manufacturer? Tape that is made with synthetic resins and plastic film contribute to greenhouse gas emissions, and each application can really add up. Additionally, when the plastic film and synthetic residue are left on paper and cardboard, it can interfere with the recycling process, which can result in batches of recycling being diverted to general household waste. Some types of tape, such as masking tape, can be recycled and make a more sustainable alternative.",
    emissions: "CO2,other greenhouse gases",
    alternative1: "Reusable adhesive",
    alterDesc1:
      "This type of adhesive can be used multiple times and can be easily cleaned. An example of this is reusable Velcro fasteners.",
    alternative2: "Natural rubber",
    alterDesc2:
      "This type of adhesive is made from natural rubber, which is a renewable resource, and can be biodegraded.",
    alternative3: "Biodegradable adhesive",
    alterDesc3:
      "This type of adhesive is made from materials that can be broken down by microorganisms, reducing waste in landfills.",
    alternative4: "Water-soluble adhesive",
    alterDesc4:
      "This type of adhesive dissolves in water and can be easily cleaned up, making it a good choice for packaging and labeling applications.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Coffee",
    description:
      "Dolore ea fugiat irure consectetur non irure anim qui in reprehenderit quis. Ullamco excepteur dolore non labore laborum est cupidatat ipsum. Enim ex id fugiat anim minim excepteur labore Lorem ut. Esse qui officia commodo nostrud esse aliquip nostrud proident. Enim commodo do sit excepteur elit commodo. Ipsum incididunt ipsum exercitation ea consequat duis excepteur cillum. Nulla consequat duis exercitation sunt do esse elit ullamco.",
    emissions: "CO,CO2,Methane",
    alternative1: "Organic and fair trade coffee",
    alterDesc1:
      "Choosing coffee that is grown organically and purchased from fair trade sources can help to support sustainable farming practices and fair labor conditions.",
    alternative2: "Reusable coffee filters",
    alterDesc2:
      "Instead of using disposable paper filters, reusable metal or cloth filters can be used multiple times, reducing waste.",
    alternative3: "Recyclable coffee pods",
    alterDesc3:
      "Some companies now offer coffee pods that are made from biodegradable or compostable materials, making them easier to recycle than traditional plastic pods.",
    alternative4: "Coffeeless alternatives",
    alterDesc4:
      "Instead of coffee, you can try coffeeless alternatives such as chicory root, dandelion root, and barley coffee. These are caffeine-free and have less environmental impact.",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Tea bags",
    description:
      "Us Brits consume over 60 billion cups of tea each year, with 96% of tea drinkers choosing tea bags for their brew rather than tea leaves. However, many tea bags available in the shops contain polypropylene plastic, a sealing plastic, to keep them from falling apart. So, when you think you are doing your bit for the planet by putting your used tea bags in the food waste, because this plastic is not recyclable or biodegradable you are contaminating it. However, an increasing number of brands are turning to sustainable tea bags, so watch this space.",
    emissions: "Mercury, lead, arsenic, cadmium",
    alternative1: "Loose leaf tea",
    alterDesc1:
      "Instead of using tea bags, loose leaf tea can be brewed and stored in a container and then brewed in a infuser or strainer.",
    alternative2: "Compostable tea bags",
    alterDesc2:
      "Some companies now offer tea bags that are made from biodegradable materials such as paper or corn starch, which can be composted after use.",
    alternative3: "Reusable tea infusers",
    alterDesc3:
      "These can be filled with loose leaf tea and used multiple times, eliminating the need for disposable tea bags.",
    alternative4: "Tea balls",
    alterDesc4:
      "These are small metal or mesh infusers that can be filled with loose leaf tea and used multiple times.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Smart tech",
    description:
      "As with the data centres, electronic devices have a large carbon footprint. The contribution of IT and the electronics sector to climate change is a growing problem, with studies suggesting that the production and use of electronic devices will account for 14% of global greenhouse gas emissions by 2040. Like the devices themselves, the issue is complex, with emissions occurring throughout the, often very short, lifecycle of a product. Mining the natural resources for the materials used, multiple stages of manufacture, transportation and disposal all contribute significantly to the climate impact of a device. Using a device each day has a bigger impact on the environment than just manufacturing it. As mentioned before, a lot of energy is needed to run the data centres and infrastructure that allow you to make video calls, post selfies and stream TV.",
    emissions: "CO2,CO,SO2,NO2",
    alternative1: "Repair and upgrade",
    alterDesc1:
      "Instead of purchasing new devices, consider repairing or upgrading your existing ones.",
    alternative2: "Second-hand devices",
    alterDesc2:
      "Instead of buying new devices, consider purchasing pre-owned devices that are in good condition.",
    alternative3: "Durable devices",
    alterDesc3:
      "Look for devices that are built to last and have a longer lifespan, such as ruggedized smartphones and tablets.",
    alternative4: "Recycling",
    alterDesc4:
      "When it's time to dispose of your device, recycle it properly. This ensures that the materials are being used again and not polluting the environment.",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBnA9UIRqgca4lldc0cwey4mNnXSFKTFFVkWPIGhk&s",
    name: "Scented candles",
    description:
      "The UK government's 2019 Clean Air Strategy cited candles as a source of non-methane volatile organic compounds (NMVOCs), which can ultimately be bad for both the environment and your health by contributing to indoor pollution. Many scented candles contain paraffin wax, a by-product of crude oil, which means a burning candle emits fossil fuels. They can have wicks with cotton wrapped around metal which produces soot that is toxic to breathe. Overall, they affect air quality, have perfumes that emit chemicals, and carry excessive and often non-recyclable packaging.",
    emissions: "cancer-causing chemicals",
    alternative1: "Soy candles",
    alterDesc1:
      "These candles are made from soy wax, a renewable resource, and typically have a lower melting point than traditional wax candles, releasing less soot and pollutants into the air.",
    alternative2: "Beeswax candles",
    alterDesc2:
      "These candles are made from beeswax, which is a renewable and natural resource. They also emit negative ions when burning, which can help to purify the air.",
    alternative3: "Essential oil diffusers",
    alterDesc3:
      "These devices use water and essential oils to create a scented mist, rather than burning wax. They are also energy-efficient and do not release pollutants into the air.",
    alternative4: "Reed diffusers",
    alterDesc4:
      "Reed diffusers use natural reeds to disperse essential oils into the air. They do not require heat or electricity to work.",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80",
    name: "Incandescent Lights",
    description:
      "Lights contribute to a significant percentage of electricity use in your house. Replacing the incandescent light bulbs in your five most frequently used light fixtures with energy-efficient CFLs (compact fluorescent lamps) can significantly reduce home electricity use and save you money while simultaneously making a positive impact on climate change. If every household in the United States exchanged five light bulbs for CFLs, it would reduce greenhouse gas emissions as much as removing 10 million cars from the roads.",
    emissions: "Electromagnetic radiation,CO2",
    alternative1: "LED lights (Light Emitting Diode)",
    alterDesc1:
      "LED lights are highly energy efficient, long-lasting and produce very little heat. They are made of semiconductor materials that emit light when an electric current is passed through them. They are available in a variety of colors, sizes and shapes and are suitable for both indoor and outdoor use.",
    alternative2: "CFL lights (Compact Fluorescent Lamps):",
    alterDesc2:
      "CFLs are a type of fluorescent lamp that are smaller and more efficient than traditional fluorescent tubes. They use about 75% less energy than incandescent bulbs and last up to ten times longer. They come in a variety of colors, shapes, and sizes and are suitable for both indoor and outdoor use.",
    alternative3: "T5, T8, or T12 LED tube lights",
    alterDesc3:
      "LED tube lights are a direct replacement for traditional T5, T8, or T12 fluorescent tube lights. They are more energy efficient and have a longer lifespan. They also do not contain harmful chemicals such as mercury.",
    alternative4: "Induction lamps",
    alterDesc4:
      "Induction lamps are similar to fluorescent lamps but use electromagnetic induction to excite the gas instead of a traditional electrical current. They are more energy efficient and have a longer lifespan than traditional incandescent or fluorescent lamps.",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Garbage",
    description:
      "When household garbage ends up in a landfill, it decomposes, producing greenhouse gases including methane. Sorting your trash and reducing overall garbage production in your home can cut the volume of waste that your family contributes to landfills. Reuse and recycle all appropriate materials -- recycling reduces overall energy use to produce goods. Composting organic waste sequesters nitrogen in a useful form instead of allowing it to escape into the atmosphere as methane.",
    emissions: "carbon-based particles,",
    alternative1: "Reducing waste",
    alterDesc1:
      "This includes practices such as buying products with minimal packaging, choosing products made from sustainable materials, and avoiding single-use items.",
    alternative2: "Reusing materials",
    alterDesc2:
      "This includes practices such as repurposing items for a different use, donating usable items to others, and repairing broken items instead of throwing them away.",
    alternative3: "Composting",
    alterDesc3:
      "This involves breaking down organic materials such as food scraps and yard waste into a nutrient-rich soil amendment that can be used in gardening and agriculture.",
    alternative4: "Recycling",
    alterDesc4:
      "This involves processing materials such as paper, plastic, metal, and glass so they can be used to make new products.",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1617303331806-3d6b58e03241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Plastic Product",
    description:
      "plastics originate as fossil fuels and emit greenhouse gases from cradle to grave. Oil, gas, and coal are the fossil-fuel building blocks of plastics. Natural gas and oil can be extracted from the earth through fracking. Companies drill wells into the ground until they hit a rock layer, then they turn 90 degrees and drill horizontally. Injecting sand, chemicals, or water breaks up the rock to release gas and oil, which are transported to other facilities via pipelines, trains, and trucks.",
    emissions: "CO2,Methane,Ethylene",
    alternative1: "Glass",
    alterDesc1:
      "Glass bottles and jars can be used instead of plastic containers for food and drink storage.",
    alternative2: "Metal",
    alterDesc2:
      " Metal containers such as aluminum cans and steel cans can replace plastic bottles and cans.",
    alternative3: "Paper",
    alterDesc3:
      "Paper bags, cardboard boxes and biodegradable paper packaging can replace plastic bags, packaging and containers.",
    alternative4: "Natural fibers",
    alterDesc4:
      " Products made from natural fibers such as cotton, linen and jute can replace plastic bags and packaging.",
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
