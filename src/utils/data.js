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
  {
    image:
      "https://www.watchcollector.ch/media/wysiwyg/441.NX.1171.RX_1_front_HUBLOT-Big-Bang-Unico-Titanium-42-mm-automatic-skeleton_2048-PSD-Export_5.png",
    modelNumber: "HUB001",
    title: "Big Bang Unico by Hublot",
    description: "Chronograph Masterpiece",
    details: "45mm, Titanium",
  },
  {
    image:
      "https://watchcraze.com.au/cdn/shop/files/Artboard2_0a2eb534-dba3-42ed-b1ae-abe39a98ac16_grande.jpg?v=1721667868",
    modelNumber: "RLX002",
    title: "Submariner by Rolex",
    description: "The Iconic Diver's Watch",
    details: "40mm, Oystersteel",
  },
  {
    image:
      "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw66802566/images/Titan/Catalog/1878KD03_1.jpg?sw=600&sh=600",
    modelNumber: "TIT003",
    title: "Edge by Titan",
    description: "Ultra-Slim Quartz",
    details: "39mm, Stainless Steel",
  },
  {
    image:
      "https://www.omegawatches.com/media/catalog/product/o/m/omega-speedmaster-first-omega-in-space-co-axial-master-chronometer-chronograph-39-7-mm-31030405006001-watch-wrist-9820d4.png",
    modelNumber: "OME004",
    title: "Speedmaster by Omega",
    description: "Moonwatch Professional",
    details: "42mm, Sapphire Crystal",
  },
  {
    image:
      "https://shine-watches.com/wp-content/uploads/2022/07/Tag-Heuer-Carrera-Calibre-17-600x600.png",
    modelNumber: "TAG005",
    title: "Carrera by TAG Heuer",
    description: "Classic Racing Chronograph",
    details: "44mm, Ceramic Bezel",
  },
  {
    image:
      "https://luxurytime.in/wp-content/uploads/2023/08/AB0138241C1P1-1-Breitling-Watch-600x600.jpg",
    modelNumber: "BRE006",
    title: "Navitimer by Breitling",
    description: "Pilot's Chronograph",
    details: "43mm, Stainless Steel",
  },
  {
    image:
      "https://zadok.com/wp-content/uploads/panerai-pam01370-1-1-600x600.jpg",
    modelNumber: "PAN007",
    title: "Luminor by Panerai",
    description: "Diver's Heritage Watch",
    details: "44mm, Brushed Titanium",
  },
  {
    image:
      "https://artoftimeindia.com/cdn/shop/files/IW503701-1-Background-Removed_600x600_crop_center.png?v=1714375423",
    modelNumber: "IW008",
    title: "Portugieser by IWC",
    description: "Timeless Elegance",
    details: "40.4mm, Rose Gold",
  },
  {
    image:
      "https://gandgtimepieces.com/cdn/shop/files/IMG-9526.jpg?v=1723568667",
    modelNumber: "RIC009",
    title: "RM 11-03 by Richard Mille",
    description: "Automatic Flyback Chronograph",
    details: "50mm, Carbon TPT",
  },
  {
    image:
      "https://allwatches.com.sg/wp-content/uploads/2024/09/SPB297J1-600x600.jpg",
    modelNumber: "SEI010",
    title: "Prospex by Seiko",
    description: "Professional Diver's Watch",
    details: "42mm, Stainless Steel",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8R7mDhreFvguoahiLfY1J_mo_WsXpuBSPng&s",
    modelNumber: "CAS011",
    title: "G-Shock by Casio",
    description: "Tough Solar Multiband 6",
    details: "48.5mm, Resin",
  },
  {
    image:
      "https://ew-s3-image.s3.eu-west-1.amazonaws.com/media/2024/05/02/patek-philippe-nautilus-5726-1a-01416164850.png",
    modelNumber: "PP012",
    title: "Nautilus by Patek Philippe",
    description: "Elegant Sports Watch",
    details: "40mm, Rose Gold",
  },
  {
    image:
      "https://luxurysouq.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/07/87.9001.670_79.r589.jpg.webp",
    modelNumber: "ZEN013",
    title: "Defy Classic by Zenith",
    description: "Skeleton Automatic Watch",
    details: "41mm, Titanium",
  },
  {
    image:
      "https://content.thewosgroup.com/productimage/17310966/17310966_1.jpg?impolicy=hero&imwidth=700",
    modelNumber: "CAR014",
    title: "Santos de Cartier",
    description: "Iconic Square Case Design",
    details: "35mm, Yellow Gold",
  },
  {
    image:
      "https://www.lepage.fr/27343-medium_default/tissot-t-touch-connect-solar-titanium-watch-titanium-bracelet-475-mm.jpg",
    modelNumber: "TIS015",
    title: "T-Touch by Tissot",
    description: "Smart Touch Screen Watch",
    details: "44mm, Titanium",
  },
  {
    image:
      "https://artoftimeindia.com/cdn/shop/files/103188_001_cre_600x600_crop_center.png?v=1714965155",
    modelNumber: "BVL016",
    title: "Octo Finissimo by Bulgari",
    description: "Ultra-Thin Masterpiece",
    details: "40mm, Sandblasted Titanium",
  },
];

export { newsData, watchData };
