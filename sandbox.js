const buttons = document.querySelectorAll('.buttons .btn');
const notifications  = document.querySelector('.notifications');
const toastDetails = {
   timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success: this a success toast.'
    },

     error: {
        icon: 'fa-triangle-exclamation',
        text: 'Error: this Error toast.'
    },

     warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning: this a Warning toast.'
    },

     info: {
        icon: 'fa-circle-info',
        text: 'Info: this a information toast.'
    }
}

const removeTm = (toast) => {
  toast.classList.add('hide')
  if(toast.timeoutId) clearTimeout(toast.timeoutId)
  setTimeout(() => toast.remove(),500)
}

const createToast = (id) =>{

    const{icon, text} = toastDetails[id]

    const toast = document.createElement('li');
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="column">
                     <i class="fa-solid ${icon}"></i>
                     <span> ${text}</span>
                        </div>
                       <button class="xx" onclick= 'removeTm(this.parentElement)'>X</button>`
    notifications.appendChild(toast)
     toast.timeoutId =  setTimeout(()=>removeTm(toast),toastDetails.timer)
}

buttons.forEach(btn => {
    btn.addEventListener('click',()=>{
        //console.log('abusddd')
        createToast(btn.id)
        // alert('you just clicked the button')

    })
})
