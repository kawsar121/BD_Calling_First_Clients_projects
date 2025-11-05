            **BD Calling First Project Clients**
        ____________________________________

                **FrontEnd**
             ___________________
        * Html 5
        * Tailwind Css
        * React Js
        * React Router
        * Context Api
        * React Icons
        * Goggle Fonts
        * Firebase authentication
        * Axios
        * Creat A Theme Controler
        * Swiper Js
        * Motion
                **Backend**
            ____________________
        * Node Js
        * Express Js
        * MongoDB
        * JWT Token
        * Set Cookies

            ** Instance
 const instance = axios.create({
    baseURL : 'https://kb-fcszt4c44-kawsars-projects-6c73758e.vercel.app/',
    withCredentials : true
}) 
eta use korar karon holo axios ke shotcut and secure korar jonno
useEffect(()=>{
        instance.interceptors.response.use(res=>{
            return res
        }, error=>{
            if(error.status === 401 || error.status === 403){
                signout()
                .then(res=>{
                    navigate('/')
                })
                .catch(err=>{
                    console.log(err)
                })
            }
             return Promise.reject(error);
        })
    },[])
jokhon user shothik cookie use korbe na tokhon direct logout howe jabe
