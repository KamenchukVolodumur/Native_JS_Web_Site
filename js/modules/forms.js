import { openModal, closeModal} from "./modal";
import { postData } from "../services";
function form(modalTimerId, formSelector){
    const forms = document.querySelectorAll(formSelector);
    const message = {
        loading: "img/forms/spinner.svg",
        success: "Спасибо ми скоро с вами звяжемся",
        failure: "Что то пошло не так"
    };

    forms.forEach(item => {
        bindPostDate(item);
    });
    function bindPostDate(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
          display: block;
          margin: 0 auto;
          `;
            form.append(statusMessage);
            /*const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
   
            request.setRequestHeader('Content-type', 'multipart/form-data');*/
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            console.log(formData);
            postData('http://localhost:3000/requests', json)
                .then(data => {
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
        });
    }
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
             <div class="modal__content">
                 <div class="modal__close" data-close>×</div>
                 <div class="modal__title">${message}</div>
             </div>
         `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
    fetch("http://localhost:3000/menu")
        .then(data => data.json());

}
export default form;