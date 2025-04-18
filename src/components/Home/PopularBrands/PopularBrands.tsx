type Category = {
  id: number;
  name: string;
  image: string;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Sport Bikes",
    image: "https://i.ibb.co.com/8gFCpXkM/EVO-150-R-1615829353624.jpg",
  },
  {
    id: 2,
    name: "Cruiser Bikes",
    image: "https://i.ibb.co.com/8gFCpXkM/EVO-150-R-1615829353624.jpg",
  },
  {
    id: 3,
    name: "Adventure Bikes",
    image: "https://i.ibb.co.com/8gFCpXkM/EVO-150-R-1615829353624.jpg",
  },
  {
    id: 4,
    name: "Electric Bikes",
    image: "https://i.ibb.co.com/8gFCpXkM/EVO-150-R-1615829353624.jpg",
  },
  {
    id: 5,
    name: "Naked Bikes",
    image: "https://i.ibb.co.com/8gFCpXkM/EVO-150-R-1615829353624.jpg",
  },
  {
    id: 6,
    name: "Scooters",
    image: "https://i.ibb.co.com/8gFCpXkM/EVO-150-R-1615829353624.jpg",
  },
  {
    id: 7,
    name: "Off-Road Bikes",
    image: "https://i.ibb.co.com/8gFCpXkM/EVO-150-R-1615829353624.jpg",
  },
  {
    id: 8,
    name: "Touring Bikes",
    image: "https://i.ibb.co.com/8gFCpXkM/EVO-150-R-1615829353624.jpg",
  },
  {
    id: 9,
    name: "Commuter Bikes",
    image: "https://i.ibb.co.com/8gFCpXkM/EVO-150-R-1615829353624.jpg",
  },
  {
    id: 10,
    name: "Retro Bikes",
    image: "https://i.ibb.co.com/8gFCpXkM/EVO-150-R-1615829353624.jpg",
  },
];

export default function Categories() {
  return (
    <div className="pt-16">
      <h2 className="text-2xl font-bold mb-6">Bike Brands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((category) => (
          <button key={category.id} className="bg-white rounded-lg border p-3">
            {/* <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover"
            /> */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {category.name}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
