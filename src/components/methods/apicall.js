import { ServerSideGet } from "./method";

export const SERVER_SIDE_GET = async (URL) => {
  const response = {
    data: [],
    status: false,
  };
  try {
    const res = await ServerSideGet(URL);
    if(res?.status===200){
        response.data = res.data;
        response.status = true;
        return response;
    }
  } catch (error) {
    console.error('Error while fetching', error);
}
};
export const SERVER_SIDE_GET_WITH_ID = async (URL, id) => {
  const response = {
    data: [],
    status: false,
  };
  try {
    const res = await ServerSideGet(URL + '/' + id);
    if(res?.status===200){
        response.data = res.data;
        response.status = true;
        return response;
    }
  } catch (error) {
    console.error('Error while fetching', error);
}
};
