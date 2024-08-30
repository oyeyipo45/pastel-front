import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader">
      <Image src="../assets/loading.svg" alt="loading" />
    </div>
  );
}
