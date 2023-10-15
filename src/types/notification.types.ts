export type TNotification = {
  id: string;
  userId: string;
  bookingId: string | null;
  paymentId: string | null;
  message: string;
  createdAt: Date;
  updatedAt: Date;
};