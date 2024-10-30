import Perfil from "./Perfil";

export default function Perfiles() {
  return (
    <>
      <section className="container mx-auto ">
        <div className=" h-24 "></div>
        <div className="md:flex">
          <Perfil />
          <Perfil />
        </div>
      </section>
    </>
  );
}
