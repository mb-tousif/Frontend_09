"use client";
import { message, type MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  LogoutOutlined,
  UserOutlined,
  ToolFilled,
  ProfileFilled,
  DeleteFilled,
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
import { TiCloudStorage } from "react-icons/ti";

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
      label: <Link href={`/`}>Home Page</Link>,
      key: "/",
      icon: <AiFillHome />,
    },
    {
      label: <Link href={`/dashboard/${role}/profile`}>Profile</Link>,
      key: `/dashboard/${role}/profile`,
      icon: <ProfileOutlined />,
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
      children: [
        {
          label: (
            <Link href={`/dashboard/${role}/manage_booking/pending`}>
              Pending Booking
            </Link>
          ),
          icon: <ProfileFilled />,
          key: `/dashboard/${role}/manage_booking/pending`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/manage_booking/confirmed`}>
              Confirmed Booking
            </Link>
          ),
          icon: <ToolFilled />,
          key: `/dashboard/${role}/manage_booking/confirmed`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/manage_booking/rejected`}>
              Rejected Booking
            </Link>
          ),
          icon: <DeleteFilled />,
          key: `/dashboard/${role}/manage_booking/rejected`,
        },
      ],
    },
    {
      label: (
        <Link href={`/dashboard/${role}/manage_service`}>Manage Service</Link>
      ),
      key: "manage_service",
      icon: <LuPaintbrush />,
      children: [
        {
          label: (
            <Link href={`/dashboard/${role}/manage_service/create`}>
              Create Service
            </Link>
          ),
          icon: <ProfileFilled />,
          key: `/dashboard/${role}/manage_service/create`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/manage_service/available_service`}>
              Available Service
            </Link>
          ),
          icon: <TiCloudStorage className="w-5 h-5 text-gray-50" />,
          key: `/dashboard/${role}/manage_service/available_service`,
        },
        {
          label: (
            <Link href={`/dashboard/${role}/manage_service/upcoming_service`}>
              Upcoming Service
            </Link>
          ),
          icon: <ToolFilled />,
          key: `/dashboard/${role}/manage_service/upcoming_service`,
        },
      ],
    },
    {
      label: <Link href={`/dashboard/${role}/manage_blogs`}>Manage Blogs</Link>,
      icon: <FaBlog />,
      key: `/dashboard/${role}/manage_blogs`,
      children: [
        {
          label: (
            <Link href={`/dashboard/${role}/manage_blogs/create`}>
              Create Blog
            </Link>
          ),
          icon: <ProfileFilled />,
          key: `/dashboard/${role}/manage_blogs/create`,
        },
      ],
    },
    {
      label: <h2 onClick={logout}>Logout</h2>,
      key: "logout",
      icon: <LogoutOutlined />,
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
    ...defaultSidebarItems,
    {
      label: <Link href={`/services`}>Services</Link>,
      icon: <TableOutlined />,
      key: `/services`,
    },
    {
      label: <h2 onClick={logout}>Logout</h2>,
      key: "logout",
      icon: <LogoutOutlined />,
    },
  ];

  if (role === ENUM_USER_ROLE_FOR_DASHBOARD.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === ENUM_USER_ROLE_FOR_DASHBOARD.ADMIN) return adminSidebarItems;
  else if (role === ENUM_USER_ROLE_FOR_DASHBOARD.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
