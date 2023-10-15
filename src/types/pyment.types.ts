export type TPayment = {
  id: string;
  userId: string;
  bookingId: string;
  serviceId: string;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};
