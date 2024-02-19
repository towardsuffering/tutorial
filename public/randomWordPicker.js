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
        "Componment", "Rotten", "Latency", "Profitability", "Error", "Join", "Border", 
        "Coefficient", "Bin", "Rebirth", "Stateful", "Edge", "Command", "Intelligence", 
        "Constant", "Elastic", "Decay", "Drawdown", "License", "Mix", "Levitate", "Solvency", 
        "DataFrame", "Modularity", "Interface", "Limit", "Scene", "Sample", "Agency", 
        "Experiment", "Neighbor", "Compassion", "Entropy", "Transport", "Acquire", "Node", 
        "Capability", "Program", "Theme", "Rivalry", "Gay", "Feature", "Cost", "Exchange", 
        "Gateway", "Invent", "Independent", "Compete", "Sequence", "Database", "Tree", 
        "Justice", "Relate", "Root", "Stateless", "Obligation", "Route", "Store", "High", 
        "Ugly", "Trace", "Risk", "Agree", "Gratitude"    ];

        button.addEventListener('click', () => {
            const randomWord = words[Math.floor(Math.random() * words.length)];
            
            display.textContent = randomWord;
            display.classList.add('word-animate');
    
            setTimeout(() => {
                display.classList.remove('word-animate');
            }, 1000); // Duration of the animation
        });
});
