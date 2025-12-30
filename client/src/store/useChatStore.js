import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  areUsersLoading: false,
  areMessagesLoading: false,

  getUsers: async () => {
    set({ areUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in getUsers function of useChatStore", error.message);
    } finally {
      set({ areUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ areMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(
        "Error in getMessages function of useChatStore",
        error.message
      );
    } finally {
      set({ areMessagesLoading: false });
    }
  },

  // TODO: optimize later
  setSelectedUser: (selectedUser) => set({ selectedUser: selectedUser }),
}));
