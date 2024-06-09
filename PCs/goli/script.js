    let grandTotal = 850; // initial total based on default items

        function toggleItem(button, price) {
            const row = button.closest('tr');
            const isRemoved = button.innerText === 'Remove';

            if (isRemoved) {
                grandTotal -= price;
                button.innerText = 'Add';
                row.style.backgroundColor = '#222';
            } else {
                grandTotal += price;
                button.innerText = 'Remove';
                row.style.backgroundColor = row.rowIndex % 2 === 0 ? '#333' : '#444';
            }

            document.querySelector('.total').innerText = `Grand Total: $${grandTotal}`;
        }


document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel-container');
  const panelInfo = document.getElementById('panel-info');

  panels.forEach(panel => {
    const control = panel.querySelector('.panel-control');
    control.addEventListener('change', () => {
      if (control.checked) {
        updateInfo(panel);
      }
    });
  });

  function updateInfo(panel) {
    const info = panel.dataset.info;

    // Add fade-out class to start the fade-out animation
    panelInfo.classList.add('fade-out');

    // Wait for the fade-out animation to complete
    setTimeout(() => {

    // Add your own dynamic content based on panel info
    switch (info) {
      case 'Basic':
        panelInfo.innerHTML = `
          <table id="pcTable">
    <thead>
        <tr>
            <th>S.NO</th>
            <th>Component name</th>
            <th>PC component</th>
            <th>Price range</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>PROCESSOR</td>
            <td>i3 10105F(locked core)</td>
            <td>6k-8k</td>
        </tr>
        <tr>
            <td>2</td>
            <td>GRAPHICS CARD</td>
            <td>GE FORCE GT 1030</td>
            <td>9k-12k</td>
        </tr>
        <tr>
            <td>3</td>
            <td>MOTHERBOARD</td>
            <td>MSI Pro h510m-v</td>
            <td>6k-8k</td>
        </tr>
        <tr>
            <td>4</td>
            <td>RAM</td>
            <td>corsair vengeance ddr4(x1)</td>
            <td>2k-3.5k</td>
        </tr>
        <tr>
            <td>5</td>
            <td>SSD</td>
            <td>any good nvme m.2 256gb</td>
            <td>1.2-2k</td>
        </tr>
        <tr>
            <td>6</td>
            <td>SECONDARY STORAGE(if any)</td>
            <td>kingster</td>
            <td>Rs 1550</td>
        </tr>
        <tr>
            <td>9</td>
            <td>POWER SUPPLY UNIT</td>
            <td>ANTE SORTS VS 450L</td>
            <td>Rs 3902</td>
        </tr>
    </tbody>
</table>

        `;
        break;
      // Add more cases for other panels
      

       case 'Gamer':
        panelInfo.innerHTML = `
          <table id="pcTable">
        <thead>
            <tr>
                <th>type</th>
                <th>name</th>
                <th>Price</th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr data-price="500">
                <td>Processor</td>
                <td>intel i3 10105F</td>
                <td>6k-8k</td>
                
                
            </tr>
            <tr data-price="250">
                <td>Graphics Card</td>
                <td>RX560</td>
                <td>9k-12k</td>
                
            </tr>
            <tr data-price="100">
                <td>Motherboard</td>
                <td>gigabyte h410 m s2 v 2</td>
                <td>6k-8k</td>
                
            </tr>

            <tr data-price="100">
                <td>Ram</td>
                <td>corsair vengeance ddr4(x1)</td>
                <td>2k-3.5k</td>
                
            </tr>

            <tr data-price="100">
                <td>SSD</td>
                <td>intel i3 10105F</td>
                <td>1.2k-2k</td>
                
            </tr> 
            <tr data-price="100">
                <td>Secondary Storage</td>
                <td>kingster</td>
                <td>1.2k-2k</td>
                
            </tr>
            <tr data-price="100">
                <td>Power Suply Unit</td>
                <td>CSK 550</td>
                <td>Rs 3902</td>
                
            </tr>
        </tbody>
       
    </table>
        `;
        break;

        case 'Workhouse':
        panelInfo.innerHTML = `
         <table id="pcTable">
    <thead>
        <tr>
            <th>type</th>
            <th>name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr data-price="9500">
            <td>Processor</td>
            <td>AMD Ryzen 3 3200G</td>
            <td>9,500</td>
        </tr>
        <tr data-price="10000">
            <td>Motherboard</td>
            <td>MSI B550M PRO-VDH WiFi</td>
            <td>10,000</td>
        </tr>
        <tr data-price="6000">
            <td>RAM</td>
            <td>16GB (2x8GB) DDR4 3000MHz</td>
            <td>6,000</td>
        </tr>
        <tr data-price="4000">
            <td>Storage</td>
            <td>512GB NVMe M.2 SSD</td>
            <td>4,000</td>
        </tr>
        <tr data-price="2000">
            <td>CPU Cooler</td>
            <td>Cooler Master Hyper 212 LED</td>
            <td>2,000</td>
        </tr>
        <tr data-price="3000">
            <td>Power Supply</td>
            <td>550W 80+ Bronze</td>
            <td>3,000</td>
        </tr>
    </tbody>
</table>


        `;
        break;

         case 'Future-Proof':
        panelInfo.innerHTML = `
          <table id="pcTable">
        <thead>
            <tr>
                <th>type</th>
                <th>name</th>
                <th>Price</th>
                
                
            </tr>
        </thead>
        <tbody>
            <tr data-price="500">
                <td>Processor</td>
                <td>intel i3 10105F</td>
                <td>6k-8k</td>
                
                
            </tr>
            <tr data-price="250">
                <td>Graphics Card</td>
                <td>RX560</td>
                <td>9k-12k</td>
                
            </tr>
            <tr data-price="100">
                <td>Motherboard</td>
                <td>gigabyte h410 m s2 v 2</td>
                <td>6k-8k</td>
                
            </tr>

            <tr data-price="100">
                <td>Ram</td>
                <td>corsair vengeance ddr4(x1)</td>
                <td>2k-3.5k</td>
                
            </tr>

            <tr data-price="100">
                <td>SSD</td>
                <td>intel i3 10105F</td>
                <td>1.2k-2k</td>
                
            </tr> 
            <tr data-price="100">
                <td>Secondary Storage</td>
                <td>kingster</td>
                <td>1.2k-2k</td>
                
            </tr>
            <tr data-price="100">
                <td>Power Suply Unit</td>
                <td>CSK 550</td>
                <td>Rs 3902</td>
                
            </tr>
        </tbody>
       
    </table>
        `;
        break;

      default:
        panelInfo.innerHTML = '<p>No information available.</p>';
    }
  
      // Add fade-in class to start the fade-in animation
      panelInfo.classList.remove('fade-out');
      panelInfo.classList.add('fade-in');
    }, 500); // The duration should match the CSS transition duration
  }

  // Initialize the info section with the default checked panel
  const defaultPanel = document.querySelector('.panel-control:checked').closest('.panel-container');
  if (defaultPanel) {
    updateInfo(defaultPanel);
  }
});
