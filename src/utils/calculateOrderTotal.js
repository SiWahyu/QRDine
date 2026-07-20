export const calculateOrderTotal = (
  subtotal = 0,
  serviceCharge = 0,
  taxPercentage = 0,
) => {
  const service = subtotal * (serviceCharge / 100);
  const tax = subtotal * (taxPercentage / 100);
  const total = subtotal + service + tax;

  return {
    subtotal,
    service,
    tax,
    total,
  };
};
