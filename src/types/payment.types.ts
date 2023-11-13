export type TPayment = {
  id?: string;
  userId?: string;
  cartId?: string;
  serviceId: string;
  amount: number;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
