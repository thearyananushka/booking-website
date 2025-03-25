
const venuesData = [
    { id: 1, name: "The Vishwanath Farms", rating: 4.4, reviews: 17, location: "Patna", type: "Banquet Halls, Marriage Garden", vegPrice: "₹1,200", nonVegPrice: "₹1,400", capacity: "100-10000 pax", rooms: "50 Rooms", image: "https://media.istockphoto.com/id/914851676/photo/served-table-hall-for-banquets-and-weddings.webp?a=1&b=1&s=612x612&w=0&k=20&c=MG2duicl_hkjefLPwFVsSE_g_DgmtH9MCvPwgZ5AA0M=", features: ["Indoor", "Outdoor", "Poolside", "Inhouse catering only", "Inhouse decor"], badge: "Handpicked" },


    { id: 2, name: "Usha Resort", rating: 4.9, reviews: 7, location: "Patna", type: "Banquet Halls, Marriage Garden", vegPrice: "₹999", nonVegPrice: "₹1,199", capacity: "450-2000 pax", rooms: "12 Rooms", image: "https://media.istockphoto.com/id/171259492/photo/wedding-reception.webp?a=1&b=1&s=612x612&w=0&k=20&c=-2rqALUeMbqnyhewb4tZ8WsjPinmToewhDQFmGUC5QU=", features: ["Indoor", "Outdoor", "Poolside", "+6 more"], badge: "Handpicked" },


    { id: 3, name: "Secret Medows", rating: 5.0, reviews: 1, location: "Patna", type: "Banquet Halls, Marriage Garden", vegPrice: "₹999", nonVegPrice: "₹1,200", capacity: "300-1000 pax", rooms: "6 Rooms", image: "https://images.unsplash.com/photo-1607128295148-ec1ddc314455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlZGRpbmclMjBoYWxsfGVufDB8fDB8fHww", features: ["Indoor", "Outdoor", "+5 more"], badge: "Handpicked" },


    { id: 4, name: "Royal Palace Banquets", rating: 4.5, reviews: 30, location: "Patna", type: "Marriage Garden, Banquet Halls", vegPrice: "₹1,500", nonVegPrice: "₹1,700", capacity: "200-1500 pax", rooms: "25 Rooms", image: "https://media.istockphoto.com/id/157316172/photo/wedding-reception.webp?a=1&b=1&s=612x612&w=0&k=20&c=_vTMtQj8m8yVAFJaUf9916ajqOBT5_AAu1-xDq_1F6Q=", features: ["Indoor", "Outdoor", "Catering", "Inhouse decor"], badge: "Popular" },


    { id: 5, name: "Sunset Resort", rating: 4.7, reviews: 15, location: "Patna", type: "Marriage Garden, Resort", vegPrice: "₹1,000", nonVegPrice: "₹1,200", capacity: "500-2000 pax", rooms: "15 Rooms", image: "https://media.istockphoto.com/id/1127143204/photo/a-table-in-the-banquet-room.jpg?s=612x612&w=0&k=20&c=lgHwXwo_YZ2p4UuzrL4kGHw-DaMcW3gSSaBflx_oSoE=", features: ["Outdoor", "Indoor", "Poolside", "Live Music"], badge: "Popular" },


    { id: 6, name: "Green Meadows", rating: 4.8, reviews: 8, location: "Patna", type: "Banquet Halls", vegPrice: "₹1,100", nonVegPrice: "₹1,300", capacity: "200-1200 pax", rooms: "10 Rooms", image: "https://media.istockphoto.com/id/1210359013/photo/wedding-cake-in-wedding-ceremony-in-hall.jpg?s=612x612&w=0&k=20&c=Rq2PYvKcLaXhIXb3gGxOokL6f_N0GJ67xdmYgQa3-h0=", features: ["Indoor", "Outdoor", "Inhouse catering"], badge: "Handpicked" },


    { id: 7, name: "Jewel Banquets", rating: 4.3, reviews: 12, location: "Patna", type: "Marriage Garden, Banquet Halls", vegPrice: "₹1,200", nonVegPrice: "₹1,400", capacity: "300-1000 pax", rooms: "8 Rooms", image: "https://media.istockphoto.com/id/478317177/photo/wedding-banquet.jpg?s=612x612&w=0&k=20&c=bjjZCcLc3N7m1H63Ovfg6U4LURaXSFE-lr1MBXJqON4=", features: ["Indoor", "Outdoor", "Catering", "Bar"], badge: "Popular" },


    { id: 8, name: "Moonlight Resort", rating: 4.6, reviews: 10, location: "Patna", type: "Banquet Halls, Marriage Garden", vegPrice: "₹1,000", nonVegPrice: "₹1,200", capacity: "500-2000 pax", rooms: "20 Rooms", image: "https://media.istockphoto.com/id/619639580/photo/an-image-of-tables-setting-at-a-luxury-wedding-hall.jpg?s=612x612&w=0&k=20&c=HSnaro1SYeGL6d_cc3Vmwh9uxcn7TlWRCGtAgMpofEk=", features: ["Indoor", "Outdoor", "Poolside", "Inhouse decor"], badge: "Handpicked" },


    { id: 9, name: "Heritage Palace", rating: 4.9, reviews: 25, location: "Patna", type: "Banquet Halls", vegPrice: "₹1,300", nonVegPrice: "₹1,500", capacity: "100-2000 pax", rooms: "18 Rooms", image: "https://images.unsplash.com/photo-1716534133704-5a5c2a9c7512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhlcml0YWdlJTIwUGFsYWNlfGVufDB8fDB8fHww", features: ["Indoor", "Outdoor", "Catering", "Inhouse decor"], badge: "Popular" },


    { id: 10, name: "Crystal Palace", rating: 5.0, reviews: 35, location: "Patna", type: "Banquet Halls, Resort", vegPrice: "₹1,400", nonVegPrice: "₹1,600", capacity: "500-3000 pax", rooms: "30 Rooms", image: "https://media.istockphoto.com/id/583736178/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.jpg?s=612x612&w=0&k=20&c=DpI0y1oY_oxsOWvE88WyfwqvgGpruvDhSpKk9OjFAcY=", features: ["Indoor", "Outdoor", "Poolside", "Catering"], badge: "Handpicked" },


    { id: 11, name: "Silver Moon", rating: 4.8, reviews: 13, location: "Patna", type: "Marriage Garden, Banquet Halls", vegPrice: "₹1,100", nonVegPrice: "₹1,300", capacity: "200-1500 pax", rooms: "10 Rooms", image: "https://media.istockphoto.com/id/178176834/photo/wedding-reception-hall-table-setting.jpg?s=612x612&w=0&k=20&c=1qNfG6qme9NvGjk5kW_t1ghReNG-Je_OwOlJJmbaGcc=", features: ["Indoor", "Outdoor", "Inhouse catering", "+5 more"], badge: "Popular" },


    { id: 12, name: "Elite Garden", rating: 4.7, reviews: 9, location: "Patna", type: "Banquet Halls, Garden", vegPrice: "₹1,250", nonVegPrice: "₹1,450", capacity: "500-1000 pax", rooms: "12 Rooms", image: "https://media.istockphoto.com/id/584573082/photo/wedding-hall-or-other-function-facility-set-for-fine-dining.jpg?s=612x612&w=0&k=20&c=Ox9T0JIeGaCXPs_EEoAy5Uc98mY_kCnP9pTz06tb6iI=", features: ["Indoor", "Outdoor", "Catering"], badge: "Popular" },


    { id: 13, name: "Lush Garden Resort", rating: 4.2, reviews: 14, location: "Patna", type: "Banquet Halls", vegPrice: "₹1,100", nonVegPrice: "₹1,300", capacity: "200-1500 pax", rooms: "8 Rooms", image: "https://media.istockphoto.com/id/936194186/photo/table-dinner-set-for-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=K_vMokos7oUhGtVMB5sS7aI8jnJMvb00rQUDBimMMXw=", features: ["Indoor", "Outdoor", "Inhouse catering"], badge: "Handpicked" },


    { id: 14, name: "Golden Sands Resort", rating: 4.3, reviews: 10, location: "Patna", type: "Marriage Garden, Resort", vegPrice: "₹1,300", nonVegPrice: "₹1,500", capacity: "300-1500 pax", rooms: "20 Rooms", image: "https://media.istockphoto.com/id/1211552774/photo/a-composition-of-flowers-is-on-a-festive-table-at-the-wedding-banquet-hall-serving-guests.jpg?s=612x612&w=0&k=20&c=yqnMldVk-4_fQKYu4e1TXWrHg04MDdU15-tmbzxT47s=", features: ["Indoor", "Outdoor", "Catering", "Live Band"], badge: "Handpicked" },


    { id: 15, name: "Dream Palace", rating: 4.6, reviews: 22, location: "Patna", type: "Banquet Halls, Garden", vegPrice: "₹1,500", nonVegPrice: "₹1,700", capacity: "500-2000 pax", rooms: "25 Rooms", image: "https://media.istockphoto.com/id/498080343/photo/banquet-hall-decorated-for-special-occasion.jpg?s=612x612&w=0&k=20&c=NCjssHxSKTPctuXGT7PgXHp2YKiSMWLfZB71wiehSPw=", features: ["Indoor", "Outdoor", "Inhouse catering"], badge: "Popular" },


    { id: 16, name: "Majestic Garden", rating: 4.7, reviews: 16, location: "Patna", type: "Marriage Garden, Banquet Halls", vegPrice: "₹1,000", nonVegPrice: "₹1,200", capacity: "100-1500 pax", rooms: "8 Rooms", image: "https://media.istockphoto.com/id/1133774621/photo/luxury-elegant-wedding-reception-table-arrangement-floral-centerpiece.jpg?s=612x612&w=0&k=20&c=djZO7yO4KNZ2ZOKKxY3EmVTfc2MuJfPHVkATPl7KUXM=", features: ["Indoor", "Outdoor", "Inhouse decor"], badge: "Handpicked" },


    { id: 17, name: "Royal Orchid Banquets", rating: 4.8, reviews: 18, location: "Patna", type: "Banquet Halls", vegPrice: "₹1,400", nonVegPrice: "₹1,600", capacity: "200-1000 pax", rooms: "15 Rooms", image: "https://media.istockphoto.com/id/453852153/photo/wedding-reception-hall-table-setting.jpg?s=612x612&w=0&k=20&c=tcNWQZOCGcfL693MPWKj5kwPbzfvNUP34-2jdzQ48-Q=", features: ["Indoor", "Outdoor", "Catering", "Inhouse decor"], badge: "Handpicked" },


    { id: 18, name: "Moon Garden Resort", rating: 4.9, reviews: 12, location: "Patna", type: "Banquet Halls, Marriage Garden", vegPrice: "₹1,000", nonVegPrice: "₹1,200", capacity: "100-2000 pax", rooms: "10 Rooms", image: "https://media.istockphoto.com/id/1192282894/photo/large-banquet-hall-during-the-wedding-celebration-decorated-with-decorative-elements-and-a.jpg?s=612x612&w=0&k=20&c=qGCW5aJsZEyuS1I6cZvwsl5DYGNukqZmQN3Z1r5FIVo=", features: ["Indoor", "Outdoor", "Poolside"], badge: "Popular" },


    { id: 19, name: "Sapphire Wedding Hall", rating: 4.2, reviews: 20, location: "Patna", type: "Marriage Garden", vegPrice: "₹1,250", nonVegPrice: "₹1,450", capacity: "500-2000 pax", rooms: "30 Rooms", image: "https://media.istockphoto.com/id/182658742/photo/fish-and-flowers.jpg?s=612x612&w=0&k=20&c=O6a--2RXblVPg1f2mdKZxFoPcnac5WK1wTSV5Su4ge4=", features: ["Indoor", "Outdoor", "Inhouse catering"], badge: "Popular" },


    { id: 20, name: "Venus Garden", rating: 4.4, reviews: 9, location: "Patna", type: "Banquet Halls", vegPrice: "₹1,100", nonVegPrice: "₹1,200", capacity: "300-1000 pax", rooms: "15 Rooms", image: "https://media.istockphoto.com/id/1466333339/photo/view-of-flower-bouquet-and-glasses-of-water-arrangements-on-table-in-wedding-party.jpg?s=612x612&w=0&k=20&c=4hS8jOQow6FOGugTs3vatgkyWlIQfEQDs-BmUZJWQUs=", features: ["Indoor", "Outdoor", "Poolside"], badge: "Handpicked" },


    { id: 21, name: "Crystal Banquets", rating: 4.5, reviews: 5, location: "Patna", type: "Marriage Garden", vegPrice: "₹1,100", nonVegPrice: "₹1,300", capacity: "400-1500 pax", rooms: "10 Rooms", image: "https://media.istockphoto.com/id/186870067/photo/wedding-reception.jpg?s=612x612&w=0&k=20&c=s0Q2bqxykYqKtKO07MsgcqG37M530s7FSVGwsXS0pLs=", features: ["Indoor", "Outdoor"], badge: "Popular" },


    { id: 22, name: "Sunrise Resort", rating: 4.8, reviews: 30, location: "Patna", type: "Banquet Halls", vegPrice: "₹1,200", nonVegPrice: "₹1,400", capacity: "1000-3000 pax", rooms: "35 Rooms", image: "https://media.istockphoto.com/id/182166821/photo/wedding-guest-table.jpg?s=612x612&w=0&k=20&c=Mliu2JUXHYA-M_FeKS80D0vOWskkqzWHBBp8BdYwESA=", features: ["Indoor", "Outdoor", "Inhouse catering"], badge: "Handpicked" },


    { id: 23, name: "River View Banquets", rating: 4.7, reviews: 10, location: "Patna", type: "Marriage Garden, Resort", vegPrice: "₹1,000", nonVegPrice: "₹1,200", capacity: "300-1500 pax", rooms: "12 Rooms", image: "https://media.istockphoto.com/id/1140339444/photo/luxury-restaurant-settings-for-wedding.jpg?s=612x612&w=0&k=20&c=bSKqHDp6RZk7MklvdQYKLCfIP_mb-E_5ncyVeztZphg=", features: ["Indoor", "Outdoor", "Catering"], badge: "Handpicked" },


    { id: 24, name: "Crystal Palace Resort", rating: 5.0, reviews: 5, location: "Patna", type: "Banquet Halls", vegPrice: "₹1,500", nonVegPrice: "₹1,700", capacity: "200-1000 pax", rooms: "8 Rooms", image: "https://media.istockphoto.com/id/1192752555/photo/luxurious-high-tent-decorated-for-wedding-celebration.jpg?s=612x612&w=0&k=20&c=XCkM81DeER83SVYvXdDDSRfefZwip4qJey7q_yKgxHI=", features: ["Indoor", "Outdoor"], badge: "Popular" },


    { id: 25, name: "Regal Palace Banquets", rating: 4.3, reviews: 12, location: "Patna", type: "Marriage Garden", vegPrice: "₹1,300", nonVegPrice: "₹1,500", capacity: "200-1500 pax", rooms: "18 Rooms", image: "https://media.istockphoto.com/id/157313050/photo/wedding-hall.jpg?s=612x612&w=0&k=20&c=JAovbrvoBUuZN7koWMSsxLVr8PNnWbq4xmnpkrGEmbg=", features: ["Indoor", "Outdoor", "Catering", "+5 more"], badge: "Handpicked" },


    { id: 26, name: "Golden Gardens", rating: 4.6, reviews: 14, location: "Patna", type: "Banquet Halls", vegPrice: "₹1,200", nonVegPrice: "₹1,400", capacity: "300-1000 pax", rooms: "20 Rooms", image: "https://media.istockphoto.com/id/486993238/photo/interior-of-a-wedding-tent-decoration-ready-for-guests.jpg?s=612x612&w=0&k=20&c=Rco782IaCKFSr409we4GPy01-vc4taHweUuuFJJbegk=", features: ["Indoor", "Outdoor", "Inhouse decor"], badge: "Popular" },


    { id: 27, name: "Silver Palm Resort", rating: 4.2, reviews: 8, location: "Patna", type: "Marriage Garden", vegPrice: "₹1,100", nonVegPrice: "₹1,300", capacity: "200-1000 pax", rooms: "12 Rooms", image: "https://media.istockphoto.com/id/831024514/photo/beautifully-decorated-room-with-covered-tables-with-flowers-in-the-restaurant-for-the.jpg?s=612x612&w=0&k=20&c=koc76kAG_pB9dEMk_Ec0vpgFlzlG8GsyP_kkcnh4viE=", features: ["Indoor", "Outdoor", "Inhouse catering"], badge: "Handpicked" },


    { id: 28, name: "Twilight Palace", rating: 4.9, reviews: 30, location: "Patna", type: "Banquet Halls", vegPrice: "₹1,300", nonVegPrice: "₹1,500", capacity: "400-2000 pax", rooms: "25 Rooms", image: "https://media.istockphoto.com/id/465151004/photo/banquet-table.jpg?s=612x612&w=0&k=20&c=6g74EaIIfdQVcpiDBo9oKPAdYKfkMR8yAgehzQJTAZ4=", features: ["Indoor", "Outdoor", "Poolside"], badge: "Popular" },


    { id: 29, name: "Starlight Banquets", rating: 4.4, reviews: 10, location: "Patna", type: "Banquet Halls", vegPrice: "₹1,000", nonVegPrice: "₹1,200", capacity: "100-1000 pax", rooms: "10 Rooms", image: "https://media.istockphoto.com/id/515522898/photo/restaurant-event-banquet-wedding-celebration.jpg?s=612x612&w=0&k=20&c=oKs7p_BbvxBuqLsMEyAbwruDtj7NYhM_5ohTcH3sV-0=", features: ["Indoor", "Outdoor"], badge: "Handpicked" },


    { id: 30, name: "Ocean Breeze Resort", rating: 4.7, reviews: 5, location: "Patna", type: "Resort", vegPrice: "₹1,200", nonVegPrice: "₹1,400", capacity: "500-2000 pax", rooms: "40 Rooms", image: "https://media.istockphoto.com/id/866987560/photo/decorations-at-the-restaurant.jpg?s=612x612&w=0&k=20&c=ppJomDHFOoUAebYYmrX_yWO-11bgUfl0_Eex3eBsknY=", features: ["Outdoor", "Indoor", "Poolside"], badge: "Handpicked" },
  ];
  
  export default venuesData;
  