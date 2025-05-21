import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function EditProduct() {
  const [info, setInfo] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const { id } = useParams();

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setInfo((prev) => ({ ...prev, image: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    setInfo({ name: "", price: "", description: "", image: "" });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/product/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setInfo({
          name: data.name,
          price: data.price,
          description: data.description,
          image: data.image,
        })
      );
  }, [id]);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex justify-center bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px] mt-10"
        >
          <h1 className="text-center font-bold text-[22px]">Add Product</h1>
          <div>
            <label className="font-medium">Name</label>
            <input
              value={info.name}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none focus:border-0"
            />
          </div>
          <div>
            <label className="font-medium">Price</label>
            <input
              value={info.price}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, price: e.target.value }))
              }
              type="text"
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none focus:border-0"
            />
          </div>
          <div>
            <label className="font-medium">Description</label>
            <input
              value={info.description}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, description: e.target.value }))
              }
              type="text"
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none focus:border-0"
            />
          </div>
          <div>
            <label className="font-medium">Image</label>
            <input
              onChange={handleImage}
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-1 focus:ring-blue-500 outline-none focus:border-0"
            />
          </div>
          <div className="flex justify-center gap-5">
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-lg font-medium cursor-pointer"
            >
              Save
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-lg font-medium cursor-pointer"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditProduct;
