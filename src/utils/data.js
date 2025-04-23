// Restaurant data
export const restaurants = [
  // Indian Restaurants
  {
    id: 1,
    name: 'Curry House',
    cuisine: 'Indian',
    rating: 4.5,
    deliveryTime: 30,
    distance: 1.2,
    minOrder: 200,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 7,
    name: 'Spice Garden',
    cuisine: 'Indian',
    rating: 4.3,
    deliveryTime: 35,
    distance: 2.0,
    minOrder: 250,
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 8,
    name: 'Taj Mahal',
    cuisine: 'Indian',
    rating: 4.7,
    deliveryTime: 40,
    distance: 3.2,
    minOrder: 300,
    image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  
  // Italian Restaurants
  {
    id: 2,
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.2,
    deliveryTime: 25,
    distance: 0.8,
    minOrder: 150,
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 9,
    name: 'Pasta Palace',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: 30,
    distance: 1.3,
    minOrder: 200,
    image: 'https://images.unsplash.com/photo-1607331364404-8a982d29c06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 10,
    name: 'Little Italy',
    cuisine: 'Italian',
    rating: 4.6,
    deliveryTime: 35,
    distance: 1.7,
    minOrder: 250,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  
  // Japanese Restaurants
  {
    id: 3,
    name: 'Sushi Delight',
    cuisine: 'Japanese',
    rating: 4.7,
    deliveryTime: 40,
    distance: 2.1,
    minOrder: 300,
    image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 11,
    name: 'Tokyo Treats',
    cuisine: 'Japanese',
    rating: 4.4,
    deliveryTime: 35,
    distance: 2.5,
    minOrder: 250,
    image: 'https://images.unsplash.com/photo-1617196701537-7329482cc9fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 12,
    name: 'Ramen House',
    cuisine: 'Japanese',
    rating: 4.5,
    deliveryTime: 30,
    distance: 1.8,
    minOrder: 220,
    image: 'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  
  // Mexican Restaurants
  {
    id: 4,
    name: 'Taco Town',
    cuisine: 'Mexican',
    rating: 4.0,
    deliveryTime: 20,
    distance: 1.5,
    minOrder: 120,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 13,
    name: 'Guacamole Grill',
    cuisine: 'Mexican',
    rating: 4.2,
    deliveryTime: 25,
    distance: 1.9,
    minOrder: 150,
    image: 'https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 14,
    name: 'Burrito Bar',
    cuisine: 'Mexican',
    rating: 4.4,
    deliveryTime: 30,
    distance: 2.2,
    minOrder: 180,
    image: 'https://images.unsplash.com/photo-1560254060-7c68babe966c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  
  // Chinese Restaurants
  {
    id: 5,
    name: 'Golden Dragon',
    cuisine: 'Chinese',
    rating: 4.3,
    deliveryTime: 35,
    distance: 1.7,
    minOrder: 180,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 15,
    name: 'Wok & Roll',
    cuisine: 'Chinese',
    rating: 4.5,
    deliveryTime: 30,
    distance: 1.4,
    minOrder: 200,
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 16,
    name: 'Bamboo Garden',
    cuisine: 'Chinese',
    rating: 4.1,
    deliveryTime: 25,
    distance: 1.0,
    minOrder: 150,
    image: 'https://images.unsplash.com/photo-1590330813083-fc22d4b6a48c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  
  // American Restaurants
  {
    id: 6,
    name: 'Burger Bliss',
    cuisine: 'American',
    rating: 4.1,
    deliveryTime: 15,
    distance: 0.5,
    minOrder: 100,
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 17,
    name: 'Classic Diner',
    cuisine: 'American',
    rating: 4.4,
    deliveryTime: 20,
    distance: 1.2,
    minOrder: 150,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 18,
    name: 'BBQ Junction',
    cuisine: 'American',
    rating: 4.6,
    deliveryTime: 35,
    distance: 2.0,
    minOrder: 220,
    image: 'https://images.unsplash.com/photo-1502044861452-0c495b633ee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

// Menu items data
export const menuItems = [
  // INDIAN CUISINE
  // Curry House (Indian)
  {
    id: 101,
    restaurantId: 1,
    name: 'Butter Chicken',
    description: 'Tender chicken cooked in a rich tomato and butter sauce.',
    price: 280,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 102,
    restaurantId: 1,
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese cubes grilled to perfection.',
    price: 220,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 103,
    restaurantId: 1,
    name: 'Garlic Naan',
    description: 'Freshly baked flatbread with garlic flavor.',
    price: 60,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 104,
    restaurantId: 1,
    name: 'Gulab Jamun',
    description: 'Soft milk solids balls soaked in rose flavored sugar syrup.',
    price: 120,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1605197384465-b93a5e483bc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 105,
    restaurantId: 1,
    name: 'Chicken Biryani',
    description: 'Aromatic rice dish with tender chicken pieces and fragrant spices.',
    price: 320,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 106,
    restaurantId: 1,
    name: 'Vegetable Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas.',
    price: 90,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 107,
    restaurantId: 1,
    name: 'Dal Makhani',
    description: 'Creamy black lentils slow-cooked with butter and spices.',
    price: 180,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 108,
    restaurantId: 1,
    name: 'Malai Kofta',
    description: 'Vegetable and cheese dumplings in a creamy tomato sauce.',
    price: 240,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // Spice Garden (Indian)
  {
    id: 701,
    restaurantId: 7,
    name: 'Chicken Tikka Masala',
    description: 'Grilled chicken pieces in a spiced creamy tomato sauce.',
    price: 270,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 702,
    restaurantId: 7,
    name: 'Vegetable Pakora',
    description: 'Mixed vegetables dipped in chickpea batter and deep-fried.',
    price: 110,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 703,
    restaurantId: 7,
    name: 'Aloo Paratha',
    description: 'Whole wheat bread stuffed with spiced potatoes, served with yogurt.',
    price: 80,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1552332226-90f2604d064c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 704,
    restaurantId: 7,
    name: 'Palak Paneer',
    description: 'Cottage cheese cubes in a creamy spinach gravy.',
    price: 210,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 705,
    restaurantId: 7,
    name: 'Lamb Rogan Josh',
    description: 'Tender lamb pieces cooked in an aromatic Kashmiri spice blend.',
    price: 340,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 706,
    restaurantId: 7,
    name: 'Mango Lassi',
    description: 'Sweet and tangy yogurt drink blended with mango pulp.',
    price: 90,
    category: 'beverage',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 707,
    restaurantId: 7,
    name: 'Rasmalai',
    description: 'Soft cheese patties soaked in sweetened, thickened milk flavored with cardamom.',
    price: 150,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1598141426902-32963915e4cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // Taj Mahal (Indian)
  {
    id: 801,
    restaurantId: 8,
    name: 'Tandoori Chicken',
    description: 'Chicken marinated in yogurt and spices, roasted in a tandoor oven.',
    price: 290,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 802,
    restaurantId: 8,
    name: 'Prawn Curry',
    description: 'Succulent prawns cooked in a spicy coconut-based curry.',
    price: 350,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1631788012442-633280e5c3c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 803,
    restaurantId: 8,
    name: 'Vegetable Biryani',
    description: 'Fragrant rice cooked with mixed vegetables and aromatic spices.',
    price: 230,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 804,
    restaurantId: 8,
    name: 'Cheese Naan',
    description: 'Naan bread stuffed with melted cheese and herbs.',
    price: 90,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1617861892641-4cbc0810f590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 805,
    restaurantId: 8,
    name: 'Onion Bhaji',
    description: 'Crispy onion fritters spiced with turmeric and chili.',
    price: 100,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f7a16ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 806,
    restaurantId: 8,
    name: 'Chana Masala',
    description: 'Spicy chickpea curry cooked with tomatoes and spices.',
    price: 160,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 807,
    restaurantId: 8,
    name: 'Kheer',
    description: 'Rice pudding garnished with nuts and saffron.',
    price: 130,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1533321942807-08e4008b3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 808,
    restaurantId: 8,
    name: 'Masala Chai',
    description: 'Spiced tea brewed with milk and aromatic spices.',
    price: 60,
    category: 'beverage',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // ITALIAN CUISINE
  // Pizza Paradise (Italian)
  {
    id: 201,
    restaurantId: 2,
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella and fresh basil.',
    price: 250,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 202,
    restaurantId: 2,
    name: 'Pepperoni Pizza',
    description: 'Pizza topped with spicy pepperoni slices and cheese.',
    price: 300,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 203,
    restaurantId: 2,
    name: 'Spaghetti Carbonara',
    description: 'Pasta with creamy egg sauce, pancetta and parmesan cheese.',
    price: 220,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 204,
    restaurantId: 2,
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.',
    price: 180,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 205,
    restaurantId: 2,
    name: 'Quattro Formaggi Pizza',
    description: 'Four cheese pizza with mozzarella, gorgonzola, fontina, and parmesan.',
    price: 320,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 206,
    restaurantId: 2,
    name: 'Bruschetta',
    description: 'Toasted bread topped with tomatoes, garlic, basil, and olive oil.',
    price: 150,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 207,
    restaurantId: 2,
    name: 'Minestrone Soup',
    description: 'Hearty Italian vegetable soup with beans and pasta.',
    price: 160,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1547592180-915c50512f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 208,
    restaurantId: 2,
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice cooked with mushrooms and parmesan.',
    price: 240,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // Pasta Palace (Italian)
  {
    id: 901,
    restaurantId: 9,
    name: 'Fettuccine Alfredo',
    description: 'Ribbon pasta in a rich, creamy parmesan sauce.',
    price: 230,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023882c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 902,
    restaurantId: 9,
    name: 'Lasagna',
    description: 'Layers of pasta, ricotta, meat sauce, and melted cheese.',
    price: 280,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 903,
    restaurantId: 9,
    name: 'Penne Arrabbiata',
    description: 'Tube pasta in a spicy tomato sauce with garlic and red chili.',
    price: 210,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 904,
    restaurantId: 9,
    name: 'Gnocchi Gorgonzola',
    description: 'Potato dumplings in a creamy blue cheese sauce.',
    price: 250,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 905,
    restaurantId: 9,
    name: 'Caprese Salad',
    description: 'Fresh tomato, mozzarella, and basil salad with balsamic glaze.',
    price: 180,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1609167830220-7164aa360951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 906,
    restaurantId: 9,
    name: 'Garlic Bread',
    description: 'Toasted bread with garlic butter and herbs.',
    price: 120,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 907,
    restaurantId: 9,
    name: 'Panna Cotta',
    description: 'Creamy vanilla custard with berry compote.',
    price: 140,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1579302323954-0286792611ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // Little Italy (Italian)
  {
    id: 1001,
    restaurantId: 10,
    name: 'Ravioli',
    description: 'Pasta pillows filled with spinach and ricotta in tomato sauce.',
    price: 240,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1587740908075-9e245313d97a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1002,
    restaurantId: 10,
    name: 'Osso Buco',
    description: 'Slow-braised veal shanks with vegetables and gremolata.',
    price: 380,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1544968407-1a1467e9f025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1003,
    restaurantId: 10,
    name: 'Calzone',
    description: 'Folded pizza stuffed with mozzarella, ricotta, and ham.',
    price: 290,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628824851004-4e189576dee4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1004,
    restaurantId: 10,
    name: 'Antipasto Platter',
    description: 'Selection of cured meats, cheeses, olives, and marinated vegetables.',
    price: 320,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1626200950165-555ea9332e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1005,
    restaurantId: 10,
    name: 'Chicken Piccata',
    description: 'Tender chicken breast in a lemon-caper sauce with a side of spaghetti.',
    price: 260,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1006,
    restaurantId: 10,
    name: 'Seafood Linguine',
    description: 'Pasta with mixed seafood in a white wine and garlic sauce.',
    price: 310,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1007,
    restaurantId: 10,
    name: 'Cannoli',
    description: 'Crispy pastry tubes filled with sweet ricotta cream and chocolate chips.',
    price: 130,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1008,
    restaurantId: 10,
    name: 'Caprese Focaccia',
    description: 'Herb-infused flatbread topped with tomatoes, mozzarella, and basil.',
    price: 170,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // JAPANESE CUISINE
  // Sushi Delight (Japanese)
  {
    id: 301,
    restaurantId: 3,
    name: 'Salmon Nigiri (2 pcs)',
    description: 'Fresh salmon slices on top of seasoned rice.',
    price: 160,
    category: 'sushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 302,
    restaurantId: 3,
    name: 'California Roll (8 pcs)',
    description: 'Crab, avocado and cucumber roll topped with tobiko.',
    price: 220,
    category: 'sushi',
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 303,
    restaurantId: 3,
    name: 'Spicy Tuna Roll (6 pcs)',
    description: 'Roll with spicy tuna and cucumber, topped with spicy mayo.',
    price: 240,
    category: 'sushi',
    image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 304,
    restaurantId: 3,
    name: 'Dragon Roll (8 pcs)',
    description: 'Eel and cucumber roll topped with avocado and eel sauce.',
    price: 280,
    category: 'sushi',
    image: 'https://images.unsplash.com/photo-1617196230288-95d135f4b850?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 305,
    restaurantId: 3,
    name: 'Miso Soup',
    description: 'Traditional Japanese soup with tofu, seaweed, and scallions.',
    price: 80,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 306,
    restaurantId: 3,
    name: 'Edamame',
    description: 'Steamed young soybeans sprinkled with sea salt.',
    price: 100,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 307,
    restaurantId: 3,
    name: 'Tempura Platter',
    description: 'Assorted lightly battered and deep-fried vegetables and shrimp.',
    price: 260,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1629684782790-8906d932f937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 308,
    restaurantId: 3,
    name: 'Sashimi Deluxe',
    description: 'Chef\'s selection of premium raw fish slices, artfully presented.',
    price: 380,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 309,
    restaurantId: 3,
    name: 'Green Tea Ice Cream',
    description: 'Smooth matcha-flavored ice cream.',
    price: 120,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1631800208332-d97e9680fce9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // Tokyo Treats (Japanese)
  {
    id: 1101,
    restaurantId: 11,
    name: 'Tonkotsu Ramen',
    description: 'Rich pork bone broth with chashu, egg, and vegetables.',
    price: 250,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1102,
    restaurantId: 11,
    name: 'Gyoza (6 pcs)',
    description: 'Pan-fried dumplings filled with pork and vegetables.',
    price: 160,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1103,
    restaurantId: 11,
    name: 'Chicken Katsu Curry',
    description: 'Crispy breaded chicken cutlet with Japanese curry and rice.',
    price: 270,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1104,
    restaurantId: 11,
    name: 'Agedashi Tofu',
    description: 'Deep-fried tofu in a light dashi broth with ginger and daikon.',
    price: 140,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1105,
    restaurantId: 11,
    name: 'Yakitori (5 skewers)',
    description: 'Grilled chicken skewers with teriyaki sauce.',
    price: 190,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1625938146369-aec5e6764e83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1106,
    restaurantId: 11,
    name: 'Takoyaki (8 pcs)',
    description: 'Ball-shaped snack filled with octopus pieces, pickled ginger, and green onion.',
    price: 180,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1532392506051-51ac939dcfe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1107,
    restaurantId: 11,
    name: 'Dorayaki',
    description: 'Sweet red bean paste sandwiched between two pancake-like patties.',
    price: 110,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1617196700351-7231bf586075?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // Ramen House (Japanese)
  {
    id: 1201,
    restaurantId: 12,
    name: 'Shoyu Ramen',
    description: 'Soy sauce-based broth with tender pork, bamboo shoots, and soft-boiled egg.',
    price: 230,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1632709810780-e2bd0a4c1264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1202,
    restaurantId: 12,
    name: 'Miso Ramen',
    description: 'Hearty miso-flavored broth with corn, bean sprouts, and chashu pork.',
    price: 250,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1203,
    restaurantId: 12,
    name: 'Spicy Vegetable Ramen',
    description: 'Spicy vegetable broth with tofu and seasonal vegetables.',
    price: 220,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1637024696628-02cb19cc1829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1204,
    restaurantId: 12,
    name: 'Karaage Chicken',
    description: 'Japanese-style fried chicken pieces with mayo dipping sauce.',
    price: 180,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1617130094141-7ca70d9fde37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1205,
    restaurantId: 12,
    name: 'Vegetable Gyoza (5 pcs)',
    description: 'Pan-fried dumplings with vegetables and tofu.',
    price: 150,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1206,
    restaurantId: 12,
    name: 'Tsukemen',
    description: 'Dipping ramen with thick noodles and concentrated broth on the side.',
    price: 270,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1207,
    restaurantId: 12,
    name: 'Matcha Pudding',
    description: 'Creamy green tea pudding with a sweet red bean topping.',
    price: 130,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1208,
    restaurantId: 12,
    name: 'Japanese Fried Rice',
    description: 'Stir-fried rice with vegetables, egg, and choice of protein.',
    price: 160,
    category: 'side',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // MEXICAN CUISINE
  // Taco Town (Mexican)
  {
    id: 401,
    restaurantId: 4,
    name: 'Beef Tacos (3 pcs)',
    description: 'Corn tortillas with seasoned beef, onions, cilantro, and lime.',
    price: 180,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 402,
    restaurantId: 4,
    name: 'Chicken Quesadilla',
    description: 'Grilled tortilla filled with cheese and shredded chicken.',
    price: 200,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 403,
    restaurantId: 4,
    name: 'Nachos Supreme',
    description: 'Tortilla chips loaded with beans, cheese, jalapeños, guacamole, and sour cream.',
    price: 220,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 404,
    restaurantId: 4,
    name: 'Guacamole & Chips',
    description: 'Fresh guacamole with crispy tortilla chips.',
    price: 150,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1600545103550-21a51bc5bc82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 405,
    restaurantId: 4,
    name: 'Vegetable Fajitas',
    description: 'Sizzling plate of grilled vegetables served with tortillas and toppings.',
    price: 240,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 406,
    restaurantId: 4,
    name: 'Fish Tacos (3 pcs)',
    description: 'Battered fish with cabbage slaw, chipotle mayo, and pickled onions.',
    price: 210,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1553535214-42ff237c3e28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 407,
    restaurantId: 4,
    name: 'Churros',
    description: 'Fried dough pastry dusted with cinnamon sugar, served with chocolate dip.',
    price: 130,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1624367171784-414fda471468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 408,
    restaurantId: 4,
    name: 'Mexican Rice',
    description: 'Tomato-infused rice with vegetables and herbs.',
    price: 90,
    category: 'side',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // Guacamole Grill (Mexican)
  {
    id: 1301,
    restaurantId: 13,
    name: 'Beef Burrito',
    description: 'Large flour tortilla filled with beef, rice, beans, cheese, and salsa.',
    price: 230,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1302,
    restaurantId: 13,
    name: 'Chicken Enchiladas',
    description: 'Corn tortillas filled with chicken, topped with sauce and melted cheese.',
    price: 210,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1303,
    restaurantId: 13,
    name: 'Chimichangas',
    description: 'Deep-fried burritos filled with your choice of meat and cheese.',
    price: 240,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1633991539183-9ad38a4060d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1304,
    restaurantId: 13,
    name: 'Taquitos (5 pcs)',
    description: 'Rolled and fried corn tortillas stuffed with seasoned chicken.',
    price: 180,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1305,
    restaurantId: 13,
    name: 'Queso Fundido',
    description: 'Melted cheese with chorizo, served with tortillas.',
    price: 170,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1570461226913-e408ffde65a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1306,
    restaurantId: 13,
    name: 'Chili Con Carne',
    description: 'Slow-cooked beef in a spicy sauce with beans and tomatoes.',
    price: 190,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1633041644926-1f8e43919860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1307,
    restaurantId: 13,
    name: 'Tres Leches Cake',
    description: 'Sponge cake soaked in three types of milk, topped with whipped cream.',
    price: 120,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1602960702925-83dafa0ba6fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // Burrito Bar (Mexican)
  {
    id: 1401,
    restaurantId: 14,
    name: 'Build-Your-Own Burrito',
    description: 'Customize your burrito with choice of meat, beans, rice, and toppings.',
    price: 250,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1402,
    restaurantId: 14,
    name: 'Burrito Bowl',
    description: 'All the burrito ingredients served in a bowl without the tortilla.',
    price: 240,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1590167462188-0536106b0598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1403,
    restaurantId: 14,
    name: 'Shrimp Taco (2 pcs)',
    description: 'Grilled shrimp with cabbage, pico de gallo, and lime crema.',
    price: 220,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1404,
    restaurantId: 14,
    name: 'Carne Asada Fries',
    description: 'Fries topped with grilled steak, cheese, guacamole, and sour cream.',
    price: 210,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1642717899921-0f3b1425991a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1405,
    restaurantId: 14,
    name: 'Chicken Tortilla Soup',
    description: 'Hearty soup with chicken, tomatoes, and crispy tortilla strips.',
    price: 160,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1406,
    restaurantId: 14,
    name: 'Street Corn',
    description: 'Grilled corn on the cob with mayo, cotija cheese, chili powder, and lime.',
    price: 120,
    category: 'side',
    image: 'https://images.unsplash.com/photo-1617655896708-6d63a9f0e99a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1407,
    restaurantId: 14,
    name: 'Flan',
    description: 'Caramel custard dessert with smooth texture and sweet flavor.',
    price: 140,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1624367171784-414fda471468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1408,
    restaurantId: 14,
    name: 'Horchata',
    description: 'Sweet rice milk beverage flavored with cinnamon.',
    price: 90,
    category: 'beverage',
    image: 'https://images.unsplash.com/photo-1623199648374-18ac67f4d0b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // CHINESE CUISINE
  // Golden Dragon (Chinese)
  {
    id: 501,
    restaurantId: 5,
    name: 'Kung Pao Chicken',
    description: 'Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.',
    price: 240,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 502,
    restaurantId: 5,
    name: 'Sweet and Sour Pork',
    description: 'Crispy pork with bell peppers and pineapple in sweet and sour sauce.',
    price: 220,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 503,
    restaurantId: 5,
    name: 'Spring Rolls (4 pcs)',
    description: 'Crispy rolls filled with vegetables and served with sweet chili sauce.',
    price: 150,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 504,
    restaurantId: 5,
    name: 'Vegetable Chow Mein',
    description: 'Stir-fried noodles with mixed vegetables and soy sauce.',
    price: 180,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1617622142633-81691325c2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 505,
    restaurantId: 5,
    name: 'Hot and Sour Soup',
    description: 'Spicy and tangy soup with tofu, mushrooms, and bamboo shoots.',
    price: 130,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 506,
    restaurantId: 5,
    name: 'Steamed Dumplings (6 pcs)',
    description: 'Delicate dumplings filled with pork and vegetables.',
    price: 160,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1563245372-7e0c48de5c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 507,
    restaurantId: 5,
    name: 'Peking Duck',
    description: 'Crispy skinned duck served with pancakes, scallions, and hoisin sauce.',
    price: 380,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1518983546435-91f8b87fe561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 508,
    restaurantId: 5,
    name: 'Mango Pudding',
    description: 'Creamy mango-flavored pudding topped with fruit.',
    price: 120,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // Wok & Roll (Chinese)
  {
    id: 1501,
    restaurantId: 15,
    name: 'General Tso\'s Chicken',
    description: 'Deep-fried chicken in a sweet, slightly spicy sauce.',
    price: 230,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1623689046286-01d352d0422f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1502,
    restaurantId: 15,
    name: 'Beef with Broccoli',
    description: 'Tender beef slices stir-fried with broccoli in savory sauce.',
    price: 250,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1627662168223-7df99068099a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1503,
    restaurantId: 15,
    name: 'Shrimp Fried Rice',
    description: 'Fried rice with shrimp, eggs, peas, and carrots.',
    price: 190,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1504,
    restaurantId: 15,
    name: 'Crab Rangoon (6 pcs)',
    description: 'Crispy wontons filled with cream cheese and crab meat.',
    price: 170,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1609183480237-ccbb4a7c5d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1505,
    restaurantId: 15,
    name: 'Mapo Tofu',
    description: 'Spicy tofu dish with minced meat and Sichuan peppercorns.',
    price: 210,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1582460777098-8c254a6dd69d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1506,
    restaurantId: 15,
    name: 'Scallion Pancakes',
    description: 'Flaky, savory pancakes with green onions.',
    price: 140,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1607330289024-1535acc7895a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1507,
    restaurantId: 15,
    name: 'Sesame Balls',
    description: 'Sweet rice flour balls filled with red bean paste, coated with sesame seeds.',
    price: 130,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1563245370-b43032ab7f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1508,
    restaurantId: 15,
    name: 'Egg Drop Soup',
    description: 'Simple, light soup with wispy beaten eggs in chicken broth.',
    price: 110,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  
  // Bamboo Garden (Chinese)
  {
    id: 1601,
    restaurantId: 16,
    name: 'Orange Chicken',
    description: 'Tangy, sweet chicken dish with a crispy coating and orange-flavored sauce.',
    price: 220,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1602,
    restaurantId: 16,
    name: 'Mongolian Beef',
    description: 'Sliced beef stir-fried with scallions in a savory soy sauce.',
    price: 260,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1603,
    restaurantId: 16,
    name: 'Vegetable Lo Mein',
    description: 'Soft noodles stir-fried with mixed vegetables.',
    price: 180,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1633512801763-92ae1f3f302d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1604,
    restaurantId: 16,
    name: 'Wonton Soup',
    description: 'Clear broth with pork-filled dumplings and vegetables.',
    price: 140,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1591378603223-e15b45a81640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1605,
    restaurantId: 16,
    name: 'Dan Dan Noodles',
    description: 'Spicy Sichuan noodles with preserved vegetables and minced pork.',
    price: 200,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1631709497146-a239ef373cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1606,
    restaurantId: 16,
    name: 'Potstickers (6 pcs)',
    description: 'Pan-fried dumplings with pork and cabbage filling.',
    price: 160,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1607,
    restaurantId: 16,
    name: 'Kung Pao Tofu',
    description: 'Vegetarian version of Kung Pao with tofu instead of meat.',
    price: 190,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe6ace2afb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  }
]; 