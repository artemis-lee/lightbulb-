
    const image = document.getElementById('light_image');
   
    image.addEventListener('click', ((e) => {
        console.log (e.target);
        
        if (e.target.getAttribute ('src') === 'lightbulb-solid-off.svg' ) {
            e.target.setAttribute ('src', "lightbulb-solid-on.svg");
            document.body.style.backgroundColor = '#1f1768';
        }
        else {
            e.target.setAttribute ('src', "lightbulb-solid-off.svg");
            document.body.style.backgroundColor = '#fefee7';
        }
    }))

