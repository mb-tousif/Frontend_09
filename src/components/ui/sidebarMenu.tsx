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
import { LuPaintbrush } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import { useAppDispatch } from "@/redux/hooks";
import { removeToken } from "@/redux/slices/authSlice";
import { ENUM_USER_ROLE_FOR_DASHBOARD } from "@/constants/common";
import { FaBlog } from "react-icons/fa";

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
      label: <h2 onClick={logout}>Logout</h2>,
      key: "logout",
      icon: <LogoutOutlined />,
    },
    {
      label: <Link href={`/`}>Home Page</Link>,
      key: "/",
      icon: <AiFillHome />,
    },
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/${role}/profile`}>Profile</Link>,
          key: `/dashboard/${role}/profile`,
        },
      ],
    },
  ];

  const commonAdminSuperAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard/${role}/manage_user`}>Manage User</Link>,
      icon: <UserOutlined />,
      key: `/dashboard/${role}/manage-user`,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/manage_booking`}>Manage Booking</Link>
      ),
      icon: <BsCardChecklist />,
      key: `/dashboard/${role}/manage_booking`,
    },
    {
      label: (
        <Link href={`/dashboard/${role}/manage_service`}>Manage Service</Link>
      ),
      icon: <LuPaintbrush />,
      key: `/dashboard/${role}/manage_service`,
    },
    {
      label: <Link href={`/${role}/manage_blogs`}>Manage Blogs</Link>,
      icon: <FaBlog />,
      key: `/dashboard/${role}/manage_blogs`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSuperAdminSidebarItems,
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSuperAdminSidebarItems,
  ];

  const userSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard/${role}/services`}>Services</Link>,
      icon: <TableOutlined />,
      key: `/dashboard/${role}/services`,
    },
    ...defaultSidebarItems,
  ];

  if (role === ENUM_USER_ROLE_FOR_DASHBOARD.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === ENUM_USER_ROLE_FOR_DASHBOARD.ADMIN) return adminSidebarItems;
  else if (role === ENUM_USER_ROLE_FOR_DASHBOARD.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
