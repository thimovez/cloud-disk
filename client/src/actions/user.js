import axios from "axios";
import { setUser } from "../reducers/userReducer";

//запрос на сервер для регистрации
export const registration = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
    email,
    password
    });
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
}

//запрос на сервер для логина
export const login = (email, password) => {
  return async dispatch => {
     try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  }
}

export const auth = (email, password) => {
  return async dispatch => {
     try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`,
      {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}}
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      alert(e.response.data.message);
      localStorage.removeItem('token');
    }
  }
}
