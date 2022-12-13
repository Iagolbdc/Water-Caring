
        
        
        function setValor(){
            var text = document.querySelector(".usuario").value 
            localStorage.setItem('valueText', text)
        }
        
        function iniciaModal(modalId){
            if(localStorage.fechaModal !== modalId){
            const modal = document.getElementById(modalId);
            if(modal){
            modal.classList.add('mostrar')
            modal.addEventListener('click', (e)=>{
                if(e.target.id == modalId || e.target.className == 'fechar' || e.target.className == 'cancel')
                modal.classList.remove('mostrar')
                localStorage.fechaModal = modalId;
            });
        }
        }
    }
      
        const New_account =  document.querySelector('.New-account');
        const Sign_in = document.querySelector('.Sign-in');
        const newA = document.querySelector('.new');
        const sign = document.querySelector('.sign');
        sign.addEventListener('click',()=>{
                newA.classList.add('bg-cor');
                sign.classList.remove('bg-cor');
                Sign_in.classList.add('aparecer');
                New_account.classList.remove('aparecer')
        });
        newA.addEventListener('click',()=>{
                newA.classList.remove('bg-cor')
                sign.classList.add('bg-cor') 
                New_account.classList.add('aparecer')
                Sign_in.classList.remove('aparecer')
        })
      console.log(sign.classList.contains('bg-cor'))