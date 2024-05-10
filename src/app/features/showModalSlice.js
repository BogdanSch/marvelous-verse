import { createSlice } from "@reduxjs/toolkit";

export const showModalSlice = createSlice({
  name: "showModal",
  initialState: {
    value: {
      confirmModal: false,
      errorModal: false,
    },
  },
  reducers: {
    setShowConfirmModal: (state, action) => {
      state.value.confirmModal = action.payload;
    },
    setShowErrorModal: (state, action) => {
      state.value.errorModal = action.payload;
    },
  },
});

export const { setShowConfirmModal, setShowErrorModal } =
  showModalSlice.actions;

export default showModalSlice.reducer;
