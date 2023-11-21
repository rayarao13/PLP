fetch('https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('API request failed');
        }
    })
    .then(data1 => {
        console.log(data1.data);
        const main = document.getElementById("product-main");
        main.classList.add("products");

        data1.data.forEach(element => {
            const div1 = document.createElement("div");
            div1.classList.add("product-card");

            const div2 = document.createElement("div");
            div2.classList.add("product-details");



            const Image = document.createElement("img");
            Image.classList.add("prod_img");
            Image.id = "prod_img";
            Image.src = element.product_image;

            const Title = document.createElement("h1");
            Title.textContent = element.product_title;

            
            div1.appendChild(Image);
            div1.appendChild(div2);
            div2.appendChild(Title);

            const variant1 = document.createElement("p");
            variant1.classList.add("size");
            variant1.id = "size";
            variant1.textContent = element.product_variants[0].v1;
            div2.appendChild(variant1);

            const variant2 = document.createElement("p");
            variant2.classList.add("size");
            variant2.id = "size";

            variant2.textContent = element.product_variants[1].v2;
            div2.appendChild(variant2);

            const variant3 = document.createElement("p");
            variant3.classList.add("size");
            variant3.id = "size";

            variant3.textContent = element.product_variants[2].v3;
            div2.appendChild(variant3);



            var label = document.createElement("p");
            label.classList.add("label");
            label.innerText = "New";
            div1.appendChild(label);

            main.appendChild(div1);

        });
    })
    .catch(error => {
        console.error(error);
    });

document.querySelector('#myInput').addEventListener('input', filterList);

function filterList() {
    const searchInput = document.querySelector('#myInput');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.size');

    listItems.forEach(item => {
        let text = item.textContent.toLowerCase();

        if (filter && text.includes(filter)) {
            item.style.backgroundColor = "#ccff78";
        } else {
            item.style.backgroundColor = "#fff";
        }
    });
}

function toggleLayout2() {
    var cssLink = document.getElementById("css-import");
    cssLink.href = 'grid.css';
}

function toggleLayout1() {
    var cssLink = document.getElementById("css-import");
    cssLink.href = 'list.css';
}

