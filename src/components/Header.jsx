export function Header() {
  return (
    <header
      className="h-100 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlhuMb_eqDULftPIGQ34Xb2pv_mbTscFSfw&s)",
      }}
    >
      <h1 className="text-4xl bg-black/80 p-4 rounded-2xl text-white ">
        Welcome to my Website
      </h1>
    </header>
  );
}
