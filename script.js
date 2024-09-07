// Function to add rows to the table
function addRows() {
    const tableBody = document.querySelector('#audio-table tbody');

    const audio_path = "assets/demo"

    const order = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    
    // Number of rows to add
    const numberOfRows = 8;
    
    // Number of audio elements per row
    const audiosPerRow = 7;

    // Example audio sources
    const audioSources = [
        'mixture.wav',
        'target.wav',
        'reference.wav',
        'spex_plus.wav',
        'tselm_l.wav',
        'tselm_l_hybrid.wav',
        'continuous_wavlm_l6.wav'
    ];
    
    // Add rows
    for (let i = 0; i < numberOfRows; i++) {
        const row = document.createElement('tr');
        const base_path = audio_path + "/" + (order[i]) +"/"
        for (let j = 0; j < audiosPerRow; j++) {
            const cell = document.createElement('td');
            const audio = document.createElement('audio');
            audio.controls = true;
            
            audio.src = base_path +  audioSources[j % audioSources.length]; // Loop through audio sources
            cell.appendChild(audio);
            row.appendChild(cell);
        }
        
        tableBody.appendChild(row);
    }
}

// Add rows when the page loads
window.onload = addRows;