export function DataFormat(doc) {
  return {
    name: doc.personal?.name || "",
    age: doc.personal?.age || "",
    gender: doc.personal?.gender || "",
    phone: doc.personal?.phone || "",
    symptoms: doc.personal?.symptoms || "",
    paymentsCount: Array.isArray(doc.personal?.payments)
      ? doc.personal.payments.length
      : 0,
  };
}
