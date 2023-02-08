import Link from "next/link";
import Label from "./Label";

export default function CategoryLabel() {
  return (
    <div className="flex gap-3">
      <Link href="#">
        <Label color="blue">Catégorie 1</Label>
      </Link>
      <Link href="#">
        <Label color="orange">Catégorie 1</Label>
      </Link>
      <Link href="#">
        <Label color="green">Catégorie 1</Label>
      </Link>
    </div>
  );
}
