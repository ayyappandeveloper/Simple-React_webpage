export function Hero() {
  return (
    <div className="text-center bg-gray-300 p-4">
      <img
        className="mx-auto rounded-lg shadow-lg my-6"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV5E2k4ZwECgHkeSUtW96YOpRTAYYmQIQpdA&s"
      ></img>
      <h1 className="text-3xl m-3">Build amazing UIs with React & Vite</h1>
      <p>fast,lightweight and modern frontend development</p>
      <button className="bg-blue-500 p-2 rounded hover:bg-blue-600 transition text-white m-3">
        Get Started
      </button>
    </div>
  );
}
