const CarCard = ({ car }) => (
  <div className="border rounded p-4 flex flex-col items-center">
    <img src={car.image} alt={car.name} className="w-48 h-32 object-cover" />
    <h3 className="text-lg font-bold mt-2">{car.name}</h3>
    <p className="text-gray-600">{car.details}</p>
    <p className="text-blue-500 font-bold">{car.price}</p>
    <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
      View Details
    </button>
  </div>
);

const CarListings = () => {
  const cars = [
    {
      name: "Peugeot 3008 2018",
      details: "SUV, 1.5 Diesel",
      price: "£14,995",
      image: "/path-to-image.jpg",
    },
    // Add more cars here...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
};

export default CarListings;
