export type TReview = {
  id?: string;
  userId?: string;
  serviceId: string;
  rating: string;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;
};
