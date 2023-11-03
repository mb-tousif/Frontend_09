"use client";
import { ENUM_USER_ROLE_FOR_DASHBOARD } from "@/constants/common";
import {
  useDeleteUserByIdMutation,
  useGetAllUserQuery,
} from "@/redux/api/userApi";
import { TUser } from "@/types/user.types";
import { Row, Space, Spin, message } from "antd";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useUpdateUserBySuperAdminMutation } from "@/redux/api/superAdminApi";
import { useState } from "react";
import PaginationSection from "@/components/ui/PaginationSection";

export default function ManageUser() {
  const { data, isLoading } = useGetAllUserQuery({ fixedCacheKey: "Users" });
  const [deleteUserById ] = useDeleteUserByIdMutation({fixedCacheKey: "Users"});
  const [
    updateUserBySuperAdmin,
    { isSuccess, isError, data: updateUser, error },
  ] = useUpdateUserBySuperAdminMutation();
  // @ts-ignore
  const users = data?.users?.data?.data;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentData = users?.slice(firstIndex, lastIndex);
 const makeAdmin = async (id: string) => {
   const payload = {
     role: ENUM_USER_ROLE_FOR_DASHBOARD.ADMIN,
   };
   await updateUserBySuperAdmin({ id: id, payload: payload });
 };
 const makeUser = async (id: string) => {
   const payload= {
     role: ENUM_USER_ROLE_FOR_DASHBOARD.USER,
   };
   await updateUserBySuperAdmin({ id: id, payload: payload });
 };

 const deleteUser = async (id: string) => {
   await deleteUserById(id);
   message.success("User deleted successfully");
 };
  if (isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }

  if (isSuccess) {
    message.success("User role updated successfully");
  }
  if (isError) {
    message.error(error?.data?.message);
  }

  return (
    <section className="text-gray-50 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-50">
            Manage All Users
          </h1>
        </div>
        <div className="w-full mx-auto overflow-auto">
          <table className="table-auto w-full px-5 text-center whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600 rounded-tl">
                  People
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600">
                  Status
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600">
                  Role
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600 rounded-tr">
                  Update Role
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600 rounded-tr">
                  Delete User
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData?.map((user: TUser) => (
                <tr key={user.id} className="border border-gray-200">
                  <td className="px-4 py-3">
                    <div className="avatar">
                      <div className="w-12 sm:w-16 md:w-20">
                        <Image
                          width={200}
                          height={200}
                          src={`${user?.imgUrl}`}
                          alt="Avatar"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{user?.name}</td>
                  <td className="px-4 py-3">{user?.status}</td>
                  <td className="px-4 py-3">{user?.role}</td>
                  {user.role === ENUM_USER_ROLE_FOR_DASHBOARD.USER ? (
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => makeAdmin(user?.id as string)}
                        className="badge border-none p-2.5 hover:bg-slate-600 rounded-full"
                      >
                        Set role Admin
                      </button>
                    </td>
                  ) : (
                    <td className="px-4 py-3">
                      <button
                        onClick={() => makeUser(user?.id as string)}
                        className="badge border-none p-2.5 hover:bg-slate-600 rounded-full"
                      >
                        Set role User
                      </button>
                    </td>
                  )}
                  <td className="px-4 py-3 text-center">
                    <button onClick={() => deleteUser(user?.id as string)}>
                      <MdDelete className="text-gray-50 w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <PaginationSection
            totalData={users?.length}
            dataPerPage={currentData?.length}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
  );
}
