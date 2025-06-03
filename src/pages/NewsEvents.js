import React from "react";
import NewsEventsHero from "../components/NewsEvents/NewsEventsHero";
import LatestNews from "../components/NewsEvents/LatestNews";
import EventsGrid from "../components/NewsEvents/EventsGrid";

const NewsEvents = () => {
  return (
    <>
      <NewsEventsHero />
      <LatestNews />
      <EventsGrid />
    </>
  );
};

export default NewsEvents;
