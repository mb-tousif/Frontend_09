"use client";
import PaginationSection from "@/components/ui/PaginationSection";
import { ENUM_USER_ROLE_FOR_DASHBOARD } from "@/constants/common";
import { useUpdateUserByAdminMutation } from "@/redux/api/adminApi";
import {
  useDeleteUserByIdMutation,
  useGetAllUserQuery,
} from "@/redux/api/userApi";
import { TUser } from "@/types/user.types";
import { Row, Space, Spin, message } from "antd";
import Image from "next/image";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

export default function ManageUser() {
  const { data, isLoading } = useGetAllUserQuery({});
  const [deleteUserById] = useDeleteUserByIdMutation();
  const [updateUserByAdmin, { isSuccess, isError, data: updateUser, error }] =
    useUpdateUserByAdminMutation();
  // @ts-ignore
  const users = data?.users?.data?.data as TUser[];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentData = users?.slice(firstIndex, lastIndex);
  const makeActive = async (id: string) => {
    const payload = {
      status: "Active", 
    };
   await updateUserByAdmin({ id:id, payload:payload });
  };
  const makeInactive = async (id: string) => {
    const payload = {
      status: "Inactive",
    };
    await updateUserByAdmin({ id: id, payload: payload }).unwrap();
  };

  const deleteUser = async (id: string) => {
    await deleteUserById(id);
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
    message.success("User status updated successfully");
  }
  if (isError) {
    message.error(error?.data?.message);
  }

  return (
    <section className="text-gray-50 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-[#474E68]">
            Manage All Users
          </h1>
        </div>
        <div className="w-full mx-auto overflow-auto">
          <table className="table-auto bg-[#3c4153ad] w-full px-5 text-center whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600 rounded-tl">
                  People
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600">
                  Role
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600">
                  Status
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-50 text-sm bg-gray-600 rounded-tr">
                  Set User Status
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
                          className="rounded-full h-14"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{user?.name}</td>
                  <td className="px-4 py-3">{user?.role}</td>
                  <td className="px-4 py-3 text-gray-50">{user?.status}</td>
                  {user.status === "Active" ? (
                    <td className="px-4 py-3">
                      <button
                        onClick={() => makeInactive(user?.id as string)}
                        className="badge border-none p-2.5 hover:bg-gray-600 rounded-full"
                      >
                        Inactive User
                      </button>
                    </td>
                  ) : (
                    <td className="px-4 py-3">
                      <button
                        onClick={() => makeActive(user?.id as string)}
                        className="badge border-none p-2.5 hover:bg-gray-600 rounded-full"
                      >
                        Active User
                      </button>
                    </td>
                  )}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => deleteUser(user?.id as string)}
                      className="badge border-none p-2.5"
                    >
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
