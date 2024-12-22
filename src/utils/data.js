const newsData = [
  {
    id: 1,
    category: "News",
    title: "2025 Greetings from Le Brassus: 150 Years in the Making",
    description:
      "We are thrilled to share our warmest wishes through this year's festive and idea-filled greeting card!",
    image:
      "https://plus.unsplash.com/premium_photo-1723600956273-09b857bc40ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    category: "News",
    title: "A New Exhibition 'Shaping Materials' in Milan",
    description:
      "This new public exhibition will be held from 3 to 16 June 2024 in Milan.",
    image:
      "https://images.unsplash.com/photo-1719326040048-cbde3baa855e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    category: "News",
    title: "2024 Greetings from Le Brassus: A New Chapter Begins",
    description:
      "We wanted to share our best wishes with a greeting video starring our AP people and two special guests!",
    image:
      "https://images.unsplash.com/photo-1707669812580-4a6b2ce75f03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    category: "Savoir-Faire",
    title: "The Art of Watchmaking",
    description:
      "Discover the intricate details behind our unique craftsmanship.",
    image:
      "https://plus.unsplash.com/premium_photo-1671229456411-659ff6049231?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    category: "Savoir-Faire",
    title: "Mastering Timepieces: A Journey",
    description: "An exclusive look into the mastery of watchmaking.",
    image:
      "https://images.unsplash.com/photo-1722939393342-2fa890192851?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    category: "Savoir-Faire",
    title: "Savoir-Faire in Design",
    description: "Explore how design meets functionality in luxury watches.",
    image:
      "https://images.unsplash.com/photo-1709095891142-5ea93d110a3f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    category: "Art",
    title: "Art Meets Time",
    description: "A collaboration between renowned artists and watchmakers.",
    image:
      "https://plus.unsplash.com/premium_photo-1701091956254-8f24ea99a53b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    category: "Art",
    title: "Time as an Artistic Medium",
    description: "How time influences contemporary art.",
    image:
      "https://plus.unsplash.com/premium_photo-1673254928968-b6513f32d43b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    category: "Art",
    title: "Celebrating Creativity",
    description: "A celebration of creativity and time.",
    image:
      "https://images.unsplash.com/photo-1707263337151-6da26da038fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    category: "Music",
    title: "Symphony of Time",
    description: "A unique musical experience inspired by our craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1707263337151-6da26da038fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    category: "Music",
    title: "Time in Harmony",
    description: "Exploring the intersection of time and music.",
    image:
      "https://images.unsplash.com/photo-1710384959194-b2b3d5126e82?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    category: "Music",
    title: "Melody of Craftsmanship",
    description: "A concert series celebrating our heritage.",
    image:
      "https://images.unsplash.com/photo-1666512244128-a69c6d115dce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const watchData = [
  //Rolex
  {
    brandName: "Rolex",
    image:
      "https://www.aviandco.com/media/catalog/product/cache/bbbb4171a94368593b160a82627eb9d2/r/d/rd4007139.jpg",
    modelNumber: "RLX001",
    title: "Day-Date 40",
    description: "The Ultimate Prestige Watch",
    details: "40mm, 18k Gold",
  },
  {
    brandName: "Rolex",
    image:
      "https://www.officialwatches.com/cdn/shop/files/ATO503229_99088280-ca76-44ae-a2d7-b28782c4c4a2_600x.jpg?v=1730809711",
    modelNumber: "RLX002",
    title: "Submariner Date",
    description: "The Iconic Diver's Watch",
    details: "41mm, Oystersteel",
  },
  {
    brandName: "Rolex",
    image:
      "https://shine-watches.com/wp-content/uploads/2022/10/Rolex-GMT-Master-2-4-600x600.png",
    modelNumber: "RLX003",
    title: "GMT-Master II",
    description: "The Traveler’s Timepiece",
    details: "40mm, Oystersteel and Everose Gold",
  },
  {
    brandName: "Rolex",
    image:
      "https://exclusivelinesindia.com/uploads/rolex/watch-assets/watch_assets/upright_watches_assets/desktop/m226570-0001_drp-upright-bba-with-shadow.webp",
    modelNumber: "RLX004",
    title: "Explorer II",
    description: "Engineered for Adventure",
    details: "42mm, Oystersteel",
  },
  {
    brandName: "Rolex",
    image:
      "https://wristaficionado.com/cdn/shop/files/rolex-yacht-master-40-stainless-steel-rhodium-dial-126622-rolex-40271857221876_grande.jpg?v=1706693767",
    modelNumber: "RLX005",
    title: "Yacht-Master 40",
    description: "The Spirit of the Open Seas",
    details: "40mm, Oystersteel and Platinum",
  },
  {
    brandName: "Rolex",
    image:
      "https://lebrouges.in/cdn/shop/files/66cc9e16bf4b50.jpg?v=1724753810",
    modelNumber: "RLX006",
    title: "Cosmograph Daytona",
    description: "Born to Race",
    details: "40mm, 18k Yellow Gold",
  },
  {
    brandName: "Rolex",
    image:
      "https://www.prymtimewatches.com/cdn/shop/products/m126000-0007_Red-Colour_1_600x600_crop_center.jpg?v=1624056076",
    modelNumber: "RLX007",
    title: "Oyster Perpetual 36",
    description: "Pure and Elegant",
    details: "36mm, Oystersteel",
  },
  {
    brandName: "Rolex",
    image:
      "https://gamzoandco.com/cdn/shop/files/rolex-336935-0007-768x768_jpg_600x.webp?v=1723758627",
    modelNumber: "RLX008",
    title: "Sky-Dweller",
    description: "The Watch for World Travelers",
    details: "42mm, Everose Gold",
  },
  {
    brandName: "Rolex",
    image:
      "https://shine-watches.com/wp-content/uploads/2022/07/Rolex-Sea-Dweller-44-MM-Blue-Ref.-M126660-0002-600x600.png",
    modelNumber: "RLX009",
    title: "Sea-Dweller",
    description: "The Deep-Sea Diver’s Watch",
    details: "43mm, Oystersteel",
  },
  {
    brandName: "Rolex",
    image:
      "https://cdn2.ethoswatches.com/rolex/pub/media/catalog/product/cache/a68df29a9e2afb500a8d2ce09034894d/m/1/m126600-0002-drp-upright-bba-with-shadow.png",
    modelNumber: "RLX010",
    title: "Milgauss",
    description: "For Scientists and Engineers",
    details: "40mm, Oystersteel",
  },
  //Patek
  {
    brandName: "Patek Philippe",
    image:
      "https://ew-s3-image.s3.eu-west-1.amazonaws.com/media/2024/05/02/patek-philippe-nautilus-5726-1a-01416164850.png",
    modelNumber: "PP001",
    title: "Nautilus",
    description: "The Timeless Icon",
    details: "40mm, Stainless Steel",
  },
  {
    brandName: "Patek Philippe",
    image:
      "https://www.emperorwatchjewellery.com/sg/images/igallery/resized/1901-2000/5268-461G-001-1-1981-600-600-80-c.webp",
    modelNumber: "PP002",
    title: "Aquanaut",
    description: "Modern Sport Elegance",
    details: "42mm, Rose Gold",
  },
  {
    brandName: "Patek Philippe",
    image:
      "https://www.officialwatches.com/cdn/shop/files/ATO504901_525ed960-eb7e-4fd1-962e-e4c05f473cbd_600x.jpg?v=1730809575",
    modelNumber: "PP003",
    title: "Calatrava",
    description: "The Epitome of Classic Watches",
    details: "38mm, White Gold",
  },
  {
    brandName: "Patek Philippe",
    image:
      "https://www.emperorwatchjewellery.com/sg/images/igallery/resized/1601-1700/PP-5204G-001-1615-1600-1000-80.jpg",
    modelNumber: "PP004",
    title: "Grand Complications",
    description: "Innovative Masterpieces",
    details: "41mm, Platinum",
  },
  {
    brandName: "Patek Philippe",
    image:
      "https://www.officialwatches.com/cdn/shop/products/ATO502954_600x.jpg?v=1611679670",
    modelNumber: "PP005",
    title: "Complications Annual Calendar",
    description: "Perfect Calendar Precision",
    details: "40mm, Yellow Gold",
  },
  {
    brandName: "Patek Philippe",
    image:
      "https://jfarrenprice.com.au/cdn/shop/files/7300_201200A-011_20Front_20800x800_0f1d2388-6a77-410e-8ea3-087b82acbeb3.jpg?v=1725154385&width=600",
    modelNumber: "PP006",
    title: "Twenty~4 Automatic",
    description: "Designed for Modern Women",
    details: "36mm, Rose Gold",
  },
  {
    brandName: "Patek Philippe",
    image:
      "https://jfarrenprice.com.au/cdn/shop/files/5738_201R-001_20Image1_ac7cc666-26c2-4efb-a4c2-35f57acc463e.jpg?v=1725154478&width=600",
    modelNumber: "PP007",
    title: "Golden Ellipse",
    description: "Unconventional Luxury",
    details: "34mm, Blue Dial",
  },
  {
    brandName: "Patek Philippe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzhaO4gJmUCgGMMSsXEZ4nR_CtAQlligFOw&s",
    modelNumber: "PP008",
    title: "World Time",
    description: "For Global Travelers",
    details: "39.5mm, White Gold",
  },
  {
    brandName: "Patek Philippe",
    image:
      "https://www.officialwatches.com/cdn/shop/files/OW504171_600x.jpg?v=1730809634",
    modelNumber: "PP009",
    title: "Chronograph 5172G",
    description: "A Collector’s Dream",
    details: "41mm, White Gold",
  },
  {
    brandName: "Patek Philippe",
    image:
      "https://wristaficionado.com/cdn/shop/files/patek-philippe-grand-complications-5327g-001-perpetual-calendar-white-gold-blue-dial-2023-patek-philippe-40578960326900_grande.jpg?v=1706827490",
    modelNumber: "PP010",
    title: "Perpetual Calendar 5327G",
    description: "The Complexity of Time",
    details: "39mm, Yellow Gold",
  },

  //Hublot
  {
    brandName: "Hublot",
    image:
      "https://productimages.withfloats.com/tile/66cc5824991b945784276158.jpg",
    modelNumber: "HUB001",
    title: "Big Bang Unico",
    description: "Chronograph Masterpiece",
    details: "45mm, Titanium",
  },
  {
    brandName: "Hublot",
    image:
      "https://luxurytime.in/wp-content/uploads/2018/11/521.NX_.7071.LR_-600x600.jpg",
    modelNumber: "HUB002",
    title: "Classic Fusion",
    description: "Sleek and Timeless",
    details: "42mm, King Gold",
  },
  {
    brandName: "Hublot",
    image:
      "https://www.aviandco.com/media/catalog/product/cache/bbbb4171a94368593b160a82627eb9d2/s/t/stockhbsb07010__1_367.jpg",
    modelNumber: "HUB003",
    title: "Spirit of Big Bang",
    description: "A Modern Icon",
    details: "44mm, Sapphire Crystal",
  },
  {
    brandName: "Hublot",
    image:
      "https://diamondsourcenyc.com/cdn/shop/products/hublot-big-bang-sang-bleu-ii-king-gold-blue-ref-418-ox-5108-rx-mxm20-luxury-swiss-watches-951_600x.jpg?v=1645753978",
    modelNumber: "HUB004",
    title: "Big Bang Sang Bleu",
    description: "Artistic Fusion",
    details: "42mm, Ceramic Bezel",
  },
  {
    brandName: "Hublot",
    image:
      "https://www.hublot.com/sites/default/files/styles/watch_collection_1x/public/big-bang-mp-11-power-reserve-14-days-3d-carbon-45-mm-911.QD.0123.RX-soldier-shot.png?itok=x7pQQSe_",
    modelNumber: "HUB005",
    title: "MP-11 Power Reserve",
    description: "Mechanical Marvel",
    details: "45mm, Carbon Fiber",
  },
  {
    brandName: "Hublot",
    image:
      "https://www.officialwatches.com/cdn/shop/products/OW504224_600x.jpg?v=1665133523",
    modelNumber: "HUB006",
    title: "Big Bang Integral",
    description: "Integrated Bracelet",
    details: "42mm, Gold & Ceramic",
  },
  {
    brandName: "Hublot",
    image:
      "https://diamondsourcenyc.com/cdn/shop/products/hublot-big-bang-meca-10-king-gold-blue-ref-414-oi-5123-rx-luxury-swiss-watches-339_600x.jpg?v=1645753862",
    modelNumber: "HUB007",
    title: "Big Bang Meca-10",
    description: "Innovation at Heart",
    details: "45mm, Skeleton Dial",
  },
  {
    brandName: "Hublot",
    image:
      "https://www.lepage.fr/47313-medium_default/montre-hublot-classic-fusion-orlinski-automatique-cadran-noir-bracelet-titane-40-mm.jpg",
    modelNumber: "HUB008",
    title: "Classic Fusion Orlinski",
    description: "Art and Watchmaking",
    details: "40mm, Ceramic",
  },
  {
    brandName: "Hublot",
    image: "https://watchcraze.com.au/cdn/shop/files/Artboard4_970d7e86-3f4e-46cd-8c12-13ea2bc6f778_grande.jpg?v=1731431220",
    modelNumber: "HUB009",
    title: "Big Bang Ferrari",
    description: "Inspired by Speed",
    details: "45mm, Titanium & Sapphire",
  },
  {
    brandName: "Hublot",
    image: "https://chpremier.com/cdn/shop/products/hublot-big-bang-one-click-king-gold-diamonds-485ox1280rx1204-214065_grande.jpg?v=1643370530",
    modelNumber: "HUB010",
    title: "Big Bang One Click",
    description: "Versatility Redefined",
    details: "39mm, Diamond Bezel",
  },
  //ALL
  {
    brandName: "All",
    image:
      "https://www.watchcollector.ch/media/wysiwyg/441.NX.1171.RX_1_front_HUBLOT-Big-Bang-Unico-Titanium-42-mm-automatic-skeleton_2048-PSD-Export_5.png",
    modelNumber: "HUB001",
    title: "Big Bang Unico by Hublot",
    description: "Chronograph Masterpiece",
    details: "45mm, Titanium",
  },
  {
    brandName: "All",
    image:
      "https://watchcraze.com.au/cdn/shop/files/Artboard2_0a2eb534-dba3-42ed-b1ae-abe39a98ac16_grande.jpg?v=1721667868",
    modelNumber: "RLX002",
    title: "Submariner by Rolex",
    description: "The Iconic Diver's Watch",
    details: "40mm, Oystersteel",
  },
  {
    brandName: "All",
    image:
      "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw66802566/images/Titan/Catalog/1878KD03_1.jpg?sw=600&sh=600",
    modelNumber: "TIT003",
    title: "Edge by Titan",
    description: "Ultra-Slim Quartz",
    details: "39mm, Stainless Steel",
  },
  {
    brandName: "All",
    image:
      "https://www.omegawatches.com/media/catalog/product/o/m/omega-speedmaster-first-omega-in-space-co-axial-master-chronometer-chronograph-39-7-mm-31030405006001-watch-wrist-9820d4.png",
    modelNumber: "OME004",
    title: "Speedmaster by Omega",
    description: "Moonwatch Professional",
    details: "42mm, Sapphire Crystal",
  },
  {
    brandName: "All",
    image:
      "https://shine-watches.com/wp-content/uploads/2022/07/Tag-Heuer-Carrera-Calibre-17-600x600.png",
    modelNumber: "TAG005",
    title: "Carrera by TAG Heuer",
    description: "Classic Racing Chronograph",
    details: "44mm, Ceramic Bezel",
  },
  {
    brandName: "All",
    image:
      "https://luxurytime.in/wp-content/uploads/2023/08/AB0138241C1P1-1-Breitling-Watch-600x600.jpg",
    modelNumber: "BRE006",
    title: "Navitimer by Breitling",
    description: "Pilot's Chronograph",
    details: "43mm, Stainless Steel",
  },
  {
    brandName: "All",
    image:
      "https://zadok.com/wp-content/uploads/panerai-pam01370-1-1-600x600.jpg",
    modelNumber: "PAN007",
    title: "Luminor by Panerai",
    description: "Diver's Heritage Watch",
    details: "44mm, Brushed Titanium",
  },
  {
    brandName: "All",
    image:
      "https://artoftimeindia.com/cdn/shop/files/IW503701-1-Background-Removed_600x600_crop_center.png?v=1714375423",
    modelNumber: "IW008",
    title: "Portugieser by IWC",
    description: "Timeless Elegance",
    details: "40.4mm, Rose Gold",
  },
  {
    brandName: "All",
    image:
      "https://gandgtimepieces.com/cdn/shop/files/IMG-9526.jpg?v=1723568667",
    modelNumber: "RIC009",
    title: "RM 11-03 by Richard Mille",
    description: "Automatic Flyback Chronograph",
    details: "50mm, Carbon TPT",
  },
  {
    brandName: "All",
    image:
      "https://allwatches.com.sg/wp-content/uploads/2024/09/SPB297J1-600x600.jpg",
    modelNumber: "SEI010",
    title: "Prospex by Seiko",
    description: "Professional Diver's Watch",
    details: "42mm, Stainless Steel",
  },
  {
    brandName: "All",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8R7mDhreFvguoahiLfY1J_mo_WsXpuBSPng&s",
    modelNumber: "CAS011",
    title: "G-Shock by Casio",
    description: "Tough Solar Multiband 6",
    details: "48.5mm, Resin",
  },
  {
    brandName: "All",
    image:
      "https://ew-s3-image.s3.eu-west-1.amazonaws.com/media/2024/05/02/patek-philippe-nautilus-5726-1a-01416164850.png",
    modelNumber: "PP012",
    title: "Nautilus by Patek Philippe",
    description: "Elegant Sports Watch",
    details: "40mm, Rose Gold",
  },
  {
    brandName: "All",
    image:
      "https://luxurysouq.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/07/87.9001.670_79.r589.jpg.webp",
    modelNumber: "ZEN013",
    title: "Defy Classic by Zenith",
    description: "Skeleton Automatic Watch",
    details: "41mm, Titanium",
  },
  {
    brandName: "All",
    image:
      "https://content.thewosgroup.com/productimage/17310966/17310966_1.jpg?impolicy=hero&imwidth=700",
    modelNumber: "CAR014",
    title: "Santos de Cartier",
    description: "Iconic Square Case Design",
    details: "35mm, Yellow Gold",
  },
  {
    brandName: "All",
    image:
      "https://www.lepage.fr/27343-medium_default/tissot-t-touch-connect-solar-titanium-watch-titanium-bracelet-475-mm.jpg",
    modelNumber: "TIS015",
    title: "T-Touch by Tissot",
    description: "Smart Touch Screen Watch",
    details: "44mm, Titanium",
  },
  {
    brandName: "All",
    image:
      "https://artoftimeindia.com/cdn/shop/files/103188_001_cre_600x600_crop_center.png?v=1714965155",
    modelNumber: "BVL016",
    title: "Octo Finissimo by Bulgari",
    description: "Ultra-Thin Masterpiece",
    details: "40mm, Sandblasted Titanium",
  },
];

export { newsData, watchData };
