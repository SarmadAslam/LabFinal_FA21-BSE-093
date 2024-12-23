import axios from "axios";
export default axios.create(
  {
    baseURL: "https://passouts.kptevta.gov.pk/api/",
    headers: {
      "x-api-key": "1bf99915cc23cbb8562aa1b9fe09f38103a1bd80",
    },
  },
  {
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
      Authorization:
        "Bearer z9r7wvlmEm6p8Fcw8ruJIaBWaA6B1F36-BiDByuori1LjsORvYfsJcJQLOpLgBg061LYo1UcBkGUzEABJEUCExEgpDvP5idNPDdgHukYIS36G8FbcKIZVmoTJ7kQZ3Yx",
    },
  }
);
