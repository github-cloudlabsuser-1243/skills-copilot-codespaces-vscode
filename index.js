import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    // Initialize state for markdown text with default value
    const [markdown, setMarkdown] = useState("type markdown here");

    // Handle change in textarea and update markdown state
    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            {/* Textarea for user to input markdown text */}
            <textarea
                style={{ width: '100%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            {/* Div to display live preview of markdown text */}
            <div style={{ width: '100%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

function reverseSentence(sentence) {
    // Step 2: Split the sentence into words
    let words = sentence.split(' ');

    // Step 3: Reverse the array of words
    let reversedWords = words.reverse();

    // Step 4: Join the reversed array back into a string
    let reversedSentence = reversedWords.join(' ');

    // Step 5: Capitalize the first letter of the resulting string
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    // Step 6: Return the final string
    return reversedSentence;
}

// Example usage
let inputSentence = "hello world this is a test";
let outputSentence = reverseSentence(inputSentence);
console.log(outputSentence); // Output: "Test a is this world hello"

const data = [
    [{ name: 'John' }, { name: 'Jane' }],
    [{ name: 'Bob' }]
];

const names = data.flatMap(group => group.map(person => person.name));

console.log(names); // Output: ['John', 'Jane', 'Bob']