export const formatDate = (date, type = "full") => {
  const options = {
    date: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },

    time: {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    },

    full: {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    },
  };

  return new Date(date).toLocaleString("id-ID", options[type] ?? options.full);
};
