export function DataFormat(doc) {
  return {
    name: doc.personal?.name || "",
    age: doc.personal?.age || "",
    gender: doc.personal?.gender || "",
    phone: doc.personal?.phone || "",
    symptoms: doc.personal?.symptoms || "",
    date: doc.consultation?.length > 0 ? doc.consultation[0].dateOfBooking : "",
    paymentsCount: Array.isArray(doc.personal?.payments)
      ? doc.personal.payments.length
      : 0,
  };
}
