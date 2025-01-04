const counter = document.querySelector('.counter-value');

// Add styling to the `.counter-value` div
counter.style.position = 'fixed';
counter.style.top = '10px';
counter.style.right = '10px';
counter.style.padding = '10px';
counter.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
counter.style.color = 'white';
counter.style.borderRadius = '5px';
counter.style.fontSize = '16px';
counter.style.zIndex = '1000';

// Function to fetch the visit count from the Lambda function
async function getCounter() {
    try {
        let response = await fetch('https://6xcx4thlkhy2m7u2wq7523c5tu0xuzdc.lambda-url.ap-southeast-2.on.aws/');
        if (!response.ok) {
            throw new Error(`Error fetching visitor count: ${response.status} ${response.statusText}`);
        }

        let data = await response.json();
        counter.innerHTML = 'Total Views: ' + (data.views || 'Couldnt Read Views');
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        counter.innerHTML = 'Total Views: Couldnt Read Views';
    }
}

// Call the function to update the counter
getCounter();
