"use client";
import { ENUM_USER_ROLE_FOR_DASHBOARD } from "@/constants/common";
import { useUpdateUserByAdminMutation } from "@/redux/api/adminApi";
import {
  useDeleteUserByIdMutation,
  useGetAllUserQuery,
} from "@/redux/api/userApi";
import { TUser } from "@/types/user.types";
import { message } from "antd";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

export default function ManageUser() {
  const { data, isLoading } = useGetAllUserQuery({});
  const [deleteUserById] = useDeleteUserByIdMutation();
  const [updateUserByAdmin, { isSuccess, isError, data: updateUser, error }] =
    useUpdateUserByAdminMutation();
  // @ts-ignore
  const users = data?.users?.data?.data as TUser[];
  
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
    const res = await updateUserByAdmin({ id: id, payload: payload }).unwrap();
  };

  const deleteUser = async (id: string) => {
    await deleteUserById(id);
  };

  if (isSuccess) {
    message.success("User status updated successfully");
  }
  if (isError) {
    message.error(error?.data?.message);
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Manage All Users
          </h1>
        </div>
        <div className="w-full mx-auto overflow-auto">
          <table className="table-auto w-full px-5 text-center whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl">
                  People
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  User Email Address
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  User Status
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr">
                  Set User Status
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr">
                  Delete User
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user: TUser) => (
                <tr key={user.id} className="border border-gray-200">
                  <td className="px-4 py-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <Image
                          width={200}
                          height={200}
                          src={`${user?.imgUrl}`}
                          alt="Avatar"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{user?.email}</td>
                  <td className="px-4 py-3 text-black">{user?.status}</td>
                  {user.status === "Active" ? (
                    <td className="px-4 py-3">
                      <button
                        onClick={() => makeInactive(user?.id as string)}
                        className="badge border-none p-2.5 bg-green-500"
                      >
                        Inactive User
                      </button>
                    </td>
                  ) : (
                    <td className="px-4 py-3">
                      <button
                        onClick={() => makeActive(user?.id as string)}
                        className="badge border-none p-2.5 bg-[#0d70e0ce]"
                      >
                        Active User
                      </button>
                    </td>
                  )}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => deleteUser(user?.id as string)}
                      className="badge border-none p-2.5 bg-green-500"
                    >
                      <MdDelete className="text-gray-50" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
            Fore More Users
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
