import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../services/auth/loginServices";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    data: null,
    error: null,
    loading: false,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.data = action.payload;
    },
    loginError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginError } = loginSlice.actions;

export function doLogin(formData) {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());

      const res = await loginUser(formData);

      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(
        loginError(
          error.message || error.response.data.message || "Login Failed"
        )
      );
    }
  };
}

export default loginSlice.reducer;
