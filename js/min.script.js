var link=document.querySelector(".feedback-form"),popup=document.querySelector(".modal-write"),close=document.querySelector(".modal-close"),loginField=popup.querySelector(".input-name"),emailField=popup.querySelector(".input-email"),commentField=popup.querySelector("[name=comment]"),form=popup.querySelector("form"),linkMap=document.querySelector(".link-modal-map"),popupMap=document.querySelector(".modal-map"),closeMap=document.querySelector(".map-close"),back=document.querySelector(".slider-button-back"),next=document.querySelector(".slider-button-next"),slide1=document.querySelector(".slide1"),slide2=document.querySelector(".slide2"),delivery=document.querySelector(".service-delivery"),warranty=document.querySelector(".service-warranty"),credit=document.querySelector(".service-credit"),itemDelivery=document.querySelector(".service-text-item-delivery"),itemWarranty=document.querySelector(".service-text-item-warranty"),itemCredit=document.querySelector(".service-text-item-credit"),drills=document.querySelector(".drills"),perforators=document.querySelector(".perforators");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-display"),loginField.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-display"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){loginField.value&&emailField.value&&commentField.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),linkMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.add("modal-display")}),closeMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.remove("modal-display")}),next.addEventListener("click",function(e){e.preventDefault(),console.log(e.target.parentNode),slide2.classList.contains("show")?(slide2.classList.remove("show"),slide1.classList.add("show"),slide1.classList.add("show"),perforators.classList.remove("active"),drills.classList.add("active")):(slide1.classList.remove("show"),slide2.classList.add("show"),drills.classList.remove("active"),perforators.classList.add("active"))}),back.addEventListener("click",function(e){console.log(e.target.parentNode),slide2.classList.contains("show")?(slide2.classList.remove("show"),slide1.classList.add("show"),slide1.classList.add("show"),perforators.classList.remove("active"),drills.classList.add("active")):(slide1.classList.remove("show"),slide2.classList.add("show"),drills.classList.remove("active"),perforators.classList.add("active"))}),delivery.addEventListener("click",function(e){e.preventDefault(),console.log(e.target.parentNode),warranty.classList.remove("current-item"),credit.classList.remove("current-item"),delivery.classList.add("current-item"),itemWarranty.classList.remove("active"),itemCredit.classList.remove("active"),itemDelivery.classList.add("active")}),warranty.addEventListener("click",function(e){e.preventDefault(),console.log(e.target.parentNode),delivery.classList.remove("current-item"),credit.classList.remove("current-item"),warranty.classList.add("current-item"),itemWarranty.classList.remove("active"),itemDelivery.classList.remove("active"),itemCredit.classList.add("active")}),credit.addEventListener("click",function(e){e.preventDefault(),console.log(e.target.parentNode),warranty.classList.remove("current-item"),delivery.classList.remove("current-item"),credit.classList.add("current-item"),itemDelivery.classList.remove("active"),itemCredit.classList.remove("active"),itemWarranty.classList.add("active")});
