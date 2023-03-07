const { db, User, Product, Order, OrderProduct } = require("../server/db");

const users = [
  {
    firstName: "Zelma",
    lastName: "Scotchmor",
    email: "ax@ax.com",
    password: "ax1234",
    address: "310 Delta Road. Perth Amboy, TX 29861.",
  },
  {
    firstName: "Antin",
    lastName: "Coplestone",
    email: "admin@admin.com",
    password: "admin1234",
    address: "135 Sesame Lane. Rowlett, DC 29443.",
    role: "admin",
  },
  {
    firstName: "Fiona",
    lastName: "Barock",
    email: "by@by.com",
    password: "by1234",
    address: "121 Delta Road. Garland, TX 48926.",
  },
  {
    firstName: "Casi",
    lastName: "Aspland",
    email: "caspland3@timesonline.co.uk",
    password: "ca1234",
    address: "226 Turner Lane. Princeton, SC 90561.",
  },
  {
    firstName: "Guillaume",
    lastName: "Hankin",
    email: "ghankin4@freewebs.com",
    password: "EUogWFrR3DTl",
    address: "107 Blackberry Road. Denton, OH 51159.",
  },
  {
    firstName: "Tam",
    lastName: "Stathers",
    email: "tstathers5@bloglovin.com",
    password: "KqDE7XmLBd8P",
    address: "408 Bruckner Street. Perth Amboy, DC 47158.",
  },
  {
    firstName: "Garwin",
    lastName: "Tolomei",
    email: "gtolomei6@aboutads.info",
    password: "VjVvHksz",
    address: "261 Driggs Lane. Corizon, NY 76255.",
  },
  {
    firstName: "Hayley",
    lastName: "Troubridge",
    email: "htroubridge7@time.com",
    password: "Qw0n5XsYQhIr",
    address: "240 Bruckner Lane. Denton, AK 70008.",
  },
  {
    firstName: "Bonnie",
    lastName: "Garnsworth",
    email: "bgarnsworth8@merriam-webster.com",
    password: "yIZBnsZ3fra0",
    address: "457 Tailor Way. Forest Hills, TX 31831.",
  },
  {
    firstName: "Aleksandr",
    lastName: "Voak",
    email: "avoak9@paypal.com",
    password: "ebAEfEu4ALW",
    address: "450 Turner Ave. Rowlett, MN 68289.",
  },
];

const products = [
  {
    name: "Purple Sedge",
    size: "L",
    price: 990,
    inCart: false,
    description:
      "Blue meets Red to give us these bitter tubers that have medicinal use in southeast Asia.",
    inventory: 14,
    img_URL:
      "https://cdn.shopify.com/s/files/1/0463/4574/8630/products/DSC_0816_medium.jpg?v=1639947020",
    type: "indoor",
  },
  {
    name: "Nevada Onion",
    size: "S",
    price: 430,
    inCart: true,
    description:
      "With LAYERED complexity, these nifty Nevadans can grow up to 25 flowers per stem.",
    inventory: 20,
    img_URL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/41667/small.jpg",
    type: "indoor",
  },
  {
    name: "Largeflower False Rosemary",
    size: "L",
    price: 1640,
    inCart: true,
    description:
      "Same taste, half the calories! The LFR is the minty remix of its namesake.",
    inventory: 14,
    img_URL: "https://static.inaturalist.org/photos/80199676/small.jpg",
    type: "indoor",
  },
  {
    name: "Hayfield Tarweed",
    size: "S",
    price: 1758,
    inCart: true,
    description:
      "Behold this thin, spindly West Coast daisy. A true California classic.",
    inventory: 20,
    img_URL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/159268253/small.jpg",
    type: "outdoor",
  },
  {
    name: "Painted Trillium",
    size: "L",
    price: 1337,
    inCart: true,
    description:
      "DO NOT EAT ANY PART OF PAINTED TRILLIUM. wildAdirondacks.org mentions a study that found PT bits to be poisonous.",
    inventory: 15,
    img_URL:
      "https://i0.wp.com/www.vianegativa.us/wp-content/uploads/2011/01/Jennifer-Schlick-Painted-Trillium.jpg",
    type: "outdoor",
  },
  {
    name: "Peace Lily",
    size: "L",
    price: 901,
    inCart: true,
    description:
      "This flowering tropical native will bring you all the tranquility, and then some",
    inventory: 18,
    img_URL:
      "https://i1.sndcdn.com/artworks-8Ij5HBCCVRP68ysL-9xF73Q-t240x240.jpg",
    type: "outdoor",
  },
  {
    name: "Havana Skullcap",
    size: "L",
    price: 1806,
    inCart: true,
    description:
      "Plant-world-seeds.com says: ​​Startlingly gentian-blue flower open on this bright, drought-tolerant gem that comes not just from the Havana area of Cuba but also the rocky pinelands of the Caribbean area, including South Florida. This dazzling blue Skullcap is a dependable choice for well-drained locations in full to part sun.",
    inventory: 17,
    img_URL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/BougainvilleaSpectabilis.JPG/240px-BougainvilleaSpectabilis.JPG",
    type: "indoor",
  },
  {
    name: "Small Skullcap",
    size: "L",
    price: 914,
    inCart: true,
    description:
      "Great in sunny rock gardens, the SSC stays short and has a long bloom period.",
    inventory: 16,
    img_URL: "https://live.staticflickr.com/8777/17203765200_38e003428d_m.jpg",
    type: "indoor",
  },
  {
    name: "Western Showy Aster",
    size: "S",
    price: 571,
    inCart: true,
    description:
      "This western Canadian sports both ray florets and disc florets.",
    inventory: 18,
    img_URL:
      "https://inaturalist-open-data.s3.amazonaws.com/photos/55730/small.jpg",
    type: "indoor",
  },
  {
    name: "Areca Palm",
    size: "L",
    price: 666,
    inCart: true,
    description:
      "An assertive blend of silver-green trunks and feather-shaped fronds shoot from this Caribbean palm.",
    inventory: 18,
    img_URL:
      "https://cdn.shopify.com/s/files/1/0339/3863/6939/products/download_3774bd5b-3ebd-4455-bbe7-9a90b01deda0_medium.jpg",
    type: "indoor",
  },
  {
    name: "Iowa Rim Lichen",
    size: "S",
    price: 541,
    inCart: false,
    description:
      "At first glance, IRL looks like green cordyceps a la THE LAST OF US. But, fret not – it’s just moss!",
    inventory: 17,
    img_URL:
      "https://mediablobbreastfeeding.blob.core.windows.net/cache/f/b/8/e/0/6/fb8e0614b37152b77c9648f7d688d406a217481e.webp",
    type: "indoor",
  },
  {
    name: "Narrowleaf Equallip Orchid",
    size: "M",
    price: 1194,
    inCart: false,
    description: "This orchid’s dazzling pink makes it an easy show-stopper.",
    inventory: 17,
    img_URL:
      "https://cdn.shopify.com/s/files/1/1116/9250/products/IrelandSet_HebrideanSpottedOrchid2_505_medium.jpg",
    type: "indoor",
  },
  {
    name: "White Bergamot",
    size: "S",
    price: 719,
    inCart: true,
    description:
      "A member of the mint family, White Bergamot can be used medicinally.m.",
    inventory: 15,
    img_URL: "https://static.inaturalist.org/photos/21682212/small.jpg",
    type: "indoor",
  },
  {
    name: "Rim Lichen",
    size: "L",
    price: 1574,
    inCart: true,
    description:
      "Much like the Iowa Rim Lichen, minus the adorable midwestern /Fargo/ accent.",
    inventory: 10,
    img_URL:
      "https://cdn.shopify.com/s/files/1/1419/7120/products/Ginger_Curcuma_Longa_Tumeric_1_.SHUT_240x.jpg",
    type: "outdoor",
  },
  {
    name: "Pothos",
    size: "S",
    price: 1537,
    inCart: true,
    description:
      "AKA Devil’s Ivy, this vine leaves a trail of heart-shaped leaves in its wake.",
    inventory: 12,
    img_URL:
      "https://cdn.shopify.com/s/files/1/0272/9662/8813/products/available-for-pickup-delivery-indoor-plants-pothos-golden-8-inch-hanging-basket-23761168728256_medium.jpg",
    type: "outdoor",
  },
  {
    name: "African Violet",
    size: "S",
    price: 417,
    inCart: false,
    description:
      "One simply cannot go wrong with the AV’s velvety leaves and bold, purple flowers.",
    inventory: 11,
    img_URL: "https://www.ourhouseplants.com/imgs-hub/african-violet-hub.jpg",
    type: "outdoor",
  },
  {
    name: "Oahu Pilo Kea",
    size: "S",
    price: 1151,
    inCart: true,
    description: "These perennial Hawaiian shrubs top out at 20’.",
    inventory: 19,
    img_URL:
      "https://www.gardendesign.com/pictures/images/240x240Exact_66x0/site_3/maranta-prayer-plant-maranta-leuconeura-shutterstock-com_16639.jpg",
    type: "outdoor",
  },
  {
    name: "Snake Plant",
    size: "L",
    price: 1656,
    inCart: false,
    description:
      "One of the hardiest species of houseplants, Dracaena trifasciata also goes by the name viper’s bowstring hemp.",
    inventory: 18,
    img_URL:
      "https://cdn.shopify.com/s/files/1/1419/7120/products/SansevieriaSnakePlantinaClassicWhitePot_ETGB-sqWeb_61556838-00ad-42e8-972b-bedfba881987_240x.jpg",
    type: "outdoor",
  },
  {
    name: "Fragrant Sage",
    size: "S",
    price: 517,
    inCart: true,
    description:
      "As its foolproof name suggests, this sage spinoff smells EXTRA nice.",
    inventory: 14,
    img_URL:
      "https://cdn.shopify.com/s/files/1/1419/7120/products/SalviaPatioDeepBlue_2__sqWeb_ETGB_240x.jpg",
    type: "outdoor",
  },
  {
    name: "Aloe Vera",
    size: "S",
    price: 96,
    inCart: false,
    description:
      "This hardly needs an introduction, but AV gel can treat sunburn AND heartburn. Who knew",
    inventory: 10,
    img_URL:
      "https://cdn.shopify.com/s/files/1/0873/8150/products/aloe-vera-potted-plant__0653978_pe708207_s5_medium.jpg",
    type: "indoor",
  },
  {
    name: "Corn Plant",
    size: "L",
    price: 310,
    inCart: false,
    description:
      "Not to be confused with ACTUAL corn, the CP is a slow grower who typically tops out at 4 - 6 feet when contained.",
    inventory: 15,
    img_URL:
      "https://cdn.shopify.com/s/files/1/0272/9662/8813/products/available-for-pickup-delivery-indoor-plants-dracaena-massangeana-cane-14-inch-pot-23504693231808_medium.jpg",
    type: "indoor",
  },
  {
    name: "Rubber Tree",
    size: "S",
    price: 919,
    inCart: false,
    description:
      " Figus elastica can hit 15 meters. That’s a whole lot of rubber tree!",
    inventory: 11,
    img_URL:
      "https://cdn.shopify.com/s/files/1/0357/2567/2492/products/Ficus-elastica-Melany-Rubber-Plant-Leaves_2000x_15cd9440-17bc-4253-8b99-20e8e1cd0b47_medium.jpg",
    type: "indoor",
  },
  {
    name: "English Ivy",
    size: "S",
    price: 1223,
    inCart: true,
    description:
      "The alliterative Hedera helix serves great as a ground cover /and/ as a climber, sometimes reaching heights of 80 feet.",
    inventory: 12,
    img_URL:
      "https://cdn.shopify.com/s/files/1/0357/2567/2492/products/pl2000011685_medium.jpg",
    type: "outdoor",
  },
  {
    name: "Cucumber",
    size: "L",
    price: 471,
    inCart: false,
    description:
      "Pickle them, drop them in a smoothie, slice them into discs and put them over your eyes at the spa… the possibilities are endless.",
    inventory: 14,
    img_URL:
      "https://cdn.shopify.com/s/files/1/0104/8100/8691/products/product_11245_large_7413f79b-7494-4323-a352-31bdc5dd9cff_medium.jpg",
    type: "outdoor",
  },
  {
    name: "Coffee",
    size: "S",
    price: 502,
    inCart: true,
    description:
      "Despite popular nomenclature, what you envision as a coffee “bean” is actually the seed of the plant. Typical yield is two seeds per fruit.",
    inventory: 10,
    img_URL:
      "https://cdn.shopify.com/s/files/1/2627/1860/files/what-is-caffeine-instant-coffee_medium.jpg",
    type: "outdoor",
  },
];

const orders = [
  {
    state: "cart",
    totalPrice: 288,
    shippingInfo: "295JerseyAve",
    paymentInfo: "949282",
    userId: 2,
  },
  {
    state: "completed",
    totalPrice: 1840,
    shippingInfo: "295JerseyAve",
    paymentInfo: "949282",
    userId: 2,
  },
  {
    state: "completed",
    totalPrice: 2320,
    shippingInfo: "295JerseyAve",
    paymentInfo: "949282",
    userId: 2,
  },

  {
    state: "completed",
    totalPrice: 646242,
    shippingInfo: "187 1st Ave",
    paymentInfo: "949282",
    userId: 1,
  },
  {
    state: "completed",
    totalPrice: 7090,
    shippingInfo: "333 33rd Street; Queens, NY 14959",
    paymentInfo: "949282",
    userId: 3,
  },
];

const orderProducts = [
  {
    orderId: 1,
    productId: 2,
    qty: 1,
    price: 288,
  },

  {
    orderId: 2,
    productId: 3,
    qty: 10,
    price: 288,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );

    await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );

    await Promise.all(
      orders.map((order) => {
        return Order.create(order);
      })
    );

    await Promise.all(
      orderProducts.map((orderProduct) => {
        return OrderProduct.create(orderProduct);
      })
    );

    // const canary = await OrderProduct.create(orderProducts[0]);
    // const dragonzord = await Order.create(orders[0]);

    // await canary.setOrder(dragonzord);

    console.log("Seeding success!");
    db.close();
  } catch (err) {
    console.error("Oh noes! Something went wrong! 667, script-->seed.JS");
    console.error(err);
    db.close();
  }
};

seed(); // if this is down here, then NO ONE should be importing
// this file! (if they do, they will trigger another seed)
