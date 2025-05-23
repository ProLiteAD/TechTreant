const pathToImages = "/public/assets/images";

export const allItems = [
  {
    id: "1",
    name: "USB-C Charger",
    stars: 4,
    price: 4.99,
    oldPrice: 9.99,
    description: "A high-quality USB-C charger for fast charging.",
    tags: ["usb-c", "fast charging", "accessory"],
    image: [
      {
        color: "black",
        url: pathToImages+"/items/usb-c.jpg",
        alt: "Black USB-C Charger",
        attr: {
          name: "Adafruit Industries",
          url: "https://www.flickr.com/photos/adafruit/",
        },
      },
      {
        color: "white",
        url: pathToImages+"/items/usb-c2.jpg",
        alt: "White USB-C Charger",
        attr: {
          name: "Project Kei",
          url: "https://commons.wikimedia.org/wiki/File:Usb_type-c_plug_socket.jpg",
        },
      },
    ],
  },
  {
    id: "2",
    name: "Smartphone",
    stars: 3,
    price: 699.99,
    oldPrice: 849.99,
    description: "A high-quality smartphone with advanced features.",
    tags: ["smartphone", "mobile", "communication"],
    image: [
      {
        url: pathToImages+"/items/smartphone.jpg",
        alt: "Smartphone",
      },
    ],
  },
  {
    id: "4",
    name: "Smartwatch",
    stars: 2,
    price: 199.99,
    oldPrice: 249.99,
    description: "A stylish smartwatch with fitness tracking features.",
    tags: ["smartwatch", "wearable", "fitness"],
    image: [
      {
        color: "black",
        url: pathToImages+"/items/smartwatch.jpg",
        alt: "Smartwatch",
      },
    ],
  },
  {
    id: "5",
    name: "Tablet",
    stars: 4,
    price: 299.99,
    oldPrice: 349.99,
    description: "A versatile tablet for entertainment and productivity.",
    tags: ["tablet", "mobile", "productivity", "entertainment"],
    image: [
      {
        color: "black",
        url: pathToImages+"/items/tablet.jpg",
        alt: "Smart Tablet",
      },
    ],
  },
  {
    id: "6",
    name: "Headphones",
    stars: 4,
    price: 99.99,
    oldPrice: 129.99,
    description: "High-quality headphones for immersive audio experience.",
    tags: ["headphones", "wireless", "audio", "music"],
    image: [
      {
        color: "black",
        url: pathToImages+"/items/headphones.jpg",
        alt: "Black Wireless Headphones",
      },
      {
        color: "white",
        url: pathToImages+"/items/headphones2.jpg",
        alt: "White Wireless Headphones",
      },
      {
        color: "red",
        url: pathToImages+"/items/headphones3.jpg",
        alt: "Red Wireless Headphones",
      },
    ],
  },
  {
    id: "7",
    name: "Gaming Console",
    stars: 5,
    price: 199.99,
    oldPrice: 359.99,
    description: "A gaming console for the ultimate gaming experience.",
    tags: ["gaming", "console", "entertainment"],
    image: [
      {
        url: pathToImages+"/items/gaming-console.jpg",
        alt: "Black Gaming Console",
      },
    ],
  },
  {
    id: "8",
    name: "Wireless Router",
    stars: 4,
    price: 79.99,
    oldPrice: 99.99,
    description:
      "A high-speed wireless router for seamless internet connectivity.",
    tags: ["router", "internet", "connectivity"],
    image: [
      {
        url: pathToImages+"/items/router.jpg",
        alt: "Black Wireless Router",
      }
    ],
  },
  {
    id: "9",
    name: "Camera",
    stars: 4,
    price: 599.99,
    oldPrice: 699.99,
    description:
      "A professional-grade camera for capturing stunning photos.",
    tags: ["camera", "photography", "professional"],
    image: [
      {
        url: pathToImages+"/items/camera.jpg",
        alt: "Black Professional Camera",
      },
    ],
  },
  {
    id: "10",
    name: "Bluetooth Speaker",
    stars: 2,
    price: 59.99,
    oldPrice: 79.99,
    description: "A portable Bluetooth speaker for on-the-go music.",
    tags: ["speaker", "audio", "music", "portable", "bluetooth"],
    image: [
      {
        url: pathToImages+"/items/speaker.jpg",
        alt: "White Bluetooth Speaker",
      }
    ],
  },
  {
    id: "11",
    name: "External Hard Drive",
    stars: 3,
    price: 129.99,
    oldPrice: 149.99,
    description: "An external hard drive for storing large amounts of data.",
    tags: ["hard drive", "storage", "backup"],
    image: [
      {
        url: pathToImages+"/items/harddrive.jpg",
        alt: "Red External Hard Drive",
      }
    ],
  },
];
