// Function to extract text content from various elements
function getTextContent(elements) {
    let collectedText = [];
    for (let element of elements) {
        const text = element.textContent.trim();
        collectedText.push(text);
        if (text === "Test Progress") { // You can adjust this condition if needed
            break;
        }
    }
    return collectedText;
}

// Function to extract and open the latest question
function extractAndOpenQuestion() {
    // Extracting text from different elements
    const paragraphs = document.querySelectorAll('p');
    const interactiveContent = document.querySelectorAll('.interactive-content');
    const stemElements = document.querySelectorAll('.stem');

    // Collect all text content from selected elements
    const allText = [
        ...getTextContent(paragraphs),
        ...getTextContent(interactiveContent),
        ...getTextContent(stemElements)
    ];

    const question = allText[allText.length - 1];  // Get the last extracted question
    console.log("Extracted question:", question);  // Print the extracted question

    // After extracting the question, open the Brainly ask page with the formatted question
    const brainlyAskUrl = `https://brainly.com/app/ask?q=${encodeURIComponent(question)}`;
    window.open(brainlyAskUrl, '_blank'); // Open the link in a new tab
}

// Button to trigger the process
const button = document.createElement('button');
button.textContent = 'Get Answer';  // Set the button's text
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

// Add the button to the body if it's not already there
document.body.appendChild(button);

// When the button is clicked, re-fetch the question and open the Brainly link
button.addEventListener('click', function() {
    console.log("Button clicked, re-running the extraction and opening Brainly link...");
    extractAndOpenQuestion(); // Re-run the extraction and open process every time
});

