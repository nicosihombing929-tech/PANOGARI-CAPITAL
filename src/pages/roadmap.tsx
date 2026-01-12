import RoadmapFuturistic from "@/components/RoadmapFuturistic";
import Head from "next/head";

export default function RoadmapPage() {
  return (
    <>
      <Head>
        <title>Panogari Capital | Roadmap</title>
        <meta
          name="description"
          content="Panogari Capital roadmap: build, execute, and scale our quantitative trading and family office platform."
        />
      </Head>
      <RoadmapFuturistic />
    </>
  );
}
