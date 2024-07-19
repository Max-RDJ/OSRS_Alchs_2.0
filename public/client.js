async function fetchItemData()
        {
                const res = await fetch('/api/items');
                const items = await res.json();
                const container = document.getElementById("items-container");
                container.innerHTML = "";
                items.forEach(item => {
                    const itemDiv = document.createElement("div");
                    itemDiv.className = "item";
                    itemDiv.innerHTML = `<strong>${item.itemName}:</strong>${item.price}`;
                    container.appendChild(itemDiv);
                })
                // itemOutput.innerText = prices.join('\n')
            } 
        

            document.addEventListener("DOMContentLoaded", fetchItemData);