const hospital_pages = {};

hospital_pages.base_url = "http://localhost/Hospital-system-be/";


hospital_pages.getAPI = async (api_url) => {
    try{
        return await axios(api_url);
    }catch(error){
        console.log("Error from GET API");
    }
}

hospital_pages.postAPI = async (api_url, api_data, api_token = null) => {
    try{
        return await axios.post(
            api_url,
            api_data,
            {
                headers:{
                    'Authorization' : "token " + api_token
                }
            }
        );
    }catch(error){
        console.log("Error from POST API");
    }
}

hospital_pages.loadFor = (page) =>{
    eval("hospital_pages.load_" + page + "();");
}

hospital_pages.load_register = async()=>{
    
}