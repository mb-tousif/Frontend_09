/* eslint-disable no-unused-vars */
export enum ENUM_USER_ROLE {
  SUPER_ADMIN = "Super Admin",
  ADMIN = "Admin",
  USER = "User",
}
export enum ENUM_USER_ROLE_FOR_DASHBOARD {
  SUPER_ADMIN = "super_admin",
  ADMIN = "admin",
  USER = "user",
}

export enum ENUM_BOOKING_STATUS {
  PENDING = "Pending",
  CONFIRMED = "Confirmed",
  CANCELLED = "Cancelled",
  DELIVERED = "Delivered",
  REJECTED = "Rejected",
  COMPLETED = "Completed",
}

export enum ENUM_CART_STATUS {
  PENDING= "Pending",
  BOOKED= "Booked",
  CANCELLED="Cancelled by user",
  FAILED= "Cancelled by admin",
};

export enum ENUM_PAYMENT_STATUS {
  PENDING = "Pending",
  PARTIALLY_PAID = "Partially Paid",
  PAID = "Paid",
  REFUNDED = "Refunded",
}

export enum ENUM_USER_STATUS {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  BLOCKED = "Blocked",
}
