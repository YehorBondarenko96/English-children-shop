const e=[{id:1,urlVideo:"https://www.youtube.com/embed/6HGwX-nk7tc?si=tfgav0ZY4CUeQ_E6"},{id:2,urlVideo:"https://www.youtube.com/embed/EbHGS_bVkXY?si=1VX27bp7XQqCoQk5"},{id:3,urlVideo:"https://www.youtube.com/embed/ScNNfyq3d_w?si=xHfaYUDnfb7n5i94"},{id:4,urlVideo:"https://www.youtube.com/embed/T36jXO2mDc8?si=C_FOBbl3nDouEm09"},{id:5,urlVideo:"https://www.youtube.com/embed/T36jXO2mDc8?si=C_FOBbl3nDouEm09"},{id:6,urlVideo:"https://www.youtube.com/embed/T36jXO2mDc8?si=C_FOBbl3nDouEm09"},{id:7,urlVideo:"https://www.youtube.com/embed/T36jXO2mDc8?si=C_FOBbl3nDouEm09"},{id:8,urlVideo:"https://www.youtube.com/embed/T36jXO2mDc8?si=C_FOBbl3nDouEm09"},{id:9,urlVideo:"https://www.youtube.com/embed/T36jXO2mDc8?si=C_FOBbl3nDouEm09"},{id:10,urlVideo:"https://www.youtube.com/embed/T36jXO2mDc8?si=C_FOBbl3nDouEm09"}],t=document.querySelectorAll(".button-gallery"),i=document.querySelector(".modal-gallery"),o=()=>{i.classList.remove("visually-hidden"),function(e,t){const o=e.currentTarget.getAttribute("id"),d=t.find((e=>e.id==o)).urlVideo;i.innerHTML=`<iframe \n    width="560" \n    height="315" \n    src="${d}" \n    title="YouTube video player" \n    frameborder="0" \n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" \n    allowfullscreen>\n</iframe>`}(event,e)},d=()=>{i.classList.add("visually-hidden"),i.innerHTML="",i.removeEventListener("click",d)};t.forEach((e=>{e.addEventListener("click",(()=>{o(),i.addEventListener("click",d)}))}));
//# sourceMappingURL=my-products.08fe44b4.js.map
