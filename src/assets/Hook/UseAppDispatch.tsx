import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/Store/Store";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
