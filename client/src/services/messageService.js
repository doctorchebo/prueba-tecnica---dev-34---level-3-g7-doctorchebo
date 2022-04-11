import AxiosFactory from "./Axios";

export const messageService = {
  
  getMessages: () => {   
    const api = AxiosFactory("messages");
    return api.get("/messages");
  },
  
  
  addMessages: (data) => {
    const api = AxiosFactory("messages");
    return api.post("/messages", data);
  },

};
