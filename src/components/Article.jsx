export function Article() {
  return (
    <div className="container mx-auto p-4 ">
      <div>
        <h1 className="text-3xl font-bold ml-4">Latest News</h1>
      </div>
      <div className=" flex gap-5 justify-center bg-white shadow-lg p-4 my-3 rounded">
        <div>
          <img
            className="rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkiuIjE3VzBaN-cuh1Amqe9fi29SOro9HoA&s"
          ></img>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Vite is Revolutionizing frontend
          </h2>
          <p>Vite is a next gen frontend tool that deliver ast development</p>
        </div>
      </div>
    </div>
  );
}
