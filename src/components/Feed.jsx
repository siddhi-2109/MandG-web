import axios from "axios";
import {BASE_URL} from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";

const Feed = () => {
    const dispatch = useDispatch();

    const getfeed = async () =>{
        if(feed) return ;
    try {const res = await axios.get(BASE_URL + "/feed",
        {withCredentials:true});
    dispatch(addFeed(res.data));}
    catch(err){

    }
    };

    useEffect(() => {
        getFetch
    })
    return<div>Feed</div>;
};
export default Feed;