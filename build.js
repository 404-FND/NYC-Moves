const fs = require('fs');

// Read the data.json file
try {
    // Read data from data.json
    const rawData = fs.readFileSync('data.json');
    const activities = JSON.parse(rawData);

    // Generate the HTML for all cards
    const cardsHTML = activities.map(activity => `
        <div class="card">
            <div class="emoji">${activity.emoji || '🍎'}</div>
            <div class="name">${activity.name}</div>
            <div class="address">${activity.address}</div>
            <div class="description">${activity.description}</div>
            <div class="cost">Cost: ${activity.cost}</div>
        </div>
    `).join('');

    // Create the full HTML
    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NYC Activities</title>
    <style>
        body {
            font-family: "Menlo", monospace;
            background-color: #f7f6f3; /* Notion-like white color */
            margin: 0;
            padding: 20px;
        }
        .header {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
        }
        .header-emoji {
            font-size: 2rem;
            margin-right: 10px;
        }
        h1 {
            font-size: 2rem;
            color: #333;
            margin: 0;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        .card {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            transition: transform 0.3s ease;
        }
        .card:hover {
            transform: translateY(-5px);
        }
        .emoji {
            font-size: 2.5rem;
            margin-bottom: 10px;
            display: block;
            text-align: center;
        }
        .name {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 10px;
            color: #333;
        }
        .address {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 8px;
        }
        .description {
            color: #444;
            margin-bottom: 12px;
        }
        .cost {
            font-weight: bold;
            color: #2c722c;
        }
    </style>
</head>
<body>
    <div class="header">
        <span class="header-emoji">🍎</span>
        <h1>NYC Activities</h1>
    </div>
    <div class="container" id="activities-container">
        ${cardsHTML}
    </div>
</body>
</html>`;

    // Write the generated HTML to a file
    fs.writeFileSync('index.html', fullHTML);
    console.log('Successfully generated HTML file: index.html');

} catch (error) {
    console.error('Error generating HTML:', error);
} 