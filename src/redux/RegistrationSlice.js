import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const registerSlice = createSlice({

    name:"register",
    initialState :
    {
        user_data :[
        ],
        show_login :true,
        logged_user:""
    },

    reducers :
    {
        register : ( state, action) =>
        {
            let decision = false;
            state.user_data.map((val) => {
                if ( val.email === action.payload.email)
                {
                    decision=true;
                    toast.error("User Email Id  already exists !! ");
                    
                }
                
                
            })

            if(!decision)
            {
            state.user_data.push(action.payload);
                
            }
        },
        login : ( state ) =>
        {
          state.show_login = ! state.show_login;
        },

        logged: ( state, action ) =>
        {
            state.logged_user = action.payload;
        }
        
    }
});

export default registerSlice.reducer;
export const { register , login, logged} = registerSlice.actions;

