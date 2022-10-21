window.addEventListener("DOMContentLoaded", () =>{
    /* Set the width of the sidebar to 250px (show it) */
    function openNav(){
        document.querySelector('.panel').style.height="100%"; 
        // document.querySelector('#open').style.display = 'none';
        document.querySelector("#head").style.padding = "1em";
        console.log("works")
       }
    
    /* Set the width of the sidebar to 0 (hide it) */
    const closeNav = () => {
        document.querySelector('.panel').style.height = "0";
        // document.querySelector('#open').style.display = 'block';

    }

    let open = document.getElementById('open');
    open.addEventListener("click", openNav);

    let closeAll = document.getElementById('close');
    closeAll.addEventListener("click", closeNav);
});

