import Layout from "@/components/layouts/base";
import type { PageProps } from "@/types";
import { css } from "@emotion/react";
import { NextPage } from "next";

const Events: NextPage<PageProps> = ({ params, searchParams }) => {
  const calWrapper = css`
    display: flex;
    justify-content: center;
  `;
  return (
    <Layout pageTitle="events">
      <div>
        <h1>Events</h1>
        <div css={calWrapper}>
          <iframe
            title="calendar"
            src="https://calendar.google.com/calendar/embed?src=0xethereum.japan%40gmail.com&ctz=Asia%2FTokyo"
            width="800"
            height="600"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Events;
