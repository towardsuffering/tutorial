document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('randomWordButton');
    const display = document.getElementById('wordDisplay');

    let words = [
        "Love", "Impression", "Leadership", "Logic", "Frame", "Variance", "Memory", "Client", 
        "Provision", "Dimension", "Craft", "Derivative", "Graph", "Network", "Frequency", 
        "Congestion", "Ratio", "Unstructured", "Synergy", "Fruity", "Borrow", "Layers", 
        "Liberty", "Precision", "Application", "Protocol", "Resource", "Hospitality", "Waste", 
        "Stream", "Classification", "Bias", "Competency", "Cohesive", "Build", "Filter", 
        "Awareness", "Commit", "SWOT", "Intuition", "Innovate", "Function", "Time", "Matrix", 
        "Revenue", "Allowance", "Code", "Structured", "Understand", "Merge", "Performance", 
        "Contract", "Record", "Variable", "Significance", "Pattern", "Culture", "Server", "Node", 
        "Component", "Rotten", "Latency", "Profitability", "Error", "Join", "Border", 
        "Coefficient", "Bin", "Rebirth", "Stateful", "Edge", "Command", "Intelligence", 
        "Constant", "Elastic", "Decay", "Drawdown", "License", "Mix", "Levitate", "Solvency", 
        "DataFrame", "Modularity", "Interface", "Limit", "Scene", "Sample", "Agency", 
        "Experiment", "Neighbor", "Compassion", "Entropy", "Transport", "Acquire", "Capability", 
        "Program", "Theme", "Rivalry", "Feature", "Cost", "Exchange", "Gateway", "Invent", 
        "Independent", "Compete", "Sequence", "Database", "Tree", "Justice", "Relate", "Root", 
        "Stateless", "Obligation", "Route", "Store", "High", "Ugly", "Trace", "Risk", "Agree", 
        "Gratitude"
    ];
    let usedWords = [];

    button.addEventListener('click', () => {
        if(words.length === 0) {
            words = [...usedWords]; // Reset the words array if all words have been used
            usedWords = []; // Clear the usedWords array
        }

        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        
        display.textContent = randomWord;
        display.classList.add('word-animate');
    
        setTimeout(() => {
            display.classList.remove('word-animate');
        }, 1000); // Duration of the animation

        words.splice(randomIndex, 1); // Remove the selected word from the array
        usedWords.push(randomWord); // Add it to the usedWords array to avoid repetition
    });
});