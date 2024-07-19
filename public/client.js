async function fetchItemData()
        {
                const res = await fetch('/api/items');
                const items = await res.json();
                const container = document.getElementById("items-container");
                container.innerHTML = "";
                items.forEach(item => {
                    const newRow = document.createElement("tr");
                    const itemNameDiv = document.createElement("td");
                    const itemPriceDiv = document.createElement("td")
                    itemNameDiv.className = "itemName";
                    itemNameDiv.innerHTML = `<strong>${item.itemName}:</strong>`
                    itemPriceDiv.className = "itemPrice";
                    itemPriceDiv.innerHTML = `${item.price}`;
                    container.appendChild(newRow);
                    newRow.appendChild(itemNameDiv);
                    newRow.appendChild(itemPriceDiv);
                    
                })
                // itemOutput.innerText = prices.join('\n')
            } 
        

            document.addEventListener("DOMContentLoaded", fetchItemData);