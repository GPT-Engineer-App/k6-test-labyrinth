import { Dog } from "lucide-react";

const Index = () => {
  const popularBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "French Bulldog",
    "Bulldog",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Dog className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">All About Dogs</h1>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Man's Best Friend</h2>
          <p className="text-gray-600 mb-4">
            Dogs have been domesticated for thousands of years and are known for their loyalty, 
            companionship, and diverse breeds. They play various roles in human society, from 
            beloved pets to working animals in fields like law enforcement, therapy, and assistance 
            for people with disabilities.
          </p>
          <img 
            src="/placeholder.svg" 
            alt="A happy dog" 
            className="mx-auto object-cover w-full h-[300px] rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Popular Dog Breeds</h3>
          <ul className="list-disc list-inside text-gray-600">
            {popularBreeds.map((breed, index) => (
              <li key={index}>{breed}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
