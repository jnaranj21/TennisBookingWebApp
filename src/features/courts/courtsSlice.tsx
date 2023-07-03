import { COURTS } from "../../app/shared/COURTS";

export const selectAllCourts = () => {
  return COURTS;
};

export const selectFeaturedCourts = () => {
  return COURTS.filter((court) => court.featured);
};