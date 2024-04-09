import { createContext, useState } from "react";

const RatingContext = createContext({
  averageRating: 0,
  triggerUpdate: () => {},
});

export default RatingContext;
