const { db, User, Product, Order, OrderProduct } = require("../server/db");

const users = [
  {
    firstName: "Zelma",
    lastName: "Scotchmor",
    email: "zscotchmor0@google.com.hk",
    password: "h93VUXnYr",
    address: "310 Delta Road. Perth Amboy, TX 29861.",
  },
  {
    firstName: "Antin",
    lastName: "Coplestone",
    email: "acoplestone1@liveinternet.ru",
    password: "p9VGrxP",
    address: "135 Sesame Lane. Rowlett, DC 29443.",
  },
  {
    firstName: "Fionnula",
    lastName: "Barock",
    email: "fbarock2@cloudflare.com",
    password: "8NHEdJXaeV3X",
    address: "121 Delta Road. Garland, TX 48926.",
  },
  {
    firstName: "Casi",
    lastName: "Aspland",
    email: "caspland3@timesonline.co.uk",
    password: "Fgv6it55n",
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
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
    type: "outdoor",
  },
  {
    name: "Peltate Dutchman's Pipe",
    size: "L",
    price: 901,
    inCart: true,
    description:
      "PDP will make a “vine” addition to your home!",
    inventory: 18,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "outdoor",
  },
  {
    name: "Havana Skullcap",
    size: "L",
    price: 1806,
    inCart: true,
    description:
      "Plant-world-seeds.com says: ​​Startlingly gentian-blue flower open on this bright, drought-tolerant gem that comes not just from the Havana area of Cuba but also the rocky pinelands of the Caribbean area, including South Florida. This dazzling blue "Skullcap" is a dependable choice for well-drained locations in full to part sun.",
    inventory: 17,
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
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
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "indoor",
  },
  {
    name: "Narrowleaf Equallip Orchid",
    size: "M",
    price: 1194,
    inCart: false,
    description:
      "This orchid’s dazzling pink makes it an easy show-stopper.",
    inventory: 17,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "outdoor",
  },
  {
    name: "Oahu Pilo Kea",
    size: "S",
    price: 1151,
    inCart: true,
    description:
      "These perennial Hawaiian shrubs top out at 20’.",
    inventory: 19,
    img_URL: "http://dummyimage.com/240x240.png/5fa2dd/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
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
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
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
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
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
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
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
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
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
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "outdoor",
  },
];

const orders = [
  {
    totalPrice: 800,
    shippingInfo: "295JerseyAve",
    paymentInfo: "949282",
    userId: 2,
  },
];

const orderProducts = [
  {
    qty: 300,
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

    /*    await Promise.all(
      orders.map((order) => {
        return Order.create(order);
      })
    );

    await Promise.all(
      orderProducts.map((orderProduct) => {
        return OrderProduct.create(orderProduct);
      })
    ); */

    const canary = await OrderProduct.create(orderProducts[0]);
    const dragonzord = await Order.create(orders[0]);

    await canary.setOrder(dragonzord);

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
