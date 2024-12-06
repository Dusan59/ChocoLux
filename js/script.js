//Uzimanje trenutne godine za ispis na dnu stranice
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
};
getYear();
 window.addEventListener("load", (event) => {
//Dinamicki ispis navigacije
    let nav=document.querySelector("#nav");
    let navItems = [
        { name: "Home", url: "index.html" },
        { name: "About", url: "#about" },
        { name: "Products", url: "#products" },
        { name: "Our Team", url: "#team" },
        { name: "Contact Us", url: "#contact" },
        { name: "Author", url: "#author" }
        ];
    let navHTML='';
        navItems.forEach(item => {
            navHTML += `
            <li class="nav-item">
                  <a class="nav-link" href="${item.url}">${item.name}</a>
                </li>
            `;
          });
        nav.innerHTML = navHTML;

//Dinamicki ispis carousela
    let carouselContent = [
    { title: "Chocolate", subtitle: "Yummy", image: "images/slider1-img.png" },
    { title: "Pralines", subtitle: "Delicious", image: "images/slider2-img.png" },
    { title: "Chocolate", subtitle: "Sweet", image: "images/slider3-img.png" },
  ];
    let carousel = document.querySelector("#carousel");
    let carouselHTML = "";
    carouselContent.forEach((slide, index) => {
      carouselHTML += `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="detail_box">
                  <h1>
                    ${slide.title} <br>
                    <span>${slide.subtitle}</span>
                  </h1>
                  <a href="#about">
                    <span>Read More</span>
                    <img src="images/white-arrow.png" alt="">
                  </a>
                </div>
              </div>
              <div class="col-md-4 ml-auto">
                <div class="img-box">
                  <img src="${slide.image}" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    carousel.innerHTML = carouselHTML;

  // Dinamicko ispis proizvoda
    let products = [
        {
        image: "images/chocolate1.png",
        name: "Hazelnut Praline Truffles",
        price: "$1.0/100g",
        },
        {
        image: "images/chocolate2.png",
        name: "Salted Caramel Bites",
        price: "$2.0/100g",
        },
        {
        image: "images/chocolate3.png",
        name: "Classic Dark Chocolate Bar",
        price: "$3.0/100g",
        },
    ];

    let productsContainer = document.querySelector("#productsC");
    let productsHTML = "";
    products.forEach(product => {
      productsHTML += `
        <div class="box">
          <div class="img-box">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="detail-box">
            <h6>${product.name}</h6>
            <h5>${product.price}</h5>
            <a href="#contact">BUY NOW</a>
          </div>
        </div>
      `;
    });
    productsContainer.innerHTML = productsHTML;

//Forma
      // Dodavanje opcija u select
      let ddl = document.querySelector("#ddl");
      
      let options = [
        { value:"", text:"Choose a topic"},
        { value: "feedback", text: "Feedback" },
        { value: "order", text: "Order" },
        { value: "product", text: "Product" }
      ];
      options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        ddl.appendChild(optionElement);
      });
      //Validacija forme na blur event
        let submitButton=document.querySelector("#submit");
        let name = document.querySelector('#name');
        let phone = document.querySelector('#phone');
        let email = document.querySelector('#email');
        let message = document.querySelector('#message');
        let checkbox = document.querySelector('#agree');
        let SubmitSpan=document.querySelector("#submitSpan");
        var FullNameRegex=/^[A-Z][a-z]*\s([A-Z][a-z]*)*$/;
        var PhoneRegex=/^\d{8,}$/
        var EmailRegex=/(@gmail\.com|@yahoo\.com)$/

      name.addEventListener('blur',function(){
        if(!FullNameRegex.test(name.value)) {
          name.nextElementSibling.textContent='Invalid Full name'
        }else{
          name.nextElementSibling.textContent=' '
        }
      })
      phone.addEventListener('blur',function(){
        if(!PhoneRegex.test(phone.value)) {
          phone.nextElementSibling.textContent='Invalid phone number'
        }else{
          phone.nextElementSibling.textContent=' '
        }
      })
      email.addEventListener('blur',function(){
        if(!EmailRegex.test(email.value)) {
          email.nextElementSibling.textContent='Invalid email'
        }else{
          email.nextElementSibling.textContent=' '
        }
      })
      ddl.addEventListener('blur',function(){
        if(ddl.selectedIndex==0) {
          ddl.nextElementSibling.textContent='Please choose a topic'
        }else{
          ddl.nextElementSibling.textContent=' '
        }
      })
      message.addEventListener('blur',function(){
        if(message.value=='') {
          message.nextElementSibling.textContent='Please write a message'
        }else{
          message.nextElementSibling.textContent=' '
        }
      })
      //Validacija forme klikom na dugme
        submitButton.addEventListener('click',function(){
          if(!FullNameRegex.test(name.value)) {
            name.nextElementSibling.textContent='Invalid Full name'
          }else{
            name.nextElementSibling.textContent=' '
          }
          if(!PhoneRegex.test(phone.value)) {
            phone.nextElementSibling.textContent='Invalid phone number'
          }else{
            phone.nextElementSibling.textContent=' '
          }
          if(!EmailRegex.test(email.value)) {
            email.nextElementSibling.textContent='Invalid email'
          }else{
            email.nextElementSibling.textContent=' '
          } 
          if(ddl.selectedIndex==0) {
            ddl.nextElementSibling.textContent='Please choose a topic'
          }else{
            ddl.nextElementSibling.textContent=' '
          }
          if(message.value=='') {
            message.nextElementSibling.textContent='Please write a message'
          }else{
            message.nextElementSibling.textContent=' '
          }
          if(checkbox.checked==false){
            SubmitSpan.style.color="red";
              SubmitSpan.textContent="You must agree with terms and conditions"
          }else{
            SubmitSpan.style.color="green";
            SubmitSpan.textContent="Message sent sucessfuly"
          }
        })
        //Prikaz author modala
          let loadingScreen = document.getElementById("loading-screen");
          setTimeout(() => {
              loadingScreen.style.display = "none";
          }, 1000);

        let authorLink=document.querySelector('a[href="#author"]');
        let closeModal = document.querySelector("#close-modal");
        let authorModal = document.querySelector("#authorModal");
          authorLink.addEventListener('click',function(){
            authorModal.style.display = "flex";
            closeModal.addEventListener("click", () => {
               authorModal.style.display = "none";
          })
         })
      })
  //Dinamicki ispis lista u footeru
  let dynamicContent = document.querySelector("#footer");
      let sections = [
        {
          title: "Menu",
          links: [
            { href: "index.html", text: "Home" },
            { href: "#about", text: "About" },
            { href: "#products", text: "Products" },
            { href: "#team", text: "Our Team" },
            { href: "#contact", text: "Contact us" },
            { href: "#author", text: "Author" },
          ],
        },
        {
          title: "Links",
          links: [
            { href: "documentation.pdf", text: "DOCUMENTATION" },
            { href: "js/script.js", text: "JavaScript" },
            { href: "css/style.css", text: "CSS" },
            { href: "sitemap.xml", text: "Sitemap" },
          ],
        },
        {
          title: "Company",
          description:
            "Step into our cozy store, let the heavenly aroma surround you, and explore a world of chocolate like no other. Because every moment deserves a touch of sweetness.",
        },
        {
          title: "Contact Us",
          contact: [
            { icon: "fa-map-marker", text: "Knez Mihailova 1, Belgrade" },
            { icon: "fa-phone", text: "+381 63506451" },
            { icon: "fa-envelope", text: "chocolux@gmail.com" },
          ],
        },
      ];
    
      sections.forEach((section) => {
        let col = document.createElement("div");
        col.classList.add("col-md-6", "col-lg-3");
    
        if (section.links) {
          col.innerHTML = `
            <div class="info_links">
              <h4>${section.title}</h4>
              <div class="info_links_menu">
                ${section.links
                  .map(
                    (link) => `<a href="${link.href}">${link.text}</a>`
                  )
                  .join("")}
              </div>
            </div>
          `;
        } else if (section.description) {
          col.innerHTML = `
            <div class="info_detail">
              <h4>${section.title}</h4>
              <p class="mb-0">${section.description}</p>
            </div>
          `;
        } else if (section.contact) {
          col.innerHTML = `
            <h4>${section.title}</h4>
            <div class="info_contact">
              ${section.contact
                .map(
                  (item) => `
                  <a href="">
                    <i class="fa ${item.icon}" aria-hidden="true"></i>
                    <span>${item.text}</span>
                  </a>`
                )
                .join("")}
            </div>
          `;
        }
        dynamicContent.appendChild(col);

      //Jquery 
      $(document).ready(function() {
        $(this).scrollTop(0);
        setTimeout(function() {
          $('#offerModal').fadeIn();
        }, 5000);

        // Close modal on clicking the close button
        $('#buy').click(function() {
          $('#offerModal').fadeOut();
        });

        $('.close').click(function() {
          $('#offerModal').fadeOut();
        });

        // Close modal when clicking outside the modal content
        $(window).click(function(event) {
          if ($(event.target).is('#offerModal')) {
            $('#offerModal').fadeOut();
          }
        });
      })
})
