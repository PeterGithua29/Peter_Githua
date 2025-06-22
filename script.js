        
        const form = document.getElementById('securityForm');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            const name = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (name.value.trim() === '') {
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }
            
    
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }
            
    
            const phone = document.getElementById('phone');
            const phoneError = document.getElementById('phoneError');
            const phoneRegex = /^[\d\s\-()+]{10,}$/;
            if (!phoneRegex.test(phone.value)) {
                phoneError.style.display = 'block';
                isValid = false;
            } else {
                phoneError.style.display = 'none';
            }
            
        
            const service = document.getElementById('service');
            const serviceError = document.getElementById('serviceError');
            if (service.value === '') {
                serviceError.style.display = 'block';
                isValid = false;
            } else {
                serviceError.style.display = 'none';
            }
            
        
            const message = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (message.value.trim() === '') {
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageError.style.display = 'none';
            }
            
            
            if (isValid) {
                
                
                document.getElementById('successMessage').style.display = 'block';
                form.reset();
                
                
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000);
            }
        });
        
        
        document.getElementById('liveChatBtn').addEventListener('click', function() {
            
            
            alert('Live chat connection would open here. Install Tawk.to or your preferred chat service.');
        });
        
        