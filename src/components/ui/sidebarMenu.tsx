"use client";
import { message, type MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsCardChecklist } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { LuPaintbrush } from "react-icons/lu";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useAppDispatch } from "@/redux/hooks";
import { removeToken } from "@/redux/slices/authSlice";
import { ENUM_USER_ROLE } from "@/constants/common";
import { FaUserTie } from "react-icons/fa";

export const SidebarMenus = (role: string) => {
  const router = useRouter();
const dispatch = useAppDispatch();
const logout = () => {
    dispatch(removeToken());
    router.push("/login");
    message.info("Sign out successfully");
  };

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Profile</Link>,
          key: `/${role}/profile`,
        }
      ],
    },
    {
      label: <h2 onClick={logout}>Logout</h2>,
      key: "logout",
      icon: <LogoutOutlined />,
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/services`}>Services</Link>,
      icon: <LuPaintbrush />,
      key: `/${role}/services`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/services`}>Service</Link>,
      icon: <LuPaintbrush />,
      key: `/${role}/services`,
    },
    {
      label: <Link href={`/${role}/user`}>User</Link>,
      icon: <BiSolidUserCircle />,
      key: `/${role}/user`,
    },
    {
      label: <Link href={`/${role}/booking`}>Booking</Link>,
      icon: <BsCardChecklist />,
      key: `/${role}/booking`,
    },

    ...defaultSidebarItems,
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
      icon: <FaUserTie />,
      key: `/${role}/manage-admin`,
    },
    {
      label: <Link href={`/${role}/manage-users`}>Manage User</Link>,
      icon: <UserOutlined />,
      key: `/${role}/manage-users`,
    },
    {
      label: <Link href={`/${role}/manage-Booking`}>Manage Booking</Link>,
      icon: <BsCardChecklist />,
      key: `/${role}/division`,
    },
    {
      label: <Link href={`/${role}/manage-service`}>Manage Service</Link>,
      icon: <LuPaintbrush />,
      key: `/${role}/district`,
    },
    ...commonAdminSidebarItems,
    ...defaultSidebarItems,
  ];

  const userSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/services`}>Services</Link>,
      icon: <TableOutlined />,
      key: `/${role}/services`,
    },
    ...defaultSidebarItems,
  ];

  if (role === ENUM_USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === ENUM_USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === ENUM_USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
