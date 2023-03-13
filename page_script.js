const hospital_pages = {};

hospital_pages.base_url = "http://localhost/Hospital-system-be/";


hospital_pages.getAPI = async (api_url) => {
    try{
        return await axios(api_url);
    }catch(error){
        console.log("Error from GET API");
    }
}

hospital_pages.postAPI = async (api_url, api_data) => {
    try{
        return await axios.post(
            api_url,
            api_data,
        );
    }catch(error){
        console.log("Error from POST API");
    }
}

hospital_pages.loadFor = (page) =>{
    eval("hospital_pages.load_" + page + "();");
}

hospital_pages.load_register = async()=>{
    const register_user = hospital_pages.base_url + "register.php";
    const btn = document.getElementById("register_btn");
    
    btn.addEventListener("click", register)
    async function register(){
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("pass").value;
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('password', password);
        const response = await hospital_pages.postAPI(register_user, data)
        console.log(response.data.status)
        if(response.data.status ===200){
            window.location.href = "index.html"
        }
    }
}

hospital_pages.load_login = async()=>{
    const login_user = hospital_pages.base_url + "login.php";
    const btn = document.getElementById("register_btn");

    btn.addEventListener("click", login)
    async function login(){
        const email = document.getElementById("email").value;
        const password = document.getElementById("pass").value;
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        const response = await hospital_pages.postAPI(login_user, data)
        console.log(response.data.jwt)
        response
        if(response.data.status==true){
            localStorage.setItem('jwt', response.data.jwt);
            window.location.href = "index.html"
        }
    }
}

hospital_pages.load_index = async()=>{
    const login_user = hospital_pages.base_url + "assign.php";
    const btn = document.getElementById("register_btn");

    btn.addEventListener("click", login)
    async function login(){
        const email = document.getElementById("email").value;
        const password = document.getElementById("pass").value;
        const data = new FormData();
        data.append('email', email);
        data.append('password', password);
        const response = await hospital_pages.postAPI(login_user, data)
        console.log(response.data.jwt)
        response
        if(response.data.status==true){
            localStorage.setItem('jwt', response.data.jwt);
            window.location.href = "index.html"
        }
    }
}