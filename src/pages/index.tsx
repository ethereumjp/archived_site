import type { PageProps } from "@/types";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  const router = useRouter();
  // biome-ignore lint/correctness/useExhaustiveDependencies: <called on request>
  useEffect(() => {
    router.push("https://ethereumjp.org");
  }, []);
  return <></>;
};

export default Page;
