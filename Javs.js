let buttons = document.getElementsByClassName("aran-btn");
let sepet = document.getElementById("timer");
let btn_sepet = document.getElementById("btn_sepet");
let sidebar = document.getElementById("sidebar");


let sidebar_buttons = sidebar.querySelectorAll("button")


let sepet_value = 0;
sepet.innerText = sepet_value.toString();




Array.from(buttons).forEach(i => {
    i.addEventListener(("click"), e => {
        sepet_value++;
        sepet.innerText = sepet_value.toString();

        function sidebarProductManager() {
            let sidebar_list = document.getElementById("sidebar_lists");
            let sidebar_p = sidebar_list.querySelectorAll("p")
            var sidebar_product_names = [];
            sidebar_p.forEach(i => {
                sidebar_product_names.push(i.textContent)
            })
            

            if (sidebar_product_names.includes(e.target.previousElementSibling.previousElementSibling.textContent)){
                
                (sidebar_list.querySelectorAll("p")).forEach(i =>{
                    if(i.textContent ==  e.target.previousElementSibling.previousElementSibling.textContent){
                        i.nextElementSibling.textContent++
                        i.nextElementSibling.nextElementSibling.textContent = parseInt(e.target.parentElement.parentElement.querySelector(".product-price").textContent) +parseInt(i.nextElementSibling.nextElementSibling.textContent)
                            
                    }
                })


            }
            else{
                let new_li = document.createElement("li")
                new_li.classList.add("d-flex");
                new_li.classList.add("font-google");
                let new_name = document.createElement("p")
                let new_time = document.createElement("p")
                let new_price = document.createElement("p")
                let new_button = document.createElement("button")
                new_name.classList.add("sidebarPTag")
                new_time.classList.add("sidebarPTag")
                new_price.classList.add("sidebarPTag")
                new_button.classList.add("btn");
                new_button.classList.add("p-0");
                new_button.classList.add("sidebarBtn");
                new_button.innerText = "Sil"
                new_name.textContent = e.target.previousElementSibling.previousElementSibling.textContent;
                new_time.textContent = 1;
                new_price.textContent = parseInt(e.target.parentElement.parentElement.querySelector(".product-price").textContent)
                new_li.appendChild(new_name)
                new_li.appendChild(new_time)
                new_li.appendChild(new_price)
                new_li.appendChild(new_button)
                new_button.addEventListener("click",()=>{
                    new_li.remove();
                })
                sidebar_list.appendChild(new_li)
                

            }
        }

        sidebarProductManager();


    })
})



    btn_sepet.addEventListener("click", e => {
        if (sidebar.classList.contains("sidebarShow")) {
            sidebar.classList.remove("sidebarShow");
        }
        else {
            sidebar.classList.add("sidebarShow");
        }
    })






