// Function to add rows to the table
function addRows() {
    const tableBody = document.querySelector('#audio-table tbody');
    
    // Number of rows to add
    const numberOfRows = 10;
    
    // Number of audio elements per row
    const audiosPerRow = 4;

    // Example audio sources
    const audioSources = [
        'audio1.mp3',
        'audio2.mp3',
        'audio3.mp3',
        'audio4.mp3'
    ];
    
    // Add rows
    for (let i = 0; i < numberOfRows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < audiosPerRow; j++) {
            const cell = document.createElement('td');
            const audio = document.createElement('audio');
            audio.controls = true;
            audio.src = audioSources[j % audioSources.length]; // Loop through audio sources
            cell.appendChild(audio);
            row.appendChild(cell);
        }
        
        tableBody.appendChild(row);
    }
}

// Add rows when the page loads
window.onload = addRows;