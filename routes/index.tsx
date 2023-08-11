import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Header from "../components/Nav.tsx";
import Hero from '../components/Hero.tsx'

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
      <div class="p-4 bg-[#e40000] mx-auto max-w-screen-md">
        <Header /></div>
        <p class="my-6">
          Hello World
        </p>
        <Counter count={count} />
        <Hero />
      </div>
    </>
  );
}
