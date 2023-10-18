export type TBooking = {
  id?: string;
  userId?: string;
  serviceId: string;
  cartId: string;
  schedule: string;
  status?: string;
  paymentStatus?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
