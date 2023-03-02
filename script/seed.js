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
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
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
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
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
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
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
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
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
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
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
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
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
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.",
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
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
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
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    inventory: 18,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "indoor",
  },
  {
    name: "Pallid Hoptree",
    size: "L",
    price: 666,
    inCart: true,
    description:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
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
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
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
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
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
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
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
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    inventory: 10,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "outdoor",
  },
  {
    name: "Bolander's Mule-ears",
    size: "S",
    price: 1537,
    inCart: true,
    description:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    inventory: 12,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "outdoor",
  },
  {
    name: "Eremocrinum",
    size: "S",
    price: 417,
    inCart: false,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
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
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    inventory: 19,
    img_URL: "http://dummyimage.com/240x240.png/5fa2dd/ffffff",
    type: "outdoor",
  },
  {
    name: "Grassland Silverpuffs",
    size: "L",
    price: 1656,
    inCart: false,
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
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
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    inventory: 14,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "outdoor",
  },
  {
    name: "Fort Mojave Buckwheat",
    size: "S",
    price: 96,
    inCart: false,
    description:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    inventory: 10,
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
    type: "indoor",
  },
  {
    name: "Cartilage Lichen",
    size: "L",
    price: 310,
    inCart: false,
    description:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    inventory: 15,
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
    type: "indoor",
  },
  {
    name: "Dense Logwood",
    size: "S",
    price: 919,
    inCart: false,
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    inventory: 11,
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
    type: "indoor",
  },
  {
    name: "Arctic Catchfly",
    size: "S",
    price: 1223,
    inCart: true,
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    inventory: 12,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "outdoor",
  },
  {
    name: "Apache Beardtongue",
    size: "L",
    price: 471,
    inCart: false,
    description:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    inventory: 14,
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
    type: "outdoor",
  },
  {
    name: "Darkwoods Violet",
    size: "S",
    price: 502,
    inCart: true,
    description:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    inventory: 10,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "outdoor",
  },
  {
    name: "Moldy Bread And Cheese",
    size: "L",
    price: 917,
    inCart: false,
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    inventory: 11,
    img_URL: "http://dummyimage.com/240x240.png/5fa2dd/ffffff",
    type: "outdoor",
  },
  {
    name: "Thread Lichen",
    size: "L",
    price: 1959,
    inCart: true,
    description:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    inventory: 12,
    img_URL: "http://dummyimage.com/240x240.png/5fa2dd/ffffff",
    type: "indoor",
  },
  {
    name: "Hawthorn",
    size: "S",
    price: 735,
    inCart: false,
    description:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    inventory: 15,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "indoor",
  },
  {
    name: "Groovestem Indian Plantain",
    size: "L",
    price: 657,
    inCart: true,
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    inventory: 18,
    img_URL: "http://dummyimage.com/240x240.png/5fa2dd/ffffff",
    type: "indoor",
  },
  {
    name: "Peninsular Pectocarya",
    size: "L",
    price: 646,
    inCart: false,
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    inventory: 11,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "indoor",
  },
  {
    name: "Sweet Mock Orange",
    size: "L",
    price: 1724,
    inCart: false,
    description:
      "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    inventory: 15,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "indoor",
  },
  {
    name: "Brittlebush",
    size: "L",
    price: 779,
    inCart: false,
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    inventory: 12,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "indoor",
  },
  {
    name: "Keystone Hawthorn",
    size: "S",
    price: 848,
    inCart: true,
    description:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    inventory: 14,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "outdoor",
  },
  {
    name: "Southern Arrowwood",
    size: "S",
    price: 591,
    inCart: false,
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    inventory: 19,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "outdoor",
  },
  {
    name: "Yellow Avalanche-lily",
    size: "L",
    price: 168,
    inCart: false,
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    inventory: 16,
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
    type: "outdoor",
  },
  {
    name: "Mexican Navelwort",
    size: "M",
    price: 1965,
    inCart: true,
    description:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    inventory: 18,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "indoor",
  },
  {
    name: "Jenner's Cynodontium Moss",
    size: "L",
    price: 1142,
    inCart: true,
    description:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    inventory: 10,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "indoor",
  },
  {
    name: "Protoparmelia Lichen",
    size: "M",
    price: 1623,
    inCart: true,
    description:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    inventory: 15,
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
    type: "indoor",
  },
  {
    name: "Colorado Feverfew",
    size: "L",
    price: 1450,
    inCart: true,
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    inventory: 20,
    img_URL: "http://dummyimage.com/240x240.png/5fa2dd/ffffff",
    type: "indoor",
  },
  {
    name: "Howell's Reedgrass",
    size: "S",
    price: 623,
    inCart: false,
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    inventory: 15,
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
    type: "outdoor",
  },
  {
    name: "Cardinal's-guard",
    size: "S",
    price: 118,
    inCart: false,
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    inventory: 11,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "outdoor",
  },
  {
    name: "Dracunculus",
    size: "S",
    price: 980,
    inCart: true,
    description:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    inventory: 17,
    img_URL: "http://dummyimage.com/240x240.png/5fa2dd/ffffff",
    type: "outdoor",
  },
  {
    name: "Florida Thoroughwort",
    size: "L",
    price: 1539,
    inCart: true,
    description:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    inventory: 10,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "outdoor",
  },
  {
    name: "Coastal Sage Scrub Oak",
    size: "L",
    price: 109,
    inCart: false,
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    inventory: 12,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "indoor",
  },
  {
    name: "Woodland Pinkroot",
    size: "S",
    price: 478,
    inCart: true,
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    inventory: 15,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "indoor",
  },
  {
    name: "Artocarpus",
    size: "L",
    price: 1408,
    inCart: false,
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    inventory: 20,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "indoor",
  },
  {
    name: "Shortawn Foxtail",
    size: "L",
    price: 1313,
    inCart: false,
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    inventory: 12,
    img_URL: "http://dummyimage.com/240x240.png/5fa2dd/ffffff",
    type: "indoor",
  },
  {
    name: "Rio Grande Twintip",
    size: "L",
    price: 789,
    inCart: true,
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    inventory: 18,
    img_URL: "http://dummyimage.com/240x240.png/cc0000/ffffff",
    type: "outdoor",
  },
  {
    name: "Common Cudweed",
    size: "S",
    price: 1180,
    inCart: false,
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    inventory: 19,
    img_URL: "http://dummyimage.com/240x240.png/dddddd/000000",
    type: "outdoor",
  },
  {
    name: "Santa Barbara Milkvetch",
    size: "L",
    price: 333,
    inCart: true,
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    inventory: 11,
    img_URL: "http://dummyimage.com/240x240.png/ff4444/ffffff",
    type: "outdoor",
  },
];

const orders = [
  {
    state: "cart",
    totalPrice: 800,
    shippingInfo: "295JerseyAve",
    paymentInfo: "949282",
  },
];

const orderProducts = [
  {
    count: 300,
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
