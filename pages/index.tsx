import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
      <h1 className="text-2xl">Dayuse Blog</h1>
      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
